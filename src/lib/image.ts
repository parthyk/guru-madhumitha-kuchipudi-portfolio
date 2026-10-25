import manifest from "../data/imageManifest.json";

export type ImageId = keyof typeof manifest;

type ImageMeta = {
  width: number;
  height: number;
  aspect: number;
  widths: number[];
  placeholder: string;
};

const images = manifest as Record<ImageId, ImageMeta>;
const base = import.meta.env.BASE_URL;

export function imageMeta(id: ImageId): ImageMeta {
  return images[id];
}

export function imageSrcSet(id: ImageId, format: "avif" | "webp"): string {
  return imageMeta(id)
    .widths.map((width) => `${base}images/${id}-${width}.${format} ${width}w`)
    .join(", ");
}

export function imageSrc(id: ImageId, preferredWidth = 960): string {
  const meta = imageMeta(id);
  const width =
    meta.widths.find((candidate) => candidate >= preferredWidth) ??
    meta.widths[meta.widths.length - 1];
  return `${base}images/${id}-${width}.webp`;
}

export function imagePlaceholder(id: ImageId): string {
  return imageMeta(id).placeholder;
}
