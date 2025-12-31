"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const phoneNumber = "8793877913";
  const message = encodeURIComponent(
    "Hi, I would like to book a consultation."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const reikiLinks = [
    { name: "Usui Reiki Level 1 & 2", href: "/reiki/#level-1-2" },
    { name: "Usui Reiki Level 3a & 3b", href: "/reiki/#level-3" },
    { name: "Usui Reiki Grandmaster", href: "/reiki/#grandmaster" },
    { name: "Reiki Grandmaster (Complete)", href: "/reiki/#complete" },
    { name: "Money Reiki", href: "/reiki/#money" },
    { name: "Karuna Reiki", href: "/reiki/#karuna" },
    { name: "Ancestral Family Reiki Healing", href: "/reiki/#ancestral" },
  ];

  const healingLinks = [
    { name: "Crystal Healing Therapy", href: "/healing/#crystal" },
    { name: "EFT Therapy", href: "/healing/#eft" },
    { name: "Akashic Record", href: "/healing/#akashic" },
    { name: "Healing with RHF", href: "/healing/#rhf" },
    { name: "What We Cure", href: "/healing/#cure" },
    { name: "How We Cure", href: "/healing/#process" },
  ];

  const coursesLinks = [
    { name: "Usui Reiki Level 1", href: "/courses/usui-reiki-level-1" },
    { name: "Usui Reiki Level 2", href: "/courses/usui-reiki-level-2" },
    { name: "Usui Reiki Master", href: "/courses/usui-reiki-master" },
    { name: "Karuna Reiki", href: "/courses/karuna-reiki" },
    { name: "Money Reiki", href: "/courses/money-reiki" },
    { name: "Angel Therapy", href: "/courses/angel-therapy" },
    { name: "Tarot Card Reading", href: "/courses/tarot-card-reading" },
    { name: "Crystal Healing", href: "/courses/crystal-healing" },
    { name: "EFT (Emotional Freedom Technique)", href: "/courses/eft" },
    { name: "Reiki Grand Mastership", href: "/courses/reiki-grand-mastership" },
  ];

  const aboutLinks = [
    { name: "About Poonam Thore", href: "/about" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Certifications", href: "/about/#certifications" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "Book Consultation", href: whatsappLink, target: "_blank" },
  ];

  return (
    <footer
      className="bottom-0 w-full bg-lotus-purple text-white"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="px-10 max-w-8xl pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* LOGO & INFO */}
          <div
            className="lg:col-span-2 space-y-6"
            data-aos="fade-up"
          >
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
              Sacred Healing Foundation is dedicated to holistic healing and
              spiritual transformation through ancient wisdom and modern
              techniques.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-purple-200">
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+918793877913"
                  className="hover:text-white transition-colors"
                >
                  +91 87938 77913
                </a>
              </div>

              <div className="flex items-center gap-3 text-purple-200">
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:sacredhealingfoundation2712@gmail.com"
                  className="hover:text-white transition-colors text-sm break-all"
                >
                  sacredhealingfoundation2712@gmail.com
                </a>
              </div>
            </div>

            <div className="text-yellow-300 font-semibold text-lg">
              ॥ श्री कृष्ण शरणम् ॥
            </div>
          </div>

          {/* REIKI */}
          <div data-aos="fade-up" data-aos-delay="100">
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
          <div data-aos="fade-up" data-aos-delay="150">
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

          {/* COURSES */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-bold mb-4 text-pink-300">Courses</h3>
            <ul className="space-y-2">
              {coursesLinks.map((link) => (
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
          <div data-aos="fade-up" data-aos-delay="250">
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
                    target={link.target}
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
        <div
          className="mt-6 pt-6 border-t border-white-700 pb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-300 text-sm">
              © {new Date().getFullYear()} Sacred Healing Foundation. All rights
              reserved.
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

      {/* CREDIT */}
      <div className="text-center py-3 bg-black text-white">
        <p className="text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://aviorta.com/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-300"
          >
            Avoirta LLC
          </a>
        </p>
      </div>
    </footer>
  );
}
