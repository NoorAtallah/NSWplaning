"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Clock,
  Wifi,
  Search,
  GraduationCap,
  ChevronRight,
  Award,
} from "lucide-react";

type Course = {
  code: string;
  title: string;
  desc: string;
  image: string;
  status: "Available" | "Coming Soon";
  accentColor: string;
  href: string;
  duration: string;
  modules: number;
  level: string;
  /** TODO: confirm CPD hours per course with the client / eSkilled. */
  cpdHours: number;
};

const courses: Course[] = [
  {
    code: "NDI",
    title: "NDIS & Disability Sector Training",
    desc: "Core knowledge for support workers and coordinators operating within the NDIS framework.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80",
    status: "Available",
    accentColor: "#74c6b4",
    href: "/courses",
    duration: "6 weeks",
    modules: 8,
    level: "Beginner",
    cpdHours: 12,
  },
  {
    code: "VOC",
    title: "Vocational Skills & Foundation Training",
    desc: "Build the foundational skills needed to thrive in care and community services roles.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    status: "Available",
    accentColor: "#6ac7ed",
    href: "/courses",
    duration: "8 weeks",
    modules: 10,
    level: "Beginner",
    cpdHours: 16,
  },
  {
    code: "HSE",
    title: "Health & Safety Compliance",
    desc: "Stay compliant with HSE standards essential for working safely in care environments.",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
    status: "Available",
    accentColor: "#efc759",
    href: "/courses",
    duration: "4 weeks",
    modules: 6,
    level: "Intermediate",
    cpdHours: 8,
  },
  {
    code: "HCP",
    title: "Healthcare Professional Development",
    desc: "Advanced courses for healthcare professionals looking to upskill and specialise.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    status: "Coming Soon",
    accentColor: "#013877",
    href: "/courses",
    duration: "12 weeks",
    modules: 14,
    level: "Advanced",
    cpdHours: 24,
  },
  {
    code: "ISO",
    title: "Quality & Standards Compliance",
    desc: "ISO-aligned training for organisations seeking to meet quality management standards.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    status: "Coming Soon",
    accentColor: "#013877",
    href: "/courses",
    duration: "10 weeks",
    modules: 12,
    level: "Advanced",
    cpdHours: 20,
  },
  {
    code: "BHF",
    title: "Business Health & Financial Management",
    desc: "Tools and frameworks to run a financially healthy care or disability business.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    status: "Coming Soon",
    accentColor: "#013877",
    href: "/courses",
    duration: "8 weeks",
    modules: 9,
    level: "Intermediate",
    cpdHours: 16,
  },
];

const filters = [
  { label: "All Courses", value: "All" },
  { label: "Available Now", value: "Available" },
  { label: "Coming Soon", value: "Coming Soon" },
] as const;

const levels = ["Beginner", "Intermediate", "Advanced"];

export default function CoursesSection() {
  const [active, setActive] = useState<string>("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    active === "All" ? courses : courses.filter((c) => c.status === active);

  const featured = courses[0];

  const counts = {
    All: courses.length,
    Available: courses.filter((c) => c.status === "Available").length,
    "Coming Soon": courses.filter((c) => c.status === "Coming Soon").length,
  };

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* TOP HEADER STRIP */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-14 mb-12 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[11px] font-bold tracking-[2px] text-brand/40">
                [ 03 ]
              </span>
              <span className="h-[1px] w-10 bg-brand/20" />
              <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-mint">
                The Catalogue
              </span>
            </div>
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[64px] leading-[0.98] tracking-[-2px] text-brand">
              Browse the full{" "}
              <span className="italic text-brand/55">course</span>{" "}
              catalogue.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-[64px] lg:text-[88px] text-brand leading-none tracking-[-3px]">
                {String(courses.length).padStart(2, "0")}
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/45">
                  Total
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/45">
                  Programs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED ROW — wide horizontal card */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-14 mb-10 lg:mb-12">
        <Link
          href={featured.href}
          className="group relative grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-0 overflow-hidden rounded-[4px] bg-brand min-h-[320px] lg:min-h-[400px] shadow-xl shadow-brand/15"
        >
          {/* IMAGE SIDE */}
          <div className="relative min-h-[260px] lg:min-h-full overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/40 via-transparent to-transparent" />

            {/* TOP LABEL */}
            <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-mint opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-mint" />
              </span>
              <span className="font-mono text-[9px] font-bold tracking-[2px] uppercase text-brand">
                Featured · Now Enrolling
              </span>
            </div>

            {/* BOTTOM CODE */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="font-serif text-[44px] text-white leading-none">
                {featured.code}
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] font-bold tracking-[2px] uppercase text-white/60">
                  Course
                </span>
                <span className="font-mono text-[9px] font-bold tracking-[2px] uppercase text-white/60">
                  Code
                </span>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="relative flex flex-col justify-between p-7 lg:p-10 text-white">
            {/* PATTERN OVERLAY */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative">
              <span className="font-mono text-[10px] font-bold tracking-[3px] uppercase text-gold block mb-4">
                / Pick of the season
              </span>
              <h3 className="font-serif text-[28px] lg:text-[38px] leading-[1.05] tracking-[-1px] mb-4">
                {featured.title}
              </h3>
              <p className="text-[14px] lg:text-[15px] font-medium text-white/65 leading-[1.8] max-w-[480px]">
                {featured.desc}
              </p>
            </div>

            <div className="relative mt-8 flex items-end justify-between gap-4 flex-wrap">
              {/* META PILLS */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1.5 bg-white/10 ring-1 ring-white/15 px-3 py-1.5 rounded-full text-[11px] font-bold text-white/80">
                  <Clock size={11} strokeWidth={2} />
                  {featured.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 ring-1 ring-white/15 px-3 py-1.5 rounded-full text-[11px] font-bold text-white/80">
                  <GraduationCap size={11} strokeWidth={2} />
                  {featured.modules} modules
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 ring-1 ring-white/15 px-3 py-1.5 rounded-full text-[11px] font-bold text-white/80">
                  <Award size={11} strokeWidth={2} />
                  {featured.cpdHours} CPD hours
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 ring-1 ring-white/15 px-3 py-1.5 rounded-full text-[11px] font-bold text-white/80">
                  {featured.level}
                </span>
              </div>

              {/* CTA */}
              <span className="inline-flex items-center gap-2 bg-gold text-brand text-[12px] font-bold tracking-[1px] uppercase px-5 py-3 rounded-xl group-hover:gap-3 transition-all">
                Start Now
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  className="group-hover:rotate-45 transition-transform"
                />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* MAIN CATALOGUE — sidebar + list */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
          {/* ===== SIDEBAR ===== */}
          <aside className="lg:sticky lg:top-8 lg:self-start space-y-8">
            {/* SEARCH BOX */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses…"
                className="w-full bg-ice/50 ring-1 ring-brand/10 focus:ring-brand/30 outline-none rounded-xl px-4 py-3 pl-10 text-[13px] font-medium text-brand placeholder:text-brand/35 transition-all"
              />
              <Search
                size={14}
                strokeWidth={2}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand/40"
              />
            </div>

            {/* STATUS FILTER */}
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/40 block mb-3">
                / Status
              </span>
              <div className="flex flex-col">
                {filters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActive(f.value)}
                    className={`group flex items-center justify-between py-2.5 border-b border-brand/8 last:border-0 transition-all ${
                      active === f.value
                        ? "text-brand"
                        : "text-brand/55 hover:text-brand"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          active === f.value
                            ? "bg-gold"
                            : "bg-brand/15 group-hover:bg-brand/40"
                        }`}
                      />
                      <span className="text-[13px] font-bold tracking-[0.5px]">
                        {f.label}
                      </span>
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-[1px] text-brand/35 tabular-nums">
                      {String(counts[f.value as keyof typeof counts]).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* LEVELS FILTER */}
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/40 block mb-3">
                / Level
              </span>
              <div className="flex flex-wrap gap-1.5">
                {levels.map((lv) => (
                  <span
                    key={lv}
                    className="text-[11px] font-bold tracking-[0.5px] text-brand/65 px-3 py-1.5 rounded-full ring-1 ring-brand/10 hover:ring-brand/30 hover:bg-brand/5 cursor-pointer transition-all"
                  >
                    {lv}
                  </span>
                ))}
              </div>
            </div>

            {/* HELP CARD */}
            <div className="relative rounded-2xl bg-brand p-5 text-white overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center mb-4">
                  <GraduationCap
                    size={16}
                    strokeWidth={2.2}
                    className="text-brand"
                  />
                </div>
                <h4 className="font-serif text-[18px] leading-tight mb-1.5">
                  Not sure where to start?
                </h4>
                <p className="text-[12px] text-white/65 leading-[1.6] mb-4">
                  Our advisors will help you match the right course to your
                  goals.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-[2px] uppercase text-gold hover:gap-2.5 transition-all"
                >
                  Book a call <ArrowUpRight size={12} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </aside>

          {/* ===== COURSE LIST ===== */}
          <div>
            {/* RESULTS COUNT BAR */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand/10">
              <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/45">
                Showing{" "}
                <span className="text-brand">
                  {String(filtered.length).padStart(2, "0")}
                </span>{" "}
                of{" "}
                <span className="text-brand">
                  {String(courses.length).padStart(2, "0")}
                </span>{" "}
                courses
              </span>
              <span className="hidden sm:flex items-center gap-2 font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/45">
                Sorted by · Newest
              </span>
            </div>

            {/* COURSE ROWS — list layout */}
            <div className="flex flex-col">
              {filtered.map((course, i) => {
                const isAvailable = course.status === "Available";
                return (
                  <Link
                    key={i}
                    href={course.href}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`group relative grid grid-cols-[80px_1fr_auto] sm:grid-cols-[120px_1fr_auto] gap-4 sm:gap-6 items-center py-5 sm:py-6 border-b border-brand/10 transition-all ${
                      !isAvailable ? "opacity-60 hover:opacity-90" : ""
                    } hover:pl-3`}
                  >
                    {/* ACTIVE INDICATOR BAR */}
                    <span
                      className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 origin-center transition-transform"
                      style={{ background: course.accentColor }}
                    />

                    {/* THUMBNAIL */}
                    <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-[4px] overflow-hidden ring-1 ring-brand/10">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className={`object-cover object-center transition-transform duration-500 group-hover:scale-110 ${
                          !isAvailable ? "grayscale" : ""
                        }`}
                      />
                      <div
                        className="absolute bottom-0 left-0 right-0 h-[3px]"
                        style={{ background: course.accentColor }}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0">
                      {/* META ROW */}
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span
                          className="font-mono text-[10px] font-bold tracking-[2.5px] uppercase"
                          style={{ color: course.accentColor }}
                        >
                          / {course.code}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-brand/20" />
                        <span className="font-mono text-[10px] font-bold tracking-[1.5px] uppercase text-brand/40">
                          {course.level}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-brand/20" />
                        <span
                          className={`font-mono text-[10px] font-bold tracking-[1.5px] uppercase ${
                            isAvailable
                              ? "text-mint-dark"
                              : "text-brand/40"
                          }`}
                        >
                          {isAvailable ? "Available" : "Coming Soon"}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3 className="font-serif text-[20px] sm:text-[24px] lg:text-[28px] text-brand leading-[1.1] tracking-[-0.5px] mb-2 transition-colors">
                        {course.title}
                      </h3>

                      {/* DESCRIPTION — hidden on mobile, shows on hover/desktop */}
                      <p className="hidden sm:block text-[13px] font-medium text-brand/55 leading-[1.7] mb-3 max-w-[540px]">
                        {course.desc}
                      </p>

                      {/* INLINE STATS */}
                      <div className="flex items-center gap-4 text-[11px] font-bold text-brand/45">
                        <span className="flex items-center gap-1.5">
                          <Clock size={11} strokeWidth={2} />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <GraduationCap size={11} strokeWidth={2} />
                          {course.modules} modules
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Award size={11} strokeWidth={2} />
                          {course.cpdHours} CPD hrs
                        </span>
                        <span className="hidden sm:flex items-center gap-1.5">
                          <Wifi size={11} strokeWidth={2} />
                          Online
                        </span>
                      </div>
                    </div>

                    {/* RIGHT — ARROW CHIP */}
                    <div className="flex items-center">
                      <span
                        className={`hidden sm:flex w-12 h-12 rounded-full items-center justify-center transition-all ${
                          hovered === i && isAvailable
                            ? "scale-110"
                            : ""
                        } ${
                          isAvailable
                            ? "bg-brand text-white group-hover:bg-gold group-hover:text-brand"
                            : "bg-brand/5 text-brand/40"
                        }`}
                      >
                        <ChevronRight size={18} strokeWidth={2.2} />
                      </span>
                      <span className="sm:hidden text-brand/40">
                        <ChevronRight size={20} strokeWidth={2} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* FOOTER BAR */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6">
              <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/40">
                End of catalogue · Updated weekly
              </span>
              <Link
                href="/courses"
                className="group inline-flex items-center justify-between gap-4 bg-brand text-white text-[12px] font-bold tracking-[1.5px] uppercase px-6 py-3.5 rounded-xl hover:bg-brand-dark transition-all"
              >
                Download Full Brochure
                <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-brand group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={12} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}