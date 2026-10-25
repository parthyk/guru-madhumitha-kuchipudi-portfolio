import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.cwd());
const sourceDir = path.join(root, "Images");
const outputDir = path.join(root, "public", "images");
const manifestPath = path.join(root, "src", "data", "imageManifest.json");

const sources = {
  "portrait-blue": "1000407391.png",
  "portrait-orange": "1000433031.png",
  "portrait-raised": "1000433189.jpg.jpeg",
  "portrait-green-studio": "1000433190.jpg.jpeg",
  "stage-green": "1000433237.png",
  courtyard: "2bd6310e-158f-4476-886e-3a6c5343ebdf.png",
  "portrait-beige": "2ed24fc0-96b0-4a55-9b72-d56377affce4.png",
  garden: "4d48ec83-ec11-4fe5-bf49-8ac0b4ef9deb.png",
  "stage-dark": "6a215d1e-a686-4739-a8e9-43a5c1478b5e.png",
};

const widths = [480, 720, 960, 1280];
const manifest = {};

fs.mkdirSync(outputDir, { recursive: true });

for (const [id, file] of Object.entries(sources)) {
  const input = path.join(sourceDir, file);
  if (!fs.existsSync(input)) {
    throw new Error(`Missing source image: ${input}`);
  }

  const image = sharp(input).rotate();
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;
  const aspect = width / height;

  const small = await sharp(input)
    .rotate()
    .resize(28)
    .webp({ quality: 35 })
    .toBuffer();

  const variants = [];

  for (const targetWidth of widths) {
    if (targetWidth > width) continue;
    const avifName = `${id}-${targetWidth}.avif`;
    const webpName = `${id}-${targetWidth}.webp`;

    await sharp(input)
      .rotate()
      .resize({ width: targetWidth, withoutEnlargement: true })
      .avif({ quality: 52, effort: 5 })
      .toFile(path.join(outputDir, avifName));

    await sharp(input)
      .rotate()
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(path.join(outputDir, webpName));

    variants.push(targetWidth);
  }

  manifest[id] = {
    width,
    height,
    aspect,
    widths: variants,
    placeholder: `data:image/webp;base64,${small.toString("base64")}`,
  };

  process.stdout.write(`Optimised ${id} (${width}x${height})\n`);
}

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#111010"/>
      <stop offset="0.58" stop-color="#111010" stop-opacity="0.94"/>
      <stop offset="0.82" stop-color="#451321" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#451321" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#111010"/>
  <image href="data:image/jpeg;base64,${fs
    .readFileSync(path.join(sourceDir, sources["portrait-blue"]))
    .toString("base64")}" x="640" y="0" width="560" height="630" preserveAspectRatio="xMidYMid slice" opacity="0.95"/>
  <rect width="1200" height="630" fill="url(#shade)"/>
  <rect x="70" y="70" width="1060" height="490" fill="none" stroke="#B79A63" stroke-opacity="0.55"/>
  <text x="110" y="158" fill="#B79A63" font-family="Manrope, Arial, sans-serif" font-size="15" letter-spacing="5">SRI NARTHAKI KUCHIPUDI NATYALAYA</text>
  <text x="108" y="292" fill="#F7F2E9" font-family="Georgia, 'Times New Roman', serif" font-size="86">Guru Smt.</text>
  <text x="104" y="386" fill="#F7F2E9" font-family="Georgia, 'Times New Roman', serif" font-size="110" font-style="italic">Madhumitha</text>
  <line x1="110" y1="432" x2="560" y2="432" stroke="#B79A63" stroke-opacity="0.7"/>
  <text x="110" y="480" fill="#E9DDC9" font-family="Manrope, Arial, sans-serif" font-size="19" letter-spacing="2">KUCHIPUDI DANCER · DANCE GURU · PERFORMER</text>
  <text x="110" y="522" fill="#B79A63" font-family="Georgia, 'Times New Roman', serif" font-size="25" font-style="italic">Preserving Tradition. Inspiring Excellence.</text>
</svg>`;

await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(root, "public", "og-image.jpg"));

const iconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="256" fill="#111010"/>
  <circle cx="256" cy="256" r="206" fill="none" stroke="#B79A63" stroke-opacity="0.55" stroke-width="3"/>
  <path d="M256 96c88 0 160 72 160 160s-72 160-160 160" fill="none" stroke="#B79A63" stroke-opacity="0.35" stroke-width="2"/>
  <text x="256" y="302" text-anchor="middle" fill="#F7F2E9" font-family="Georgia, 'Times New Roman', serif" font-size="186" font-style="italic">SN</text>
  <circle cx="256" cy="350" r="4" fill="#B79A63"/>
</svg>`;

await sharp(Buffer.from(iconSvg))
  .resize(180, 180)
  .png()
  .toFile(path.join(root, "public", "apple-touch-icon.png"));

await sharp(Buffer.from(iconSvg))
  .resize(32, 32)
  .png()
  .toFile(path.join(root, "public", "favicon-32.png"));

fs.writeFileSync(path.join(root, "public", "favicon.svg"), iconSvg.trim());

process.stdout.write("Created social image and icons.\n");
