import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";

const chrome =
  process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const base = "http://127.0.0.1:4173/guru-madhumitha-kuchipudi-portfolio/";
const out = path.join(process.cwd(), "screenshots");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  executablePath: chrome,
  headless: false,
  args: ["--window-size=1500,1120", "--hide-scrollbars"],
});

async function capture(page, selector, baseName) {
  const box = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return {
      top: Math.round(rect.top + window.scrollY),
      height: Math.round(rect.height),
      maxScroll: document.documentElement.scrollHeight - window.innerHeight,
    };
  }, selector);
  if (!box) return;

  const positions = [Math.min(box.top, box.maxScroll)];
  for (let offset = 850; offset < box.height - 150; offset += 850) {
    positions.push(Math.min(box.top + offset, box.maxScroll));
  }

  for (let index = 0; index < positions.length; index += 1) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), positions[index]);
    await page.waitForTimeout(900);
    const suffix = positions.length > 1 ? `-${index + 1}` : "";
    await page.screenshot({ path: path.join(out, `${baseName}${suffix}.png`) });
  }
  console.log(baseName, positions.length);
}

const targets = [
  ["01-hero", "#home"],
  ["02-art", "#art"],
  ["03-about", "#about"],
  ["04-journey", "#journey"],
  ["06-achievements", "#achievements"],
  ["07-sacred-stages", "#sacred-stages"],
  ["08-natyalaya", "#natyalaya"],
  ["09-programmes", "#programmes"],
  ["10-vision-mission", "section[aria-labelledby='vision-title']"],
  ["11-gallery", "#gallery"],
  ["12-commitment", "section[aria-labelledby='commitment-title']"],
  ["13-contact", "#contact"],
  ["14-footer", "footer"],
];

for (const [name, selector] of targets) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  await page.evaluate(() => document.fonts.ready);
  await capture(page, selector, `${name}-1440`);
  await page.close();
}

for (const [name, selector] of [
  ["20-hero", "#home"],
  ["21-art", "#art"],
  ["22-about", "#about"],
  ["23-journey", "#journey"],
  ["24-achievements", "#achievements"],
  ["25-sacred-stages", "#sacred-stages"],
  ["26-natyalaya", "#natyalaya"],
  ["27-programmes", "#programmes"],
  ["28-vision-mission", "section[aria-labelledby='vision-title']"],
  ["29-gallery", "#gallery"],
  ["30-commitment", "section[aria-labelledby='commitment-title']"],
  ["31-contact", "#contact"],
  ["32-footer", "footer"],
]) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  await page.evaluate(() => document.fonts.ready);
  await capture(page, selector, `${name}-390`);
  await page.close();
}

const menuPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
await menuPage.goto(base, { waitUntil: "networkidle" });
await menuPage.waitForTimeout(900);
await menuPage.getByRole("button", { name: "Open menu" }).click();
await menuPage.waitForTimeout(500);
await menuPage.screenshot({ path: path.join(out, "19-menu-390.png") });
await menuPage.keyboard.press("Escape");
await menuPage.close();

await browser.close();
console.log("screenshots:", out);
