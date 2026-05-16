import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  Network,
  UserRound,
  Globe,
  Brain,
  Smile,
  HomeIcon,
  ArrowUpRight,
  Quote,
} from "lucide-react";

const principles = [
  {
    no: "01",
    title: "Dedicated Team",
    desc: "We partner with participants to build personalised care plans aimed at their own goals.",
  },
  {
    no: "02",
    title: "Support & Care",
    desc: "Experienced, compassionate professionals delivering the highest quality of care possible.",
  },
  {
    no: "03",
    title: "Certified Services",
    desc: "Approved quality auditor offering certified NDIS services across Australia.",
  },
  {
    no: "04",
    title: "Excellence First",
    desc: "Integrity, compassion, dignity, respect — values we treat as non-negotiable.",
  },
];

const services = [
  {
    icon: <ClipboardList size={22} strokeWidth={1.8} />,
    title: "Plan Manager",
    href: "https://nswpm.com.au/services/plan-manager-2/",
    desc: "Managing the NDIS budget on behalf of participants.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80",
  },
  {
    icon: <Network size={22} strokeWidth={1.8} />,
    title: "Support Coordination",
    href: "https://nswpm.com.au/services/support-coordination/",
    desc: "Navigating and connecting with NDIS supports.",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&q=80",
  },
  {
    icon: <UserRound size={22} strokeWidth={1.8} />,
    title: "Personal Care",
    href: "https://nswpm.com.au/services/personal-care-2/",
    desc: "Assistance for participants with daily living tasks.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
  },
  {
    icon: <Globe size={22} strokeWidth={1.8} />,
    title: "Social Community",
    href: "https://nswpm.com.au/services/social-community-2/",
    desc: "Supporting social and community participation.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80",
  },
  {
    icon: <Brain size={22} strokeWidth={1.8} />,
    title: "Mental Care",
    href: "https://nswpm.com.au/services/mental-care/",
    desc: "Support and funding for a range of mental health needs.",
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80",
  },
  {
    icon: <Smile size={22} strokeWidth={1.8} />,
    title: "Behavioural Support",
    href: "https://nswpm.com.au/services/behavioural-support/",
    desc: "Positive Behaviour Support for better quality of life.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80",
  },
  {
    icon: <HomeIcon size={22} strokeWidth={1.8} />,
    title: "Aged Care",
    href: "https://nswpm.com.au/services/aged-care/",
    desc: "Compassionate care and assistance as we grow older.",
    img: "https://images.unsplash.com/photo-1581579438747-9f1f7f0a3e3f?w=500&q=80",
  },
];

export default function AboutSection() {
  return (
    <div className="bg-white">
      {/* ── SECTION 1: EDITORIAL ABOUT ── */}
      <section className="relative bg-white py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* GIANT WATERMARK NUMBER */}
        <div className="hidden lg:block absolute -top-8 left-[-30px] font-serif text-[280px] leading-none text-[#013877]/[0.035] select-none pointer-events-none tracking-[-15px]">
          NSW
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          {/* SECTION HEADER ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] font-bold tracking-[2px] text-[#013877]/40">
                  [ 01 ]
                </span>
                <span className="h-[1px] w-10 bg-[#013877]/20" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-[#74c6b4]">
                Who We Are
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[64px] leading-[1.02] tracking-[-2px] text-[#013877]">
                A dedicated NDIS provider, building{" "}
                <span className="italic text-[#013877]/55">care plans</span>{" "}
                around real people.
              </h2>
            </div>
          </div>

          {/* CONTENT GRID — asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT — IMAGE COLLAGE */}
            <div className="lg:col-span-7 relative">
              {/* MAIN LANDSCAPE IMAGE */}
              <div className="relative h-[400px] lg:h-[540px] rounded-[4px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=900&q=80"
                  alt="NDIS care professional"
                  fill
                  className="object-cover object-center"
                />
                {/* TOP-LEFT FRAME LABEL */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#74c6b4]" />
                  <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-[#013877]">
                    FIG. 01 — IN PRACTICE
                  </span>
                </div>
                {/* BOTTOM CAPTION */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#013877] via-[#013877]/70 to-transparent p-5 lg:p-7">
                  <p className="text-white text-[13px] lg:text-[14px] font-medium leading-relaxed max-w-md">
                    Person-centred support, delivered by professionals who treat
                    every plan like the only one.
                  </p>
                </div>
              </div>

              {/* OVERLAPPING PORTRAIT IMAGE */}
              <div className="hidden lg:block absolute -bottom-12 -right-8 w-[220px] h-[280px] rounded-[4px] overflow-hidden border-[6px] border-white shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=80"
                  alt="Support worker"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* 25 YEARS BADGE — corner stamp style */}
              <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 z-20">
                <div className="relative w-[110px] h-[110px] lg:w-[140px] lg:h-[140px] rounded-full bg-[#efc759] flex flex-col items-center justify-center shadow-xl rotate-[8deg]">
                  <span className="font-serif text-[44px] lg:text-[56px] text-[#013877] leading-none">
                    25
                  </span>
                  <span className="text-[9px] lg:text-[10px] font-bold tracking-[2px] uppercase text-[#013877]/70 mt-1">
                    Years
                  </span>
                  {/* TINY DOT ORBIT */}
                  <span className="absolute top-2 right-3 w-1.5 h-1.5 rounded-full bg-[#013877]" />
                  <span className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-[#013877]/40" />
                </div>
              </div>
            </div>

            {/* RIGHT — TEXT BLOCK */}
            <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4 lg:pt-6">
              {/* DROP-CAP PARAGRAPH */}
              <p className="text-[15px] lg:text-[16px] font-medium text-[#013877]/75 leading-[1.85] mb-6">
                <span className="float-left font-serif text-[64px] lg:text-[72px] text-[#013877] leading-[0.85] pr-3 pt-1">
                  W
                </span>
                e&apos;re a dedicated NDIS service provider committed to
                exceptional support for individuals with disabilities. Our work
                is to create meaningful opportunities and deliver personalised
                care plans that help participants reach their own goals.
              </p>

              <p className="text-[14px] lg:text-[15px] font-medium text-[#013877]/55 leading-[1.85] mb-8">
                Plan Management, Support Coordination, Specialist Support
                Coordination, Supported Independent Living and more — delivered
                by experienced, compassionate professionals.
              </p>

              {/* SIGNATURE ROW */}
              <div className="flex items-center gap-4 pb-7 mb-7 border-b border-[#013877]/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-serif italic text-[18px] text-[#013877] leading-none">
                    Sarah Chen
                  </div>
                  <div className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-[#013877]/45 mt-1.5">
                    Founder & Care Director
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="https://nswpm.com.au/about/"
                className="group inline-flex items-center justify-between gap-4 self-start bg-[#013877] text-white text-[13px] font-bold tracking-[1px] uppercase px-6 py-4 rounded-none hover:bg-[#012a5a] transition-colors"
              >
                Read Our Story
                <span className="w-7 h-7 rounded-full bg-[#efc759] flex items-center justify-center text-[#013877] group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: DARK PRINCIPLES BAND ── */}
      <section className="relative bg-[#013877] overflow-hidden py-20 md:py-24 lg:py-28">
        {/* GRID TEXTURE */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* AMBIENT GLOWS */}
        <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#6ac7ed]/15 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#74c6b4]/12 blur-3xl" />

        {/* GIANT WATERMARK */}
        <div className="hidden lg:block absolute bottom-[-40px] right-[-20px] font-serif text-[200px] leading-none text-white/[0.04] select-none pointer-events-none tracking-[-8px]">
          Principles
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-16 items-end">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] font-bold tracking-[2px] text-white/40">
                  [ 02 ]
                </span>
                <span className="h-[1px] w-10 bg-white/20" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-[#efc759]">
                Why Choose Us
              </span>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[54px] leading-[1.05] tracking-[-1.5px] text-white">
                Four principles that shape{" "}
                <span className="italic text-[#efc759]">every</span> plan we
                touch.
              </h2>
            </div>
            <div className="hidden lg:flex lg:col-span-2 justify-end">
              <Quote
                size={56}
                strokeWidth={1}
                className="text-white/15 -scale-x-100"
              />
            </div>
          </div>

          {/* PRINCIPLES — horizontal divider list, NOT cards */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {principles.map((p) => (
              <div
                key={p.no}
                className="group grid grid-cols-12 gap-4 lg:gap-8 items-start py-6 lg:py-8 hover:bg-white/[0.03] transition-colors px-2 lg:px-4 -mx-2 lg:-mx-4"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-[12px] lg:text-[13px] font-bold tracking-[2px] text-[#efc759]">
                    {p.no}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="font-serif text-[22px] lg:text-[28px] text-white tracking-[-0.5px] leading-tight group-hover:translate-x-1 transition-transform">
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                  <p className="text-[14px] lg:text-[15px] font-medium text-white/55 leading-[1.8]">
                    {p.desc}
                  </p>
                </div>
                <div className="hidden lg:flex col-span-1 justify-end items-center">
                  <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-[#efc759] group-hover:text-[#013877] group-hover:border-[#efc759] transition-all">
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES — IMAGE CARDS ── */}
      <section className="relative bg-white py-20 md:py-24 lg:py-28 overflow-hidden">
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 lg:mb-16 items-end">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] font-bold tracking-[2px] text-[#013877]/40">
                  [ 03 ]
                </span>
                <span className="h-[1px] w-10 bg-[#013877]/20" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-[#74c6b4]">
                What We Offer
              </span>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[54px] leading-[1.05] tracking-[-1.5px] text-[#013877]">
                A full spectrum of NDIS support, tailored to each individual.
              </h2>
            </div>
            <div className="lg:col-span-3 lg:flex lg:justify-end">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-[56px] lg:text-[72px] text-[#013877] leading-none">
                  07
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-[#013877]/45">
                  Service
                  <br />
                  Categories
                </span>
              </div>
            </div>
          </div>

          {/* MASONRY-LIKE STAGGERED GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {services.map((s, i) => {
              // Stagger every other card vertically on desktop
              const offset = i % 2 === 1 ? "lg:mt-10" : "";
              return (
                <Link
                  key={i}
                  href={s.href}
                  className={`group relative overflow-hidden rounded-[4px] bg-[#013877] aspect-[3/4] block ${offset}`}
                >
                  {/* BG IMAGE */}
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#013877] via-[#013877]/60 to-transparent" />
                  <div className="absolute inset-0 bg-[#013877]/20 group-hover:bg-[#013877]/10 transition-colors" />

                  {/* TOP — NUMBER + ARROW */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-[2px] text-white/70">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white group-hover:bg-[#efc759] group-hover:text-[#013877] group-hover:border-[#efc759] transition-all">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2.5}
                        className="group-hover:rotate-45 transition-transform"
                      />
                    </span>
                  </div>

                  {/* BOTTOM — CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white mb-4 group-hover:bg-[#efc759] group-hover:text-[#013877] group-hover:border-[#efc759] transition-all">
                      {s.icon}
                    </div>
                    <h3 className="font-serif text-[20px] lg:text-[22px] text-white leading-tight mb-2 tracking-[-0.3px]">
                      {s.title}
                    </h3>
                    <p className="text-[12px] lg:text-[13px] font-medium text-white/65 leading-[1.6]">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* CTA CARD — last slot */}
            <div className="lg:mt-10 aspect-[3/4] rounded-[4px] bg-[#eaf6fd] border-2 border-dashed border-[#013877]/20 flex flex-col items-center justify-center text-center p-6 hover:border-[#013877]/40 hover:bg-[#eaf6fd]/60 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#013877] flex items-center justify-center text-white mb-4">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
              <h3 className="font-serif text-[20px] text-[#013877] leading-tight mb-2 tracking-[-0.3px]">
                Need something else?
              </h3>
              <p className="text-[12px] font-medium text-[#013877]/55 leading-[1.6] mb-4">
                Talk to us about a custom plan.
              </p>
              <Link
                href="https://nswpm.com.au/contact/"
                className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-[#013877] underline underline-offset-4 hover:text-[#74c6b4]"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}