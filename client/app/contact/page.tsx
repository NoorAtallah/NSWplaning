import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, GraduationCap, Sparkles } from "lucide-react";
import ContactForm from "../components/ContactForm";
import {
  Reveal,
  Stagger,
  StaggerItem,
  LiftCard,
  AnimatedHeading,
  AmbientBlobs,
} from "../components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NSWPM Academy about courses, enrolment, CPD or training for your organisation. Based in Bankstown, NSW, serving learners across Australia.",
  alternates: { canonical: "/contact" },
};

// TODO: confirm all contact details with the client before launch.
const details = [
  {
    icon: <MapPin size={20} strokeWidth={1.8} />,
    label: "Visit Us",
    lines: ["Bankstown, NSW 2200", "Australia"],
  },
  {
    icon: <Phone size={20} strokeWidth={1.8} />,
    label: "Call Us",
    lines: ["+61 (0) 000 000 000"],
    href: "tel:+61",
  },
  {
    icon: <Mail size={20} strokeWidth={1.8} />,
    label: "Email Us",
    lines: ["info@nswpm.com.au"],
    href: "mailto:info@nswpm.com.au",
  },
  {
    icon: <Clock size={20} strokeWidth={1.8} />,
    label: "Office Hours",
    lines: ["Mon – Fri, 9:00am – 5:00pm", "AEST"],
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* ── PAGE HEADER ── */}
      <section className="relative bg-ice overflow-hidden py-20 md:py-24 lg:py-28">
        <AmbientBlobs />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #013877 1px, transparent 1px), linear-gradient(to bottom, #013877 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden="true"
        />
        <div className="hidden lg:block absolute -bottom-16 right-[-20px] font-serif text-[220px] leading-none text-brand/[0.05] select-none pointer-events-none tracking-[-8px]">
          Contact
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          <Reveal direction="none" duration={0.6}>
            <div className="inline-flex items-center gap-2.5 bg-white/70 backdrop-blur-sm border border-brand/10 rounded-full pl-2.5 pr-4 py-1.5 mb-8">
              <span className="w-5 h-5 rounded-full bg-mint flex items-center justify-center text-white">
                <Sparkles size={11} strokeWidth={2.5} />
              </span>
              <span className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/65">
                Get In Touch
              </span>
            </div>
          </Reveal>

          <AnimatedHeading
            text="Let's find the right course for you."
            delay={0.15}
            className="font-serif text-[38px] sm:text-[52px] lg:text-[68px] leading-[1.02] tracking-[-2.5px] text-brand max-w-3xl"
          />

          <Reveal delay={0.5} className="max-w-xl mt-7">
            <p className="text-[15px] lg:text-[17px] font-medium text-brand/60 leading-[1.85]">
              Whether you&apos;re choosing your first course, sorting out an
              enrolment, or planning training for an entire team — tell us what
              you need and we&apos;ll come back to you within two business days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── DETAILS STRIP ── */}
      <section className="border-b border-brand/8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 py-10 lg:py-12">
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-8">
            {details.map((d) => {
              const body = (
                <>
                  <span className="w-11 h-11 rounded-lg bg-ice border border-brand/10 flex items-center justify-center text-mint shrink-0">
                    {d.icon}
                  </span>
                  <div>
                    <div className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/45 mb-1.5">
                      {d.label}
                    </div>
                    {d.lines.map((l) => (
                      <div
                        key={l}
                        className="text-[14px] font-medium text-brand/75 leading-[1.7]"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </>
              );

              return (
                <StaggerItem key={d.label}>
                  {d.href ? (
                    <a href={d.href} className="flex items-start gap-3 group">
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-start gap-3">{body}</div>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ── FORM + ASIDE ── */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* FORM */}
            <Reveal direction="right" className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] font-bold tracking-[2px] text-brand/40">
                  [ 01 ]
                </span>
                <span className="h-[1px] w-10 bg-brand/20" />
                <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-mint">
                  Send An Enquiry
                </span>
              </div>
              <ContactForm />
            </Reveal>

            {/* ASIDE */}
            <Reveal direction="left" delay={0.15} className="lg:col-span-5">
              <aside className="flex flex-col gap-6 h-full">
              {/* LEARNER PORTAL CARD */}
              <LiftCard>
                <div className="bg-brand rounded-[6px] p-7 lg:p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative">
                  <span className="w-11 h-11 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-gold mb-5">
                    <GraduationCap size={20} strokeWidth={1.8} />
                  </span>
                  <h2 className="font-serif text-[24px] text-white leading-tight tracking-[-0.5px] mb-3">
                    Already enrolled?
                  </h2>
                  <p className="text-[14px] font-medium text-white/60 leading-[1.8] mb-6">
                    Course materials, assessments and certificates all live in
                    the learner portal. Sign in there to pick up where you left
                    off.
                  </p>
                  {/* TODO: same eSkilled LMS URL as the header button. */}
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-gold text-brand text-[12px] font-bold tracking-[1px] uppercase px-5 py-3 rounded-[4px] hover:opacity-90 transition-opacity"
                  >
                    <GraduationCap size={14} strokeWidth={2.5} />
                    Learner Portal
                  </Link>
                  </div>
                </div>
              </LiftCard>

              {/* MAP PLACEHOLDER */}
              {/* TODO: embed a real map once the street address is confirmed. */}
              <div className="flex-1 min-h-[240px] bg-ice border-2 border-dashed border-brand/15 rounded-[4px] flex flex-col items-center justify-center text-center p-8">
                <span className="w-12 h-12 rounded-full bg-white border border-brand/10 flex items-center justify-center text-brand/40 mb-4">
                  <MapPin size={20} strokeWidth={1.8} />
                </span>
                <div className="font-serif text-[19px] text-brand mb-2">
                  Bankstown, NSW
                </div>
                <p className="text-[12px] font-medium text-brand/50 leading-[1.7] max-w-[220px]">
                  Map to be added once the full street address is confirmed.
                </p>
              </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
