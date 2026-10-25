import { ArrowUpRight } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArchLines, Kolam } from "./Ornaments";

export function Commitment() {
  return (
    <section
      aria-labelledby="commitment-title"
      className="tone-dark relative overflow-hidden bg-paper text-ink"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_50%,rgba(100,28,50,0.5),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="container-editorial relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="11">My Commitment</SectionLabel>
              <h2
                id="commitment-title"
                className="display mt-7 text-[clamp(2.7rem,5.2vw,5rem)]"
              >
                Carrying the tradition{" "}
                <span className="display-italic text-gold-text">forward.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-7 max-w-[32rem] text-[1.04rem] leading-[1.85] text-ivory/75">
                To continue honouring our cultural heritage, inspiring future generations,
                and carrying the divine art of Kuchipudi to more stages across India and
                beyond.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-10 border-l border-gold/60 pl-6 sm:pl-8">
              <div className="flex items-center gap-3">
                <Kolam className="h-4 w-4 text-gold" />
                <span className="eyebrow text-[0.51rem] text-gold-text">A belief</span>
              </div>
              <blockquote className="display-italic mt-5 text-[clamp(1.7rem,3vw,2.7rem)] leading-[1.2] text-ivory">
                Every step tells a story, every expression carries an emotion, and every
                performance keeps our tradition alive.
              </blockquote>
            </Reveal>

            <Reveal delay={0.16} className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn btn-gold group">
                Begin Your Dance Journey
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <p className="font-serif text-lg italic text-gold-text">Madhumitha</p>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <figure className="relative mx-auto max-w-[30rem] lg:mr-0 lg:max-w-none">
              <div
                className="absolute -left-4 -top-4 h-full w-full border border-gold/30"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-alt">
                <ResponsiveImage
                  id="stage-dark"
                  alt="Guru Smt. Madhumitha on stage in an orange and gold Kuchipudi costume, standing in a poised classical stance."
                  sizes="(max-width: 1023px) 90vw, 38vw"
                  className="h-full w-full"
                  imageClassName="object-cover object-center"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
                  <p className="font-serif text-xl italic text-ivory">On stage</p>
                  <p className="eyebrow text-[0.47rem] text-ivory/55">
                    Kuchipudi · In motion
                  </p>
                </div>
              </div>
              <ArchLines className="pointer-events-none absolute -right-14 -top-16 hidden h-64 w-48 text-gold opacity-30 sm:block" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
