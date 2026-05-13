"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const people = [
  {
    src: "./1.png",
    alt: "Healthcare professional",
  },
  {
    src: "./2.png",
    alt: "Support worker",
  },
  {
    src: "./3.png",
    alt: "Care coordinator",
  },
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
    <section className="bg-white px-14 py-10">

      {/* OUTER WRAPPER — curved white cutout at top */}
      <div className="relative">

        {/* CURVED TOP SHAPE */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden h-[60px] z-10">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C300,60 900,60 1200,0 L1200,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        {/* MAIN BANNER */}
        <div
          className="relative rounded-[32px] overflow-hidden min-h-[320px] flex items-stretch"
          style={{ background: "linear-gradient(130deg, #013877 0%, #01518f 60%, #0270b5 100%)" }}
        >

          {/* DECORATIVE CIRCLES */}
          <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-white/5" />
          <div className="absolute bottom-[-60px] right-[200px] w-[250px] h-[250px] rounded-full bg-[#6ac7ed]/15" />
          <div className="absolute top-[20px] left-[280px] w-[180px] h-[180px] rounded-full bg-[#74c6b4]/10" />

          {/* WAVY RIGHT ACCENT */}
          <div className="absolute right-0 top-0 bottom-0 w-[340px] opacity-10">
            <svg viewBox="0 0 340 320" preserveAspectRatio="none" className="w-full h-full">
              <path d="M340,0 C200,80 280,160 200,240 C140,300 60,310 0,320 L340,320 Z" fill="white" />
            </svg>
          </div>

          {/* DOTS PATTERN */}
          <div className="absolute bottom-6 left-[280px] grid grid-cols-6 gap-2.5 opacity-20">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
            ))}
          </div>

          {/* PERSON IMAGE — cutout anchored bottom-left */}
          <div className="relative z-10 shrink-0 w-[240px] self-end">
            <div
              className="relative w-[240px] h-[310px]"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <img
                src={people[current].src}
                alt={people[current].alt}
               
                className="object-cover object-top"
              
              />
              {/* bottom fade blend */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#013877] to-transparent" />
            </div>
          </div>

          {/* TEXT + CTA */}
          <div className="relative z-10 flex flex-1 flex-col justify-center px-10 py-12">

            {/* EYEBROW */}
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
                Enquire Now
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="https://nswpm.com.au/courses/"
                className="flex items-center gap-3 bg-white/10 text-white text-[14px] font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Browse Courses
              </Link>
            </div>

          </div>

          {/* RIGHT STAT BLOCK */}
          <div className="relative z-10 shrink-0 flex flex-col justify-center gap-0 pr-14 pl-6 border-l border-white/10">
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

        {/* CURVED BOTTOM SHAPE */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-[50px] z-10">
          <svg viewBox="0 0 1200 50" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,50 C300,0 900,0 1200,50 L1200,50 L0,50 Z" fill="white" />
          </svg>
        </div>

        {/* DOT INDICATORS */}
        <div className="absolute bottom-8 left-[260px] flex gap-2 z-20">
          {people.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFading(true);
                setTimeout(() => { setCurrent(i); setFading(false); }, 400);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 h-2 bg-[#efc759]" : "w-2 h-2 bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}