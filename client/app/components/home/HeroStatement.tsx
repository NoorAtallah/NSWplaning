"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * HERO — "Care work is skilled work."
 *
 * A wall of photographs drifts vertically behind a warm veil. The statement
 * sits on top, and one word is filled with a live photograph rather than
 * painted a colour. As you scroll the veil lifts and the wall comes forward.
 */

const columns = [
  [
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  ],
];

const FILL_IMAGE =
  "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=85";

function Column({
  images,
  duration,
  reverse,
  reduce,
}: {
  images: string[];
  duration: number;
  reverse?: boolean;
  reduce: boolean;
}) {
  const loop = [...images, ...images];
  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-4 absolute inset-x-0"
        animate={
          reduce
            ? undefined
            : { y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-[38vh] rounded-[14px] overflow-hidden bg-ice"
          >
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function HeroStatement() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // the veil lifts, the wall comes forward, the words part
  const veil = useTransform(scrollYProgress, [0, 0.85], [0.62, 0.3]);
  const wallScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const typeY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const typeFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] overflow-hidden bg-ice"
    >
      {/* PHOTO WALL */}
      <motion.div
        className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4"
        style={reduce ? undefined : { scale: wallScale }}
      >
        <Column images={columns[0]} duration={46} reduce={reduce} />
        <Column images={columns[1]} duration={58} reverse reduce={reduce} />
        <Column images={columns[2]} duration={52} reduce={reduce} />
        <div className="hidden lg:block h-full">
          <Column images={columns[3]} duration={64} reverse reduce={reduce} />
        </div>
      </motion.div>

      {/* VEIL */}
      <motion.div
        className="absolute inset-0 bg-ice"
        style={reduce ? { opacity: 0.72 } : { opacity: veil }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ice/90 via-transparent to-ice"
        aria-hidden="true"
      />

      {/* readability scrim behind the words only */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ice via-ice/75 to-transparent"
        aria-hidden="true"
      />

      {/* STATEMENT */}
      <motion.div
        className="relative h-full flex flex-col justify-center max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10"
        style={reduce ? undefined : { y: typeY, opacity: typeFade }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-3 mb-9"
        >
          <span className="h-[2px] w-12 bg-gold" />
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-brand/60">
            NSWPM Academy
          </span>
        </motion.div>

        <h1 className="font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.88] tracking-[-0.055em] text-brand">
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span
              className="block"
              initial={{ y: reduce ? 0 : "112%", opacity: reduce ? 0 : 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
            >
              Care work is
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span
              className="block"
              initial={{ y: reduce ? 0 : "112%", opacity: reduce ? 0 : 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.38, ease: EASE }}
            >
              {/* the word is filled with a photograph */}
              <span
                className="bg-clip-text text-transparent bg-cover bg-center"
                style={{ backgroundImage: `url(${FILL_IMAGE})` }}
              >
                skilled
              </span>{" "}
              work.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-14 mt-14 max-w-4xl"
        >
          <p className="text-[16px] lg:text-[18px] font-medium text-brand/70 leading-[1.8] max-w-md">
            We train the people who do it — nationally recognised courses and
            CPD for the NDIS, disability, aged care and community services
            workforce.
          </p>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-8 py-4.5 rounded-full hover:bg-brand-dark transition-colors"
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
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-brand text-[13px] font-bold px-7 py-4.5 rounded-full ring-1 ring-brand/12 hover:ring-brand/35 transition-all"
            >
              <Users size={15} strokeWidth={2} />
              For teams
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
