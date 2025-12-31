"use client";

import Link from "next/link";

export default function HealingPage() {
  const phoneNumber = "8793877913";
  const message = encodeURIComponent(
    "Hi, I would like to book a healing session."
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
          Holistic Healing Therapies
        </h1>
        <p
          className="text-lg text-gray-700 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our healing therapies work on physical, emotional, mental, and
          energetic levels. Each session is guided with intention, compassion,
          and alignment to restore balance and inner harmony.
        </p>
      </section>

      {/* ================= CRYSTAL HEALING ================= */}
      <section
        id="crystal"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Crystal Healing Therapy
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Crystal Healing uses the natural vibrational energy of crystals to
          balance chakras, cleanse the aura, and restore energetic flow. Each
          crystal works on specific frequencies to support healing and stability.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Chakra balancing and aura cleansing",
            "Emotional grounding and calmness",
            "Stress, anxiety, and fatigue relief",
            "Energy protection and positivity enhancement",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= EFT ================= */}
      <section
        id="eft"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          EFT Therapy
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Emotional Freedom Technique (EFT) combines gentle tapping with focused
          awareness to release emotional blocks stored in the body.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Release emotional pain and trauma",
            "Reduce anxiety, fear, and overthinking",
            "Improve emotional clarity and confidence",
            "Support mental and nervous system balance",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= AKASHIC ================= */}
      <section
        id="akashic"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Akashic Record Healing
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Akashic Record Healing provides access to soul-level information that
          holds patterns from past lives, ancestral memory, and soul contracts.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Clarity on life purpose and soul lessons",
            "Healing past-life and karmic blocks",
            "Resolution of repeating life patterns",
            "Deep spiritual insight and peace",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= RHF ================= */}
      <section
        id="rhf"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          Healing with RHF
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          RHF Healing integrates energy healing, intention work, and spiritual
          guidance.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Personalized healing sessions",
            "Energy cleansing and strengthening",
            "Emotional and spiritual alignment",
            "Support during challenging life phases",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= WHAT WE CURE ================= */}
      <section
        id="cure"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          What We Cure
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our healing therapies support a wide range of concerns.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {[
            "Stress, anxiety, fear, and emotional imbalance",
            "Relationship and family issues",
            "Career, financial, and confidence blocks",
            "Negative energy, fatigue, and restlessness",
            "Spiritual confusion and lack of clarity",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= HOW WE CURE ================= */}
      <section
        id="process"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          How We Cure
        </h2>
        <p
          className="text-gray-700 leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Healing is a guided and compassionate process.
        </p>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          {[
            "Understanding the client’s concern and intention",
            "Energy scanning and root cause identification",
            "Healing through suitable modalities",
            "Energy sealing, grounding, and protection",
            "Post-session guidance and support",
          ].map((item, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              {item}
            </li>
          ))}
        </ol>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="px-6 py-20 text-center bg-lotus-section"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-semibold text-lotus-purple mb-4">
          Start Your Healing Journey
        </h3>
        <p
          className="text-gray-700 mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Healing begins when intention meets guidance.
        </p>
        <Link
          href={whatsappLink}
          target="_blank"
          className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Book a Healing Session
        </Link>
      </section>
    </main>
  );
}
