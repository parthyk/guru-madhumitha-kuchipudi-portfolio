import { useState } from "react";
import { imageMeta, imagePlaceholder, imageSrc, imageSrcSet, type ImageId } from "../lib/image";

type ResponsiveImageProps = {
  id: ImageId;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
};

export function ResponsiveImage({
  id,
  alt,
  className = "",
  imageClassName = "",
  sizes = "100vw",
  priority = false,
  width = 960,
}: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const meta = imageMeta(id);

  return (
    <picture className={`block ${className}`}>
      <source type="image/avif" srcSet={imageSrcSet(id, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={imageSrcSet(id, "webp")} sizes={sizes} />
      <img
        src={imageSrc(id, width)}
        srcSet={imageSrcSet(id, "webp")}
        sizes={sizes}
        alt={alt}
        width={meta.width}
        height={meta.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imageClassName}`}
        style={{
          backgroundImage: `url(${imagePlaceholder(id)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </picture>
  );
}
