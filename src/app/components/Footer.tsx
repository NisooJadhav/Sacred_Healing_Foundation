"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const reikiLinks = [
    { name: "Usui Reiki Level 1 & 2", href: "/reiki/level-1-2" },
    { name: "Usui Reiki Level 3a & 3b", href: "/reiki/level-3" },
    { name: "Usui Reiki Grandmaster", href: "/reiki/grandmaster" },
    { name: "Reiki Grandmaster (Complete)", href: "/reiki/complete" },
    { name: "Money Reiki", href: "/reiki/money" },
    { name: "Karuna Reiki", href: "/reiki/karuna" },
    { name: "Ancestral Family Reiki Healing", href: "/reiki/ancestral" },
  ];

  const healingLinks = [
    { name: "Crystal Healing Therapy", href: "/healing/crystal" },
    { name: "EFT Therapy", href: "/healing/eft" },
    { name: "Akashic Record", href: "/healing/akashic" },
    { name: "Healing with RHF", href: "/healing/rhf" },
    { name: "What We Cure", href: "/healing/cure" },
    { name: "How We Cure", href: "/healing/process" },
  ];

  const transformationLinks = [
    { name: "Psychic Therapy", href: "/transformation/psychic" },
    { name: "Tarot Card Reading", href: "/transformation/tarot" },
    { name: "Osho Zen Tarot Card Reading", href: "/transformation/osho-tarot" },
    { name: "Osho Zen Tarot", href: "/transformation/osho-zen" },
    { name: "Gratitude Practices", href: "/transformation/gratitude" },
  ];

  const aboutLinks = [
    { name: "About Poonam Thore", href: "/about/poonam" },
    { name: "Testimonials", href: "/about/testimonials" },
    { name: "Healing Temple", href: "/about/temple" },
    { name: "FAQ's", href: "/about/faqs" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "Book Consultation", href: "/consult" },
  ];

  return (
    <>
        <footer className="bottom-0 fixed w-full bg-lotus-purple text-white">
        <div className="mx-auto max-w-7xl py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
            {/* LOGO & INFO - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6">
                <Link href="/" className="inline-block">
                <div className="relative h-16 w-56">
                    <Image
                    src="/logo.png"
                    alt="Sacred Healing Foundation"
                    fill
                    priority
                    />
                </div>
                </Link>
                <p className="text-purple-200 text-sm leading-relaxed">
                Sacred Healing Foundation is dedicated to holistic healing and spiritual transformation through ancient wisdom and modern techniques.
                </p>
                <div className="space-y-3">
                <div className="flex items-center gap-3 text-purple-200">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+918793877913" className="hover:text-white transition-colors">
                    +91 87938 77913
                    </a>
                </div>
                <div className="flex items-center gap-3 text-purple-200">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">poonamthore.com</span>
                </div>
                </div>
                <div className="text-yellow-300 font-semibold text-lg">
                ॥ श्री कृष्ण शरणम् ॥
                </div>
            </div>

            {/* REIKI */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-pink-300">Reiki</h3>
                <ul className="space-y-2">
                {reikiLinks.map((link) => (
                    <li key={link.name}>
                    <Link
                        href={link.href}
                        className="text-purple-200 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* HEALING */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-pink-300">Healing</h3>
                <ul className="space-y-2">
                {healingLinks.map((link) => (
                    <li key={link.name}>
                    <Link
                        href={link.href}
                        className="text-purple-200 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* TRANSFORMATION */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-pink-300">Transformation</h3>
                <ul className="space-y-2">
                {transformationLinks.map((link) => (
                    <li key={link.name}>
                    <Link
                        href={link.href}
                        className="text-purple-200 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* ABOUT & QUICK LINKS */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-pink-300">About</h3>
                <ul className="space-y-2 mb-6">
                {aboutLinks.map((link) => (
                    <li key={link.name}>
                    <Link
                        href={link.href}
                        className="text-purple-200 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
                
                <h3 className="text-lg font-bold mb-4 text-pink-300">Quick Links</h3>
                <ul className="space-y-2">
                {quickLinks.map((link) => (
                    <li key={link.name}>
                    <Link
                        href={link.href}
                        className="text-purple-200 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            </div>

            {/* DIVIDER */}
            <div className="mt-6 pt-6 border-t border-white-700 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-purple-300 text-sm">
                © {new Date().getFullYear()} Sacred Healing Foundation. All rights reserved.
                </p>
                <div className="flex gap-6">
                <Link
                    href="/privacy"
                    className="text-purple-300 text-sm hover:text-white transition-colors"
                >
                    Privacy Policy
                </Link>
                <Link
                    href="/terms"
                    className="text-purple-300 text-sm hover:text-white transition-colors"
                >
                    Terms of Service
                </Link>
                </div>
            </div>
            </div>
        </div>
        </footer>
        <div className="fixed bottom-0 w-full text-center py-2.5 bg-black text-white">
        <p className="text-sm">
            Made with ❤️ by{" "}
            <a href="https://aviorta.com/" target="_blank" rel="noreferrer">
            Avoirta LLC
            </a>
        </p>
        </div>
    </>
  );
}