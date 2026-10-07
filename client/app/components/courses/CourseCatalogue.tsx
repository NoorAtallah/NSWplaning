"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { courses as categories } from "../../data/courses";
import { catalogue } from "../../data/catalogue";
import { CourseCard } from "./CourseCard";
import { SHELL } from "./parts";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Filter by category, search by keyword, grouped by category. */
export function CourseCatalogue() {
  const reduce = useReducedMotion() ?? false;
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const groups = useMemo(() => {
    return categories
      .filter((cat) => active === "All" || cat.code === active)
      .map((cat) => ({
        cat,
        items: catalogue.filter((c) => {
          if (c.category !== cat.code) return false;
          if (!q) return true;
          return [c.code, c.title, c.overview, ...c.topics]
            .join(" ")
            .toLowerCase()
            .includes(q);
        }),
      }))
      .filter((g) => g.items.length > 0);
  }, [active, q]);

  const shown = groups.reduce((n, g) => n + g.items.length, 0);

  const pills = [
    { code: "All", label: "All courses", count: catalogue.length },
    ...categories.map((cat) => ({
      code: cat.code,
      label: cat.title,
      count: catalogue.filter((c) => c.category === cat.code).length,
    })),
  ];

  const reset = () => {
    setActive("All");
    setQuery("");
  };

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className={SHELL}>
        {/* CONTROLS */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
            role="group"
            aria-label="Filter courses by category"
          >
            {pills.map((p) => {
              const on = active === p.code;
              return (
                <button
                  key={p.code}
                  type="button"
                  onClick={() => setActive(p.code)}
                  aria-pressed={on}
                  className={`relative shrink-0 rounded-full px-5 py-3 text-[12.5px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                    on
                      ? "text-white"
                      : "text-brand/65 ring-1 ring-brand/12 hover:text-brand hover:ring-brand/35"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="catalogue-pill"
                      className="absolute inset-0 rounded-full bg-brand"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {p.label}
                    <span
                      className={`tabular-nums text-[11px] ${
                        on ? "text-white/60" : "text-brand/35"
                      }`}
                    >
                      {p.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <label className="relative block w-full shrink-0 lg:w-[280px]">
            <span className="sr-only">Search courses</span>
            <Search
              size={16}
              strokeWidth={2}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-brand/40"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, code or topic"
              className="w-full rounded-full bg-cloud py-3.5 pl-12 pr-11 text-[13.5px] font-medium text-brand ring-1 ring-brand/10 placeholder:text-brand/40 focus:outline-none focus:ring-2 focus:ring-brand [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-brand/50 hover:bg-brand/8 hover:text-brand transition-colors"
              >
                <X size={14} strokeWidth={2.5} />
              </button>
            )}
          </label>
        </div>

        <p
          className="mt-8 text-[12.5px] font-semibold text-brand/45"
          aria-live="polite"
        >
          Showing {shown} of {catalogue.length} courses
        </p>

        {/* GROUPS */}
        <div className="mt-10 flex flex-col gap-20 lg:gap-24">
          <AnimatePresence mode="popLayout" initial={false}>
            {groups.map(({ cat, items }) => {
              const comingSoon = cat.status === "Coming Soon";
              const index = categories.findIndex((c) => c.code === cat.code);
              return (
                <motion.div
                  key={cat.code}
                  layout={reduce ? false : "position"}
                  initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <div className="flex flex-wrap items-end justify-between gap-5 border-t border-brand/10 pt-8">
                    <div className="flex items-start gap-6">
                      <span className="pt-2 text-[11px] font-bold tabular-nums text-brand/30">
                        0{index + 1}
                      </span>
                      <div>
                        <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.08] tracking-[-0.04em] text-brand">
                          {cat.title}
                        </h2>
                        <p className="mt-3 max-w-xl text-[14px] font-medium leading-[1.8] text-brand/55">
                          {cat.desc}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/courses/${cat.slug}`}
                      className="group inline-flex items-center gap-2 text-[12.5px] font-bold text-brand hover:text-brand-dark transition-colors"
                    >
                      View category
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2.5}
                        className="transition-transform group-hover:rotate-45"
                      />
                    </Link>
                  </div>

                  <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout" initial={false}>
                      {items.map((course) => (
                        <motion.div
                          key={course.code}
                          layout={reduce ? false : "position"}
                          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
                          transition={{ duration: 0.35, ease: EASE }}
                        >
                          <CourseCard course={course} comingSoon={comingSoon} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* EMPTY */}
        {shown === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-[20px] bg-ice px-8 py-16 text-center"
          >
            <h2 className="font-serif text-[26px] tracking-[-0.03em] text-brand">
              No courses match &ldquo;{query.trim()}&rdquo;
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-[14px] font-medium leading-[1.8] text-brand/55">
              Try a different keyword or a course code such as NDI101, or
              clear the filters to see the whole catalogue.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-7 rounded-full bg-brand px-7 py-3.5 text-[13px] font-bold text-white hover:bg-brand-dark transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
