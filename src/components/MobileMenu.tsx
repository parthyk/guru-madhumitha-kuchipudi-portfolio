import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Phone, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { navItems, SITE } from "../data/site";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { ArchLines, Kolam } from "./Ornaments";
import { ThemeToggle } from "./ThemeToggle";

type MobileMenuProps = {
  open: boolean;
  active: string;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ open, active, onClose }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => closeRef.current?.focus(), 120);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !containerRef.current) return;

      const nodes = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((node) => node.offsetParent !== null);

      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-menu"
          id="mobile-site-menu"
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          className="tone-wine fixed inset-0 z-[70] overflow-y-auto bg-paper text-ink"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 top-0 h-[100%] w-[90%] text-gold opacity-[0.12]">
              <ArchLines className="h-full w-full" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(183,154,99,0.18),transparent_48%)]" />
          </div>

          <div className="container-editorial relative flex min-h-[100svh] flex-col py-5">
            <div className="flex items-center justify-between border-b border-line pb-5">
              <a href="#home" onClick={onClose} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center border border-gold/60 font-serif text-lg italic text-gold-text">
                  SN
                </span>
                <span className="flex flex-col">
                  <span className="font-serif text-xl leading-none">Sri Narthaki</span>
                  <span className="eyebrow mt-1 text-[0.55rem] text-muted">
                    Kuchipudi Natyalaya
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-2">
                <ThemeToggle className="border-line-strong text-ink" />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center border border-line-strong text-ink transition-colors hover:border-gold hover:text-gold-text"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>
            </div>

            <h2 id="mobile-menu-title" className="sr-only">
              Site navigation
            </h2>

            <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center py-8">
              <ul className="divide-y divide-line">
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={onClose}
                      aria-current={active === item.id ? "location" : undefined}
                      className="group flex items-baseline gap-4 py-3.5 transition-colors hover:text-gold-text"
                    >
                      <span className="eyebrow w-6 shrink-0 text-[0.55rem] text-gold-text">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-[clamp(2.1rem,8vw,3.5rem)] leading-none">
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className="ml-auto h-4 w-4 -translate-x-1 text-gold opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-line pt-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-muted">
                  <Kolam className="h-3.5 w-3.5 text-gold" />
                  <span className="eyebrow text-[0.58rem]">{SITE.location}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <a
                    href={SITE.tel}
                    className="inline-flex min-h-11 items-center gap-2 text-ink transition-colors hover:text-gold-text"
                  >
                    <Phone className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" />
                    {SITE.phone}
                  </a>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="eyebrow inline-flex min-h-11 items-center gap-2 text-gold-text"
                  >
                    Enquire
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
