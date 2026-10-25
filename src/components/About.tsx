import { aboutFacts, biography } from "../data/site";
import { ResponsiveImage } from "./ResponsiveImage";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { CornerFlourish } from "./Ornaments";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="tone-wine section-pad relative overflow-hidden bg-paper text-ink"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(183,154,99,0.12),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="container-editorial relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-8">
            <SectionLabel index="03">About the Artist</SectionLabel>
            <h2
              id="about-title"
              className="display mt-7 max-w-[20ch] text-[clamp(2.8rem,5.8vw,5.6rem)]"
            >
              A Journey of Tradition, Passion &amp;{" "}
              <span className="display-italic text-gold-text">Purpose.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-end lg:col-span-4">
            <p className="display-italic text-[clamp(1.3rem,2vw,1.7rem)] leading-snug text-gold-text">
              From a first step at twelve to a life devoted to the stage, the classroom,
              and the culture that shaped her.
            </p>
            <div className="mt-5 h-px w-20 bg-gold/60" aria-hidden="true" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 lg:pr-6">
            <Reveal>
              <p className="text-[clamp(1.05rem,1.2vw,1.16rem)] leading-[1.85] text-ink">
                {biography[0]}
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="copy mt-6">{biography[1]}</p>
            </Reveal>

            <Reveal delay={0.08} className="my-9 border-l border-gold/60 pl-6 sm:pl-8">
              <blockquote className="display-italic text-[clamp(1.7rem,2.8vw,2.5rem)] leading-[1.1] text-ivory">
                “Dance has evolved from a passion into a lifelong commitment.”
              </blockquote>
              <p className="eyebrow mt-4 text-[0.52rem] text-gold-text">
                Guru Smt. Madhumitha
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="copy">{biography[2]}</p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="copy mt-6">{biography[3]}</p>
            </Reveal>

            <Reveal delay={0.14} className="mt-10">
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line xl:grid-cols-4">
                {aboutFacts.map((fact) => (
                  <div key={fact.label} className="bg-paper p-4 sm:p-5">
                    <p className="font-serif text-[clamp(1.5rem,2vw,1.9rem)] leading-none text-gold-text">
                      {fact.value}
                    </p>
                    <p className="mt-3 text-[0.63rem] uppercase leading-relaxed tracking-[0.13em] text-muted">
                      {fact.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16} className="mt-9 flex items-end justify-between gap-6">
              <div>
                <p className="font-serif text-[2.4rem] italic leading-none text-ivory">
                  Madhumitha
                </p>
                <p className="eyebrow mt-2 text-[0.52rem] text-muted">
                  Kuchipudi Dancer · Dance Guru · Performer
                </p>
              </div>
              <CornerFlourish className="h-12 w-12 text-gold/60" />
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative mx-auto max-w-[28rem] lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -right-3 -top-3 h-full w-full border border-gold/30"
                  aria-hidden="true"
                />
                <figure className="relative">
                  <div className="aspect-[4/5] overflow-hidden bg-paper-alt">
                    <ResponsiveImage
                      id="portrait-beige"
                      alt="Guru Smt. Madhumitha in a burgundy and gold Kuchipudi costume, against a warm beige studio backdrop."
                      sizes="(max-width: 1023px) 90vw, 38vw"
                      className="h-full w-full"
                      imageClassName="object-cover object-center"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-line pt-3">
                    <span className="text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                      Founder &amp; Artistic Director
                    </span>
                    <span className="font-serif text-sm italic text-gold-text">Chennai</span>
                  </figcaption>
                </figure>

                <div className="absolute bottom-16 -left-5 hidden w-32 rotate-[-4deg] border-4 border-wine bg-wine shadow-xl sm:block xl:-left-12 xl:w-40">
                  <div className="aspect-square overflow-hidden">
                    <ResponsiveImage
                      id="portrait-raised"
                      alt="A close study of Guru Smt. Madhumitha in a Kuchipudi pose, one arm raised."
                      sizes="160px"
                      className="h-full w-full"
                      imageClassName="object-cover object-[50%_20%]"
                    />
                  </div>
                </div>

                <p className="eyebrow vertical-label absolute -right-8 top-8 hidden text-[0.5rem] text-gold/60 xl:block">
                  A life in rhythm · A life in devotion
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


