"use client";

import Link from "next/link";

export default function ReikiPage() {
  const phoneNumber = "8793877913";
  const message = encodeURIComponent(
    "Hi, I would like to book a consultation."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <main
      className="bg-gradient-to-b from-purple-50 to-white"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      {/* ================= HERO ================= */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold text-lotus-purple mb-6"
          data-aos="fade-up"
        >
          Reiki Healing & Attunements
        </h1>
        <p
          className="text-lg text-gray-700 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Reiki is a gentle yet powerful energy healing practice that supports
          physical, emotional, mental, and spiritual well-being.
        </p>
      </section>

      {/* ================= LEVEL 1 & 2 ================= */}
      <section
        id="level-1-2"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Usui Reiki Level 1 & 2
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Level 1 opens the channel to Reiki energy and focuses on self-healing.
          Level 2 deepens the flow of energy using sacred Reiki symbols.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Self-healing and hands-on healing techniques",
            "Energy cleansing and grounding practices",
            "Distance healing using Reiki symbols",
            "Emotional balance and stress reduction",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= LEVEL 3 ================= */}
      <section
        id="level-3"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Usui Reiki Level 3a & 3b
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Reiki 3a & 3b focus on spiritual growth, mastery, and higher
          consciousness healing.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Advanced Reiki symbols and techniques",
            "Deep emotional and karmic healing",
            "Spiritual awakening and intuition strengthening",
            "Healing at soul and consciousness levels",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= GRANDMASTER ================= */}
      <section
        id="grandmaster"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Usui Reiki Grandmaster
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          This level prepares healers to guide others with responsibility,
          integrity, and spiritual leadership.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Advanced attunement processes",
            "Energetic responsibility and discipline",
            "Healing for groups and communities",
            "Spiritual leadership development",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= COMPLETE ================= */}
      <section
        id="complete"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Reiki Grandmaster (Complete)
        </h2>
        <p
          className="text-gray-700 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A complete Reiki journey integrating all levels into one structured
          spiritual path.
        </p>
      </section>

      {/* ================= MONEY REIKI ================= */}
      <section
        id="money"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Money Reiki
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Money Reiki works on energetic blocks related to abundance and
          prosperity.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Healing money-related fears and blocks",
            "Abundance and prosperity activation",
            "Improved confidence and clarity",
            "Energetic alignment with success",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= KARUNA ================= */}
      <section
        id="karuna"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Karuna Reiki
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Karuna Reiki focuses on compassion-based healing and karmic release.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Compassion-based healing",
            "Healing past traumas and karmic issues",
            "Heart-centered spiritual growth",
            "Enhanced intuitive abilities",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= ANCESTRAL ================= */}
      <section
        id="ancestral"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Ancestral Family Reiki Healing
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Ancestral Reiki Healing clears inherited karmic and emotional patterns.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Healing generational trauma",
            "Releasing ancestral karmic patterns",
            "Restoring family harmony",
            "Emotional freedom and peace",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="px-6 py-20 text-center bg-lotus-section"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-semibold text-lotus-purple mb-4">
          Begin Your Reiki Journey
        </h3>
        <p
          className="text-gray-700 mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          If you feel called to healing, growth, and inner balance, Reiki can be
          a transformative path.
        </p>
        <Link
          href={whatsappLink}
          target="_blank"
          className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Contact for Consultation
        </Link>
      </section>
    </main>
  );
}