import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  HeartHandshake,
  MonitorSmartphone,
  Building2,
  ClipboardCheck,
  BarChart3,
  ArrowUpRight,
  Quote,
} from "lucide-react";

// Core Values — source: "For Website_Vision-Mission-Purpose-Core Values" (client doc)
const values = [
  {
    no: "01",
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
    title: "Integrity",
    desc: "We act honestly, ethically and transparently.",
  },
  {
    no: "02",
    icon: <Award size={22} strokeWidth={1.8} />,
    title: "Quality",
    desc: "We maintain high standards in course design, delivery and learner support.",
  },
  {
    no: "03",
    icon: <Users size={22} strokeWidth={1.8} />,
    title: "Learner Focus",
    desc: "We place learners at the centre of our educational services.",
  },
  {
    no: "04",
    icon: <Compass size={22} strokeWidth={1.8} />,
    title: "Practical Learning & Professional Development",
    desc: "We connect knowledge with real-world practice and professional development.",
  },
  {
    no: "05",
    icon: <HeartHandshake size={22} strokeWidth={1.8} />,
    title: "Inclusion & Respect",
    desc: "We promote an inclusive, accessible and respectful learning environment.",
  },
  {
    no: "06",
    icon: <MonitorSmartphone size={22} strokeWidth={1.8} />,
    title: "Innovation & Digital Learning",
    desc: "We embrace modern learning technologies and continuous improvement.",
  },
];

// TODO: confirm organisational-training offer + CTA destination with the client.
const organisations = [
  {
    icon: <Building2 size={22} strokeWidth={1.8} />,
    title: "Workforce Training",
    desc: "Upskill an entire team on one plan, with training mapped to the roles they actually work in.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&q=80",
  },
  {
    icon: <ClipboardCheck size={22} strokeWidth={1.8} />,
    title: "Compliance & Standards",
    desc: "Keep your organisation audit-ready with training aligned to sector standards and obligations.",
    img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=500&q=80",
  },
  {
    icon: <BarChart3 size={22} strokeWidth={1.8} />,
    title: "Progress & Reporting",
    desc: "Track enrolments, completions and CPD hours across your staff from a single dashboard.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  },
];

export default function AboutSection() {
  return (
    <div className="bg-white">
      {/* ── SECTION 1: WHO WE ARE — PURPOSE & MISSION ── */}
      <section className="relative bg-white py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* GIANT WATERMARK */}
        <div className="hidden lg:block absolute -top-8 left-[-30px] font-serif text-[280px] leading-none text-brand/[0.035] select-none pointer-events-none tracking-[-15px]">
          NSW
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          {/* SECTION HEADER ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] font-bold tracking-[2px] text-brand/40">
                  [ 01 ]
                </span>
                <span className="h-[1px] w-10 bg-brand/20" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-mint">
                Who We Are
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[64px] leading-[1.02] tracking-[-2px] text-brand">
                A trusted education provider, built around the{" "}
                <span className="italic text-brand/55">learner</span>.
              </h2>
            </div>
          </div>

          {/* CONTENT GRID — asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT — IMAGE COLLAGE */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[400px] lg:h-[540px] rounded-[4px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80"
                  alt="Learners in a professional training session"
                  fill
                  className="object-cover object-center"
                />
                {/* TOP-LEFT FRAME LABEL */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                  <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand">
                    FIG. 01 — IN THE CLASSROOM
                  </span>
                </div>
                {/* BOTTOM CAPTION */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand via-brand/70 to-transparent p-5 lg:p-7">
                  <p className="text-white text-[13px] lg:text-[14px] font-medium leading-relaxed max-w-md">
                    Practical, flexible learning that connects knowledge with
                    real-world workplace skills.
                  </p>
                </div>
              </div>

              {/* OVERLAPPING PORTRAIT IMAGE */}
              <div className="hidden lg:block absolute -bottom-12 -right-8 w-[220px] h-[280px] rounded-[4px] overflow-hidden border-[6px] border-white shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80"
                  alt="Learner studying online"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* RIGHT — TEXT BLOCK */}
            <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4 lg:pt-6">
              {/* PURPOSE — DROP-CAP PARAGRAPH */}
              <p className="text-[15px] lg:text-[16px] font-medium text-brand/75 leading-[1.85] mb-8">
                <span className="float-left font-serif text-[64px] lg:text-[72px] text-brand leading-[0.85] pr-3 pt-1">
                  O
                </span>
                ur purpose is to make high-quality education and Continuing
                Professional Development accessible and relevant — helping
                learners build knowledge, strengthen professional capabilities
                and develop practical workplace skills.
              </p>

              {/* VISION + MISSION */}
              <div className="flex flex-col gap-6 pb-8 mb-8 border-b border-brand/10">
                <div className="border-l-2 border-gold pl-5">
                  <div className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/45 mb-2">
                    Our Vision
                  </div>
                  <p className="text-[14px] lg:text-[15px] font-medium text-brand/65 leading-[1.8]">
                    To be a trusted and innovative education provider that
                    empowers individuals and organisations through high-quality
                    education, Continuing Professional Development and modern
                    learning technologies.
                  </p>
                </div>

                <div className="border-l-2 border-mint pl-5">
                  <div className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/45 mb-2">
                    Our Mission
                  </div>
                  <p className="text-[14px] lg:text-[15px] font-medium text-brand/65 leading-[1.8]">
                    We provide accessible, practical and high-quality education
                    that develops knowledge, strengthens professional skills and
                    supports Continuing Professional Development and lifelong
                    learning through flexible and modern learning experiences.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="group inline-flex items-center justify-between gap-4 self-start bg-brand text-white text-[13px] font-bold tracking-[1px] uppercase px-6 py-4 rounded-none hover:bg-brand-dark transition-colors"
              >
                About The Academy
                <span className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-brand group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: DARK BAND — CORE VALUES ── */}
      <section className="relative bg-brand overflow-hidden py-20 md:py-24 lg:py-28">
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
        <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-sky/15 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-mint/12 blur-3xl" />

        {/* GIANT WATERMARK */}
        <div className="hidden lg:block absolute bottom-[-40px] right-[-20px] font-serif text-[200px] leading-none text-white/[0.04] select-none pointer-events-none tracking-[-8px]">
          Values
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
              <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-gold">
                What We Stand For
              </span>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[54px] leading-[1.05] tracking-[-1.5px] text-white">
                Six values that shape{" "}
                <span className="italic text-gold">every</span> course we
                deliver.
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

          {/* VALUES — horizontal divider list */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {values.map((v) => (
              <div
                key={v.no}
                className="group grid grid-cols-12 gap-4 lg:gap-8 items-start py-6 lg:py-8 hover:bg-white/[0.03] transition-colors px-2 lg:px-4 -mx-2 lg:-mx-4"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-[12px] lg:text-[13px] font-bold tracking-[2px] text-gold">
                    {v.no}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-4 flex items-start gap-3">
                  <span className="hidden lg:flex w-10 h-10 rounded-lg bg-white/8 border border-white/12 items-center justify-center text-mint shrink-0">
                    {v.icon}
                  </span>
                  <h3 className="font-serif text-[22px] lg:text-[28px] text-white tracking-[-0.5px] leading-tight group-hover:translate-x-1 transition-transform">
                    {v.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                  <p className="text-[14px] lg:text-[15px] font-medium text-white/55 leading-[1.8]">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FOR ORGANISATIONS ── */}
      <section className="relative bg-white py-20 md:py-24 lg:py-28 overflow-hidden">
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 lg:mb-16 items-end">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] font-bold tracking-[2px] text-brand/40">
                  [ 03 ]
                </span>
                <span className="h-[1px] w-10 bg-brand/20" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-mint">
                For Organisations
              </span>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[54px] leading-[1.05] tracking-[-1.5px] text-brand">
                Training your whole team, on one plan.
              </h2>
            </div>
            <div className="lg:col-span-3 lg:flex lg:justify-end">
              <p className="text-[14px] font-medium text-brand/55 leading-[1.8] max-w-[260px]">
                Built for disability, aged care and community service providers
                who need their workforce trained, compliant and CPD-current.
              </p>
            </div>
          </div>

          {/* THREE IMAGE CARDS + CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {organisations.map((o, i) => {
              const offset = i % 2 === 1 ? "lg:mt-10" : "";
              return (
                <div
                  key={o.title}
                  className={`group relative overflow-hidden rounded-[4px] bg-brand aspect-[3/4] ${offset}`}
                >
                  <Image
                    src={o.img}
                    alt={o.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-transparent" />
                  <div className="absolute inset-0 bg-brand/20 group-hover:bg-brand/10 transition-colors" />

                  {/* TOP — NUMBER */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-[2px] text-white/70">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* BOTTOM — CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white mb-4 group-hover:bg-gold group-hover:text-brand group-hover:border-gold transition-all">
                      {o.icon}
                    </div>
                    <h3 className="font-serif text-[20px] lg:text-[22px] text-white leading-tight mb-2 tracking-[-0.3px]">
                      {o.title}
                    </h3>
                    <p className="text-[12px] lg:text-[13px] font-medium text-white/65 leading-[1.6]">
                      {o.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* CTA CARD — last slot */}
            <div className="lg:mt-10 aspect-[3/4] rounded-[4px] bg-ice border-2 border-dashed border-brand/20 flex flex-col items-center justify-center text-center p-6 hover:border-brand/40 hover:bg-ice/60 transition-all">
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white mb-4">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
              <h3 className="font-serif text-[20px] text-brand leading-tight mb-2 tracking-[-0.3px]">
                Training a team?
              </h3>
              <p className="text-[12px] font-medium text-brand/55 leading-[1.6] mb-4">
                Tell us your workforce needs and we&apos;ll build the plan.
              </p>
              <Link
                href="/contact"
                className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand underline underline-offset-4 hover:text-mint"
              >
                Talk to us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
