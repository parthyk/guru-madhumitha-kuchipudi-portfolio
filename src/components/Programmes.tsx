import { ArrowUpRight } from "lucide-react";
import { programmes } from "../data/site";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Programmes({ onSelect }: { onSelect: (interest: string) => void }) {
  return (
    <section
      id="programmes"
      aria-labelledby="programmes-title"
      className="section-pad relative overflow-hidden bg-paper"
    >
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <SectionLabel index="08">Our Focus</SectionLabel>
              <h2
                id="programmes-title"
                className="display mt-7 text-[clamp(2.8rem,5vw,4.8rem)]"
              >
                The practice, the discipline,{" "}
                <span className="display-italic text-gold-text">the stage.</span>
              </h2>
              <p className="copy mt-6 max-w-[24rem]">
                From foundational technique to the joy of performance, each offering is
                shaped around the student&apos;s growth as an artist and a person.
              </p>
              <div className="mt-8 border-l border-gold/60 pl-5">
                <p className="text-[0.72rem] uppercase leading-relaxed tracking-[0.14em] text-muted">
                  Choose an area of interest to begin a conversation.
                </p>
              </div>
              <a
                href="#contact"
                onClick={() => onSelect("General enquiry")}
                className="btn btn-outline mt-8"
              >
                General Enquiry
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-line">
              {programmes.map((programme, index) => (
                <Reveal key={programme.title} delay={index * 0.03}>
                  <a
                    href="#contact"
                    onClick={() => onSelect(programme.title)}
                    className="group block border-b border-line transition-colors duration-300 hover:bg-wine focus-visible:bg-wine"
                  >
                    <div className="grid grid-cols-[2.4rem_1fr_auto] items-start gap-4 px-4 py-6 sm:grid-cols-[3.5rem_1fr_2rem] sm:gap-6 sm:px-7 sm:py-7">
                      <span className="font-serif text-[1.2rem] italic leading-none text-gold-text transition-colors duration-300 group-hover:text-gold group-focus-visible:text-gold sm:text-[1.45rem]">
                        {programme.index}
                      </span>
                      <div>
                        <h3 className="font-serif text-[clamp(1.5rem,2.5vw,2.15rem)] leading-tight text-ink transition-colors duration-300 group-hover:text-ivory group-focus-visible:text-ivory">
                          {programme.title}
                        </h3>
                        <p className="mt-2 max-w-[34rem] text-[0.82rem] leading-relaxed text-muted transition-colors duration-300 group-hover:text-ivory/65 group-focus-visible:text-ivory/65">
                          {programme.copy}
                        </p>
                      </div>
                      <span className="mt-1 grid h-8 w-8 place-items-center border border-line-strong text-ink transition-all duration-300 group-hover:border-gold group-hover:text-gold group-focus-visible:border-gold group-focus-visible:text-gold">
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-5 flex items-center justify-between gap-4">
              <p className="text-[0.66rem] uppercase tracking-[0.16em] text-muted">
                Every enquiry leads to a conversation
              </p>
              <p className="font-serif text-sm italic text-gold-text">Six offerings</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
