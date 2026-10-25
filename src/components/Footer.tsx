import { ArrowUp, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { navItems, SITE } from "../data/site";
import { FooterLogo } from "./FooterLogo";
import { Kolam } from "./Ornaments";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tone-dark border-t border-line bg-paper text-ink">
      <div className="container-editorial py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a href="#home" aria-label="Sri Narthaki Kuchipudi Natyalaya — home" className="inline-flex">
              <FooterLogo />
            </a>
            <p className="mt-6 max-w-[24rem] font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.05]">
              Preserving Tradition.
              <br />
              <span className="display-italic text-gold-text">Inspiring Excellence.</span>
            </p>
            <p className="mt-5 max-w-[23rem] text-[0.8rem] leading-relaxed text-muted">
              A dedicated space for learning, practising, and celebrating the timeless art
              of Kuchipudi in Chennai.
            </p>
            <div className="mt-6 flex items-center gap-3 text-gold-text">
              <Kolam className="h-4 w-4" />
              <p className="eyebrow text-[0.5rem]">Chennai · Tamil Nadu · India</p>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-3 lg:col-start-7">
            <h2 className="eyebrow text-[0.52rem] text-gold-text">Explore</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex min-h-10 items-center text-[0.78rem] text-muted transition-colors hover:text-gold-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:col-start-10">
            <h2 className="eyebrow text-[0.52rem] text-gold-text">Connect</h2>
            <div className="mt-5 space-y-3">
              <a
                href={SITE.tel}
                className="inline-flex min-h-10 items-center gap-3 text-[0.82rem] text-muted transition-colors hover:text-gold-text"
              >
                <Phone className="h-4 w-4 text-gold-text" strokeWidth={1.4} aria-hidden="true" />
                {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-3 text-[0.82rem] text-muted transition-colors hover:text-gold-text"
              >
                <MessageCircle className="h-4 w-4 text-gold-text" strokeWidth={1.4} aria-hidden="true" />
                WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-muted">
                {SITE.institution}
                <br />
                {SITE.location}
              </p>
            </div>
            <a href="#contact" className="btn btn-outline mt-6 w-full">
              Begin Your Journey
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 overflow-hidden border-t border-line pt-8" aria-hidden="true">
          <p className="display whitespace-nowrap text-[clamp(4rem,13vw,13rem)] leading-[0.7] text-ivory/[0.055]">
            Sri Narthaki<span className="text-gold/30">.</span>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.63rem] uppercase tracking-[0.13em] text-muted">
            © {year} Sri Narthaki Kuchipudi Natyalaya. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="text-[0.63rem] uppercase tracking-[0.13em] text-muted">
              Kuchipudi · Chennai
            </p>
            <a
              href="#home"
              className="group inline-flex min-h-10 items-center gap-2 border border-line-strong px-3 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-gold hover:text-gold-text"
            >
              Back to top
              <ArrowUp
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
