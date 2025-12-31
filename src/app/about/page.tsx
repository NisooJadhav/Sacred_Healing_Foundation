"use client";

import { useState } from "react";
import Image from "next/image";

const certificates = [
  {
    title: "Reiki Healer Level 1",
    src: "/certificates/reiki_healer_level_1.png",
  },
  {
    title: "Reiki Healer Level 2",
    src: "/certificates/reiki_healer_level_2.png",
  },
  {
    title: "Reiki Healer Level 3A & 3B",
    src: "/certificates/reiki_healer_level_3a_3b.png",
  },
  {
    title: "Akashic Records",
    src: "/certificates/akashic_records.png",
  },
];

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? certificates.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === certificates.length - 1 ? 0 : i + 1));

  return (
    <main className="min-h-screen bg-lotus-bg">
      {/* ================= PROFILE IMAGE ================= */}
      <div
        className="w-full flex justify-center mt-12"
        data-aos="zoom-in"
        data-aos-duration="900"
      >
        <Image
          src="/about.png"
          width={400}
          height={400}
          alt="Profile picture of Poonam Thore"
          className="
            rounded-full
            w-[80vw]
            sm:w-[60vw]
            md:w-[35vw]
            lg:w-[20vw]
            xl:w-[15vw]
          "
        />
      </div>

      {/* ================= ABOUT INTRO ================= */}
      <section className="px-4 py-16 pt-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-lotus-purple mb-6"
            data-aos="fade-up"
          >
            About Poonam Thore
          </h2>

          <p
            className="text-lotus-text leading-relaxed text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <b>Poonam Thore</b> is a holistic wellness guide and spiritual
            educator with hands-on experience in energy healing and
            consciousness-based practices. She has successfully trained and
            supported numerous students and clients through healing sessions,
            workshops, and certified courses.
          </p>

          <p
            className="mt-5 text-lotus-text leading-relaxed text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Her expertise lies in Reiki Healing, Crystal Healing, Angel Therapy,
            Chakra Alignment, Meditation, and Energy Cleansing. Poonam’s vision
            is to spread authentic healing knowledge, encourage self-healing,
            and help individuals align with inner peace, emotional strength, and
            spiritual growth.
          </p>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section
        className="px-4 py-10 bg-lotus-section"
        id="certifications"
        data-aos="fade-up"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-lotus-purple text-center mb-10"
            data-aos="fade-up"
          >
            Certifications
          </h2>

          <div
            className="bg-white rounded-2xl shadow-sacred p-6"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <h3
              className="text-lg font-medium text-center mb-4 text-lotus-text"
              data-aos="fade-up"
            >
              {certificates[index].title}
            </h3>

            <div className="relative flex justify-center">
              <div
                className="relative w-full max-w-3xl aspect-[4/3] rounded-xl overflow-hidden border"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Image
                  src={certificates[index].src}
                  alt={certificates[index].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div
              className="flex items-center justify-between mt-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button
                onClick={prev}
                className="px-5 py-2 rounded-lg bg-lotus-purple text-white hover:opacity-90"
              >
                Previous
              </button>

              <span className="text-sm text-lotus-muted">
                {index + 1} / {certificates.length}
              </span>

              <button
                onClick={next}
                className="px-5 py-2 rounded-lg bg-lotus-purple text-white hover:opacity-90"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER JOURNEY ================= */}
      <section className="px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-lotus-purple text-center mb-10"
            data-aos="fade-up"
          >
            🌿 My Reiki Healing Experience (Founder’s Journey) 🌿
          </h2>

          <div className="space-y-6 text-lotus-text leading-relaxed text-base sm:text-lg">
            {[
              "Reiki has completely transformed my life on every level — emotionally, physically, mentally, spiritually, and even financially.",
              "Through consistent healing practice, I experienced deep emotional balance and mental clarity.",
              "One of the most visible transformations occurred in my financial life.",
              "From a health perspective, Reiki proved to be a true blessing.",
              "Reiki also strengthened my intuition and inner guidance.",
              "Reiki does not merely heal symptoms — it heals the root causes.",
            ].map((text, i) => (
              <p key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GUIDANCE & INSPIRATION ================= */}
      <section className="px-4 py-16 bg-lotus-section">
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-xl sm:text-2xl font-semibold text-lotus-purple mb-6 text-center"
            data-aos="fade-up"
          >
            🌸 Guidance & Inspiration 🌸
          </h3>

          <div className="space-y-6 text-lotus-text leading-relaxed text-base sm:text-lg">
            <p data-aos="fade-up" data-aos-delay="100">
              My journey has been deeply inspired by the philosophy that “The
              Art chooses the Artist.”
            </p>

            <p data-aos="fade-up" data-aos-delay="200">
              His belief that “Healing begins with the soul’s intent to mend”
              resonates deeply with my own experiences and spiritual path.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PATH & VISION ================= */}
      <section className="px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h3
            className="text-xl sm:text-2xl font-semibold text-lotus-purple mb-6 text-center"
            data-aos="fade-up"
          >
            🌿 My Path & Vision 🌿
          </h3>

          <div className="space-y-6 text-lotus-text leading-relaxed text-base sm:text-lg">
            <p data-aos="fade-up" data-aos-delay="100">
              My purpose is simple yet deeply heartfelt — to make Reiki
              accessible to every home.
            </p>

            <p data-aos="fade-up" data-aos-delay="200">
              Through Reiki and energy healing, my intention is to help
              individuals release emotional and karmic blockages.
            </p>

            <p data-aos="fade-up" data-aos-delay="300">
              Reiki transformed my life, and my mission is to share this divine
              healing energy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
