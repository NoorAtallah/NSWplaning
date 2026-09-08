"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Shared motion primitives.
 * All animation on this site goes through Framer Motion — no CSS keyframes.
 * Every component here respects prefers-reduced-motion.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type Dir = "up" | "down" | "left" | "right" | "none";

const offset: Record<Dir, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

/** Fade + slide in when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Dir;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const o = reduce ? offset.none : offset[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...o }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its <StaggerItem> children. */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.09,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
  once?: boolean;
}) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Dir;
}) {
  const reduce = useReducedMotion();
  const o = reduce ? offset.none : offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...o },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.65, ease: EASE },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

/** Lifts and brightens on hover — for cards. */
export function LiftCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Words fly up one by one — for page headings.
 * `highlight` takes the plain word(s) to style differently; pass strings, not
 * functions, so this stays usable from server components.
 */
export function AnimatedHeading({
  text,
  className,
  highlight,
  highlightClassName = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  highlight?: string | string[];
  highlightClassName?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const targets = (
    highlight === undefined ? [] : Array.isArray(highlight) ? highlight : [highlight]
  ).map((w) => w.toLowerCase());

  const bare = (w: string) => w.replace(/[^\p{L}\p{N}'-]/gu, "").toLowerCase();

  return (
    <motion.h1
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
      }}
      initial="hidden"
      animate="show"
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className={`inline-block overflow-hidden pb-[0.12em] align-bottom ${
            i < words.length - 1 ? "mr-[0.26em]" : ""
          }`}
        >
          <motion.span
            className={`inline-block ${
              targets.includes(bare(w)) ? highlightClassName : ""
            }`}
            variants={{
              hidden: { y: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.75, ease: EASE },
              },
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

/** Slow drifting blobs for section backgrounds. */
export function AmbientBlobs({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const reduce = useReducedMotion();
  const a = tone === "dark" ? "bg-sky/20" : "bg-mint/25";
  const b = tone === "dark" ? "bg-mint/15" : "bg-sky/20";
  const c = tone === "dark" ? "bg-gold/10" : "bg-gold/20";

  const float = (dx: number, dy: number, s: number) =>
    reduce
      ? {}
      : {
          animate: { x: [0, dx, 0], y: [0, dy, 0], scale: [1, s, 1] },
          transition: {
            duration: 18 + Math.abs(dx) / 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className={`absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full ${a} blur-3xl`}
        {...float(-60, 40, 1.08)}
      />
      <motion.div
        className={`absolute -bottom-40 -left-28 w-[460px] h-[460px] rounded-full ${b} blur-3xl`}
        {...float(70, -50, 1.12)}
      />
      <motion.div
        className={`absolute top-1/3 left-1/2 w-[380px] h-[380px] rounded-full ${c} blur-3xl`}
        {...float(-50, -70, 1.06)}
      />
    </div>
  );
}

/** Counts up to a number when scrolled into view. */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  className,
  duration = 1.8,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
