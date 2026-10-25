import { ArrowUpRight } from "lucide-react";
import { milestones } from "../data/site";
import { Reveal } from "./Reveal";
import { ResponsiveImage } from "./ResponsiveImage";
import { SectionLabel } from "./SectionLabel";
import { RotatingSeal } from "./Ornaments";

export function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="section-pad relative overflow-hidden bg-paper-alt"
    >
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <SectionLabel index="04">The Journey</SectionLabel>
              <h2
                id="journey-title"
                className="display mt-7 text-[clamp(2.8rem,5vw,4.8rem)]"
              >
                A life measured in{" "}
                <span className="display-italic text-gold-text">rhythm</span> and devotion.
              </h2>
              <p className="copy mt-6 max-w-[24rem]">
                A path that began at twelve and continues to unfold through performance,
                teaching, and a deep commitment to Kuchipudi.
              </p>

              <div className="mt-9 flex items-center gap-5">
                <RotatingSeal className="h-20 w-20 shrink-0 text-gold" />
                <div className="h-14 w-px bg-line" aria-hidden="true" />
                <div>
                  <p className="eyebrow text-[0.52rem] text-gold-text">Then to now</p>
                  <p className="mt-1 font-serif text-lg italic text-ink">
                    A continuing practice
                  </p>
                </div>
              </div>

              <a
                href="#achievements"
                className="link-line eyebrow mt-9 inline-flex min-h-11 items-center gap-2 text-[0.56rem] text-ink transition-colors hover:text-gold-text"
              >
                See the milestones
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="relative space-y-0">
              <span
                className="absolute bottom-0 left-[7px] top-2 w-px bg-line-strong"
                aria-hidden="true"
              />
              {milestones.map((milestone, index) => (
                <li key={milestone.marker} className="relative pb-10 pl-9 last:pb-0 sm:pl-14">
                  <span
                    className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-gold bg-paper-alt"
                    aria-hidden="true"
                  >
                    <span className="h-[5px] w-[5px] rounded-full bg-gold" />
                  </span>

                  <Reveal delay={index * 0.04}>
                    <div className="relative overflow-hidden border-t border-line pt-6">
                      <span
                        className="pointer-events-none absolute -right-2 -top-5 select-none font-serif text-[clamp(4rem,8vw,7rem)] leading-none text-ink opacity-[0.06]"
                        aria-hidden="true"
                      >
                        {milestone.marker}
                      </span>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <p className="eyebrow text-[0.56rem] text-gold-text">
                          Milestone {String(index + 1).padStart(2, "0")}
                        </p>
                        <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
                        <p className="eyebrow text-[0.56rem] text-muted">{milestone.marker}</p>
                      </div>

                      <h3 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3.35rem)] leading-[0.95] text-ink">
                        {milestone.title}
                      </h3>
                      <p className="copy mt-4 max-w-[36rem]">{milestone.copy}</p>

                      {milestone.image ? (
                        <figure className="mt-7">
                          <div className="relative aspect-[16/9] overflow-hidden bg-paper">
                            <ResponsiveImage
                              id={milestone.image}
                              alt="Guru Smt. Madhumitha in an orange and gold Kuchipudi costume, seated in a classical pose."
                              sizes="(max-width: 1023px) 88vw, 44vw"
                              className="h-full w-full"
                              imageClassName="object-cover object-[50%_28%]"
                            />
                            <div
                              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"
                              aria-hidden="true"
                            />
                          </div>
                          <figcaption className="mt-3 flex items-center justify-between gap-4">
                            <span className="text-[0.66rem] uppercase tracking-[0.16em] text-muted">
                              The first chapter
                            </span>
                            <span className="font-serif text-sm italic text-gold-text">
                              Age twelve
                            </span>
                          </figcaption>
                        </figure>
                      ) : null}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
