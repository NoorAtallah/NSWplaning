import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  Users,
  ShieldCheck,
  Star,
  ClipboardList,
  Network,
  UserRound,
  Globe,
  Brain,
  Smile,
  HomeIcon,
  ArrowRight,
} from "lucide-react";

// ── FEATURES DATA ──────────────────────────────────────────
const features = [
  {
    icon: <Users size={22} strokeWidth={1.8} />,
    title: "Dedicated Team",
    desc: "We work in partnership with our participants to develop personalized care plans aimed at achieving their desired goals and objectives.",
  },
  {
    icon: <HeartHandshake size={22} strokeWidth={1.8} />,
    title: "Support & Care",
    desc: "Our team of experienced and compassionate professionals strive to deliver the highest level of quality care possible.",
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
    title: "Certified Services",
    desc: "Approved as a quality auditor to offer certified NDIS services throughout Australia — accredited and fully authorised.",
  },
  {
    icon: <Star size={22} strokeWidth={1.8} />,
    title: "Excellence First",
    desc: "We value integrity, compassion, and excellence. Treating our participants with dignity and respect is of utmost importance.",
  },
];

// ── SERVICES DATA ──────────────────────────────────────────
const services = [
  { icon: <ClipboardList size={20} strokeWidth={1.8} />, title: "Plan Manager", href: "https://nswpm.com.au/services/plan-manager-2/", desc: "Managing the NDIS budget on behalf of participants." },
  { icon: <Network size={20} strokeWidth={1.8} />, title: "Support Coordination", href: "https://nswpm.com.au/services/support-coordination/", desc: "Helping participants navigate and connect with NDIS supports." },
  { icon: <UserRound size={20} strokeWidth={1.8} />, title: "Personal Care", href: "https://nswpm.com.au/services/personal-care-2/", desc: "Assisting participants who experience difficulty with daily tasks." },
  { icon: <Globe size={20} strokeWidth={1.8} />, title: "Social Community", href: "https://nswpm.com.au/services/social-community-2/", desc: "Supporting social and community participation for all participants." },
  { icon: <Brain size={20} strokeWidth={1.8} />, title: "Mental Care", href: "https://nswpm.com.au/services/mental-care/", desc: "Providing support and funding for a range of mental health needs." },
  { icon: <Smile size={20} strokeWidth={1.8} />, title: "Behavioural Support", href: "https://nswpm.com.au/services/behavioural-support/", desc: "Positive Behaviour Support for improved quality of life." },
  { icon: <HomeIcon size={20} strokeWidth={1.8} />, title: "Aged Care", href: "https://nswpm.com.au/services/aged-care/", desc: "Compassionate care and assistance as we grow older." },
];

export default function AboutSection() {
  return (
    <div className="bg-white">

      {/* ── SECTION 1: WELCOME / WHO WE ARE ───────────────── */}
      <section className="px-14 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — IMAGE STACK */}
          <div className="relative h-[520px]">

            {/* MAIN IMAGE */}
            <div className="absolute top-0 left-0 w-[75%] h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&q=80"
                alt="NDIS care professional"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* SECONDARY IMAGE */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[280px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=80"
                alt="Support worker team"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* EXPERIENCE BADGE */}
            <div className="absolute top-6 right-0 bg-[#013877] rounded-2xl px-6 py-5 shadow-xl z-10 flex flex-col items-center">
              <span className="font-serif text-[48px] text-white leading-none">25</span>
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/60 mt-1">Years Of</span>
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#efc759]">Experience</span>
            </div>

            {/* ACCENT DOT GRID */}
            <div className="absolute bottom-16 left-[-16px] grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#6ac7ed]/40" />
              ))}
            </div>

          </div>

          {/* RIGHT — TEXT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-[#74c6b4]" />
              <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#74c6b4]">
                Welcome to NSWPM
              </span>
            </div>

            <h2 className="font-serif text-[46px] leading-[1.1] tracking-[-1px] text-[#013877] mb-6">
              NSW Planning Management NDIS Provider
            </h2>

            <p className="text-[15px] font-medium text-[#013877]/60 leading-[1.9] mb-6">
              We are a dedicated NDIS service provider, committed to providing
              exceptional support services for individuals with disabilities. Our aim
              is to create meaningful opportunities and provide personalized care plans
              that help our participants achieve their desired goals and objectives.
            </p>

            <p className="text-[15px] font-medium text-[#013877]/60 leading-[1.9] mb-10">
              Our NDIS support services include Plan Management, Support Coordination,
              Specialist Support Coordination, Supported Independent Living, and much
              more. Our team of professionals are experienced, compassionate, and
              strive to provide the highest quality of care possible.
            </p>

            <Link
              href="https://nswpm.com.au/about/"
              className="inline-flex items-center gap-3 bg-[#013877] text-white text-[14px] font-bold px-8 py-4 rounded-xl hover:bg-[#012a5a] transition-colors shadow-lg shadow-[#013877]/20"
            >
              Learn More About Us
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: FEATURE CARDS ───────────────────────── */}
      <section
        className="px-14 py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #eaf6fd 0%, #e2f4f0 50%, #fdf8ed 100%)" }}
      >
        {/* BG BLOB */}
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#6ac7ed]/15 blur-3xl" />

        <div className="relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#74c6b4]" />
              <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#74c6b4]">Why Choose Us</span>
              <div className="h-[2px] w-8 bg-[#74c6b4]" />
            </div>
            <h2 className="font-serif text-[42px] leading-[1.1] tracking-[-1px] text-[#013877]">
              Dedicated NDIS Service Provider
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-[#013877]/5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#013877]/6 flex items-center justify-center text-[#013877] mb-5 group-hover:bg-[#013877] group-hover:text-white transition-all">
                  {f.icon}
                </div>
                <h3 className="text-[16px] font-bold text-[#013877] mb-3">{f.title}</h3>
                <p className="text-[13px] font-medium text-[#013877]/55 leading-[1.8]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES ────────────────────────────── */}
      <section className="px-14 py-24 bg-white">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#74c6b4]" />
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#74c6b4]">What We Offer</span>
            <div className="h-[2px] w-8 bg-[#74c6b4]" />
          </div>
          <h2 className="font-serif text-[42px] leading-[1.1] tracking-[-1px] text-[#013877] mb-4">
            Plan Management, NDIS Support Coordination
          </h2>
          <p className="text-[15px] font-medium text-[#013877]/55 max-w-[560px] mx-auto leading-[1.8]">
            We offer a full range of NDIS support services tailored to the unique needs of each individual.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="group border border-[#013877]/8 rounded-2xl p-6 hover:border-[#013877]/20 hover:shadow-lg transition-all bg-white"
            >
              <div className="w-11 h-11 rounded-xl bg-[#013877]/5 flex items-center justify-center text-[#013877] mb-5 group-hover:bg-[#013877] group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#013877] mb-2">{s.title}</h3>
              <p className="text-[13px] font-medium text-[#013877]/50 leading-[1.75] mb-5">{s.desc}</p>
              <div className="flex items-center gap-2 text-[12px] font-bold text-[#6ac7ed] group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} strokeWidth={2.5} />
              </div>
            </Link>
          ))}
        </div>

      </section>

    </div>
  );
}