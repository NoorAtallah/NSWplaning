import Image from "next/image";
import { Quote, Star } from "lucide-react";

/**
 * TESTIMONIALS
 *
 * TODO — PLACEHOLDER CONTENT. Every quote, name, role and photo below is written
 * copy, not a real learner. Do NOT launch with these: replace with quotes the
 * client has collected and has written permission to publish, or remove the
 * section. Fabricated testimonials are misleading and, for a training provider,
 * a compliance risk.
 */
const testimonials = [
  {
    quote:
      "The course fitted around my shifts, and I could apply what I learned the same week. My supervisor noticed the difference before I had even finished.",
    name: "Placeholder Name",
    role: "Support Worker",
    org: "Disability services provider",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "We enrolled fourteen staff at once. The reporting made it simple to show our auditor exactly who had completed what, and when.",
    name: "Placeholder Name",
    role: "Operations Manager",
    org: "Aged care provider",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "Clear, practical and genuinely relevant to NDIS work — not the generic compliance content I have sat through before.",
    name: "Placeholder Name",
    role: "Support Coordinator",
    org: "Community services",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-cloud py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* GIANT WATERMARK */}
      <div className="hidden lg:block absolute -bottom-10 left-[-20px] font-serif text-[200px] leading-none text-brand/[0.035] select-none pointer-events-none tracking-[-8px]">
        Learners
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 lg:mb-16 items-end">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[11px] font-bold tracking-[2px] text-brand/40">
                [ 05 ]
              </span>
              <span className="h-[1px] w-10 bg-brand/20" />
            </div>
            <span className="font-mono text-[11px] font-bold tracking-[3px] uppercase text-mint">
              Learner Stories
            </span>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[54px] leading-[1.05] tracking-[-1.5px] text-brand">
              What our learners say.
            </h2>
          </div>
          <div className="lg:col-span-3 lg:flex lg:justify-end">
            <Quote
              size={56}
              strokeWidth={1}
              className="hidden lg:block text-brand/15 -scale-x-100"
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`group flex flex-col bg-white border border-brand/8 rounded-[4px] p-7 lg:p-8 hover:border-brand/20 transition-colors ${
                i === 1 ? "md:mt-8" : ""
              }`}
            >
              {/* RATING */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    size={13}
                    strokeWidth={0}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {/* QUOTE */}
              <blockquote className="flex-1 text-[15px] font-medium text-brand/75 leading-[1.85] mb-7">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* ATTRIBUTION */}
              <figcaption className="flex items-center gap-3 pt-6 border-t border-brand/8">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-sm shrink-0">
                  <Image
                    src={t.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-serif text-[17px] text-brand leading-none truncate">
                    {t.name}
                  </div>
                  <div className="font-mono text-[10px] font-bold tracking-[1.5px] uppercase text-brand/45 mt-1.5 truncate">
                    {t.role} · {t.org}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
