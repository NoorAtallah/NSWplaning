"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock, MonitorPlay } from "lucide-react";
import { courseHref, type CatalogueCourse } from "../../data/catalogue";

/** One course in a grid. The whole card is the link. */
export function CourseCard({
  course,
  comingSoon = false,
}: {
  course: CatalogueCourse;
  comingSoon?: boolean;
}) {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.div
      className="h-full"
      initial="rest"
      animate="rest"
      whileHover={reduce ? undefined : "hover"}
      variants={{ rest: { y: 0 }, hover: { y: -6 } }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      <Link
        href={courseHref(course)}
        className="group flex h-full flex-col rounded-[20px] bg-white p-7 ring-1 ring-brand/10 hover:ring-brand/30 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] font-bold tracking-[2px] text-brand/45">
            {course.code}
          </span>
          {comingSoon && (
            <span className="rounded-full bg-sand px-3 py-1 text-[10.5px] font-bold tracking-[0.5px] text-brand/60">
              Coming soon
            </span>
          )}
        </div>

        <h3 className="font-serif text-[22px] leading-[1.15] tracking-[-0.03em] text-brand mt-5">
          {course.title}
        </h3>

        <p className="text-[13.5px] font-medium text-brand/55 leading-[1.8] mt-4 line-clamp-3">
          {course.overview}
        </p>

        <div className="mt-auto pt-7">
          <div className="flex items-end justify-between gap-4 border-t border-brand/10 pt-5">
            <ul className="flex min-w-0 flex-col gap-2 text-[12px] font-semibold text-brand/60">
              <li className="flex items-start gap-2">
                <Clock
                  size={14}
                  strokeWidth={2}
                  className="mt-[2px] shrink-0 text-mint-dark"
                  aria-hidden="true"
                />
                <span>{course.duration}</span>
              </li>
              <li className="flex items-start gap-2">
                <MonitorPlay
                  size={14}
                  strokeWidth={2}
                  className="mt-[2px] shrink-0 text-mint-dark"
                  aria-hidden="true"
                />
                <span>{course.delivery}</span>
              </li>
            </ul>

            <motion.span
              variants={{
                rest: { rotate: 0, opacity: 0.45 },
                hover: { rotate: 45, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-brand ring-1 ring-brand/15"
              aria-hidden="true"
            >
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
