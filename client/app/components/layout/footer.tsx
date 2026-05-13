import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const services = [
  { label: "Plan Manager", href: "https://nswpm.com.au/services/plan-manager-2/" },
  { label: "Support Coordination", href: "https://nswpm.com.au/services/support-coordination/" },
  { label: "Personal Care", href: "https://nswpm.com.au/services/personal-care-2/" },
  { label: "Social Community", href: "https://nswpm.com.au/services/social-community-2/" },
  { label: "Mental Care", href: "https://nswpm.com.au/services/mental-care/" },
  { label: "Behavioural Support", href: "https://nswpm.com.au/services/behavioural-support/" },
  { label: "Aged Care", href: "https://nswpm.com.au/services/aged-care/" },
];

const quickLinks = [
  { label: "Home", href: "https://nswpm.com.au/" },
  { label: "About Us", href: "https://nswpm.com.au/about/" },
  { label: "Services", href: "https://nswpm.com.au/services-style-1/" },
  { label: "NDIS", href: "https://nswpm.com.au/ndis-services/" },
  { label: "Courses", href: "https://nswpm.com.au/courses/" },
  { label: "Contact", href: "https://nswpm.com.au/contact/" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#013877]">

      {/* WAVE TOP */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,0 C360,60 1080,0 1440,40 L1440,0 Z" fill="white" />
        </svg>
      </div>

      {/* MAIN FOOTER */}
      <div className="px-14 pt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COL 1 — BRAND */}
          <div>
            <div className="font-serif text-[24px] text-white mb-2">
              NSWPM Academy
            </div>
            <div className="h-[2px] w-10 bg-[#efc759] mb-5" />
            <p className="text-[13px] font-medium text-white/55 leading-[1.85] mb-8">
              A dedicated NDIS service provider committed to delivering
              exceptional support services and nationally recognised training
              for individuals across Australia.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2 — QUICK LINKS */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[2px] uppercase text-white mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[13px] font-medium text-white/55 hover:text-white hover:gap-3 transition-all"
                  >
                    <ArrowRight size={12} strokeWidth={2.5} className="text-[#74c6b4] shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — SERVICES */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[2px] uppercase text-white mb-6">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-[13px] font-medium text-white/55 hover:text-white hover:gap-3 transition-all"
                  >
                    <ArrowRight size={12} strokeWidth={2.5} className="text-[#6ac7ed] shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — CONTACT + NEWSLETTER */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[2px] uppercase text-white mb-6">
              Get In Touch
            </h4>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} strokeWidth={1.8} className="text-[#74c6b4]" />
                </div>
                <span className="text-[13px] font-medium text-white/55 leading-[1.7]">
                  Bankstown, NSW 2200, Australia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
                  <Phone size={14} strokeWidth={1.8} className="text-[#6ac7ed]" />
                </div>
                <a
                  href="tel:+61"
                  className="text-[13px] font-medium text-white/55 hover:text-white transition-colors"
                >
                  +61 (0) 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
                  <Mail size={14} strokeWidth={1.8} className="text-[#efc759]" />
                </div>
                <a
                  href="mailto:info@nswpm.com.au"
                  className="text-[13px] font-medium text-white/55 hover:text-white transition-colors"
                >
                  info@nswpm.com.au
                </a>
              </li>
            </ul>

            {/* NEWSLETTER */}
            <div>
              <p className="text-[12px] font-bold tracking-[1px] uppercase text-white/40 mb-3">
                Stay Updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/8 border border-white/10 text-white text-[13px] font-medium placeholder:text-white/30 px-4 py-3 rounded-xl outline-none focus:border-[#74c6b4]/50 transition-colors"
                />
                <button className="bg-[#efc759] text-[#013877] px-4 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shrink-0">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/8 px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[12px] font-medium text-white/30">
          © {new Date().getFullYear()} NSW Planning Management. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[12px] font-medium text-white/30 hover:text-white/60 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}