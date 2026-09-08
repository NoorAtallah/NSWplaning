"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Star,
  Clock,
  Award,
  Users,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const IMG = {
  class:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85",
  desk: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=85",
  care: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=85",
  study:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85",
  grad: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85",
};

/* ══════════════════════════════════════════════════════
   CONCEPT 1 — CINEMATIC
   Full-bleed image, heavy dark wash, oversized type,
   glass stat rail, ticker along the floor.
   ══════════════════════════════════════════════════════ */

export function ConceptCinematic() {
  const ticker = [
    "NDIS & Disability",
    "Aged Care",
    "Health & Safety",
    "Compliance",
    "Professional Development",
  ];

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-brand">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <Image src={IMG.desk} alt="" fill priority className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-brand/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/50 to-brand/20" />

      {/* type */}
      <div className="relative h-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-end pb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-[2px] w-14 bg-gold" />
          <span className="text-[11px] font-bold tracking-[4px] uppercase text-gold">
            NSWPM Academy
          </span>
        </motion.div>

        <h1 className="font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.05em] text-white max-w-[15ch]">
          {["Train.", "Qualify.", "Lead."].map((w, i) => (
            <span key={w} className="inline-block overflow-hidden mr-[0.22em]">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease: EASE }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
          className="flex flex-wrap items-center gap-4 mt-12"
        >
          <button className="group inline-flex items-center gap-3 bg-gold text-brand text-[13px] font-bold tracking-[1px] uppercase px-9 py-5 rounded-full">
            Browse courses
            <ArrowRight
              size={17}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <button className="inline-flex items-center gap-3 text-white text-[13px] font-bold tracking-[1px] uppercase px-7 py-5 rounded-full border border-white/25 backdrop-blur-sm">
            <Play size={15} strokeWidth={2.5} />
            Watch the intro
          </button>
        </motion.div>
      </div>

      {/* glass rail */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: EASE }}
        className="hidden lg:flex absolute top-1/2 right-14 -translate-y-1/2 flex-col gap-px bg-white/15 rounded-2xl overflow-hidden backdrop-blur-xl"
      >
        {[
          { n: "06", l: "Programs" },
          { n: "24h", l: "Max CPD" },
          { n: "100%", l: "Online" },
        ].map((s) => (
          <div key={s.l} className="bg-white/10 px-8 py-6 w-[170px]">
            <div className="font-serif text-[38px] text-white leading-none">
              {s.n}
            </div>
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-white/50 mt-2">
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ticker */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/15 bg-brand/60 backdrop-blur-sm py-5 overflow-hidden">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-12 shrink-0">
              <span className="text-[13px] font-bold tracking-[3px] uppercase text-white/70">
                {t}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   CONCEPT 2 — COLLAGE
   Warm cream ground, type in the middle, photographs
   scattered and rotated around it. Busy, editorial, alive.
   ══════════════════════════════════════════════════════ */

export function ConceptCollage() {
  const shots = [
    { src: IMG.care, cls: "top-[12%] left-[3%] w-[190px] h-[250px] -rotate-6", d: 0.5 },
    { src: IMG.study, cls: "top-[8%] right-[6%] w-[220px] h-[160px] rotate-3", d: 0.65 },
    { src: IMG.grad, cls: "bottom-[10%] left-[10%] w-[210px] h-[150px] rotate-2", d: 0.8 },
    { src: IMG.class, cls: "bottom-[14%] right-[4%] w-[200px] h-[260px] -rotate-3", d: 0.95 },
  ];

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-sand">
      {/* colour fields */}
      <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-mint/30 blur-[90px]" />
      <div className="absolute -bottom-40 -right-24 w-[520px] h-[520px] rounded-full bg-sky/25 blur-[90px]" />

      {/* photos */}
      {shots.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute ${s.cls} rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white hidden md:block`}
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: s.d, ease: EASE }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
        >
          <Image src={s.src} alt="" fill className="object-cover" />
        </motion.div>
      ))}

      {/* centre type */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-brand text-white text-[11px] font-bold tracking-[2px] uppercase px-5 py-2.5 rounded-full mb-9"
        >
          <Star size={12} strokeWidth={2.5} className="text-gold" />
          Nationally recognised training
        </motion.span>

        <h1 className="font-serif text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.05em] text-brand max-w-[13ch]">
          {["The", "career", "you want", "starts", "here."].map((w, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: EASE }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="text-[16px] font-medium text-brand/60 leading-[1.8] max-w-md mt-9"
        >
          Courses and CPD for the NDIS, disability, aged care and community
          services workforce.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-11"
        >
          <button className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-9 py-4.5 rounded-full">
            Browse courses
            <ArrowRight
              size={16}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <button className="inline-flex items-center gap-2 bg-white text-brand text-[13px] font-bold px-8 py-4.5 rounded-full ring-1 ring-brand/12">
            For teams
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   CONCEPT 3 — SPLIT FIELD
   Solid colour block against a full-height photograph,
   with a card crossing the seam.
   ══════════════════════════════════════════════════════ */

export function ConceptSplit() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-white">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[46%_54%]">
        {/* colour field */}
        <motion.div
          className="relative bg-brand flex items-center"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="relative px-8 sm:px-14 lg:px-16 py-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-3 mb-9"
            >
              <span className="h-[2px] w-10 bg-gold" />
              <span className="text-[11px] font-bold tracking-[3px] uppercase text-gold">
                Now enrolling
              </span>
            </motion.div>

            <h1 className="font-serif text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.05em] text-white">
              {["Training", "for the", "people who", "care."].map((w, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.75 + i * 0.09,
                      ease: EASE,
                    }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.9 }}
              className="text-[15px] font-medium text-white/60 leading-[1.85] max-w-sm mt-9"
            >
              Nationally recognised courses and CPD, delivered online for the
              NDIS, aged care and community services workforce.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.9 }}
              className="group inline-flex items-center gap-3 bg-gold text-brand text-[13px] font-bold tracking-[0.5px] px-9 py-5 rounded-full mt-11"
            >
              Browse courses
              <ArrowRight
                size={17}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* photograph */}
        <motion.div
          className="relative hidden lg:block overflow-hidden"
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1.3, delay: 0.25, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: EASE }}
          >
            <Image src={IMG.class} alt="" fill priority className="object-cover" />
          </motion.div>
        </motion.div>
      </div>

      {/* card crossing the seam */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: EASE }}
        className="hidden lg:flex absolute bottom-14 left-[46%] -translate-x-1/2 bg-white rounded-2xl shadow-[0_30px_70px_-25px_rgba(0,0,0,0.45)] divide-x divide-brand/10"
      >
        {[
          { icon: Clock, n: "4–12", l: "Weeks" },
          { icon: Award, n: "24h", l: "Max CPD" },
          { icon: Users, n: "06", l: "Programs" },
        ].map((s) => {
          const I = s.icon;
          return (
            <div key={s.l} className="px-9 py-6 flex items-center gap-4">
              <I size={19} strokeWidth={1.8} className="text-mint" />
              <div>
                <div className="font-serif text-[24px] text-brand leading-none">
                  {s.n}
                </div>
                <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand/40 mt-1.5">
                  {s.l}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   CONCEPT 4 — MOSAIC
   The whole viewport is a grid of tiles: type, photos,
   numbers, actions. Dense and graphic.
   ══════════════════════════════════════════════════════ */

export function ConceptMosaic() {
  const tile = "rounded-[20px] overflow-hidden relative";
  const rise = (d: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: d, ease: EASE },
  });

  return (
    <section className="relative min-h-screen bg-cloud p-4 sm:p-5 pt-24">
      <div className="grid grid-cols-4 lg:grid-cols-6 auto-rows-[minmax(120px,14vh)] gap-4 sm:gap-5 max-w-[1500px] mx-auto">
        {/* headline tile */}
        <motion.div
          {...rise(0.05)}
          className={`${tile} col-span-4 row-span-3 bg-brand p-8 sm:p-12 flex flex-col justify-between`}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <span className="relative text-[11px] font-bold tracking-[3px] uppercase text-gold">
            NSWPM Academy
          </span>
          <h1 className="relative font-serif text-[clamp(2.2rem,5.5vw,5rem)] leading-[0.94] tracking-[-0.05em] text-white">
            {["Training", "that moves", "careers forward."].map((l, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: EASE }}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        {/* photo tall */}
        <motion.div {...rise(0.15)} className={`${tile} col-span-2 row-span-3`}>
          <Image src={IMG.class} alt="" fill priority className="object-cover" />
        </motion.div>

        {/* stat tiles */}
        <motion.div
          {...rise(0.25)}
          className={`${tile} col-span-2 lg:col-span-1 row-span-1 bg-gold flex flex-col justify-center px-6`}
        >
          <div className="font-serif text-[34px] text-brand leading-none">06</div>
          <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-brand/60 mt-1.5">
            Programs
          </div>
        </motion.div>

        <motion.div
          {...rise(0.32)}
          className={`${tile} col-span-2 lg:col-span-1 row-span-1 bg-mint flex flex-col justify-center px-6`}
        >
          <div className="font-serif text-[34px] text-white leading-none">24h</div>
          <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/70 mt-1.5">
            Max CPD
          </div>
        </motion.div>

        {/* photo wide */}
        <motion.div {...rise(0.4)} className={`${tile} col-span-4 lg:col-span-2 row-span-2`}>
          <Image src={IMG.study} alt="" fill className="object-cover" />
        </motion.div>

        {/* copy tile */}
        <motion.div
          {...rise(0.48)}
          className={`${tile} col-span-4 lg:col-span-2 row-span-2 bg-white ring-1 ring-brand/10 p-7 flex flex-col justify-center`}
        >
          <p className="text-[15px] font-medium text-brand/65 leading-[1.85]">
            Nationally recognised courses and CPD for the NDIS, disability, aged
            care and community services workforce.
          </p>
        </motion.div>

        {/* cta tile */}
        <motion.div
          {...rise(0.56)}
          className={`${tile} col-span-4 lg:col-span-2 row-span-2 bg-white ring-1 ring-brand/10 p-7 flex flex-col justify-between`}
        >
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-brand/40">
            Start here
          </span>
          <div className="flex flex-col gap-2.5">
            <button className="flex items-center justify-between gap-2 bg-brand text-white text-[13px] font-bold px-6 py-4 rounded-full">
              Browse courses
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
            <button className="flex items-center justify-between gap-2 text-brand text-[13px] font-bold px-6 py-4 rounded-full ring-1 ring-brand/12">
              For teams
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
