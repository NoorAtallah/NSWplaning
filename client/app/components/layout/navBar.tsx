"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

// TODO: replace with the confirmed eSkilled LMS login URL once eSkilled provides it.
const LEARNER_PORTAL_URL = "#";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" }, // TODO: page not built yet
  { label: "For Organisations", href: "/organisations" }, // TODO: page not built yet
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 0;

  return (
    <header className="bg-white z-50 relative">

      {/* MAIN NAV ROW */}
      <div className="flex items-center justify-between px-6 md:px-14 h-[64px] border-b border-brand/6">

        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <Image
            src="/4.png"
            alt="NSW Planning & Management"
            width={110}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold text-brand/60 hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* LEARNER PORTAL — eSkilled LMS */}
          <Link
            href={LEARNER_PORTAL_URL}
            className="hidden sm:inline-flex items-center gap-1.5 border border-brand/15 text-brand text-[12px] font-bold px-4 py-2.5 rounded-lg hover:bg-brand/5 transition-colors whitespace-nowrap"
          >
            <GraduationCap size={15} strokeWidth={2} />
            Learner Portal
          </Link>

          {/* CART */}
          <Link
            href="/cart"
            className="relative flex items-center justify-center w-9 h-9 text-brand/50 hover:text-brand transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={20} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-brand text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* CTA — hidden on xs, visible sm+ */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center bg-brand text-white text-[12px] font-bold px-4 py-2.5 rounded-lg hover:bg-brand-dark transition-colors whitespace-nowrap"
          >
            Enquire Now →
          </Link>

          {/* HAMBURGER — mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-brand/10 text-brand/60 hover:text-brand transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <X size={18} strokeWidth={2} />
              : <Menu size={18} strokeWidth={2} />
            }
          </button>

        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-brand/8 px-6 py-4 flex flex-col gap-1">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[14px] font-semibold text-brand/65 hover:text-brand hover:bg-brand/4 px-3 py-2.5 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 pt-3 border-t border-brand/8 flex flex-col gap-2">
            <Link
              href={LEARNER_PORTAL_URL}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 border border-brand/15 text-brand text-[14px] font-bold px-5 py-3 rounded-lg hover:bg-brand/5 transition-colors"
            >
              <GraduationCap size={16} strokeWidth={2} />
              Learner Portal
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center bg-brand text-white text-[14px] font-bold px-5 py-3 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Enquire Now →
            </Link>
            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-[13px] font-semibold text-brand/50 hover:text-brand py-2.5 transition-colors"
            >
              <ShoppingCart size={15} strokeWidth={1.8} />
              Cart ({cartCount} items)
            </Link>
          </div>

        </div>
      )}

    </header>
  );
}