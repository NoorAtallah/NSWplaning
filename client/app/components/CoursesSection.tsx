"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Clock, Wifi } from "lucide-react";

const categories = ["All", "Available", "Coming Soon"];

const courses = [
  {
    code: "NDI",
    title: "NDIS & Disability Sector Training",
    desc: "Core knowledge for support workers and coordinators operating within the NDIS framework.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80",
    status: "Available",
    accentColor: "#74c6b4",
    href: "https://nswpm.com.au/courses/",
  },
  {
    code: "VOC",
    title: "Vocational Skills & Foundation Training",
    desc: "Build the foundational skills needed to thrive in care and community services roles.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    status: "Available",
    accentColor: "#6ac7ed",
    href: "https://nswpm.com.au/courses/",
  },
  {
    code: "HSE",
    title: "Health & Safety Compliance",
    desc: "Stay compliant with HSE standards essential for working safely in care environments.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
    status: "Available",
    accentColor: "#efc759",
    href: "https://nswpm.com.au/courses/",
  },
  {
    code: "HCP",
    title: "Healthcare Professional Development",
    desc: "Advanced courses for healthcare professionals looking to upskill and specialise.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    status: "Coming Soon",
    accentColor: "#013877",
    href: "https://nswpm.com.au/courses/",
  },
  {
    code: "ISO",
    title: "Quality & Standards Compliance",
    desc: "ISO-aligned training for organisations seeking to meet quality management standards.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    status: "Coming Soon",
    accentColor: "#013877",
    href: "https://nswpm.com.au/courses/",
  },
  {
    code: "BHF",
    title: "Business Health & Financial Management",
    desc: "Tools and frameworks to run a financially healthy care or disability business.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    status: "Coming Soon",
    accentColor: "#013877",
    href: "https://nswpm.com.au/courses/",
  },
];

export default function CoursesSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? courses : courses.filter((c) => c.status === active);

  return (
    <section className="bg-white px-14 py-24">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#74c6b4]" />
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#74c6b4]">
              What We Offer
            </span>
          </div>
          <h2 className="font-serif text-[46px] leading-[1.08] tracking-[-1px] text-[#013877] mb-4">
            Explore our courses
          </h2>
          <p className="text-[15px] font-medium text-[#013877]/55 max-w-[480px] leading-[1.8]">
            From NDIS fundamentals to advanced healthcare practice — find the
            course that fits your role and schedule.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex items-center gap-2 bg-[#013877]/5 p-1.5 rounded-xl self-start lg:self-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[13px] font-bold px-5 py-2.5 rounded-lg transition-all ${
                active === cat
                  ? "bg-[#013877] text-white shadow-md"
                  : "text-[#013877]/50 hover:text-[#013877]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((course, i) => (
          <Link
            key={i}
            href={course.href}
            className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 ${
              course.status === "Coming Soon"
                ? "border-[#013877]/8 opacity-65"
                : "border-[#013877]/8"
            }`}
          >
            {/* IMAGE */}
            <div className="relative h-[200px] overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className={`object-cover object-center transition-transform duration-500 group-hover:scale-105 ${
                  course.status === "Coming Soon" ? "grayscale" : ""
                }`}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#013877]/60 via-transparent to-transparent" />

              {/* STATUS BADGE */}
              <div className="absolute top-4 left-4">
                <span
                  className={`text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full ${
                    course.status === "Available"
                      ? "bg-white text-[#0f6e56]"
                      : "bg-white/80 text-[#013877]/50"
                  }`}
                >
                  {course.status === "Available" ? "Available Now" : "Coming Soon"}
                </span>
              </div>

              {/* CODE — bottom of image */}
              <div className="absolute bottom-4 left-4">
                <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/60">
                  {course.code}
                </span>
              </div>

              {/* ACCENT BAR */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[4px]"
                style={{ background: course.accentColor }}
              />
            </div>

            {/* BODY */}
            <div className="flex flex-col flex-1 p-6 bg-white">
              <h3 className="text-[17px] font-bold text-[#013877] leading-[1.4] mb-3">
                {course.title}
              </h3>
              <p className="text-[13px] font-medium text-[#013877]/50 leading-[1.75] mb-6 flex-1">
                {course.desc}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between pt-4 border-t border-[#013877]/6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#013877]/35">
                    <Clock size={12} strokeWidth={2} />
                    Self-paced
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#013877]/35">
                    <Wifi size={12} strokeWidth={2} />
                    Online
                  </span>
                </div>
                {course.status === "Available" && (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all group-hover:scale-110"
                    style={{ background: course.accentColor }}
                  >
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <div className="flex justify-center mt-14">
        <Link
          href="https://nswpm.com.au/courses/"
          className="flex items-center gap-3 border-2 border-[#013877]/15 text-[#013877] text-[14px] font-bold px-10 py-4 rounded-xl hover:bg-[#013877] hover:text-white hover:border-[#013877] transition-all duration-300"
        >
          View All Courses
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>

    </section>
  );
}