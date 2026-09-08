"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  HeartHandshake,
  MonitorSmartphone,
  Target,
  Eye,
  Flag,
  Laptop,
  CalendarClock,
  BadgeCheck,
  ArrowUpRight,
  ArrowDown,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   CONTENT
   Purpose / Vision / Mission / Values are verbatim from the
   client doc: "For Website_Vision-Mission-Purpose-Core Values".
   ──────────────────────────────────────────────────────────── */

const pillars = [
  {
    key: "purpose",
    label: "Our Purpose",
    icon: Target,
    accent: "text-gold",
    glow: "bg-gold/25",
    text: "To make high-quality education and Continuing Professional Development accessible and relevant, helping learners build knowledge, strengthen professional capabilities and develop practical workplace skills.",
  },
  {
    key: "vision",
    label: "Our Vision",
    icon: Eye,
    accent: "text-mint",
    glow: "bg-mint/25",
    text: "To be a trusted and innovative education provider that empowers individuals and organisations through high-quality education, Continuing Professional Development and modern learning technologies.",
  },
  {
    key: "mission",
    label: "Our Mission",
    icon: Flag,
    accent: "text-sky",
    glow: "bg-sky/25",
    text: "We provide accessible, practical and high-quality education that develops knowledge, strengthens professional skills and supports Continuing Professional Development and lifelong learning through flexible and modern learning experiences.",
  },
];

const values = [
  {
    no: "01",
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We act honestly, ethically and transparently.",
  },
  {
    no: "02",
    icon: Award,
    title: "Quality",
    desc: "We maintain high standards in course design, delivery and learner support.",
  },
  {
    no: "03",
    icon: Users,
    title: "Learner Focus",
    desc: "We place learners at the centre of our educational services.",
  },
  {
    no: "04",
    icon: Compass,
    title: "Practical Learning & Professional Development",
    desc: "We connect knowledge with real-world practice and professional development.",
  },
  {
    no: "05",
    icon: HeartHandshake,
    title: "Inclusion & Respect",
    desc: "We promote an inclusive, accessible and respectful learning environment.",
  },
  {
    no: "06",
    icon: MonitorSmartphone,
    title: "Innovation & Digital Learning",
    desc: "We embrace modern learning technologies and continuous improvement.",
  },
];

// TODO: confirm delivery model with the client.
const approach = [
  {
    icon: Laptop,
    kicker: "Flexible",
    title: "Learn online, on your schedule",
    desc: "Courses are delivered through our learning portal, so study fits around shifts and family rather than the other way around.",
  },
  {
    icon: CalendarClock,
    kicker: "Evidenced",
    title: "CPD that counts",
    desc: "Every course carries clearly stated CPD hours, so you can evidence your professional development when you need to.",
  },
  {
    icon: BadgeCheck,
    kicker: "Grounded",
    title: "Built on real practice",
    desc: "Content is written around the situations our learners actually meet at work, not abstract theory.",
  },
];

// TODO: replace with the client's real history.
const storyLines = [
  "NSWPM Academy grew out of hands-on work in disability and community services.",
  "We saw capable people held back by training that was hard to access, hard to fit around shift work, or too far removed from the realities of the job.",
  "So we built the alternative — flexible, practical courses that respect a learner's time.",
  "And Continuing Professional Development that keeps skills current as standards and practice move on.",
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* ────────────────────────────────────────────────────────────
   ACT 1 — OPENING
   ──────────────────────────────────────────────────────────── */

function ActOpening({ reduce }: { reduce: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = "Education that moves people forward.".split(" ");

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[620px] overflow-hidden bg-brand"
    >
      {/* BACKDROP */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale: imgScale, y: imgY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-brand/80" />
      </motion.div>

      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.09] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* CONTENT */}
      <motion.div
        className="relative h-full flex flex-col justify-center max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14"
        style={reduce ? undefined : { y: textY, opacity: fade }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-[1px] w-12 bg-gold" />
          <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-gold">
            About The Academy
          </span>
        </motion.div>

        <h1 className="font-serif text-[44px] sm:text-[64px] lg:text-[92px] leading-[0.98] tracking-[-3px] text-white max-w-5xl">
          {words.map((w, i) => (
            <span
              key={i}
              className={`inline-block overflow-hidden pb-[0.1em] align-bottom ${
                i < words.length - 1 ? "mr-[0.26em]" : ""
              }`}
            >
              <motion.span
                className="inline-block"
                initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.15 + i * 0.07,
                  ease: EASE,
                }}
              >
                {w}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="text-[16px] lg:text-[18px] font-medium text-white/65 leading-[1.85] max-w-xl mt-9"
        >
          We exist to make professional education accessible to the people who
          do some of the most important work in the community.
        </motion.p>
      </motion.div>

      {/* SCROLL CUE */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={reduce ? undefined : { opacity: fade }}
      >
        <span className="font-mono text-[9px] font-bold tracking-[3px] uppercase text-white/40">
          Scroll
        </span>
        <motion.span
          className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white/60"
          animate={reduce ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={15} strokeWidth={2} />
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   ACT 2 — PILLARS (pinned, cross-fading)
   ──────────────────────────────────────────────────────────── */

function ActPillars({ reduce }: { reduce: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(pillars.length - 1, Math.floor(v * pillars.length));
    setIndex(next);
  });

  if (reduce) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 grid gap-12">
          {pillars.map((p) => (
            <div key={p.key} className="max-w-2xl">
              <div className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/45 mb-3">
                {p.label}
              </div>
              <p className="font-serif text-[26px] text-brand leading-[1.35]">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-white h-[320vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* MOVING GLOW */}
        <motion.div
          key={`glow-${index}`}
          className={`absolute -top-40 right-[-10%] w-[620px] h-[620px] rounded-full blur-3xl ${pillars[index].glow}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* RAIL */}
            <div className="lg:col-span-3">
              <div className="flex lg:flex-col gap-6 lg:gap-8">
                {pillars.map((p, i) => {
                  const on = i === index;
                  return (
                    <div key={p.key} className="flex items-center gap-3">
                      <div className="relative h-[2px] w-10 lg:w-14 bg-brand/12 overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-brand origin-left"
                          initial={false}
                          animate={{ scaleX: on ? 1 : 0 }}
                          transition={{ duration: 0.6, ease: EASE }}
                        />
                      </div>
                      <motion.span
                        initial={false}
                        animate={{ opacity: on ? 1 : 0.3 }}
                        className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand whitespace-nowrap"
                      >
                        {p.label}
                      </motion.span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STAGE */}
            <div className="lg:col-span-9 relative min-h-[340px] lg:min-h-[380px]">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                const on = i === index;
                return (
                  <motion.div
                    key={p.key}
                    className="absolute inset-0 flex flex-col justify-center"
                    initial={false}
                    animate={{
                      opacity: on ? 1 : 0,
                      y: on ? 0 : 28,
                      filter: on ? "blur(0px)" : "blur(6px)",
                    }}
                    transition={{ duration: 0.65, ease: EASE }}
                    style={{ pointerEvents: on ? "auto" : "none" }}
                  >
                    <Icon
                      size={34}
                      strokeWidth={1.4}
                      className={`${p.accent} mb-7`}
                    />
                    <p className="font-serif text-[26px] sm:text-[34px] lg:text-[46px] leading-[1.22] tracking-[-1.5px] text-brand">
                      {p.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   ACT 3 — STORY (image expands, lines arrive)
   ──────────────────────────────────────────────────────────── */

function ActStory({ reduce }: { reduce: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0, 0.45], ["62%", "100%"]);
  const radius = useTransform(scrollYProgress, [0, 0.45], [8, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const overlay = useTransform(scrollYProgress, [0.2, 0.55], [0.25, 0.82]);

  if (reduce) {
    return (
      <section className="relative bg-brand py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          <h2 className="font-serif text-[34px] text-white mb-8">Our story</h2>
          <div className="grid gap-5 max-w-2xl">
            {storyLines.map((l) => (
              <p
                key={l}
                className="text-[16px] font-medium text-white/70 leading-[1.85]"
              >
                {l}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* EXPANDING IMAGE */}
        <motion.div
          className="relative h-[74vh] overflow-hidden"
          style={{ width, borderRadius: radius }}
        >
          <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
              alt="A training session in progress"
              fill
              className="object-cover object-center"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-brand"
            style={{ opacity: overlay }}
          />

          {/* LINES */}
          <div className="relative h-full flex items-center">
            <div className="w-full max-w-[1280px] mx-auto px-8 md:px-14 lg:px-20">
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="h-[1px] w-12 bg-gold" />
                <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-gold">
                  Our Story
                </span>
              </motion.div>

              <div className="max-w-3xl space-y-5">
                {storyLines.map((line, i) => (
                  <StoryLine
                    key={i}
                    line={line}
                    index={i}
                    progress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StoryLine({
  line,
  index,
  progress,
}: {
  line: string;
  index: number;
  progress: MotionValue<number>;
}) {
  // Lines arrive one after another across the pinned scroll.
  const start = 0.3 + index * 0.13;
  const opacity = useTransform(
    progress,
    [start, start + 0.09],
    [0.18, 1],
  );
  const y = useTransform(progress, [start, start + 0.09], [16, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="font-serif text-[22px] sm:text-[28px] lg:text-[36px] leading-[1.35] tracking-[-1px] text-white"
    >
      {line}
    </motion.p>
  );
}

/* ────────────────────────────────────────────────────────────
   ACT 4 — VALUES (counted through, one by one)
   ──────────────────────────────────────────────────────────── */

function ActValues({ reduce }: { reduce: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIndex(Math.min(values.length - 1, Math.floor(v * values.length)));
  });

  if (reduce) {
    return (
      <section className="bg-brand py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          <h2 className="font-serif text-[34px] text-white mb-10">
            Core values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.no} className="border-t border-white/15 pt-5">
                <div className="font-mono text-[11px] font-bold text-gold mb-2">
                  {v.no}
                </div>
                <h3 className="font-serif text-[22px] text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-[13px] text-white/55 leading-[1.8]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const active = values[index];

  return (
    <section ref={ref} className="relative h-[560vh] bg-brand">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* TEXTURE */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden="true"
        />
        {/* GLOW */}
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-mint/12 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="relative h-full flex flex-col justify-center max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-12 lg:mb-16">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-gold" />
              <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-gold">
                Core Values
              </span>
            </div>
            <div className="font-mono text-[11px] font-bold tracking-[2px] text-white/40">
              {active.no} / {String(values.length).padStart(2, "0")}
            </div>
          </div>

          {/* STAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* GIANT NUMBER */}
            <div className="lg:col-span-4 relative h-[120px] lg:h-[240px]">
              {values.map((v, i) => (
                <motion.span
                  key={v.no}
                  className="absolute inset-0 font-serif text-[120px] lg:text-[220px] leading-none text-white/10 select-none"
                  initial={false}
                  animate={{
                    opacity: i === index ? 1 : 0,
                    y: i === index ? 0 : 40,
                  }}
                  transition={{ duration: 0.55, ease: EASE }}
                  aria-hidden="true"
                >
                  {v.no}
                </motion.span>
              ))}
            </div>

            {/* TEXT */}
            <div className="lg:col-span-8 relative min-h-[240px] lg:min-h-[260px]">
              {values.map((v, i) => {
                const on = i === index;
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.no}
                    className="absolute inset-0 flex flex-col justify-center"
                    initial={false}
                    animate={{
                      opacity: on ? 1 : 0,
                      y: on ? 0 : 30,
                      filter: on ? "blur(0px)" : "blur(8px)",
                    }}
                    transition={{ duration: 0.6, ease: EASE }}
                    style={{ pointerEvents: on ? "auto" : "none" }}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.4}
                      className="text-mint mb-6"
                    />
                    <h3 className="font-serif text-[32px] sm:text-[44px] lg:text-[60px] leading-[1.05] tracking-[-2px] text-white mb-5">
                      {v.title}
                    </h3>
                    <p className="text-[15px] lg:text-[18px] font-medium text-white/60 leading-[1.85] max-w-xl">
                      {v.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* PROGRESS TICKS */}
          <div className="flex items-center gap-2 mt-14">
            {values.map((v, i) => (
              <div
                key={v.no}
                className="relative h-[3px] flex-1 bg-white/12 overflow-hidden rounded-full"
              >
                <motion.div
                  className="absolute inset-0 bg-gold origin-left"
                  initial={false}
                  animate={{ scaleX: i <= index ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   ACT 5 — HOW WE DELIVER (horizontal pinned)
   ──────────────────────────────────────────────────────────── */

function ActDeliver({ reduce }: { reduce: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-62%"]);

  if (reduce) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 grid md:grid-cols-3 gap-6">
          {approach.map((a) => (
            <div
              key={a.title}
              className="border border-brand/10 rounded-[6px] p-7"
            >
              <h3 className="font-serif text-[22px] text-brand mb-3">
                {a.title}
              </h3>
              <p className="text-[13px] text-brand/60 leading-[1.8]">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[280vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10 lg:px-14 mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-12 bg-mint" />
            <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-mint">
              How We Deliver
            </span>
          </div>
          <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[58px] leading-[1.04] tracking-[-2px] text-brand max-w-2xl">
            Learning designed around working lives.
          </h2>
        </div>

        <motion.div className="flex gap-6 pl-6 md:pl-10 lg:pl-14" style={{ x }}>
          {approach.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="relative shrink-0 w-[78vw] sm:w-[440px] bg-cloud border border-brand/10 rounded-[8px] p-8 lg:p-10"
              >
                <span
                  className="absolute top-6 right-8 font-serif text-[80px] leading-none text-brand/[0.06] select-none"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <span className="p-3.5 rounded-xl bg-white border border-brand/10 inline-flex items-center justify-center text-mint mb-7">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <div className="font-mono text-[9px] font-bold tracking-[2px] uppercase text-brand/40 mb-3">
                  {a.kicker}
                </div>
                <h3 className="font-serif text-[26px] lg:text-[30px] text-brand leading-tight tracking-[-0.8px] mb-4">
                  {a.title}
                </h3>
                <p className="text-[14px] font-medium text-brand/60 leading-[1.85]">
                  {a.desc}
                </p>
              </div>
            );
          })}

          {/* END CARD */}
          <div className="shrink-0 w-[78vw] sm:w-[440px] bg-brand rounded-[8px] p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="font-serif text-[28px] lg:text-[34px] text-white leading-tight tracking-[-1px] mb-4">
              Training a team?
            </h3>
            <p className="text-[14px] font-medium text-white/60 leading-[1.85] mb-7">
              Tell us your workforce needs and we&apos;ll build the plan around
              them.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start bg-gold text-brand text-[12px] font-bold tracking-[1px] uppercase px-6 py-3.5 rounded-[4px] hover:opacity-90 transition-opacity"
            >
              Talk to us
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   ACT 6 — CLOSING
   ──────────────────────────────────────────────────────────── */

function ActClosing({ reduce }: { reduce: boolean }) {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-serif text-[36px] sm:text-[52px] lg:text-[72px] leading-[1.02] tracking-[-2.5px] text-brand max-w-4xl mx-auto"
        >
          Ready to start <span className="italic text-mint">learning</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          className="text-[15px] lg:text-[17px] font-medium text-brand/60 leading-[1.85] max-w-xl mx-auto mt-7"
        >
          Browse the catalogue, or talk to us about training for your team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-3 mt-11"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-brand text-white text-[13px] font-bold tracking-[1px] uppercase px-8 py-4 rounded-[4px] hover:bg-brand-dark transition-colors"
          >
            View Courses
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-brand/20 text-brand text-[13px] font-bold tracking-[1px] uppercase px-8 py-4 rounded-[4px] hover:bg-brand/5 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────── */

export default function AboutStory() {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="bg-white">
      <ActOpening reduce={reduce} />
      <ActPillars reduce={reduce} />
      <ActStory reduce={reduce} />
      <ActValues reduce={reduce} />
      <ActDeliver reduce={reduce} />
      <ActClosing reduce={reduce} />
    </div>
  );
}
