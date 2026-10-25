import { chromium } from "playwright-core";

const chrome =
  process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const base =
  process.env.QA_BASE_URL || "http://127.0.0.1:4173/guru-madhumitha-kuchipudi-portfolio/";
const headless = process.env.QA_HEADLESS === "1";

const browser = await chromium.launch({
  executablePath: chrome,
  headless,
  args: ["--window-size=1500,1120", "--hide-scrollbars"],
});
const errors = [];
const issues = [];
const results = {};

const resetScroll = async (page) => {
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
  await page.waitForTimeout(600);
};

const metrics = async (page, viewportName) => {
  const data = await page.evaluate(() => {
    const doc = document.documentElement;
    const broken = Array.from(document.images)
      .filter((img) => img.complete && img.naturalWidth === 0)
      .map((img) => img.currentSrc || img.src);
    const badAnchors = Array.from(document.querySelectorAll('a[href^="#"]'))
      .map((a) => a.getAttribute("href"))
      .filter((href) => href && href !== "#" && !document.querySelector(href));
    const headerButton = document.querySelector('button[aria-label="Open menu"]');
    const rect = headerButton?.getBoundingClientRect();
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      overflow: doc.scrollWidth - doc.clientWidth,
      brokenImages: broken,
      badAnchors: [...new Set(badAnchors)],
      title: document.title,
      h1: document.querySelectorAll("h1").length,
      sections: document.querySelectorAll("main section").length,
      images: document.images.length,
      menuButton: rect ? { x: Math.round(rect.x), y: Math.round(rect.y), w: rect.width } : null,
    };
  });
  if (data.overflow > 1) issues.push(`${viewportName}: horizontal overflow ${data.overflow}px`);
  if (data.brokenImages.length) issues.push(`${viewportName}: broken images ${data.brokenImages.join(", ")}`);
  if (data.badAnchors.length) issues.push(`${viewportName}: bad anchors ${data.badAnchors.join(", ")}`);
  if (data.h1 !== 1) issues.push(`${viewportName}: ${data.h1} h1 elements`);
  if (data.menuButton && (data.menuButton.x < 0 || data.menuButton.x + data.menuButton.w > data.clientWidth)) {
    issues.push(`${viewportName}: menu button outside viewport at x=${data.menuButton.x}`);
  }
  return data;
};

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("requestfailed", (request) => {
    errors.push(`request failed: ${request.url()} - ${request.failure()?.errorText}`);
  });

  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < pageHeight; y += 700) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
    await page.waitForTimeout(90);
  }
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
  await page.waitForTimeout(900);
  await resetScroll(page);

  results.desktop = await metrics(page, "1440");

  await page.getByRole("switch", { name: "Dark theme" }).click();
  await page.waitForTimeout(650);
  results.themeAfterToggle = await page.evaluate(() => ({
    theme: document.documentElement.dataset.theme,
    stored: localStorage.getItem("theme"),
    bodyBackground: getComputedStyle(document.body).backgroundColor,
  }));
  await page.getByRole("switch", { name: "Dark theme" }).click();
  await page.waitForTimeout(400);

  await page.locator("#gallery").scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  const galleryButtons = page.locator("#gallery button[aria-label^='Open full-screen image']");
  await galleryButtons.first().click();
  await page.waitForTimeout(600);
  results.lightboxOpen = await page.getByRole("dialog").count();
  await page.getByRole("button", { name: "Next image" }).click();
  await page.waitForTimeout(450);
  results.lightboxCounter = await page
    .locator("#gallery [role='dialog'] .eyebrow")
    .first()
    .textContent();
  results.lightboxTitle = await page.locator("#gallery [role='dialog'] h2").textContent();
  await page.keyboard.press("Escape");
  await page.waitForTimeout(500);
  results.lightboxClosed = (await page.getByRole("dialog").count()) === 0;

  await page.locator("#programmes").scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page
    .locator("#programmes a")
    .filter({ hasText: "Kuchipudi Dance Training" })
    .first()
    .click();
  await page.waitForTimeout(1400);
  results.programmeSelectedInterest = await page.locator("#interest").inputValue();
  results.contactVisible = await page.locator("#contact").isVisible();

  await page.locator("#contact form button[type='submit']").click();
  await page.waitForTimeout(300);
  results.validationErrors = await page.locator("#contact [role='alert']").count();

  await page.locator("#name").fill("Test Visitor");
  await page.locator("#contact-info").fill("test@example.com");
  await page.locator("#message").fill("I would like to learn more about Kuchipudi classes.");
  await page.evaluate(() => {
    window.__openedUrl = "";
    window.open = (url) => {
      window.__openedUrl = url;
      return null;
    };
  });
  await page.locator("#contact form button[type='submit']").click();
  await page.waitForTimeout(500);
  results.formStatus = await page.locator("#contact [aria-live='polite']").textContent();
  results.formOpenedUrl = await page.evaluate(() => window.__openedUrl);

  await page.setViewportSize({ width: 390, height: 844 });
  await resetScroll(page);
  results.mobile = await metrics(page, "390");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.waitForTimeout(550);
  results.menuOpen = await page.getByRole("dialog", { name: "Site navigation" }).count();
  await page.keyboard.press("Escape");
  await page.waitForTimeout(500);
  results.menuClosed = (await page.getByRole("dialog", { name: "Site navigation" }).count()) === 0;

  await page.setViewportSize({ width: 320, height: 800 });
  await resetScroll(page);
  results.small = await metrics(page, "320");

  await page.setViewportSize({ width: 768, height: 1024 });
  await resetScroll(page);
  results.tablet = await metrics(page, "768");

  await page.setViewportSize({ width: 1024, height: 900 });
  await resetScroll(page);
  results.laptop = await metrics(page, "1024");

  results.errors = errors;
  results.issues = issues;
  console.log(JSON.stringify(results, null, 2));
} catch (error) {
  results.fatal = error.message;
  results.errors = errors;
  results.issues = issues;
  console.log(JSON.stringify(results, null, 2));
  process.exitCode = 1;
} finally {
  await browser.close();
}
