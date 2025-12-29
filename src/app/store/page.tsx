"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const storeData = [
  {
    title: "Raw Crystals",
    slug: "raw-crystals",
    shortDesc: "Natural unpolished crystals for healing, protection & meditation.",
    images: ["/products/crystal-1.jpg"],
  },
  {
    title: "Crystal Bracelets & Pendants",
    slug: "crystal-jewelry",
    shortDesc: "Wearable crystal energy for daily protection & balance.",
    images: ["/products/pendant-1.jpg"],
  },
  {
    title: "Angel Crystals & Angels",
    slug: "angel-crystals",
    shortDesc: "High-vibration angelic crystals & carved angels.",
    images: ["/products/angel-1.jpeg"],
  },
  {
    title: "Pyrite & Wealth Crystals",
    slug: "wealth-crystals",
    shortDesc: "Abundance & protection crystals for money and success.",
    images: ["/products/pyrite.jpeg"],
  },
  {
    title: "Towers, Balls & Wands",
    slug: "crystal-tools",
    shortDesc: "Advanced tools for healing, grids & meditation.",
    images: ["/products/crystal-tower-1.jpeg"],
  },
  {
    title: "Pyramids & Wish Grids",
    slug: "manifestation-tools",
    shortDesc: "Manifestation & energy amplification tools.",
    images: ["/products/pyramid-1.jpeg"],
  },
  {
    title: "Feng Shui & Wellness",
    slug: "fengshui-wellness",
    shortDesc: "Wealth ingots, wish boxes, Reiki-infused wellness tools.",
    images: ["/products/feng-shui-ingot.jpeg"],
  },
];

export default function StorePage() {
  return (
    <section className="min-h-screen bg-lotus-bg px-4 py-14">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-lotus-purple mb-4">
          Sacred Healing Store
        </h1>
        <p className="text-lotus-muted mb-10 max-w-2xl">
          Spiritually cleansed, Reiki-charged products created to support healing,
          protection, manifestation, and inner balance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeData.map((cat) => (
            <Link
              key={cat.slug}
              href={`/store/${cat.slug}`}
              className="group rounded-2xl bg-lotus-section shadow-md hover:shadow-xl transition overflow-hidden"
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