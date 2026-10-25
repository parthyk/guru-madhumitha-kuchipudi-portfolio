import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { achievements } from "../data/site";
import { Reveal } from "./Reveal";
import { ResponsiveImage } from "./ResponsiveImage";
import { SectionLabel } from "./SectionLabel";

export function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = achievements[activeIndex];

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="tone-dark section-pad relative overflow-hidden bg-paper text-ink"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(100,28,50,0.4),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="container-editorial relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="05">Achievements &amp; Recognition</SectionLabel>
            <h2
              id="achievements-title"
              className="display mt-7 text-[clamp(2.7rem,5.5vw,5.3rem)]"
            >
              A Journey of Excellence, Devotion &amp;{" "}
              <span className="display-italic text-gold-text">Cultural Pride.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <span className="font-serif text-5xl leading-[0.65] text-gold" aria-hidden="true">
              “
            </span>
            <blockquote className="copy mt-3 text-ivory/75">
              My journey in Kuchipudi has been enriched by remarkable milestones,
              prestigious recognitions, and opportunities to perform at renowned cultural
              and spiritual destinations. Each performance reflects my dedication to
              preserving the timeless beauty of Indian classical dance.
            </blockquote>
            <p className="eyebrow mt-5 text-[0.52rem] text-gold-text">
              Guru Smt. Madhumitha
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="border-b border-line">
              {achievements.map((achievement, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={achievement.title}
                    className={`group relative border-t border-line py-6 transition-colors duration-300 sm:py-7 ${
                      isActive ? "bg-white/[0.025]" : ""
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    tabIndex={0}
                    aria-label={`${achievement.title} — ${achievement.copy}`}
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-px transition-colors duration-300 ${
                        isActive ? "bg-gold" : "bg-transparent"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="grid grid-cols-[2.4rem_1fr] gap-4 px-4 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-6 sm:px-6">
                      <span
                        className={`font-serif text-[1.55rem] italic leading-none transition-colors duration-300 sm:text-[2rem] ${
                          isActive ? "text-gold-text" : "text-muted"
                        }`}
                      >
                        {achievement.index}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <h3 className="font-serif text-[clamp(1.55rem,2.6vw,2.35rem)] leading-tight text-ink transition-colors duration-300 group-hover:text-gold-text">
                            {achievement.title}
                          </h3>
                          <p className="eyebrow text-[0.49rem] text-gold-text/80">
                            {achievement.tag}
                          </p>
                        </div>
                        <p className="copy mt-2 max-w-[36rem] text-[0.88rem]">
                          {achievement.copy}
                        </p>
                      </div>

                      <div className="col-start-2 mt-3 w-20 overflow-hidden sm:col-start-auto sm:mt-0 sm:w-24 lg:hidden">
                        <div className="aspect-[3/4]">
                          <ResponsiveImage
                            id={achievement.image}
                            alt={`Performance portrait of Guru Smt. Madhumitha — ${achievement.title}.`}
                            sizes="96px"
                            className="h-full w-full"
                            imageClassName="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="hidden lg:col-span-4 lg:col-start-9 lg:block" aria-label="Achievement image preview">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-alt">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.image}
                    className="absolute inset-0"
                    initial={reduce ? false : { opacity: 0, scale: 1.025 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <ResponsiveImage
                      id={active.image}
                      alt={`Performance portrait of Guru Smt. Madhumitha — ${active.title}.`}
                      sizes="32vw"
                      className="h-full w-full"
                      imageClassName="object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span className="eyebrow absolute left-5 top-5 text-[0.5rem] text-ivory/70">
                  {active.index} <span className="mx-1 text-gold">/</span> 05
                </span>
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-serif text-xl italic text-ivory">{active.title}</p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-ivory/55">
                    Performance portrait
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1.5" role="group" aria-label="Choose achievement preview">
                {achievements.map((achievement, index) => (
                  <button
                    key={achievement.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${achievement.title}`}
                    aria-pressed={index === activeIndex}
                    className={`h-7 flex-1 border-t-2 transition-colors ${
                      index === activeIndex
                        ? "border-gold"
                        : "border-line-strong hover:border-gold/60"
                    }`}
                  >
                    <span className="sr-only">{achievement.title}</span>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                Select a milestone to view
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
