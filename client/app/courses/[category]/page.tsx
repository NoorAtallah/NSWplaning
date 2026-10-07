import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { courses as categories } from "../../data/courses";
import { getCategory, getCoursesInCategory } from "../../data/catalogue";
import { CourseCard } from "../../components/courses/CourseCard";
import { Crumbs, Eyebrow, SHELL } from "../../components/courses/parts";
import {
  AnimatedHeading,
  Reveal,
  Stagger,
  StaggerItem,
} from "../../components/motion/Reveal";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} Courses`,
    description: category.desc,
    alternates: { canonical: `/courses/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getCoursesInCategory(category.code);
  const comingSoon = category.status === "Coming Soon";
  const others = categories.filter((c) => c.code !== category.code);
  const Icon = category.icon;

  return (
    <div className="bg-white">
      {/* ── HEADER ── */}
      <section className="bg-ice pt-10 pb-16 lg:pt-12 lg:pb-24">
        <div className={SHELL}>
          <Crumbs
            items={[
              { label: "Courses", href: "/courses" },
              { label: category.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12 lg:mt-16">
            <div className="lg:col-span-7">
              <Reveal direction="none" duration={0.6}>
                <Eyebrow>
                  {category.code} · {items.length} courses
                </Eyebrow>
              </Reveal>

              <AnimatedHeading
                text={category.title}
                delay={0.15}
                className="font-serif text-[clamp(2.5rem,6.4vw,5rem)] leading-[0.98] tracking-[-0.05em] text-brand mt-7"
              />

              <Reveal delay={0.4} className="max-w-lg mt-8">
                <p className="text-[15px] lg:text-[17px] font-medium text-brand/60 leading-[1.85]">
                  {category.desc}
                </p>
                {comingSoon && (
                  <p className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-[12px] font-bold text-brand/65 mt-7">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Coming soon — register your interest
                  </p>
                )}
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2} className="lg:col-span-5">
              <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-[20px] overflow-hidden bg-white ring-1 ring-brand/10">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand ring-1 ring-brand/10">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-16 lg:py-24">
        <div className={SHELL}>
          <Eyebrow>Courses in this category</Eyebrow>
          <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {items.map((course) => (
              <StaggerItem key={course.code} className="h-full">
                <CourseCard course={course} comingSoon={comingSoon} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── OTHER CATEGORIES ── */}
      <section className="bg-ice py-16 lg:py-24">
        <div className={SHELL}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Keep exploring</Eyebrow>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] tracking-[-0.045em] text-brand mt-6">
                Other categories
              </h2>
            </div>
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2.5 bg-brand text-white text-[13px] font-bold px-7 py-4 rounded-full hover:bg-brand-dark transition-colors"
            >
              All courses
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <ul className="mt-10 border-t border-brand/10">
            {others.map((c) => (
              <li key={c.code} className="border-b border-brand/10">
                <Link
                  href={`/courses/${c.slug}`}
                  className="group flex items-center gap-6 py-6"
                >
                  <span className="font-mono text-[11px] font-bold tracking-[2px] text-brand/35 w-9 shrink-0">
                    {c.code}
                  </span>
                  <span className="font-serif text-[clamp(1.2rem,2.6vw,1.8rem)] leading-[1.15] tracking-[-0.03em] text-brand/60 group-hover:text-brand transition-colors flex-1">
                    {c.title}
                  </span>
                  <span className="hidden sm:block text-[12px] font-semibold text-brand/40 tabular-nums">
                    {getCoursesInCategory(c.code).length} courses
                  </span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="shrink-0 text-brand/40 transition-transform group-hover:rotate-45 group-hover:text-brand"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
