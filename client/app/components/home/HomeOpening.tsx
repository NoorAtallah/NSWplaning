"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, Users, ArrowDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const SHELL = "max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10";

/* ═══════════════════════════════════════════════════════════
   ACT I — THE WORD
   Type only. Nothing else on screen. The line arrives, holds,
   then lifts away as you begin to scroll.
   ═══════════════════════════════════════════════════════════ */

export function ActTitle() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.85], ["0px", "7px"]);

  const lines = ["Training that moves", "careers forward."];

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] bg-white flex flex-col justify-center"
    >
      <motion.div
        className={SHELL}
        style={
          reduce ? undefined : { y, opacity, filter: blur as unknown as string }
        }
      >
        {/* rule draws in */}
        <motion.div
          className="h-[1px] bg-brand/15 origin-left mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="block text-[11px] font-bold tracking-[3px] uppercase text-brand/40 mb-10"
        >
          NSWPM Academy
        </motion.span>

        <h1 className="font-serif text-[clamp(2.9rem,9vw,8rem)] leading-[0.96] tracking-[-0.05em] text-brand">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.25,
                  delay: 0.35 + i * 0.13,
                  ease: EASE,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
      </motion.div>

      {/* scroll cue — pinned to the floor of the scene */}
      <motion.div
        className={`absolute bottom-10 left-0 right-0 ${SHELL}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={reduce ? undefined : { opacity }}
      >
        <div className="flex items-center gap-3 text-brand/35">
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={15} strokeWidth={2} />
          </motion.span>
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase">
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ACT II — THE REVEAL
   A single image opens from a narrow column to full bleed as
   you scroll. Its own scene; nothing overlaps it.
   ═══════════════════════════════════════════════════════════ */

export function ActReveal() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  const width = useTransform(p, [0, 0.55], ["26%", "100%"]);
  const height = useTransform(p, [0, 0.55], ["58vh", "100vh"]);
  const radius = useTransform(p, [0, 0.55], [20, 0]);
  const imgScale = useTransform(p, [0, 0.55], [1.55, 1]);
  const capOpacity = useTransform(p, [0.6, 0.78], [0, 1]);
  const capY = useTransform(p, [0.6, 0.78], [24, 0]);

  if (reduce) {
    return (
      <section className="bg-white pb-24">
        <div className="relative h-[70vh] w-full">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=85"
            alt="Learners in a training session"
            fill
            className="object-cover"
          />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[260vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          className="relative overflow-hidden bg-ice"
          style={{ width, height, borderRadius: radius }}
        >
          <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=85"
              alt="Learners in a training session"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>

          {/* caption arrives only once the image has fully opened */}
          <motion.div
            className="absolute inset-x-0 bottom-0 p-8 sm:p-12 lg:p-16"
            style={{ opacity: capOpacity, y: capY }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/25 to-transparent" />
            <div className={`relative ${SHELL} !px-0`}>
              <p className="font-serif text-[clamp(1.4rem,3.4vw,2.9rem)] leading-[1.2] tracking-[-0.035em] text-white max-w-3xl">
                Built for the people who do the most important work in the
                community.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ACT III — THE PROMISE
   Statement lines arrive on their own, then the actions.
   ═══════════════════════════════════════════════════════════ */

function StatementLine({
  children,
  progress,
  index,
  total,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [26, 0]);

  return (
    <motion.span style={{ opacity, y }} className="block">
      {children}
    </motion.span>
  );
}

export function ActPromise() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.75"],
  });

  const lines = [
    "Nationally recognised courses",
    "and CPD for the NDIS, disability,",
    "aged care and community",
    "services workforce.",
  ];

  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative bg-white py-28 lg:py-40">
      <div className={SHELL}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* drawing rail */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="relative w-[1px] h-full bg-brand/10">
              <motion.div
                className="absolute top-0 left-0 w-full bg-brand origin-top"
                style={reduce ? { height: "100%" } : { height: railHeight }}
              />
            </div>
          </div>

          <div className="lg:col-span-11">
            <span className="block text-[11px] font-bold tracking-[3px] uppercase text-mint mb-10">
              What we do
            </span>

            <p className="font-serif text-[clamp(1.8rem,5vw,4.2rem)] leading-[1.14] tracking-[-0.04em] text-brand">
              {reduce
                ? lines.map((l, i) => (
                    <span key={i} className="block">
                      {l}
                    </span>
                  ))
                : lines.map((l, i) => (
                    <StatementLine
                      key={i}
                      progress={scrollYProgress}
                      index={i}
                      total={lines.length}
                    >
                      {l}
                    </StatementLine>
                  ))}
            </p>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="flex flex-wrap items-center gap-3 mt-16"
            >
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors"
              >
                Browse courses
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/organisations"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-brand px-7 py-4 rounded-full ring-1 ring-brand/12 hover:ring-brand/35 transition-all"
              >
                <Users size={15} strokeWidth={2} />
                For teams
              </Link>
            </motion.div>

            {/* numbers, on their own line, arriving last */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="flex flex-wrap gap-x-16 gap-y-8 mt-20 pt-12 border-t border-brand/10"
            >
              {[
                { n: "06", l: "Course programs" },
                { n: "24h", l: "Max CPD per course" },
                { n: "100%", l: "Online delivery" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-brand leading-none tracking-[-0.04em]">
                    {s.n}
                  </div>
                  <div className="text-[12px] font-semibold text-brand/45 mt-3">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
