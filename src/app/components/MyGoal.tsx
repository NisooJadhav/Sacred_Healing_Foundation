"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MyGoal() {
  return (
    <section
      className="w-full bg-lotus-bg py-4"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="mx-auto max-w-6xl">
        {/* ================= BOX ================= */}
        <div
          className="relative rounded-3xl bg-lotus-section shadow-lg px-6 sm:px-10 py-12 text-center mb-5"
          data-aos="fade-up"
        >
          {/* ================= TITLE ================= */}
          <h2
            className="text-3xl sm:text-4xl text-lotus-purple mb-8 font-serif"
            data-aos="fade-up"
          >
            My Goal
          </h2>

          {/* ================= PARAGRAPHS ================= */}
          <div className="space-y-6 text-lotus-text text-base sm:text-lg leading-relaxed">
            <p data-aos="fade-up" data-aos-delay="100">
              My goal is to make authentic spiritual healing simple, practical,
              and accessible to everyone seeking inner balance and clarity.
              Healing should feel safe, empowering, and deeply transformative.
            </p>

            <p data-aos="fade-up" data-aos-delay="200">
              I aim to guide individuals toward self-healing, emotional strength,
              and spiritual awareness through ethical practices rooted in
              conscious energy work and karmic clarity.
            </p>

            <p data-aos="fade-up" data-aos-delay="300">
              By sharing structured knowledge and lived wisdom, my intention is
              to help people raise their vibration, trust their inner guidance,
              and live a peaceful, aligned, and abundant life.
            </p>
          </div>

          {/* ================= ARROW CTA ================= */}
          <Link
            href="/about"
            aria-label="Go to About page"
            className="group absolute left-1/2 -bottom-6 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-lotus-pink shadow-md transition hover:bg-lotus-gold"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <ChevronRight className="h-6 w-6 text-lotus-purple transition group-hover:translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}