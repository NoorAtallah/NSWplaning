"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock, Layers, Award } from "lucide-react";
import { courses } from "../../data/courses";

const EASE = [0.22, 1, 0.36, 1] as const;
const SHELL = "max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10";

/* ─────────────────────────────────────────────
   小 helpers
   ───────────────────────────────────────────── */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (n) => setV(Math.round(n)),
    });
    return () => c.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="h-[2px] w-10 bg-gold" />
      <span className="text-[11px] font-bold tracking-[3px] uppercase text-brand/55">
        {children}
      </span>
    </span>
  );
}

/* ═════════════════════════════════════════════
   ACT — SUBJECTS
   One giant word at a time. The photograph behind
   it changes with the word. Pinned.
   ═════════════════════════════════════════════ */

const subjects = [
  {
    word: "Disability",
    line: "Support work that meets the NDIS standard.",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&q=85",
  },
  {
    word: "Aged care",
    line: "Skills for the people who look after our elders.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=85",
  },
  {
    word: "Compliance",
    line: "Stay audit-ready, all year round.",
    img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1400&q=85",
  },
  {
    word: "Development",
    line: "CPD that keeps your practice current.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=85",
  },
];

export function ActSubjects() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setI(Math.min(subjects.length - 1, Math.floor(v * subjects.length)));
  });

  if (reduce) {
    return (
      <section className="bg-ice py-24">
        <div className={SHELL}>
          <Eyebrow>What we teach</Eyebrow>
          <div className="grid gap-10 mt-12">
            {subjects.map((s) => (
              <div key={s.word}>
                <h2 className="font-serif text-[44px] text-brand tracking-[-0.04em]">
                  {s.word}
                </h2>
                <p className="text-[15px] text-brand/60 mt-2">{s.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[420vh] bg-ice">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* photograph — right half */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
          {subjects.map((s, idx) => (
            <motion.div
              key={s.word}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: idx === i ? 1 : 0, scale: idx === i ? 1 : 1.06 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <Image src={s.img} alt={s.word} fill className="object-cover" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-ice via-ice/30 to-transparent lg:from-ice lg:via-transparent" />
        </div>

        <div className={`relative h-full flex flex-col justify-center ${SHELL}`}>
          <Eyebrow>What we teach</Eyebrow>

          <div className="relative h-[42vh] mt-10">
            {subjects.map((s, idx) => {
              const on = idx === i;
              return (
                <motion.div
                  key={s.word}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={false}
                  animate={{ opacity: on ? 1 : 0, y: on ? 0 : 34 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  style={{ pointerEvents: on ? "auto" : "none" }}
                >
                  <h2 className="font-serif text-[clamp(2.8rem,8vw,7rem)] leading-[0.9] tracking-[-0.055em] text-brand">
                    {s.word}
                  </h2>
                  <p className="text-[16px] lg:text-[19px] font-medium text-brand/60 leading-[1.7] max-w-md mt-7">
                    {s.line}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* index rail */}
          <div className="flex items-center gap-5 mt-10">
            {subjects.map((s, idx) => (
              <div key={s.word} className="flex items-center gap-3 flex-1 max-w-[120px]">
                <span
                  className={`text-[11px] font-bold tabular-nums transition-colors ${
                    idx <= i ? "text-brand" : "text-brand/25"
                  }`}
                >
                  0{idx + 1}
                </span>
                <div className="relative h-[2px] flex-1 bg-brand/12 rounded-full overflow-hidden">
                  <motion.span
                    className="absolute inset-0 bg-brand origin-left rounded-full"
                    initial={false}
                    animate={{ scaleX: idx <= i ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════
   ACT — THE LIST
   Course names as large rows. The photograph on
   the right swaps to whichever row you're on.
   ═════════════════════════════════════════════ */

export function ActCourseList() {
  const reduce = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className={SHELL}>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <Eyebrow>The catalogue</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] tracking-[-0.045em] text-brand mt-6 max-w-[16ch]">
              Six programs. One place to start.
            </h2>
          </div>
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 text-[13px] font-bold text-brand ring-1 ring-brand/15 rounded-full px-6 py-3.5 hover:ring-brand/40 transition-all"
          >
            All courses
            <ArrowUpRight
              size={15}
              strokeWidth={2.5}
              className="transition-transform group-hover:rotate-45"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ROWS */}
          <div className="lg:col-span-7 flex flex-col border-t border-brand/10">
            {courses.map((c, idx) => {
              const available = c.status === "Available";
              return (
                <motion.div
                  key={c.code}
                  onHoverStart={() => setActive(idx)}
                  onViewportEnter={() => setActive(idx)}
                  viewport={{ margin: "-45% 0px -45% 0px" }}
                  className="group border-b border-brand/10"
                >
                  <Link
                    href={available ? `/courses/${c.slug}` : "/contact"}
                    className="flex items-center gap-6 py-7 lg:py-9"
                  >
                    <span className="text-[11px] font-bold tabular-nums text-brand/30 w-7 shrink-0">
                      0{idx + 1}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`font-serif text-[clamp(1.35rem,3vw,2.3rem)] leading-[1.1] tracking-[-0.035em] transition-colors ${
                          active === idx ? "text-brand" : "text-brand/45"
                        }`}
                      >
                        {c.title}
                      </h3>

                      <motion.div
                        initial={false}
                        animate={{
                          height: active === idx ? "auto" : 0,
                          opacity: active === idx ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap items-center gap-5 pt-4 text-[12px] font-semibold text-brand/50">
                          <span className="flex items-center gap-1.5">
                            <Clock size={13} strokeWidth={2} />
                            {c.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Layers size={13} strokeWidth={2} />
                            {c.modules} modules
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Award size={13} strokeWidth={2} />
                            {c.cpdHours}h CPD
                          </span>
                          {!available && (
                            <span className="text-brand/35">Coming soon</span>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    <motion.span
                      initial={false}
                      animate={{
                        opacity: active === idx ? 1 : 0.25,
                        x: active === idx ? 0 : -6,
                      }}
                      className="w-10 h-10 rounded-full ring-1 ring-brand/15 flex items-center justify-center text-brand shrink-0"
                    >
                      <ArrowUpRight size={15} strokeWidth={2.5} />
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* PREVIEW */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-ice ring-1 ring-brand/10">
                {courses.map((c, idx) => (
                  <motion.div
                    key={c.code}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: active === idx ? 1 : 0,
                      scale: active === idx ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.7, ease: EASE }}
                  >
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════
   ACT — THE PATH
   Three bands. Each photograph wipes open as the
   band arrives.
   ═════════════════════════════════════════════ */

const path = [
  {
    n: "01",
    title: "Choose your course",
    desc: "Programs written for real roles, with duration, modules and CPD hours stated upfront.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85",
  },
  {
    n: "02",
    title: "Study around your roster",
    desc: "Everything runs online. Start when it suits and pick up where you left off.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85",
  },
  {
    n: "03",
    title: "Evidence your development",
    desc: "Finish with a certificate and a clear record of hours for an employer or auditor.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85",
  },
];

export function ActPath() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="bg-ice py-24 lg:py-32">
      <div className={SHELL}>
        <Eyebrow>How it works</Eyebrow>

        <div className="flex flex-col gap-20 lg:gap-28 mt-16">
          {path.map((s, i) => (
            <div
              key={s.n}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* photo — wipes open */}
              <motion.div
                initial={
                  reduce
                    ? { opacity: 0 }
                    : { clipPath: "inset(0 100% 0 0 round 20px)" }
                }
                whileInView={
                  reduce
                    ? { opacity: 1 }
                    : { clipPath: "inset(0 0% 0 0 round 20px)" }
                }
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.1, ease: EASE }}
                className="lg:col-span-7 relative h-[300px] lg:h-[440px] rounded-[20px] overflow-hidden bg-white"
              >
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </motion.div>

              {/* copy */}
              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="lg:col-span-5"
              >
                <span className="font-serif text-[clamp(3rem,6vw,5rem)] leading-none text-brand/15 block mb-5">
                  {s.n}
                </span>
                <h3 className="font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.08] tracking-[-0.04em] text-brand mb-5">
                  {s.title}
                </h3>
                <p className="text-[15px] font-medium text-brand/60 leading-[1.9] max-w-sm">
                  {s.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════
   ACT — SCALE (organisations, with counters)
   ═════════════════════════════════════════════ */

export function ActScale() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]), {
    stiffness: 80,
    damping: 26,
  });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className={SHELL}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>For organisations</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.8rem)] leading-[1.02] tracking-[-0.045em] text-brand mt-6 max-w-[14ch]">
              Train one person, or a hundred.
            </h2>
            <p className="text-[15px] lg:text-[16px] font-medium text-brand/60 leading-[1.9] max-w-md mt-7">
              Built for disability, aged care and community service providers
              who need a whole workforce trained, compliant and CPD-current —
              on one plan, one invoice, one record.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-brand/10">
              {[
                { n: 1, s: "", l: "Plan for the team" },
                { n: 86, s: "%", l: "Average completion" },
                { n: 24, s: "h", l: "Max CPD per course" },
              ].map((k) => (
                <div key={k.l}>
                  <div className="font-serif text-[clamp(1.8rem,3.6vw,2.9rem)] text-brand leading-none tracking-[-0.04em]">
                    <Counter to={k.n} suffix={k.s} />
                  </div>
                  <div className="text-[11.5px] font-semibold text-brand/45 mt-3 leading-[1.5]">
                    {k.l}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/organisations"
              className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-8 py-4.5 rounded-full mt-12 hover:bg-brand-dark transition-colors"
            >
              Team training
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[420px] lg:h-[600px] rounded-[20px] overflow-hidden bg-ice ring-1 ring-brand/10">
              <motion.div
                className="absolute -inset-y-12 inset-x-0"
                style={reduce ? undefined : { y }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85"
                  alt="A team taking part in workplace training"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════
   ACT — CLOSING
   Echoes the hero: a word filled with photograph.
   ═════════════════════════════════════════════ */

const FILL =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85";

export function ActClosing() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="relative bg-ice py-28 lg:py-40 overflow-hidden">
      <div className={`relative ${SHELL} text-center`}>
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <h2 className="font-serif text-[clamp(2.4rem,7vw,6rem)] leading-[0.94] tracking-[-0.05em] text-brand max-w-[16ch] mx-auto">
            Start the{" "}
            <span
              className="bg-clip-text text-transparent bg-cover bg-center"
              style={{ backgroundImage: `url(${FILL})` }}
            >
              qualification
            </span>{" "}
            you keep putting off.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-14">
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-9 py-4.5 rounded-full hover:bg-brand-dark transition-colors"
            >
              Browse courses
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand text-[13px] font-bold px-8 py-4.5 rounded-full ring-1 ring-brand/12 hover:ring-brand/35 transition-all"
            >
              Talk to us
            </Link>
          </div>

          <p className="text-[12.5px] font-medium text-brand/40 mt-9">
            Enrol any time — courses run online, all year round.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
