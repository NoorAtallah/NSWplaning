"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Layers,
  Award,
  Building2,
  BarChart3,
  ClipboardCheck,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { courses, type Course } from "../../data/courses";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════════════════
   SHARED UI
   Light, quiet chrome. Hairline borders, soft shadows,
   generous padding. Navy is reserved for type and actions.
   ═══════════════════════════════════════════════════════════ */

const SHELL = "max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] uppercase text-mint">
      <span className="w-1.5 h-1.5 rounded-full bg-mint" />
      {children}
    </span>
  );
}

function Chip({
  children,
  tone = "quiet",
}: {
  children: React.ReactNode;
  tone?: "quiet" | "mint" | "gold";
}) {
  const tones = {
    quiet: "bg-white border border-brand/10 text-brand/55",
    mint: "bg-mint/12 border border-mint/25 text-brand",
    gold: "bg-gold/18 border border-gold/35 text-brand",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.3px] px-3 py-1.5 rounded-full ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** Image inside a soft, defined container. */
function Plate({
  src,
  alt,
  className = "",
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] bg-ice ring-1 ring-brand/10 shadow-[0_30px_70px_-40px_rgba(1,56,119,0.45)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   1 — HERO — white, airy, image as a plate not a backdrop
   ═══════════════════════════════════════════════════════════ */

export function HomeHero() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const plateY = useTransform(scrollYProgress, [0, 1], ["0%", "-9%"]);

  return (
    <section ref={ref} className="relative bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* faint tint, top-right only */}
      <div
        className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-ice via-white to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className={`relative ${SHELL}`}>
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Eyebrow>Now enrolling — online, Australia-wide</Eyebrow>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end mt-8">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[74px] leading-[1.0] tracking-[-0.045em] text-brand">
              {["Training that moves", "careers forward."].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: reduce ? 0 : "108%", opacity: reduce ? 0 : 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.12 + i * 0.1,
                      ease: EASE,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="lg:col-span-5 lg:pb-3"
          >
            <p className="text-[16px] lg:text-[17px] font-medium text-brand/60 leading-[1.85]">
              Nationally recognised courses and CPD for the NDIS, disability,
              aged care and community services workforce — studied online,
              around your roster.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-7 py-4 rounded-full hover:bg-brand-dark transition-colors"
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
                className="inline-flex items-center gap-2 text-[13px] font-bold text-brand px-6 py-4 rounded-full border border-brand/15 hover:border-brand/40 transition-colors"
              >
                <Users size={15} strokeWidth={2} />
                For teams
              </Link>
            </div>
          </motion.div>
        </div>

        {/* PLATE */}
        <motion.div
          className="relative mt-16 lg:mt-24"
          style={reduce ? undefined : { y: plateY }}
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
        >
          <Plate
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=85"
            alt="Learners in a training session"
            className="h-[300px] sm:h-[420px] lg:h-[540px]"
            priority
          />

          {/* floating card — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="absolute -bottom-8 left-4 sm:left-8 bg-white rounded-[16px] ring-1 ring-brand/10 shadow-[0_24px_50px_-24px_rgba(1,56,119,0.4)] px-6 py-5 flex items-center gap-7"
          >
            {[
              { n: "06", l: "Programs" },
              { n: "24h", l: "Max CPD" },
              { n: "100%", l: "Online" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-[26px] text-brand leading-none tracking-[-0.03em]">
                  {s.n}
                </div>
                <div className="text-[11px] font-semibold text-brand/45 mt-1.5">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>

          {/* floating chip — top right */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            className="absolute -top-5 right-4 sm:right-8 bg-white rounded-full ring-1 ring-brand/10 shadow-lg px-5 py-3 flex items-center gap-2.5"
          >
            <Sparkles size={14} strokeWidth={2} className="text-mint" />
            <span className="text-[12px] font-bold text-brand">
              Nationally recognised training
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   2 — HOW IT WORKS — pinned, image swaps, all on white
   ═══════════════════════════════════════════════════════════ */

const steps = [
  {
    n: "01",
    title: "Choose your course",
    desc: "Browse programs written for real roles in disability, aged care and community services — each with duration, modules and CPD hours stated upfront.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85",
    points: ["Filter by sector", "CPD hours shown", "Enrol any time"],
  },
  {
    n: "02",
    title: "Study around your roster",
    desc: "Everything runs online in the learner portal. Start when it suits, pick up where you left off, and work at the pace your week allows.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85",
    points: ["Self-paced modules", "Any device", "Progress saved"],
  },
  {
    n: "03",
    title: "Evidence your development",
    desc: "Finish with a certificate and a clear record of CPD hours you can put in front of an employer or an auditor.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85",
    points: ["Certificate on completion", "CPD record", "Employer-ready"],
  },
];

export function StorySteps() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIndex(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  const header = (
    <div className="max-w-2xl">
      <Eyebrow>How it works</Eyebrow>
      <h2 className="font-serif text-[32px] lg:text-[46px] leading-[1.05] tracking-[-0.04em] text-brand mt-5">
        From choosing a course to proving the hours.
      </h2>
    </div>
  );

  if (reduce) {
    return (
      <section className="bg-white py-24 lg:py-32">
        <div className={SHELL}>
          {header}
          <div className="grid gap-8 lg:grid-cols-3 mt-16">
            {steps.map((s) => (
              <div key={s.n}>
                <Plate src={s.image} alt={s.title} className="h-[220px]" />
                <h3 className="font-serif text-[24px] text-brand mt-7 mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] text-brand/60 leading-[1.85]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[330vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className={SHELL}>
          {header}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-12 lg:mt-16">
            {/* IMAGE */}
            <div className="lg:col-span-7">
              <div className="relative h-[38vh] lg:h-[48vh] rounded-[20px] overflow-hidden ring-1 ring-brand/10 shadow-[0_30px_70px_-40px_rgba(1,56,119,0.45)] bg-ice">
                {steps.map((s, i) => (
                  <motion.div
                    key={s.n}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: i === index ? 1 : 0,
                      scale: i === index ? 1 : 1.03,
                    }}
                    transition={{ duration: 0.8, ease: EASE }}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover object-center"
                    />
                  </motion.div>
                ))}
              </div>

              {/* step rail under image */}
              <div className="flex items-center gap-3 mt-6">
                {steps.map((s, i) => (
                  <div key={s.n} className="flex items-center gap-3 flex-1">
                    <span
                      className={`text-[11px] font-bold tracking-[1px] transition-colors ${
                        i <= index ? "text-brand" : "text-brand/25"
                      }`}
                    >
                      {s.n}
                    </span>
                    <div className="relative h-[2px] flex-1 rounded-full bg-brand/10 overflow-hidden">
                      <motion.span
                        className="absolute inset-0 bg-brand origin-left rounded-full"
                        initial={false}
                        animate={{ scaleX: i <= index ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TEXT */}
            <div className="lg:col-span-5 relative min-h-[300px]">
              {steps.map((s, i) => {
                const on = i === index;
                return (
                  <motion.div
                    key={s.n}
                    className="absolute inset-0 flex flex-col justify-center"
                    initial={false}
                    animate={{ opacity: on ? 1 : 0, y: on ? 0 : 18 }}
                    transition={{ duration: 0.55, ease: EASE }}
                    style={{ pointerEvents: on ? "auto" : "none" }}
                  >
                    <h3 className="font-serif text-[28px] lg:text-[36px] leading-[1.1] tracking-[-0.035em] text-brand mb-5">
                      {s.title}
                    </h3>
                    <p className="text-[15px] font-medium text-brand/60 leading-[1.9] mb-8">
                      {s.desc}
                    </p>
                    <ul className="flex flex-col gap-3.5">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-3 text-[14px] font-semibold text-brand/75"
                        >
                          <CheckCircle2
                            size={16}
                            strokeWidth={2}
                            className="text-mint shrink-0"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
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

/* ═══════════════════════════════════════════════════════════
   3 — CATALOGUE — horizontal, light cards
   ═══════════════════════════════════════════════════════════ */

function GalleryCard({ course }: { course: Course }) {
  const Icon = course.icon;
  const available = course.status === "Available";

  return (
    <div className="group shrink-0 w-[78vw] sm:w-[368px] bg-white rounded-[20px] ring-1 ring-brand/10 overflow-hidden hover:ring-brand/25 hover:shadow-[0_30px_60px_-32px_rgba(1,56,119,0.4)] transition-all">
      <div className="relative aspect-[16/10] overflow-hidden bg-ice">
        <Image
          src={course.image}
          alt=""
          fill
          className={`object-cover transition-transform duration-[800ms] group-hover:scale-[1.04] ${
            available ? "" : "grayscale opacity-75"
          }`}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`text-[10px] font-bold tracking-[0.5px] px-3 py-1.5 rounded-full backdrop-blur-sm ${
              available ? "bg-white/95 text-brand" : "bg-white/85 text-brand/55"
            }`}
          >
            {course.status}
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-9 h-9 rounded-full bg-ice flex items-center justify-center text-mint">
            <Icon size={16} strokeWidth={1.8} />
          </span>
          <span className="text-[11px] font-semibold text-brand/40">
            {course.level}
          </span>
        </div>

        <h3 className="font-serif text-[23px] leading-[1.18] tracking-[-0.03em] text-brand mb-3.5">
          {course.title}
        </h3>
        <p className="text-[13.5px] font-medium text-brand/55 leading-[1.8] mb-7 min-h-[4.5rem]">
          {course.desc}
        </p>

        <div className="flex items-center gap-5 pb-6 mb-6 border-b border-brand/8 text-[12px] font-semibold text-brand/50">
          <span className="flex items-center gap-1.5">
            <Clock size={13} strokeWidth={2} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Layers size={13} strokeWidth={2} />
            {course.modules}
          </span>
          <span className="flex items-center gap-1.5">
            <Award size={13} strokeWidth={2} />
            {course.cpdHours}h CPD
          </span>
        </div>

        <Link
          href={available ? `/courses/${course.slug}` : "/contact"}
          className="group/btn inline-flex items-center gap-2 text-[13px] font-bold text-brand hover:text-mint transition-colors"
        >
          {available ? "View course" : "Register interest"}
          <ArrowRight
            size={15}
            strokeWidth={2.5}
            className="transition-transform group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

export function CourseGallery() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rawX = useTransform(scrollYProgress, [0, 1], ["2%", "-68%"]);
  const x = useSpring(rawX, { stiffness: 90, damping: 26, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  const header = (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-xl">
        <Eyebrow>The catalogue</Eyebrow>
        <h2 className="font-serif text-[32px] lg:text-[46px] leading-[1.05] tracking-[-0.04em] text-brand mt-5">
          Find the course that fits.
        </h2>
      </div>
      <Link
        href="/courses"
        className="group hidden sm:inline-flex items-center gap-2 text-[13px] font-bold text-brand border border-brand/15 rounded-full px-6 py-3.5 hover:border-brand/40 transition-colors"
      >
        All courses
        <ArrowUpRight
          size={15}
          strokeWidth={2.5}
          className="transition-transform group-hover:rotate-45"
        />
      </Link>
    </div>
  );

  if (reduce) {
    return (
      <section className="bg-cloud py-24 lg:py-32">
        <div className={SHELL}>
          {header}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
            {courses.map((c) => (
              <GalleryCard key={c.code} course={c} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[400vh] bg-cloud">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className={SHELL}>{header}</div>

        <motion.div
          className="flex gap-6 mt-12 pl-6 sm:pl-8 lg:pl-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))] items-stretch"
          style={{ x }}
        >
          {courses.map((c) => (
            <GalleryCard key={c.code} course={c} />
          ))}

          <div className="shrink-0 w-[78vw] sm:w-[368px] bg-white rounded-[20px] ring-1 ring-brand/10 p-8 flex flex-col justify-center">
            <Chip tone="gold">Need a hand?</Chip>
            <h3 className="font-serif text-[28px] text-brand leading-[1.12] tracking-[-0.03em] mt-5 mb-4">
              Not sure which one?
            </h3>
            <p className="text-[14px] font-medium text-brand/55 leading-[1.85] mb-8">
              Tell us the role you&apos;re in and we&apos;ll point you to the
              right starting point.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white text-[13px] font-bold py-4 rounded-full hover:bg-brand-dark transition-colors"
            >
              Talk to us
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </motion.div>

        <div className={`${SHELL} mt-12`}>
          <div className="h-[2px] rounded-full bg-brand/10 overflow-hidden">
            <motion.div
              className="h-full bg-brand origin-left rounded-full"
              style={{ scaleX: bar }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   4 — ORGANISATIONS — white, image plate + floating cards
   ═══════════════════════════════════════════════════════════ */

const orgPoints = [
  {
    icon: Building2,
    title: "Workforce training",
    desc: "Upskill a whole team on one plan, mapped to the roles they work in.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & standards",
    desc: "Keep your organisation audit-ready against sector obligations.",
  },
  {
    icon: BarChart3,
    title: "Progress & reporting",
    desc: "Track enrolments, completions and CPD hours across your staff.",
  },
];

export function OrganisationsBand() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32">
      <div className={SHELL}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* COPY */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-5"
          >
            <Eyebrow>For organisations</Eyebrow>
            <h2 className="font-serif text-[32px] lg:text-[46px] leading-[1.05] tracking-[-0.04em] text-brand mt-5 mb-6">
              Train your whole team, on one plan.
            </h2>
            <p className="text-[15px] font-medium text-brand/60 leading-[1.9] mb-10">
              Built for disability, aged care and community service providers
              who need their workforce trained, compliant and CPD-current.
            </p>

            <div className="flex flex-col divide-y divide-brand/8 border-y border-brand/8 mb-10">
              {orgPoints.map((o) => {
                const Icon = o.icon;
                return (
                  <div key={o.title} className="flex items-start gap-4 py-6">
                    <span className="w-10 h-10 rounded-full bg-ice flex items-center justify-center text-mint shrink-0">
                      <Icon size={17} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-brand mb-1.5">
                        {o.title}
                      </h3>
                      <p className="text-[13.5px] font-medium text-brand/55 leading-[1.8]">
                        {o.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/organisations"
              className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-7 py-4 rounded-full hover:bg-brand-dark transition-colors"
            >
              Team training
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
            className="lg:col-span-7 relative"
          >
            <div className="relative h-[380px] lg:h-[560px] rounded-[20px] overflow-hidden ring-1 ring-brand/10 shadow-[0_30px_70px_-40px_rgba(1,56,119,0.45)] bg-ice">
              <motion.div
                className="absolute -inset-y-10 inset-x-0"
                style={reduce ? undefined : { y: imgY }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=85"
                  alt="A team taking part in workplace training"
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
            </div>

            {/* floating completion card */}
            <div className="absolute -bottom-7 -left-4 sm:left-8 bg-white rounded-[16px] ring-1 ring-brand/10 shadow-[0_24px_50px_-24px_rgba(1,56,119,0.4)] px-6 py-5 w-[210px]">
              <div className="text-[11px] font-semibold text-brand/45 mb-2">
                Team completion
              </div>
              <div className="font-serif text-[32px] text-brand leading-none mb-3.5">
                86%
              </div>
              <div className="h-[5px] rounded-full bg-brand/10 overflow-hidden">
                <motion.div
                  className="h-full bg-mint rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0.86 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0.35, ease: EASE }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   5 — CLOSING CTA — tinted panel, not dark
   ═══════════════════════════════════════════════════════════ */

export function HomeCTA() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className={SHELL}>
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative rounded-[24px] bg-ice ring-1 ring-brand/10 overflow-hidden px-8 py-16 sm:px-14 lg:px-16 lg:py-20 text-center"
        >
          <div
            className="absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full bg-mint/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-28 -left-20 w-[380px] h-[380px] rounded-full bg-sky/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-2xl mx-auto">
            <Chip tone="mint">
              <Sparkles size={12} strokeWidth={2.5} />
              Start today
            </Chip>

            <h2 className="font-serif text-[34px] sm:text-[46px] lg:text-[58px] leading-[1.03] tracking-[-0.04em] text-brand mt-7">
              Your next qualification starts here.
            </h2>

            <p className="text-[15px] lg:text-[16px] font-medium text-brand/60 leading-[1.9] mt-6">
              Browse the catalogue, or talk to us about what your team needs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-11">
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors"
              >
                View courses
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand text-[13px] font-bold px-8 py-4 rounded-full ring-1 ring-brand/12 hover:ring-brand/35 transition-all"
              >
                Talk to us
              </Link>
            </div>

            <p className="text-[12.5px] font-medium text-brand/40 mt-8">
              Enrol any time — courses run online, all year round.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
