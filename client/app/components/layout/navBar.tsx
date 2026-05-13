"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
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
    <nav className="bg-white z-50 relative">
      <div className="flex items-center justify-between px-14 h-[76px]">

        {/* LOGO */}
        <Link href="/" className="font-serif text-[22px] text-[#013877] font-normal tracking-tight">
         <img
         src="./4.png"
         alt="NSW Planning & Management logo"
         className="h-18 w-auto"
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

        {/* RIGHT — CART + CTA */}
        <div className="flex items-center gap-5">

          {/* CART */}
          <Link
            href="https://nswpm.com.au/cart/"
            className="relative flex items-center justify-center text-[#013877]/60 hover:text-[#013877] transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={22} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#efc759] text-[#013877] text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* CTA */}
          <Link
            href="https://nswpm.com.au/contact/"
            className="bg-[#013877] text-white text-[13px] font-bold px-6 py-3 rounded-lg hover:bg-[#012a5a] transition-colors"
          >
            Enquire Now →
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1.5 ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#013877] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#013877] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#013877] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#013877]/8 px-14 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[14px] font-semibold text-[#013877]/70 hover:text-[#013877] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://nswpm.com.au/cart/"
            onClick={() => setMenuOpen(false)}
            className="text-[14px] font-semibold text-[#013877]/70 hover:text-[#013877] transition-colors flex items-center gap-2"
          >
            <ShoppingCart size={16} strokeWidth={1.8} />
            Cart ({cartCount} items)
          </Link>
        </div>
      )}
    </nav>
  );
}