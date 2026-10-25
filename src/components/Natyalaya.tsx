import { ArrowUpRight } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { CornerFlourish, RotatingSeal } from "./Ornaments";

const pillars = [
  { title: "Tradition", copy: "Authenticity of the classical form, held with care." },
  { title: "Discipline", copy: "Structure, focus, and dedicated mentorship." },
  { title: "Expression", copy: "Space for every student to find an artistic identity." },
];

export function Natyalaya() {
  return (
    <section
      id="natyalaya"
      aria-labelledby="natyalaya-title"
      className="tone-wine section-pad relative overflow-hidden bg-paper text-ink"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_18%,rgba(183,154,99,0.14),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="container-editorial relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <figure className="relative mx-auto max-w-[30rem] lg:mx-0 lg:max-w-none">
              <div className="absolute -right-3 -top-3 h-full w-full border border-gold/30" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-alt">
                <ResponsiveImage
                  id="portrait-green-studio"
                  alt="Guru Smt. Madhumitha in a green and gold Kuchipudi costume, holding a poised gesture on stage."
                  sizes="(max-width: 1023px) 90vw, 38vw"
                  className="h-full w-full"
                  imageClassName="object-cover object-center"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-line pt-3">
                <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                  A living practice
                </span>
                <span className="font-serif text-sm italic text-gold-text">Chennai</span>
              </figcaption>
              <RotatingSeal className="absolute -bottom-10 -right-4 h-24 w-24 rounded-full bg-wine/80 p-1 backdrop-blur-sm sm:-right-8 sm:h-28 sm:w-28" />
            </figure>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <SectionLabel index="07">Sri Narthaki Kuchipudi Natyalaya</SectionLabel>
              <h2
                id="natyalaya-title"
                className="display mt-7 text-[clamp(2.7rem,5.2vw,5rem)]"
              >
                A Space Where Tradition Comes{" "}
                <span className="display-italic text-gold-text">Alive.</span>
              </h2>
              <p className="eyebrow mt-6 text-[0.56rem] text-gold-text">
                Preserving Tradition <span className="mx-2 text-gold">|</span> Inspiring
                Excellence
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-8">
              <p className="text-[1.03rem] leading-[1.85] text-ivory/95">
                Sri Narthaki Kuchipudi Natyalaya is a dedicated space for learning,
                practising, and celebrating the timeless art of Kuchipudi. Rooted in
                tradition and guided by passion, our institution aims to preserve the
                authenticity of this classical dance form while nurturing the next
                generation of talented dancers.
              </p>
              <p className="copy mt-5 text-ivory/65">
                Through structured training, expressive storytelling, rhythmic precision,
                graceful movements, and dedicated mentorship, we encourage every student to
                discover their artistic potential and develop confidence, discipline, and
                cultural appreciation.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-9 grid gap-px border border-line bg-line sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-paper p-5">
                  <p className="font-serif text-xl italic text-gold-text">{pillar.title}</p>
                  <p className="mt-2 text-[0.72rem] leading-relaxed text-muted">
                    {pillar.copy}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.16} className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn btn-gold group">
                Enquire About Classes
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <div className="hidden items-center gap-4 sm:flex">
                <CornerFlourish className="h-10 w-10 text-gold/60" />
                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                  Rooted in tradition
                  <br />
                  Open to discovery
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
