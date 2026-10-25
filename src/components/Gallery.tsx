import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryImages } from "../data/site";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { imageSrc } from "../lib/image";
import { ResponsiveImage } from "./ResponsiveImage";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const aspects = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/5]",
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggers = useRef<Array<HTMLButtonElement | null>>([]);
  const isOpen = openIndex !== null;

  const close = useCallback(() => {
    const index = openIndex;
    setOpenIndex(null);
    if (index !== null) {
      window.requestAnimationFrame(() => triggers.current[index]?.focus({ preventScroll: true }));
    }
  }, [openIndex]);

  const next = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length,
    );
  }, []);

  const previous = useCallback(() => {
    setOpenIndex((current) =>
      current === null
        ? null
        : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, next, previous]);

  useEffect(() => {
    if (openIndex === null) return;
    const neighbours = [
      galleryImages[(openIndex + 1) % galleryImages.length],
      galleryImages[(openIndex - 1 + galleryImages.length) % galleryImages.length],
    ];
    for (const image of neighbours) {
      const preload = new Image();
      preload.src = imageSrc(image.id, 1280);
    }
  }, [openIndex]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="tone-dark section-pad relative overflow-hidden bg-paper text-ink"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,rgba(100,28,50,0.35),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="container-editorial relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal className="lg:col-span-8">
            <SectionLabel index="10">Performance Gallery</SectionLabel>
            <h2
              id="gallery-title"
              className="display mt-7 text-[clamp(2.9rem,6vw,5.9rem)]"
            >
              Moments in{" "}
              <span className="display-italic text-gold-text">Motion.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="copy max-w-[25rem] text-ivory/60">
              A curated selection of performance portraits — expression, posture, costume,
              and the quiet intensity between movements.
            </p>
            <div className="mt-5 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.16em] text-muted">
              <span className="font-serif text-3xl italic text-gold-text">08</span>
              <span>Portraits in the collection</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 columns-1 gap-3 xs:columns-2 lg:mt-16 lg:columns-3 lg:gap-4">
          {galleryImages.map((image, index) => (
            <Reveal key={image.id} delay={(index % 3) * 0.04} className="mb-3 break-inside-avoid lg:mb-4">
              <button
                ref={(node) => {
                  triggers.current[index] = node;
                }}
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Open full-screen image: ${image.title}`}
                className="group relative block w-full overflow-hidden bg-paper-alt text-left focus-visible:outline-offset-4"
              >
                <div className={`${aspects[index]} w-full overflow-hidden`}>
                  <ResponsiveImage
                    id={image.id}
                    alt={image.alt}
                    sizes="(max-width: 479px) 92vw, (max-width: 1023px) 46vw, 31vw"
                    className="h-full w-full"
                    imageClassName="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                  aria-hidden="true"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <span>
                    <span className="eyebrow block text-[0.47rem] text-gold">
                      {String(index + 1).padStart(2, "0")} / 08
                    </span>
                    <span className="mt-1 block font-serif text-lg leading-tight text-ivory">
                      {image.title}
                    </span>
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-ivory/30 text-ivory transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
                    <Expand className="h-3.5 w-3.5" strokeWidth={1.4} aria-hidden="true" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-[0.63rem] uppercase tracking-[0.16em] text-muted">
          Select an image for the full-screen view · Use arrow keys to browse
        </p>
      </div>

      <AnimatePresence>
        {openIndex !== null ? (
          <Lightbox
            index={openIndex}
            onClose={close}
            onNext={next}
            onPrevious={previous}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

type LightboxProps = {
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

function Lightbox({ index, onClose, onNext, onPrevious }: LightboxProps) {
  const reduce = useReducedMotion();
  const image = galleryImages[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => closeRef.current?.focus(), 80);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const nodes = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((node) => node.offsetParent !== null);

      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#080707]/97 p-3 text-ivory backdrop-blur-md sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-caption"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative flex h-full max-h-[100svh] w-full max-w-[92rem] flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-ivory/15 pb-3">
          <p className="eyebrow text-[0.55rem] text-ivory/60">
            {String(index + 1).padStart(2, "0")}{" "}
            <span className="mx-1 text-gold">/</span>{" "}
            {String(galleryImages.length).padStart(2, "0")}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="grid h-11 w-11 place-items-center border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center py-3">
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous image"
            className="absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-ivory/25 bg-[#080707]/60 text-ivory backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={image.id}
              className="flex h-full w-full items-center justify-center px-12 sm:px-16"
              initial={reduce ? false : { opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ResponsiveImage
                id={image.id}
                alt={image.alt}
                priority
                width={1280}
                sizes="(max-width: 767px) 92vw, 82vw"
                className="h-full max-h-[76svh] w-full"
                imageClassName="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-ivory/25 bg-[#080707]/60 text-ivory backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
          </button>
        </div>

        <div
          id="lightbox-caption"
          className="flex flex-wrap items-end justify-between gap-4 border-t border-ivory/15 pt-4"
        >
          <div>
            <h2 id="lightbox-title" className="font-serif text-2xl leading-tight text-ivory sm:text-3xl">
              {image.title}
            </h2>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-ivory/45">
              Guru Smt. Madhumitha · Performance portrait
            </p>
          </div>
          <p className="max-w-[38rem] text-[0.72rem] leading-relaxed text-ivory/50">
            {image.alt}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
