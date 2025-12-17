"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Store", href: "/store" },
  { name: "Consult", href: "/consult" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-lotus-bg/90 backdrop-blur-xl border-b border-lotus-purple/10">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* LEFT: LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-36">
              <Image
                src="/logo.png"
                alt="Sacred Healing Foundation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* CENTER: LINKS (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-lotus-text font-medium tracking-wide transition-all duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-lotus-gold
                after:transition-all after:duration-300 hover:after:w-full hover:text-lotus-purple"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT: CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/consult"
              className="rounded-full bg-gradient-to-r from-lotus-pink to-lotus-purple
              px-6 py-3 text-white font-semibold tracking-wide shadow-sacred
              transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Book Consultation
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-lotus-purple"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-lotus-purple"></span>
              <span className="block h-0.5 w-6 bg-lotus-purple"></span>
              <span className="block h-0.5 w-6 bg-lotus-purple"></span>
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden pb-6 pt-2 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4 rounded-2xl bg-lotus-section p-6 shadow-sacred">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lotus-text font-medium hover:text-lotus-purple transition"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/consult"
                onClick={() => setOpen(false)}
                className="mt-4 text-center rounded-full bg-gradient-to-r from-lotus-pink to-lotus-purple
                px-6 py-3 text-white font-semibold shadow-sacred"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
