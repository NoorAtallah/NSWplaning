"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Phone, Calendar, Sparkles } from "lucide-react";

const people = [
  { src: "/1.png", alt: "Healthcare professional", role: "Support Worker" },
  { src: "/2.png", alt: "Support worker", role: "Care Coordinator" },
  { src: "/3.png", alt: "Care coordinator", role: "Plan Manager" },
];

export default function CTABanner() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % people.length);
        setFading(false);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(i);
      setFading(false);
    }, 400);
  };

  return (
    <section className="bg-white px-4 sm:px-8 lg:px-14 py-12 lg:py-16">
      {/* MARQUEE STRIP — above the ticket */}
      <div className="max-w-[1280px] mx-auto mb-6 overflow-hidden border-y border-[#013877]/10 py-3">
        <div className="flex items-center gap-10 animate-[scroll_35s_linear_infinite] whitespace-nowrap">
          {[...Array(3)].map((_, dupe) => (
            <div key={dupe} className="flex items-center gap-10 shrink-0">
              {[
                "Now Enrolling",
                "Certificate III · Individual Support",
                "100% Online",
                "Nationally Recognised",
                "NDIS Registered",
                "Self-Paced Study",
                "Funded Pathways Available",
              ].map((txt, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0">
                  <Sparkles
                    size={12}
                    strokeWidth={2}
                    className="text-[#efc759]"
                  />
                  <span className="font-mono text-[11px] font-bold tracking-[2.5px] uppercase text-[#013877]/55">
                    {txt}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* TICKET CONTAINER */}
      <div className="relative max-w-[1280px] mx-auto">
        {/* TICKET — split panel layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[420px_1fr_220px] overflow-hidden rounded-[20px] bg-white shadow-2xl shadow-[#013877]/15 ring-1 ring-[#013877]/8 min-h-[460px]">
          {/* ============== LEFT PANEL — PHOTO ============== */}
          <div className="relative bg-[#013877] overflow-hidden min-h-[280px] lg:min-h-full">
            {/* GRID TEXTURE */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* PERSON PHOTO */}
            <div
              className="absolute inset-0"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "scale(1.02)" : "scale(1)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <Image
                src={people[current].src}
                alt={people[current].alt}
                fill
                className="object-cover object-top"
              />
              {/* GRADIENT WASH */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#013877] via-[#013877]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#013877]/60" />
            </div>

            {/* TOP CORNER — FIG LABEL */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#74c6b4] opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#74c6b4]" />
              </span>
              <span className="font-mono text-[9px] font-bold tracking-[2px] uppercase text-[#013877]">
                Live · Enrolling
              </span>
            </div>

            {/* TOP RIGHT — TILTED STAMP */}
            <div className="absolute top-5 right-5 z-10 rotate-[12deg]">
              <div className="relative w-[78px] h-[78px] rounded-full bg-[#efc759] flex flex-col items-center justify-center shadow-lg">
                <span className="font-serif text-[22px] text-[#013877] leading-none">
                  25
                </span>
                <span className="font-mono text-[7px] font-bold tracking-[1.5px] uppercase text-[#013877]/75 mt-0.5">
                  Years
                </span>
                <span className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#013877]/25 scale-[0.86]" />
              </div>
            </div>

            {/* BOTTOM — ROLE CAPTION */}
            <div
              className="absolute bottom-5 left-5 right-5 z-10"
              style={{
                opacity: fading ? 0 : 1,
                transition: "opacity 0.4s ease",
              }}
            >
              <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-white/55 block mb-1">
                Career Path
              </span>
              <div className="font-serif text-[24px] lg:text-[26px] text-white leading-tight tracking-[-0.5px]">
                {people[current].role}
              </div>
            </div>
          </div>

          {/* ============== PERFORATION (vertical dashed line) ============== */}
          <div className="hidden lg:block absolute left-[420px] top-8 bottom-8 w-px border-l-2 border-dashed border-[#013877]/12 z-10" />

          {/* TICKET PUNCH HOLES — top & bottom of perforation */}
          <div className="hidden lg:block absolute left-[420px] -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-white shadow-inner ring-1 ring-[#013877]/8 z-10" />
          <div className="hidden lg:block absolute left-[420px] -translate-x-1/2 -bottom-3 w-6 h-6 rounded-full bg-white shadow-inner ring-1 ring-[#013877]/8 z-10" />

          {/* ============== MIDDLE PANEL — CONTENT ============== */}
          <div className="relative flex flex-col justify-between p-7 lg:p-10 bg-white">
            {/* TOP META */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold tracking-[2px] text-[#013877]/40">
                  REF
                </span>
                <span className="font-mono text-[11px] font-bold tracking-[1.5px] text-[#013877]">
                  NSW-2025-CR
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#013877]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#efc759]" />
                <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase">
                  NDIS Registered
                </span>
              </div>
            </div>

            {/* MAIN HEADLINE */}
            <div className="mb-7">
              <span className="font-mono text-[10px] font-bold tracking-[3px] uppercase text-[#74c6b4] block mb-3">
                / Next intake — opening now
              </span>
              <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[50px] leading-[1] tracking-[-1.5px] text-[#013877]">
                Take the next step in your{" "}
                <span className="italic text-[#013877]/70">career</span>.
              </h2>
              <p className="text-[14px] lg:text-[15px] font-medium text-[#013877]/55 leading-[1.75] mt-4 max-w-[480px]">
                Nationally recognised, fully online courses for support workers
                and healthcare professionals across Australia.
              </p>
            </div>

            {/* ACTIONS ROW */}
            <div className="flex flex-col sm:flex-row sm:items-stretch gap-3 mb-6">
              <Link
                href="https://nswpm.com.au/contact/"
                className="group relative flex items-center justify-between gap-3 bg-[#013877] text-white text-[13px] font-bold tracking-[1px] uppercase px-6 py-4 rounded-xl hover:bg-[#012a5a] transition-all shadow-lg shadow-[#013877]/20 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar size={15} strokeWidth={2.5} />
                  Enquire Now
                </span>
                <span className="relative z-10 w-7 h-7 rounded-full bg-[#efc759] flex items-center justify-center text-[#013877] group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              <Link
                href="https://nswpm.com.au/courses/"
                className="group flex items-center justify-between gap-3 bg-white text-[#013877] text-[13px] font-bold tracking-[1px] uppercase px-6 py-4 rounded-xl ring-1 ring-[#013877]/15 hover:ring-[#013877]/40 transition-all"
              >
                Browse Courses
                <span className="w-7 h-7 rounded-full bg-[#013877]/5 flex items-center justify-center text-[10px] group-hover:bg-[#efc759] transition-colors">
                  →
                </span>
              </Link>

              {/* PHONE QUICK LINK */}
              <a
                href="tel:+61000000000"
                className="hidden sm:flex items-center justify-center gap-2 text-[#013877]/70 hover:text-[#013877] transition-colors px-4 group"
              >
                <div className="w-10 h-10 rounded-full ring-1 ring-[#013877]/15 flex items-center justify-center group-hover:ring-[#013877]/40 group-hover:bg-[#eaf6fd] transition-all">
                  <Phone size={14} strokeWidth={2.2} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-mono text-[9px] font-bold tracking-[2px] uppercase text-[#013877]/40 leading-none">
                    Or call
                  </span>
                  <span className="font-mono text-[12px] font-bold text-[#013877] leading-none mt-1">
                    (02) 0000
                  </span>
                </div>
              </a>
            </div>

            {/* PERSON SELECTOR — bottom row */}
            <div className="flex items-center justify-between pt-5 border-t border-[#013877]/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-[#013877]/40">
                  Meet our
                </span>
                <div className="flex gap-2">
                  {people.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      suppressHydrationWarning
                      className={`relative w-9 h-9 rounded-full overflow-hidden transition-all ${
                        i === current
                          ? "ring-2 ring-[#efc759] ring-offset-2 ring-offset-white scale-110"
                          : "ring-1 ring-[#013877]/20 hover:ring-[#013877]/50 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        className="object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-1.5">
                {people.map((_, i) => (
                  <span
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 h-1.5 bg-[#013877]"
                        : "w-1.5 h-1.5 bg-[#013877]/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ============== PERFORATION between middle & right ============== */}
          <div className="hidden lg:block absolute right-[220px] top-8 bottom-8 w-px border-l-2 border-dashed border-[#013877]/12 z-10" />
          <div className="hidden lg:block absolute right-[220px] translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-white shadow-inner ring-1 ring-[#013877]/8 z-10" />
          <div className="hidden lg:block absolute right-[220px] translate-x-1/2 -bottom-3 w-6 h-6 rounded-full bg-white shadow-inner ring-1 ring-[#013877]/8 z-10" />

          {/* ============== RIGHT STUB — STATS ============== */}
          <div
            className="hidden lg:flex flex-col justify-between p-7 lg:p-8"
            style={{
              background:
                "linear-gradient(180deg, #eaf6fd 0%, #fdf8ed 100%)",
            }}
          >
            {/* HEADER */}
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-[#013877]/45 block mb-1">
                The numbers
              </span>
              <span className="font-serif italic text-[16px] text-[#013877]/70">
                at a glance
              </span>
            </div>

            {/* STATS — vertical, no boxy borders */}
            <div className="flex flex-col gap-5 py-5">
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-[40px] text-[#013877] leading-none">
                    25
                  </span>
                  <span className="font-serif text-[20px] text-[#efc759] leading-none">
                    +
                  </span>
                </div>
                <span className="font-mono text-[9px] font-bold tracking-[2px] uppercase text-[#013877]/45 mt-1.5 block">
                  Years experience
                </span>
              </div>

              <div className="h-px bg-[#013877]/8" />

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-[40px] text-[#013877] leading-none">
                    500
                  </span>
                  <span className="font-serif text-[20px] text-[#74c6b4] leading-none">
                    +
                  </span>
                </div>
                <span className="font-mono text-[9px] font-bold tracking-[2px] uppercase text-[#013877]/45 mt-1.5 block">
                  Graduates
                </span>
              </div>

              <div className="h-px bg-[#013877]/8" />

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-[40px] text-[#013877] leading-none">
                    100
                  </span>
                  <span className="font-serif text-[20px] text-[#6ac7ed] leading-none">
                    %
                  </span>
                </div>
                <span className="font-mono text-[9px] font-bold tracking-[2px] uppercase text-[#013877]/45 mt-1.5 block">
                  Fully online
                </span>
              </div>
            </div>

            {/* BARCODE-LIKE DECO */}
            <div className="flex items-end gap-[2px] h-6 opacity-40">
              {[3, 5, 2, 6, 3, 4, 5, 2, 3, 6, 4, 2, 5, 3, 6, 2, 4, 3, 5, 2, 6, 4].map(
                (h, i) => (
                  <span
                    key={i}
                    className="w-[2px] bg-[#013877]"
                    style={{ height: `${h * 4}px` }}
                  />
                )
              )}
            </div>
          </div>

          {/* MOBILE STATS — only visible below lg */}
          <div className="lg:hidden grid grid-cols-3 px-7 pb-7 -mt-2 gap-4">
            <div className="text-left">
              <div className="font-serif text-[26px] text-[#013877] leading-none">
                25<span className="text-[#efc759]">+</span>
              </div>
              <div className="font-mono text-[9px] font-bold tracking-[1.5px] uppercase text-[#013877]/45 mt-1.5">
                Years
              </div>
            </div>
            <div className="text-left border-l border-[#013877]/10 pl-4">
              <div className="font-serif text-[26px] text-[#013877] leading-none">
                500<span className="text-[#74c6b4]">+</span>
              </div>
              <div className="font-mono text-[9px] font-bold tracking-[1.5px] uppercase text-[#013877]/45 mt-1.5">
                Graduates
              </div>
            </div>
            <div className="text-left border-l border-[#013877]/10 pl-4">
              <div className="font-serif text-[26px] text-[#013877] leading-none">
                100<span className="text-[#6ac7ed]">%</span>
              </div>
              <div className="font-mono text-[9px] font-bold tracking-[1.5px] uppercase text-[#013877]/45 mt-1.5">
                Online
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CAPTION ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 px-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-[#013877]/40">
              Issued by
            </span>
            <span className="font-serif italic text-[14px] text-[#013877]">
              NSWPM Care Academy
            </span>
          </div>
          <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-[#013877]/40">
            Bankstown · NSW · EST 2019
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}