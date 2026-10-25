import { ArrowUpRight } from "lucide-react";
import { venues } from "../data/site";
import { ArchLines, Kolam } from "./Ornaments";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function SacredStages() {
  return (
    <section
      id="sacred-stages"
      aria-labelledby="sacred-title"
      className="section-pad relative overflow-hidden bg-paper"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-full w-[55%] text-gold opacity-[0.08]"
        aria-hidden="true"
      >
        <ArchLines className="h-full w-full" />
      </div>

      <div className="container-editorial relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-8">
            <SectionLabel index="06">Sacred Stages &amp; Temple Performances</SectionLabel>
            <h2
              id="sacred-title"
              className="display mt-7 text-[clamp(2.8rem,5.8vw,5.6rem)]"
            >
              Where Art Meets{" "}
              <span className="display-italic text-gold-text">Devotion.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-end lg:col-span-4">
            <p className="copy max-w-[25rem]">
              Having performed at several renowned temples and cultural venues, I consider
              every stage an opportunity to express devotion through the art of Kuchipudi.
            </p>
            <div className="mt-5 flex items-center gap-3 text-gold-text">
              <Kolam className="h-4 w-4" />
              <span className="eyebrow text-[0.53rem]">A journey through sacred spaces</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal className="mb-6 flex items-end justify-between gap-6 border-b border-line pb-3">
              <h3 className="eyebrow text-[0.57rem] text-muted">Selected sacred stages</h3>
              <span className="font-serif text-sm italic text-gold-text">
                Twelve destinations
              </span>
            </Reveal>

            <ol className="grid gap-x-10 sm:grid-cols-2">
              {venues.map((venue, index) => (
                <li key={venue} className="group border-t border-line">
                  <div className="flex items-baseline gap-3 py-4 transition-colors duration-300 group-hover:text-gold-text">
                    <span className="font-serif text-sm italic text-gold-text/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.92rem] leading-snug text-ink transition-transform duration-300 group-hover:translate-x-1">
                      {venue}
                    </span>
                    <span
                      className="ml-auto h-1 w-1 shrink-0 rounded-full bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal>
              <div className="tone-wine relative overflow-hidden bg-paper p-8 text-ink sm:p-10">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 text-gold opacity-20"
                  aria-hidden="true"
                >
                  <ArchLines className="h-full w-full" />
                </div>
                <div className="relative">
                  <Kolam className="h-6 w-6 text-gold" />
                  <blockquote className="display-italic mt-7 text-[clamp(1.5rem,2.2vw,1.95rem)] leading-[1.2] text-ivory">
                    “Every stage is an opportunity to express devotion through the art of
                    Kuchipudi.”
                  </blockquote>
                  <p className="eyebrow mt-6 text-[0.51rem] text-gold-text">
                    A living practice, offered to the divine
                  </p>
                  <div className="mt-8 h-px w-full bg-line" aria-hidden="true" />
                  <p className="mt-5 text-[0.78rem] leading-relaxed text-ivory/60">
                    Temple festivals, cultural programmes, and Natyanjali celebrations form
                    a vital part of the journey.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-4">
              <div className="border border-line bg-paper-alt p-7">
                <p className="eyebrow text-[0.51rem] text-muted">A special chapter</p>
                <p className="mt-3 font-serif text-[3.6rem] leading-none text-gold-text">
                  50<span className="text-[2rem]">+</span>
                </p>
                <p className="mt-2 font-serif text-xl text-ink">Temples Across Chennai</p>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
                  Performed at more than 50 temples across Chennai, participating in
                  cultural celebrations and devotional dance programmes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-12">
          <a
            href="#natyalaya"
            className="group flex flex-col justify-between gap-5 border-t border-line pt-6 sm:flex-row sm:items-center"
          >
            <p className="display-italic text-[clamp(1.4rem,2.2vw,1.9rem)] text-ink">
              From sacred stages to the next generation.
            </p>
            <span className="eyebrow inline-flex min-h-11 shrink-0 items-center gap-2 text-[0.55rem] text-gold-text">
              Discover the Natyalaya
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
