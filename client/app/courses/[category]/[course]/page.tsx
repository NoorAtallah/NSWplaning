import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  FolderOpen,
  Hash,
  MonitorPlay,
  UserRound,
} from "lucide-react";
import {
  catalogue,
  courseHref,
  getCategory,
  getCategoryByCode,
  getCourse,
  getCoursesInCategory,
} from "../../../data/catalogue";
import { CourseCard } from "../../../components/courses/CourseCard";
import { Crumbs, Eyebrow, SHELL } from "../../../components/courses/parts";
import {
  AnimatedHeading,
  Reveal,
  Stagger,
  StaggerItem,
} from "../../../components/motion/Reveal";

type Props = { params: Promise<{ category: string; course: string }> };

export function generateStaticParams() {
  return catalogue.map((c) => ({
    category: getCategoryByCode(c.category)?.slug ?? "",
    course: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { course: slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title} (${course.code})`,
    description: course.overview,
    alternates: { canonical: courseHref(course) },
  };
}

function SectionHeading({ n, children }: { n: string; children: string }) {
  return (
    <div className="flex items-baseline gap-5">
      <span className="text-[11px] font-bold tabular-nums text-brand/30">
        {n}
      </span>
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.1] tracking-[-0.04em] text-brand">
        {children}
      </h2>
    </div>
  );
}

function PlainList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[14.5px] font-medium text-brand/70 leading-[1.75]"
        >
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function CoursePage({ params }: Props) {
  const { category: categorySlug, course: slug } = await params;
  const category = getCategory(categorySlug);
  const course = getCourse(slug);
  if (!category || !course || course.category !== category.code) notFound();

  const siblings = getCoursesInCategory(category.code);
  const position = siblings.findIndex((c) => c.code === course.code);
  const previous = siblings[position - 1];
  const next = siblings[position + 1];
  const related = siblings.filter((c) => c.code !== course.code).slice(0, 3);
  const comingSoon = category.status === "Coming Soon";

  const facts = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: MonitorPlay, label: "Delivery", value: course.delivery },
    {
      icon: UserRound,
      label: "Instructor",
      value: course.instructor ?? "To be confirmed",
    },
    { icon: FolderOpen, label: "Category", value: category.title },
    { icon: Hash, label: "Course code", value: course.code },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.overview,
    courseCode: course.code,
    provider: {
      "@type": "Organization",
      name: "NSWPM Academy",
    },
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── HEADER ── */}
      <section className="bg-ice pt-10 pb-16 lg:pt-12 lg:pb-24">
        <div className={SHELL}>
          <Crumbs
            items={[
              { label: "Courses", href: "/courses" },
              { label: category.title, href: `/courses/${category.slug}` },
              { label: course.code },
            ]}
          />

          <div className="mt-12 lg:mt-16 max-w-4xl">
            <Reveal direction="none" duration={0.6}>
              <div className="flex flex-wrap items-center gap-4">
                <Eyebrow>
                  {course.code} · {category.title}
                </Eyebrow>
                {comingSoon && (
                  <span className="rounded-full bg-sand px-3.5 py-1.5 text-[11px] font-bold text-brand/65">
                    Coming soon
                  </span>
                )}
              </div>
            </Reveal>

            <AnimatedHeading
              text={course.title}
              delay={0.15}
              className="font-serif text-[clamp(2.2rem,5.6vw,4.4rem)] leading-[1] tracking-[-0.05em] text-brand mt-7"
            />

            <Reveal delay={0.45} className="max-w-2xl mt-8">
              <p className="text-[15px] lg:text-[17px] font-medium text-brand/65 leading-[1.85]">
                {course.overview}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="py-16 lg:py-24">
        <div className={SHELL}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
            {/* DETAILS */}
            <div className="lg:col-span-7 flex flex-col gap-16 order-2 lg:order-1">
              <Reveal>
                <SectionHeading n="01">Learning outcomes</SectionHeading>
                <ul className="flex flex-col gap-4 mt-8">
                  {course.outcomes.map((o) => (
                    <li key={o.text} className="flex items-start gap-4">
                      <span className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mist text-mint-dark">
                        <Check size={13} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[15px] font-semibold text-brand/80 leading-[1.7]">
                          {o.text}
                        </p>
                        {o.points && (
                          <ul className="flex flex-col gap-2 mt-3">
                            {o.points.map((p) => (
                              <li
                                key={p}
                                className="flex items-start gap-3 text-[14px] font-medium text-brand/60 leading-[1.75]"
                              >
                                <span className="mt-[11px] h-[2px] w-3 shrink-0 bg-brand/25" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <SectionHeading n="02">Key topics</SectionHeading>
                <ol className="mt-8 border-t border-brand/10">
                  {course.topics.map((t, i) => (
                    <li
                      key={t}
                      className="flex items-baseline gap-5 border-b border-brand/10 py-4"
                    >
                      <span className="font-mono text-[11px] font-bold text-brand/35 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-medium text-brand/75 leading-[1.7]">
                        {t}
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal>
                <SectionHeading n="03">Who should attend</SectionHeading>
                <div className="mt-8">
                  <PlainList items={course.audience} />
                </div>
                <div className="rounded-[20px] bg-cloud ring-1 ring-brand/8 p-6 mt-8">
                  <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-brand/45">
                    Prerequisites
                  </h3>
                  <p className="text-[14.5px] font-medium text-brand/70 leading-[1.75] mt-3">
                    {course.prerequisites}
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <SectionHeading n="04">Materials &amp; inclusions</SectionHeading>
                    <div className="mt-8">
                      <PlainList items={course.materials} />
                    </div>
                  </div>
                  <div>
                    <SectionHeading n="05">Assessment &amp; certificate</SectionHeading>
                    <div className="mt-8">
                      <PlainList items={course.assessment} />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* AT A GLANCE */}
            <aside className="lg:col-span-5 order-1 lg:order-2">
              <Reveal direction="left" className="lg:sticky lg:top-8">
                <div className="rounded-[20px] bg-brand p-8 lg:p-9">
                  <h2 className="text-[11px] font-bold tracking-[3px] uppercase text-white/55">
                    At a glance
                  </h2>

                  <dl className="mt-6">
                    {facts.map((f) => {
                      const Icon = f.icon;
                      return (
                        <div
                          key={f.label}
                          className="flex items-start gap-4 border-t border-white/12 py-4"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
                            <Icon size={16} strokeWidth={2} aria-hidden="true" />
                          </span>
                          <div>
                            <dt className="text-[11px] font-semibold text-white/50">
                              {f.label}
                            </dt>
                            <dd className="text-[14.5px] font-semibold text-white leading-[1.5] mt-1">
                              {f.value}
                            </dd>
                          </div>
                        </div>
                      );
                    })}
                  </dl>

                  <Link
                    href="/contact"
                    className="group flex items-center justify-center gap-2.5 bg-gold text-brand text-[13px] font-bold px-7 py-4 rounded-full mt-5 hover:bg-white transition-colors"
                  >
                    {comingSoon ? "Register your interest" : "Enquire about this course"}
                    <ArrowRight
                      size={16}
                      strokeWidth={2.5}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                  <p className="text-[12px] font-medium text-white/45 leading-[1.7] text-center mt-4">
                    Mention {course.code} and we will send you the details.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>

          {/* PREVIOUS / NEXT */}
          {(previous || next) && (
            <nav
              aria-label="More courses in this category"
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-20 pt-10 border-t border-brand/10"
            >
              {previous ? (
                <Link
                  href={courseHref(previous)}
                  className="group flex items-center gap-4 rounded-[20px] ring-1 ring-brand/10 p-6 hover:ring-brand/30 transition-shadow"
                >
                  <ArrowLeft
                    size={18}
                    strokeWidth={2.5}
                    className="shrink-0 text-brand/40 transition-transform group-hover:-translate-x-1 group-hover:text-brand"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-[11px] font-bold text-brand/40">
                      Previous · {previous.code}
                    </span>
                    <span className="block font-serif text-[18px] leading-[1.25] tracking-[-0.02em] text-brand mt-1.5">
                      {previous.title}
                    </span>
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next && (
                <Link
                  href={courseHref(next)}
                  className="group flex items-center justify-end gap-4 rounded-[20px] ring-1 ring-brand/10 p-6 text-right hover:ring-brand/30 transition-shadow"
                >
                  <span>
                    <span className="block text-[11px] font-bold text-brand/40">
                      Next · {next.code}
                    </span>
                    <span className="block font-serif text-[18px] leading-[1.25] tracking-[-0.02em] text-brand mt-1.5">
                      {next.title}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                    className="shrink-0 text-brand/40 transition-transform group-hover:translate-x-1 group-hover:text-brand"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section className="bg-ice py-16 lg:py-24">
          <div className={SHELL}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>More in {category.title}</Eyebrow>
                <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] tracking-[-0.045em] text-brand mt-6">
                  Related courses
                </h2>
              </div>
              <Link
                href={`/courses/${category.slug}`}
                className="group inline-flex items-center gap-2 text-[13px] font-bold text-brand ring-1 ring-brand/15 rounded-full px-6 py-3.5 bg-white hover:ring-brand/40 transition-shadow"
              >
                View category
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {related.map((c) => (
                <StaggerItem key={c.code} className="h-full">
                  <CourseCard course={c} comingSoon={comingSoon} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </div>
  );
}
