import { ArrowUpRight, Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "../data/site";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => {
      menuButtonRef.current?.focus({ preventScroll: true });
    });
  }, []);

  const activeColour = scrolled ? "text-gold-text" : "text-[#e4c692]";
  const hoverColour = scrolled ? "hover:text-gold-text" : "hover:text-gold";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[height,background-color,border-color,color] duration-500 ${
          scrolled
            ? "h-16 border-line bg-[var(--header-bg)] backdrop-blur-xl lg:h-[4.5rem]"
            : "h-20 border-transparent bg-transparent lg:h-24"
        }`}
      >
        <div
          className={`container-editorial flex h-full items-center justify-between gap-4 transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-ivory"
          }`}
        >
          <a
            href="#home"
            aria-label="Sri Narthaki Kuchipudi Natyalaya — home"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center border border-gold/60 font-serif text-lg italic text-gold transition-colors group-hover:border-gold group-hover:bg-gold/10">
              SN
            </span>
            <span className="flex flex-col">
              <span className="font-serif text-[1.15rem] leading-none tracking-tight">
                Sri Narthaki
              </span>
              <span className="eyebrow mt-1 text-[0.5rem] text-current opacity-60">
                Kuchipudi Natyalaya
              </span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-4 xl:gap-6">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      data-active={isActive}
                      className={`link-line eyebrow inline-flex min-h-11 items-center text-[0.59rem] tracking-[0.16em] transition-colors ${hoverColour} ${
                        isActive ? `${activeColour} opacity-100` : "opacity-75 hover:opacity-100"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle
              className={
                scrolled
                  ? "border-line-strong text-ink hover:border-gold-text hover:text-gold-text"
                  : "border-ivory/25 text-ivory hover:border-gold hover:text-gold"
              }
            />
            <a
              href="#contact"
              className={`btn hidden min-h-10 border px-4 text-[0.6rem] xl:inline-flex ${
                scrolled
                  ? "border-line-strong text-ink hover:border-gold-text hover:text-gold-text"
                  : "border-ivory/25 text-ivory hover:border-gold hover:text-gold"
              }`}
            >
              Enquire
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-site-menu"
              onClick={() => setMenuOpen(true)}
              className={`grid h-10 w-10 place-items-center border transition-colors lg:hidden ${
                scrolled
                  ? "border-line-strong text-ink hover:border-gold-text hover:text-gold-text"
                  : "border-ivory/25 text-ivory hover:border-gold hover:text-gold"
              }`}
            >
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.4} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} active={active} onClose={closeMenu} />
    </>
  );
}
