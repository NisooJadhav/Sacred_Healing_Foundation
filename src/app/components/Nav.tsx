"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useCart } from "../context/CartContext";

const navLinks = [
  {
    name: "Home",
    href: "/",
    hasDropdown: false,
  },
  {
    name: "Reiki",
    href: "/reiki",
    hasDropdown: true,
    dropdownItems: [
      { name: "Usui Reiki Level 1 & 2", href: "/reiki/#level-1-2" },
      { name: "Usui Reiki Level 3a & 3b", href: "/reiki/#level-3" },
      { name: "Usui Reiki Grandmaster", href: "/reiki/#grandmaster" },
      { name: "Reiki Grandmaster (Level 1 to GM)", href: "/reiki/#complete" },
      { name: "Money Reiki", href: "/reiki/#money" },
      { name: "Karuna Reiki", href: "/reiki/#karuna" },
      { name: "Ancestral Family Reiki Healing", href: "/reiki/#ancestral" },
    ],
    image: "/reiki.png",
    description: "Energy healing modalities",
  },
  {
    name: "Healing",
    href: "/healing",
    hasDropdown: true,
    dropdownItems: [
      { name: "Crystal Healing Therapy", href: "/healing/#crystal" },
      { name: "EFT Therapy", href: "/healing/#eft" },
      { name: "Akashic Record", href: "/healing/#akashic" },
      { name: "Healing with RHF", href: "/healing/#rhf" },
      { name: "What We Cure", href: "/healing/#cure" },
      { name: "How We Cure", href: "/healing/#process" },
    ],
    image: "/healing.png",
    description: "Holistic healing therapies",
  },
  {
    name: "Courses",
    href: "/courses",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Usui Reiki Level 1",
        href: "/courses/usui-reiki-level-1",
      },
      {
        name: "Usui Reiki Level 2",
        href: "/courses/usui-reiki-level-2",
      },
      {
        name: "Usui Reiki Master",
        href: "/courses/usui-reiki-master",
      },
      {
        name: "Karuna Reiki",
        href: "/courses/karuna-reiki",
      },
      {
        name: "Money Reiki",
        href: "/courses/money-reiki",
      },
      {
        name: "Angel Therapy",
        href: "/courses/angel-therapy",
      },
      {
        name: "Tarot Card Reading",
        href: "/courses/tarot-card-reading",
      },
      {
        name: "Crystal Healing",
        href: "/courses/crystal-healing",
      },
      {
        name: "EFT (Emotional Freedom Technique)",
        href: "/courses/eft",
      },
      {
        name: "Reiki Grand Mastership",
        href: "/courses/reiki-grand-mastership",
      },
    ],
    image: "/courses.png",
    description: "Certified Spiritual & Healing Courses",
  },
  {
    name: "About",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { name: "About Poonam Thore", href: "/about" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Certifications", href: "/about/#certifications" }
    ],
    image: "/homeabout.png",
    description: "Reiki Grand Master",
  },
  {
    name: "Contact",
    href: "/#contact",
    hasDropdown: false,
  },
  {
    name: "Store",
    href: "/store",
    hasDropdown: false,
  },
  {
    name: "Cart",
    href: "/cart",
    hasDropdown: false,
  },
] as const;

export default function Navbar() {
  const phoneNumber = "8793877913";
  const message = encodeURIComponent(
    "Hi, I would like to book a consultation."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { items } = useCart();

  return (
    <>
      {/* MARQUEE */}
      <div className="bg-lotus-purple h-8 flex items-center overflow-hidden">
        <Marquee speed={50} gradient={false}>
          <span className="text-white text-sm font-medium mx-6">
            Sacred Healing Foundation ~ Poonam Thore
          </span>
          <span className="text-yellow-200 text-sm font-semibold mx-8">
            ॥ श्री कृष्ण शरणम् ॥
          </span>
          <span className="text-white text-sm font-medium mx-6">
            Sacred Healing Foundation ~ Poonam Thore
          </span>
          <span className="text-yellow-200 text-sm font-semibold mx-8">
            ॥ श्री कृष्ण शरणम् ॥
          </span>
          <span className="text-white text-sm font-medium mx-6">
            Sacred Healing Foundation ~ Poonam Thore
          </span>
          <span className="text-yellow-200 text-sm font-semibold mx-8">
            ॥ श्री कृष्ण शरणम् ॥
          </span>
          <span className="text-white text-sm font-medium mx-6">
            Sacred Healing Foundation ~ Poonam Thore
          </span>
          <span className="text-yellow-200 text-sm font-semibold mx-8">
            ॥ श्री कृष्ण शरणम् ॥
          </span>
        </Marquee>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-25 bg-white backdrop-blur-xl border-b border-purple-100 shadow-sm">
        <nav className="max-w-8xl">
          <div className="pl-15 flex h-20 items-center justify-between">
            {/* LEFT: LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0 -ml-12"
            >
              <div className="relative h-14 w-48 sm:h-16 sm:w-56">
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
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="relative text-gray-700 font-semibold tracking-wide transition-all duration-300
                    after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r 
                    after:from-lotus-pink after:to-purple-600 after:transition-all after:duration-300 
                    hover:after:w-full hover:text-purple-600 flex items-center gap-1"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                    {link.name === "Cart" && (
                      <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[var(--color-lotus-gold)] text-white">
                        {items.length}
                      </span>
                    )}
                  </Link>

                  {/* DROPDOWN MENU */}
                  {link.hasDropdown &&
                    activeDropdown === link.name &&
                    link.dropdownItems && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden min-w-[500px]">
                          <div className="flex">
                            {/* Left side - Links */}
                            <div className="flex-1 p-4">
                              <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4">
                                {link.description}
                              </h3>
                              <div className="space-y-2">
                                {link.dropdownItems.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-2.5 text-gray-700 hover:text-purple-600 
                                  hover:bg-purple-50 rounded-lg transition-all duration-200 font-medium"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Right side - Image */}
                            {link.image && (
                              <div className="w-48 bg-gradient-to-br from-purple-100 to-lotus-pink flex items-center justify-center">
                                <div className="relative w-full h-full overflow-hidden shadow-lg">
                                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-lotus-pink-600/20"></div>
                                  <Image
                                    src={link.image}
                                    alt={link.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>

            {/* RIGHT: CTA */}
            <div className="hidden lg:flex flex-shrink-0 pr-10">
              <Link
                href={whatsappLink}
                className="rounded-full bg-gradient-to-r from-lotus-pink to-lotus-purple
                px-6 py-3 text-white font-bold tracking-wide shadow-lg
                transition-all duration-300 hover:scale-105 hover:shadow-xl"
                target="_blank"
              >
                Book Consultation
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-purple-600 p-2 mr-4"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-purple-600 transition-all duration-300 ${
                    open ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-purple-600 transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-purple-600 transition-all duration-300 ${
                    open ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="lg:hidden pb-6 pt-2 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col gap-2 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-4 shadow-xl border border-purple-100">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => !link.hasDropdown && setOpen(false)}
                        className="flex-1 text-gray-700 font-semibold hover:text-purple-600 transition px-4 py-3"
                      >
                        {link.name}
                        {link.name === "Cart" && (
                          <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[var(--color-lotus-gold)] text-white">
                            {items.length}
                          </span>
                        )}
                      </Link>
                      {link.hasDropdown && (
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === link.name ? null : link.name
                            )
                          }
                          className="p-3 text-purple-600"
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${
                              mobileDropdown === link.name ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {link.hasDropdown &&
                      mobileDropdown === link.name &&
                      link.dropdownItems && (
                        <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top duration-200">
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-purple-600 
                            hover:bg-white rounded-lg transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
                <Link
                  href={whatsappLink}
                  onClick={() => setOpen(false)}
                  className="mt-4 text-center rounded-full bg-gradient-to-r from-lotus-pink to-lotus-purple
                  px-6 py-3 text-white font-bold shadow-lg hover:shadow-xl transition-all"
                  target="_blank"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
