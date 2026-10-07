import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses as categories } from "../data/courses";
import { catalogue } from "../data/catalogue";
import { CourseCatalogue } from "../components/courses/CourseCatalogue";
import { Eyebrow, SHELL } from "../components/courses/parts";
import {
  AmbientBlobs,
  AnimatedHeading,
  Reveal,
} from "../components/motion/Reveal";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse the NSWPM Academy course catalogue: self-paced online courses in NDIS and disability, health and safety, healthcare, vocational development, ISO quality standards, and business and financial management.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  const facts = [
    { n: catalogue.length, l: "Courses" },
    { n: categories.length, l: "Categories" },
    { n: "Online", l: "Self-paced delivery" },
  ];

  return (
    <div className="bg-white">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden bg-ice py-20 lg:py-28">
        <AmbientBlobs />
        <div className={`relative ${SHELL}`}>
          <Reveal direction="none" duration={0.6}>
            <Eyebrow>The catalogue</Eyebrow>
          </Reveal>

          <AnimatedHeading
            text="Every course, in one place."
            delay={0.15}
            className="font-serif text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.96] tracking-[-0.05em] text-brand mt-7 max-w-[14ch]"
          />

          <Reveal delay={0.45} className="max-w-xl mt-8">
            <p className="text-[15px] lg:text-[17px] font-medium text-brand/60 leading-[1.85]">
              Short, practical courses you can study online at your own pace.
              Filter by category or search for a topic, then open a course to
              see what it covers, who it is for and how it is assessed.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <dl className="grid grid-cols-3 gap-6 max-w-lg mt-14 pt-9 border-t border-brand/10">
              {facts.map((f) => (
                <div key={f.l} className="flex flex-col-reverse justify-end">
                  <dt className="text-[11.5px] font-semibold text-brand/45 mt-3 leading-[1.5]">
                    {f.l}
                  </dt>
                  <dd className="font-serif text-[clamp(1.7rem,3.4vw,2.7rem)] text-brand leading-none tracking-[-0.04em]">
                    {f.n}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CourseCatalogue />

      {/* ── CLOSING ── */}
      <section className="bg-ice py-20 lg:py-28">
        <div className={`${SHELL} text-center`}>
          <Reveal>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] tracking-[-0.045em] text-brand max-w-[18ch] mx-auto">
              Not sure which course fits?
            </h2>
            <p className="text-[15px] font-medium text-brand/60 leading-[1.9] max-w-md mx-auto mt-6">
              Tell us about your role or your team and we will point you to the
              right starting place.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-9 py-4.5 rounded-full mt-10 hover:bg-brand-dark transition-colors"
            >
              Talk to us
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
