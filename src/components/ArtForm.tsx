import { Reveal } from "./Reveal";
import { ResponsiveImage } from "./ResponsiveImage";
import { SectionLabel } from "./SectionLabel";
import { artConcepts } from "../data/site";

export function ArtForm() {
  return (
    <section id="art" aria-labelledby="art-title" className="section-pad relative overflow-hidden bg-paper">
      <div className="container-editorial">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-8">
            <SectionLabel index="02" className="text-gold-text">
              The Art Form
            </SectionLabel>
            <h2
              id="art-title"
              className="display mt-7 text-[clamp(2.9rem,6vw,5.9rem)] text-ink"
            >
              Where rhythm
              <br />
              becomes <span className="display-italic text-gold-text">expression.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col justify-end lg:col-span-4">
            <span className="mb-5 h-px w-16 bg-gold" aria-hidden="true" />
            <p className="copy max-w-[25rem]">
              Rooted in the classical dance-drama tradition of Andhra Pradesh, Kuchipudi
              moves through rhythm, expression, and storytelling — a form where the body
              becomes language and the stage becomes a place of offering.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <figure>
              <div className="relative">
                <div
                  className="absolute -left-3 -top-3 h-full w-full border border-gold/25"
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-alt">
                  <ResponsiveImage
                    id="stage-green"
                    alt="Guru Smt. Madhumitha on stage in an orange and gold Kuchipudi costume, both hands lifted above her head."
                    sizes="(max-width: 1023px) 92vw, 38vw"
                    className="h-full w-full"
                    imageClassName="object-cover object-center"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <figcaption className="mt-4 flex items-start justify-between gap-6 border-t border-line pt-3">
                <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                  A study in movement
                </span>
                <span className="font-serif text-sm italic text-gold-text">Kuchipudi</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal className="mb-2 flex items-center justify-between gap-4 border-b border-line pb-3">
              <span className="eyebrow text-[0.55rem] text-muted">Four elements</span>
              <span className="font-serif text-lg italic text-gold-text">The grammar of the form</span>
            </Reveal>

            <div className="divide-y divide-line">
              {artConcepts.map((concept, index) => (
                <Reveal key={concept.title} delay={index * 0.06}>
                  <article className="group grid gap-3 py-6 sm:grid-cols-[3.25rem_1fr] sm:gap-5">
                    <span className="font-serif text-xl italic leading-none text-gold-text">
                      {concept.index}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="font-serif text-[clamp(1.7rem,2.6vw,2.3rem)] leading-none text-ink transition-colors duration-300 group-hover:text-gold-text">
                          {concept.title}
                        </h3>
                        <p className="eyebrow text-[0.5rem] text-muted">{concept.subtitle}</p>
                      </div>
                      <p className="copy mt-3 max-w-[32rem] text-[0.92rem]">{concept.copy}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12} className="mt-10 border border-line bg-paper-alt p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <span
                  className="font-serif text-5xl leading-[0.7] text-gold-text"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="display-italic text-[clamp(1.4rem,2.1vw,1.85rem)] leading-snug text-ink">
                  Dance is not only movement. It is memory, devotion, and a story carried
                  from one generation to the next.
                </p>
              </div>
              <p className="mt-5 pl-10 text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                The spirit of the practice
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <span
        className="font-telugu pointer-events-none absolute -bottom-6 right-0 hidden text-[9rem] leading-none text-gold opacity-[0.06] lg:block"
        aria-hidden="true"
      >
        నాట్యం
      </span>
    </section>
  );
}
