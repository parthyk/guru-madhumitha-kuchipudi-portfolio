import { CornerFlourish, Kolam } from "./Ornaments";
import { Reveal } from "./Reveal";

export function VisionMission() {
  return (
    <section aria-labelledby="vision-title" className="grid lg:grid-cols-2">
      <div className="tone-wine relative flex min-h-[38rem] flex-col justify-between overflow-hidden bg-paper p-8 text-ink sm:p-12 lg:min-h-[44rem] lg:p-16">
        <span
          className="pointer-events-none absolute -right-8 -top-16 select-none font-serif text-[18rem] leading-none text-gold opacity-[0.07]"
          aria-hidden="true"
        >
          V
        </span>
        <Reveal>
          <div className="flex items-center gap-3 text-gold-text">
            <Kolam className="h-4 w-4" />
            <p className="eyebrow text-[0.56rem]">Our Vision</p>
          </div>
          <h2 id="vision-title" className="sr-only">
            Our Vision
          </h2>
          <blockquote className="display mt-8 max-w-[26rem] text-[clamp(1.6rem,2.9vw,2.65rem)] leading-[1.25] text-ivory">
            To <em className="not-italic text-gold-text">preserve the rich tradition</em>{" "}
            of Kuchipudi, nurture passionate and disciplined dancers, and{" "}
            <em className="not-italic text-gold-text">inspire future generations</em> to
            celebrate and carry forward this timeless art form with pride.
          </blockquote>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-[0.51rem] text-gold-text">Sri Narthaki</p>
            <p className="mt-1 text-[0.66rem] uppercase tracking-[0.16em] text-muted">
              Kuchipudi Natyalaya
            </p>
          </div>
          <CornerFlourish className="h-12 w-12 shrink-0 text-gold/60" />
        </Reveal>
      </div>

      <div className="relative flex min-h-[38rem] flex-col justify-between overflow-hidden bg-paper-alt p-8 sm:p-12 lg:min-h-[44rem] lg:p-16">
        <span
          className="pointer-events-none absolute -right-8 -top-16 select-none font-serif text-[18rem] leading-none text-gold opacity-[0.12]"
          aria-hidden="true"
        >
          M
        </span>
        <Reveal delay={0.06}>
          <div className="flex items-center gap-3 text-gold-text">
            <Kolam className="h-4 w-4" />
            <p className="eyebrow text-[0.56rem]">Our Mission</p>
          </div>
          <h2 className="sr-only">Our Mission</h2>
          <blockquote className="display mt-8 max-w-[26rem] text-[clamp(1.6rem,2.9vw,2.65rem)] leading-[1.25] text-ink">
            To provide{" "}
            <em className="not-italic text-gold-text">quality Kuchipudi training</em>{" "}
            rooted in tradition, devotion, and artistic excellence while empowering
            students to grow as{" "}
            <em className="not-italic text-gold-text">confident performers</em> and
            culturally grounded individuals.
          </blockquote>
        </Reveal>

        <Reveal delay={0.14} className="mt-12">
          <div className="h-px w-full bg-line" aria-hidden="true" />
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[0.66rem] uppercase tracking-[0.16em] text-muted">
              Tradition, devotion &amp; artistic excellence
            </p>
            <a
              href="#gallery"
              className="font-serif text-lg italic text-gold-text transition-colors hover:text-ink"
            >
              See it in motion
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
