import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** Shared page shell — same measure as the home page. */
export const SHELL = "max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="h-[2px] w-10 bg-gold" />
      <span className="text-[11px] font-bold tracking-[3px] uppercase text-brand/55">
        {children}
      </span>
    </span>
  );
}

export function Crumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-semibold text-brand/45">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <ChevronRight size={13} strokeWidth={2.5} aria-hidden="true" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand/70" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
