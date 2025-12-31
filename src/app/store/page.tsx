"use client";

import Link from "next/link";
import Image from "next/image";

const storeData = [
  {
    title: "Raw Crystals",
    slug: "raw-crystals",
    shortDesc: "Natural unpolished crystals for healing, protection & meditation.",
    images: ["/products/crystal-1.jpg"],
  },
  {
    title: "Crystal Bracelets & Pendants",
    slug: "crystal-bracelets-pendants",
    shortDesc: "Wearable crystal energy for daily protection & balance.",
    images: ["/products/bracelet-1.jpeg"],
  },
  {
    title: "Angel Crystals",
    slug: "angel-crystals",
    shortDesc: "High-vibration crystals for angelic connection and guidance.",
    images: ["/products/angel-1.jpeg"],
  },
  {
    title: "Crystal Angels",
    slug: "crystal-angels",
    shortDesc: "Hand-carved crystal angels for peace, protection & comfort.",
    images: ["/products/angel-2.webp"],
  },
  {
    title: "Pyrite & Wealth Crystals",
    slug: "pyrite-wealth-crystals",
    shortDesc: "Abundance and protection crystals for money and success.",
    images: ["/products/pyrite.png"],
  },
  {
    title: "Silver Crystal Pendants",
    slug: "silver-crystal-pendants",
    shortDesc: "Natural crystal pendants set in silver for balance & intuition.",
    images: ["/products/silver-crystal-1.jpeg"],
  },
  {
    title: "Crystal Towers, Balls & Wands",
    slug: "crystal-towers-balls-wands",
    shortDesc: "Advanced crystal tools for healing, focus & energy work.",
    images: ["/products/crystal-tower-1.jpeg"],
  },
  {
    title: "Crystal Pyramids",
    slug: "crystal-pyramids",
    shortDesc: "Energy amplification tools for manifestation & balance.",
    images: ["/products/pyramid-1.jpeg"],
  },
  {
    title: "Crystal Wish Grid Box",
    slug: "crystal-wish-grid-box",
    shortDesc: "Sacred manifestation box with crystals and grid.",
    images: ["/products/crystal-wish-grid-box.webp"],
  },
  {
    title: "Wish Box",
    slug: "wish-box",
    shortDesc: "Beginner-friendly manifestation and intention box.",
    images: ["/products/wish-box.jpeg"],
  },
  {
    title: "Feng Shui Wealth Ingot",
    slug: "feng-shui-wealth-ingot",
    shortDesc: "Prosperity symbol for wealth attraction and retention.",
    images: ["/products/feng-shui-ingot.png"],
  },
  {
    title: "Reiki Charged Water Bottle",
    slug: "reiki-charged-water-bottle",
    shortDesc: "Intention-based hydration tool for daily mindfulness.",
    images: ["/products/reiki-charged-bottle.jpg"],
  },
  {
    title: "Reiki Infused Wellness Oil",
    slug: "reiki-infused-wellness-oil",
    shortDesc: "Reiki-infused oil for calmness, meditation & rituals.",
    images: ["/products/reiki-wellness-oil.jpg"],
  },
];

export default function StorePage() {
  return (
    <section
      className="min-h-screen bg-lotus-bg px-4 py-14"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <h1
          className="text-3xl sm:text-4xl font-semibold text-lotus-purple mb-4"
          data-aos="fade-up"
        >
          Sacred Healing Store
        </h1>

        <p
          className="text-lotus-muted mb-10 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Spiritually cleansed, Reiki-charged products created to support healing,
          protection, manifestation, and inner balance.
        </p>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeData.map((cat, index) => (
            <Link
              key={cat.slug}
              href={`/store/${cat.slug}`}
              className="group rounded-2xl bg-lotus-section shadow-md hover:shadow-xl transition overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="relative h-56">
                <Image
                  src={cat.images[0]}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-lotus-text group-hover:text-lotus-purple">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm text-lotus-muted">
                  {cat.shortDesc}
                </p>
                <span className="mt-4 inline-block text-sm text-lotus-gold font-medium">
                  View Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
