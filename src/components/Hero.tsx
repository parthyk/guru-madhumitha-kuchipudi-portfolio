import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";
import { ArchLines, RotatingSeal } from "./Ornaments";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="tone-dark relative isolate overflow-hidden bg-paper text-ink"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,rgba(100,28,50,0.55),transparent_57%)]" />
        <div className="absolute -right-[18%] top-0 h-full w-[70%] text-gold opacity-[0.1]">
          <ArchLines className="h-full w-full" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0d0c0c] to-transparent" />
        <span className="font-telugu absolute right-[3%] top-[30%] hidden text-[4rem] leading-none tracking-[0.2em] text-gold opacity-[0.12] [writing-mode:vertical-rl] xl:block">
          కూచిపూడి
        </span>
        <span className="eyebrow vertical-label absolute left-[2.2rem] top-[32%] hidden text-[0.55rem] tracking-[0.32em] text-gold opacity-50 xl:block">
          Chennai · Tamil Nadu · India
        </span>
      </div>

      <div className="container-editorial relative z-10 flex min-h-[100svh] flex-col justify-center pb-8 pt-28 lg:pb-10 lg:pt-32">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6"
        >
          <div className="order-1 lg:col-span-7 xl:col-span-6">
            <motion.div variants={item} className="flex items-center gap-3 text-gold">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              <p className="eyebrow text-[0.59rem] text-[#e4c692]">
                Sri Narthaki Kuchipudi Natyalaya
              </p>
            </motion.div>

            <h1 id="hero-title" className="mt-7">
              <motion.span
                variants={item}
                className="block font-serif text-[clamp(1.4rem,2.4vw,2rem)] font-light italic tracking-wide text-gold"
              >
                Guru Smt.
              </motion.span>
              <motion.span
                variants={item}
                className="display mt-1 block text-[clamp(3.65rem,9.4vw,8.4rem)] text-ivory"
              >
                Madhumitha<span className="text-gold">.</span>
              </motion.span>
            </h1>

            <motion.p
              variants={item}
              className="eyebrow mt-6 text-[0.58rem] leading-relaxed text-ivory/70 sm:text-[0.64rem]"
            >
              Kuchipudi Dancer <span className="mx-2 text-gold">·</span> Dance Guru
              <span className="mx-2 text-gold">·</span> Performer
            </motion.p>

            <motion.p
              variants={item}
              className="display-italic mt-8 max-w-[32rem] text-[clamp(1.6rem,3.2vw,2.65rem)] text-ivory"
            >
              Preserving Tradition.
              <br />
              <span className="text-[#d8b984]">Inspiring Excellence.</span>
            </motion.p>

            <motion.p variants={item} className="copy mt-6 max-w-[30rem] text-ivory/65">
              A passionate Kuchipudi artist dedicated to preserving, promoting, and sharing
              the beauty of Indian classical dance.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#journey" className="btn btn-gold group">
                Explore My Journey
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#contact"
                className="btn border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                Begin Your Dance Journey
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-ivory/15 pt-5"
            >
              <div>
                <dt className="eyebrow text-[0.53rem] text-ivory/45">Performances</dt>
                <dd className="mt-1 font-serif text-2xl text-ivory">600+</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.53rem] text-ivory/45">Based in</dt>
                <dd className="mt-1 font-serif text-2xl text-ivory">Chennai</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.53rem] text-ivory/45">Guru & Founder</dt>
                <dd className="mt-1 font-serif text-2xl text-ivory">Narthaki</dd>
              </div>
            </motion.dl>
          </div>

          <div className="relative order-2 mx-auto w-full max-w-[30rem] lg:col-span-5 lg:col-start-8 lg:mx-0 lg:max-w-none xl:col-span-6 xl:col-start-7 xl:pl-12">
            <motion.div
              initial={reduce ? false : { clipPath: "inset(100% 0px 0px 0px)" }}
              animate={{ clipPath: "inset(0% 0px 0px 0px)" }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-gold/15 arch-frame" aria-hidden="true" />
              <div className="arch-frame relative overflow-hidden border border-gold/50 bg-[#0b090a] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                <div
                  className="arch-frame pointer-events-none absolute inset-3 z-20 border border-gold/25"
                  aria-hidden="true"
                />
                <ResponsiveImage
                  id="portrait-blue"
                  alt="Guru Smt. Madhumitha in a blue and gold Kuchipudi costume, standing with her hands crossed at her chest."
                  priority
                  width={1280}
                  sizes="(max-width: 1023px) 88vw, (max-width: 1280px) 42vw, 34rem"
                  className="arch-frame aspect-[4/5] w-full"
                  imageClassName="object-center"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/5 bg-gradient-to-t from-[#0b090a]/80 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span className="eyebrow absolute left-5 top-6 z-20 text-[0.52rem] text-ivory/55">
                  01 / The Artist
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-30 -mt-8 ml-4 w-[min(19rem,80%)] border border-line bg-paper-alt p-4 shadow-[0_16px_50px_rgba(0,0,0,0.25)] sm:ml-8 lg:absolute lg:-left-8 lg:bottom-10 lg:mt-0 lg:ml-0 lg:w-[17.5rem] xl:-left-16 xl:w-[19rem]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
                <span className="eyebrow text-[0.52rem] text-gold-text">Founder & Artistic Director</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              </div>
              <p className="mt-3 font-serif text-xl leading-tight text-ink">
                Guru Smt. Madhumitha
              </p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                Sri Narthaki Kuchipudi Natyalaya
              </p>
            </motion.div>

            <RotatingSeal className="absolute -right-3 top-[14%] z-30 h-24 w-24 rounded-full bg-[#0d0c0c]/80 p-1 backdrop-blur-sm lg:-right-8 lg:h-28 lg:w-28" />
          </div>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-ivory/15 pt-5 sm:mt-16">
          <a
            href="#art"
            className="group inline-flex items-center gap-3 text-ivory/60 transition-colors hover:text-gold"
          >
            <span className="relative h-8 w-px overflow-hidden bg-ivory/15" aria-hidden="true">
              <span className="absolute inset-0 bg-gold animate-scroll-cue" />
            </span>
            <span className="eyebrow text-[0.53rem]">Scroll to explore</span>
            <ArrowDown
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <p className="eyebrow text-[0.53rem] text-ivory/35">
            A life devoted to the rhythm, story & spirit of Kuchipudi
          </p>
        </div>
      </div>
    </section>
  );
}
