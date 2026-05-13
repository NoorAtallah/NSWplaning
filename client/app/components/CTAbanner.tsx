"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const people = [
  { src: "/1.png", alt: "Healthcare professional" },
  { src: "/2.png", alt: "Support worker" },
  { src: "/3.png", alt: "Care coordinator" },
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
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-4 sm:px-8 lg:px-14 py-8 lg:py-10">
      <div className="relative">

        {/* CURVED TOP */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden h-[60px] z-10">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C300,60 900,60 1200,0 L1200,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        {/* MAIN BANNER */}
        <div
          className="relative rounded-[24px] lg:rounded-[32px] overflow-hidden min-h-[280px] lg:min-h-[320px] flex flex-col lg:flex-row items-stretch"
          style={{ background: "linear-gradient(130deg, #013877 0%, #01518f 60%, #0270b5 100%)" }}
        >

          {/* DECORATIVE CIRCLES — desktop only */}
          <div className="hidden lg:block absolute top-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-white/5" />
          <div className="hidden lg:block absolute bottom-[-60px] right-[200px] w-[250px] h-[250px] rounded-full bg-[#6ac7ed]/15" />
          <div className="hidden lg:block absolute top-[20px] left-[280px] w-[180px] h-[180px] rounded-full bg-[#74c6b4]/10" />

          {/* WAVY ACCENT — desktop only */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[340px] opacity-10">
            <svg viewBox="0 0 340 320" preserveAspectRatio="none" className="w-full h-full">
              <path d="M340,0 C200,80 280,160 200,240 C140,300 60,310 0,320 L340,320 Z" fill="white" />
            </svg>
          </div>

          {/* DOTS — desktop only */}
          <div className="hidden lg:grid absolute bottom-6 left-[280px] grid-cols-6 gap-2.5 opacity-20">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
            ))}
          </div>

          {/* ── MOBILE LAYOUT ── */}
          <div className="flex lg:hidden flex-col p-6 pt-10 gap-6">

            {/* Person image — top on mobile, small */}
            <div className="flex justify-center">
              <div
                className="relative w-[140px] h-[180px]"
                style={{
                  opacity: fading ? 0 : 1,
                  transform: fading ? "translateY(8px)" : "translateY(0)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                <Image
                  src={people[current].src}
                  alt={people[current].alt}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#013877] to-transparent" />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#efc759]" />
                <span className="text-[10px] font-bold tracking-[2px] uppercase text-white/60">
                  NDIS Registered Provider
                </span>
              </div>

              <h2 className="font-serif text-[28px] sm:text-[34px] leading-[1.1] tracking-[-0.5px] text-white mb-6">
                Take the next step in your career and study with us!
              </h2>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://nswpm.com.au/contact/"
                  className="flex items-center justify-center gap-2 bg-[#efc759] text-[#013877] text-[13px] font-bold px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Enquire Now <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
                <Link
                  href="https://nswpm.com.au/courses/"
                  className="flex items-center justify-center gap-2 bg-white/10 text-white text-[13px] font-bold px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Browse Courses
                </Link>
              </div>
            </div>

            {/* Stats — horizontal row on mobile */}
            <div className="flex items-center justify-between border-t border-white/10 pt-5">
              <div className="text-center">
                <div className="font-serif text-[28px] text-[#efc759] leading-none">25+</div>
                <div className="text-[10px] font-bold tracking-[1px] uppercase text-white/50 mt-1">Years</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="font-serif text-[28px] text-white leading-none">500+</div>
                <div className="text-[10px] font-bold tracking-[1px] uppercase text-white/50 mt-1">Graduates</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="font-serif text-[28px] text-[#74c6b4] leading-none">100%</div>
                <div className="text-[10px] font-bold tracking-[1px] uppercase text-white/50 mt-1">Online</div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 pb-2">
              {people.map((_, i) => (
                <button
                  key={i}
                  suppressHydrationWarning
                  onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-[#efc759]" : "w-2 h-2 bg-white/30"}`}
                />
              ))}
            </div>
          </div>

          {/* ── DESKTOP LAYOUT ── */}
          {/* PERSON IMAGE */}
          <div className="hidden lg:block relative z-10 shrink-0 w-[240px] self-end">
            <div
              className="relative w-[240px] h-[310px]"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <Image
                src={people[current].src}
                alt={people[current].alt}
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#013877] to-transparent" />
            </div>
          </div>

          {/* TEXT + CTA — desktop */}
          <div className="hidden lg:flex relative z-10 flex-1 flex-col justify-center px-10 py-12">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#efc759]" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/60">
                NDIS Registered Provider
              </span>
            </div>

            <h2 className="font-serif text-[44px] lg:text-[52px] leading-[1.08] tracking-[-1px] text-white max-w-[540px] mb-8">
              Take the next step in your career and study with us!
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://nswpm.com.au/contact/"
                className="flex items-center gap-3 bg-[#efc759] text-[#013877] text-[14px] font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
              >
                Enquire Now <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="https://nswpm.com.au/courses/"
                className="flex items-center gap-3 bg-white/10 text-white text-[14px] font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Browse Courses
              </Link>
            </div>
          </div>

          {/* STATS — desktop */}
          <div className="hidden lg:flex relative z-10 shrink-0 flex-col justify-center gap-0 pr-14 pl-6 border-l border-white/10">
            <div className="py-7 border-b border-white/10">
              <div className="font-serif text-[42px] text-[#efc759] leading-none">25+</div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mt-1">Years Experience</div>
            </div>
            <div className="py-7 border-b border-white/10">
              <div className="font-serif text-[42px] text-white leading-none">500+</div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mt-1">Graduates</div>
            </div>
            <div className="py-7">
              <div className="font-serif text-[42px] text-[#74c6b4] leading-none">100%</div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mt-1">Online</div>
            </div>
          </div>

        </div>

        {/* CURVED BOTTOM */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-[50px] z-10">
          <svg viewBox="0 0 1200 50" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,50 C300,0 900,0 1200,50 L1200,50 L0,50 Z" fill="white" />
          </svg>
        </div>

        {/* DOT INDICATORS — desktop */}
        <div className="hidden lg:flex absolute bottom-8 left-[260px] gap-2 z-20">
          {people.map((_, i) => (
            <button
              key={i}
              suppressHydrationWarning
              onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-[#efc759]" : "w-2 h-2 bg-white/30"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}