"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "https://nswpm.com.au/" },
  { label: "About", href: "https://nswpm.com.au/about/" },
  { label: "Services", href: "https://nswpm.com.au/services-style-1/" },
  { label: "NDIS", href: "https://nswpm.com.au/ndis-services/" },
  { label: "Contact", href: "https://nswpm.com.au/contact/" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 0;

  return (
    <header className="bg-white z-50 relative">

      {/* MAIN NAV ROW */}
      <div className="flex items-center justify-between px-6 md:px-14 h-[64px] border-b border-[#013877]/6">

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
              className="text-[13px] font-semibold text-[#013877]/60 hover:text-[#013877] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* CART */}
          <Link
            href="https://nswpm.com.au/cart/"
            className="relative flex items-center justify-center w-9 h-9 text-[#013877]/50 hover:text-[#013877] transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={20} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#efc759] text-[#013877] text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* CTA — hidden on xs, visible sm+ */}
          <Link
            href="https://nswpm.com.au/contact/"
            className="hidden sm:inline-flex items-center bg-[#013877] text-white text-[12px] font-bold px-4 py-2.5 rounded-lg hover:bg-[#012a5a] transition-colors whitespace-nowrap"
          >
            Enquire Now →
          </Link>

          {/* HAMBURGER — mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[#013877]/10 text-[#013877]/60 hover:text-[#013877] transition-colors"
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
        <div className="md:hidden bg-white border-b border-[#013877]/8 px-6 py-4 flex flex-col gap-1">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[14px] font-semibold text-[#013877]/65 hover:text-[#013877] hover:bg-[#013877]/4 px-3 py-2.5 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 pt-3 border-t border-[#013877]/8 flex flex-col gap-2">
            <Link
              href="https://nswpm.com.au/contact/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center bg-[#013877] text-white text-[14px] font-bold px-5 py-3 rounded-lg hover:bg-[#012a5a] transition-colors"
            >
              Enquire Now →
            </Link>
            <Link
              href="https://nswpm.com.au/cart/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-[13px] font-semibold text-[#013877]/50 hover:text-[#013877] py-2.5 transition-colors"
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