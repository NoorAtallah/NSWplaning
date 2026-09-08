import { BadgeCheck, ShieldCheck, Landmark, Users } from "lucide-react";

/**
 * TRUST / ACCREDITATION STRIP
 *
 * TODO — every value below is a PLACEHOLDER. Confirm with the client before launch:
 *   - RTO number (or remove this item if the Academy is not an RTO yet)
 *   - NDIS registration number
 *   - Learner count / years operating — only publish figures that can be substantiated
 */
const credentials = [
  {
    icon: <Landmark size={20} strokeWidth={1.8} />,
    value: "RTO 00000",
    label: "Registered Training Organisation",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.8} />,
    value: "NDIS Registered",
    label: "Approved provider, Australia-wide",
  },
  {
    icon: <BadgeCheck size={20} strokeWidth={1.8} />,
    value: "Nationally Recognised",
    label: "Training aligned to sector standards",
  },
  {
    icon: <Users size={20} strokeWidth={1.8} />,
    value: "0,000+",
    label: "Learners supported to date",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-cloud border-y border-brand/8 py-10 lg:py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[1px] w-10 bg-brand/20" />
          <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-brand/45">
            Accredited &amp; Trusted
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-8 lg:divide-x lg:divide-brand/10">
          {credentials.map((c) => (
            <div key={c.value} className="flex items-start gap-3 lg:px-6 lg:first:pl-0">
              <span className="w-10 h-10 rounded-lg bg-white border border-brand/10 flex items-center justify-center text-mint shrink-0">
                {c.icon}
              </span>
              <div>
                <div className="font-serif text-[19px] lg:text-[21px] text-brand leading-tight tracking-[-0.3px]">
                  {c.value}
                </div>
                <div className="text-[12px] font-medium text-brand/50 leading-[1.6] mt-1">
                  {c.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
