"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Check,
} from "lucide-react";

import { useCart } from "../context/CartContext";

/* ------------------------------------------------------------------ */
/* Types */
/* ------------------------------------------------------------------ */

type Props = {
  slug: string;
};

type StoreCategory = {
  title: string;
  slug: string;
  basePrice: number;
  description: string[];
  images: string[];
};

/* ------------------------------------------------------------------ */
/* Data */
/* ------------------------------------------------------------------ */

const storeCategories: StoreCategory[] = [
  {
    title: "Raw Crystals",
    slug: "raw-crystals",
    basePrice: 100,
    description: [
      "100% natural, unpolished stones sourced in their raw energetic form.",
      "Used for energy cleansing, protection, meditation, Reiki healing, and chakra & aura balancing.",
      "Supports manifestation practices and intention setting.",
      "Helps reduce stress, negativity, and emotional imbalance while enhancing clarity.",
      "Raises vibration and supports spiritual growth.",
      "Physically and energetically cleansed, Reiki charged, and intention activated.",
      "Natural variations in size, shape, and color are expected.",
      "Prices vary based on crystal type, size, and weight.",
    ],
    images: [
      "/products/crystal-1.jpg",
      "/products/crystal-2.jpg",
      "/products/crystal-3.jpg",
      "/products/crystal-4.jpg",
    ],
  },

  {
    title: "Crystal Bracelets & Pendants",
    slug: "crystal-bracelets-pendants",
    basePrice: 100,
    description: [
      "Made with 100% natural crystals for daily wearable energy support.",
      "Helps with protection, emotional balance, meditation, and manifestation.",
      "Enhances positivity, confidence, and emotional stability.",
      "Protects from negative and draining energies.",
      "Cleansed, Reiki charged, and intention activated before delivery.",
      "Ready-to-wear jewelry pieces suitable for everyday use.",
      "Natural variations in crystals may occur.",
      "Prices vary based on crystal type and design.",
    ],
    images: [
      "/products/bracelet-1.jpeg",
      "/products/bracelet-2.jpg",
      "/products/bracelet-3.jpg",
      "/products/bracelet-4.jpg",
      "/products/pendant-1.jpg",
      "/products/pendant-2.jpeg",
      "/products/pendant-3.jpeg",
      "/products/pendant-4.jpeg",
      "/products/pendant-5.jpeg",
    ],
  },

  {
    title: "Angel Crystals",
    slug: "angel-crystals",
    basePrice: 100,
    description: [
      "High-vibration crystals selected for angelic connection and guidance.",
      "Supports angel protection, emotional healing, inner peace, and calmness.",
      "Strengthens intuition and spiritual awareness.",
      "Energetically cleansed and Reiki charged.",
      "Angelic intention activated for higher guidance.",
      "Ideal for meditation, prayer, and spiritual practices.",
      "Prices vary based on crystal type and size.",
    ],
    images: ["/products/angel-1.jpeg", "/products/angel-2.webp"],
  },

  {
    title: "Crystal Angels",
    slug: "crystal-angels",
    basePrice: 100,
    description: [
      "Hand-carved crystal angel figurines crafted from natural crystals.",
      "Provides divine protection, emotional comfort, and spiritual support.",
      "Supports Reiki healing, meditation, and peaceful energy at home.",
      "Promotes harmony, calmness, and positive vibrations.",
      "Can be placed in home, altar, bedside, or carried for protection.",
      "Reiki charged and intention activated.",
    ],
    images: ["/products/angel-1.jpeg", "/products/angel-2.webp"],
  },

  {
    title: "Pyrite & Wealth Crystals",
    slug: "pyrite-wealth-crystals",
    basePrice: 100,
    description: [
      "Abundance and protection crystals associated with wealth and success.",
      "Helps attract money, prosperity, and new opportunities.",
      "Boosts confidence, motivation, and grounding.",
      "Provides strong protection from negative and unstable energies.",
      "Used in wallet, desk, cash box, meditation, or manifestation rituals.",
      "Cleansed, Reiki charged, and abundance intention activated.",
      "Prices vary depending on size and weight.",
    ],
    images: ["/products/pyrite.png"],
  },

  {
    title: "Silver Crystal Pendants",
    slug: "silver-crystal-pendants",
    basePrice: 100,
    description: [
      "Natural healing crystals set in high-quality silver.",
      "Supports emotional balance, chakra alignment, and intuition.",
      "Provides energetic protection and clarity.",
      "Ideal for daily wear and meditation practices.",
      "Reiki charged and intention activated.",
      "Prices depend on crystal type and silver craftsmanship.",
    ],
    images: [
      "/products/silver-crystal-1.jpeg",
      "/products/silver-crystal-2.jpeg",
    ],
  },

  {
    title: "Crystal Towers, Balls & Wands",
    slug: "crystal-towers-balls-wands",
    basePrice: 100,
    description: [
      "Includes crystal towers, spheres (balls), and wands.",
      "Available in Clear Quartz, Amethyst, Rose Quartz, Green Aventurine, and 7 Chakra crystals.",
      "Supports energy flow, chakra balancing, healing, and focus.",
      "Used on desks, altars, meditation spaces, and healing grids.",
      "Cleansed and Reiki charged before delivery.",
      "Each piece is unique in shape and energy.",
    ],
    images: [
      "/products/crystal-tower-1.jpeg",
      "/products/crystal-tower-2.jpeg",
      "/products/crystal-balls.jpeg",
      "/products/crystal-wand.jpeg",
    ],
  },

  {
    title: "Crystal Pyramids",
    slug: "crystal-pyramids",
    basePrice: 100,
    description: [
      "Energy-amplifying crystal pyramids for healing and manifestation.",
      "Available in Clear Quartz, Rose Quartz, Amethyst, Green Aventurine, and 7 Chakra.",
      "Supports chakra and aura balancing.",
      "Helps amplify intentions and manifestation energy.",
      "Ideal for home, office, meditation, and healing spaces.",
      "Reiki charged and intention activated.",
      "Especially beneficial for healers and practitioners.",
    ],
    images: ["/products/pyramid-1.jpeg", "/products/pyramid-2.jpeg"],
  },

  {
    title: "Crystal Wish Grid Box",
    slug: "crystal-wish-grid-box",
    basePrice: 100,
    description: [
      "Sacred manifestation tool combining crystals with a sacred grid.",
      "Used for wish fulfillment related to abundance, love, health, and protection.",
      "Includes box, crystals, grid, and intention paper.",
      "Cleansed, Reiki charged, and fully intention activated.",
      "Custom themes may be available.",
      "Handmade and energetically unique.",
    ],
    images: ["/products/crystal-wish-grid-box.webp"],
  },

  {
    title: "Wish Box (Manifestation Box)",
    slug: "wish-box",
    basePrice: 100,
    description: [
      "Beginner-friendly manifestation and intention-setting tool.",
      "Supports goal clarity, faith, emotional balance, and inner peace.",
      "Includes wish box, wish slips, and affirmation card.",
      "Reiki and intention activated.",
      "No crystals required, simple to use.",
      "Ideal for gifting and daily intention practices.",
    ],
    images: ["/products/wish-box.jpeg"],
  },

  {
    title: "Feng Shui Wealth Ingot",
    slug: "feng-shui-wealth-ingot",
    basePrice: 100,
    description: [
      "Traditional Chinese prosperity symbol for wealth attraction.",
      "Supports financial growth, business success, and wealth retention.",
      "Placed in cash box, locker, or wealth corner of home or office.",
      "Cleansed, Reiki charged, and abundance intention activated.",
      "Available as single or pair options.",
    ],
    images: ["/products/feng-shui-ingot.png"],
  },

  {
    title: "Reiki Charged Water Bottle",
    slug: "reiki-charged-water-bottle",
    basePrice: 100,
    description: [
      "Intention-based hydration tool designed for mindfulness and positivity.",
      "Supports positive mindset and daily intention focus.",
      "Available in variants like Abundance, Love, Career, Protection, and Wellness.",
      "Charged with multi-level Reiki energy.",
      "Intention and gratitude sealed energetically.",
      "For spiritual wellness support only, not for medical use.",
    ],
    images: ["/products/reiki-charged-bottle.jpg"],
  },

  {
    title: "Reiki Infused Wellness Oil",
    slug: "reiki-infused-wellness-oil",
    basePrice: 100,
    description: [
      "Intention-based spiritual oil infused with Reiki energy.",
      "Supports calmness, emotional balance, and relaxation.",
      "Enhances meditation, rituals, and spiritual practices.",
      "Available in variants such as Abundance, Love, Protection, Chakra, Focus, and Aura.",
      "Applied externally before meditation or rituals.",
      "Reiki infused and intention programmed.",
      "For spiritual wellness use only.",
    ],
    images: ["/products/reiki-wellness-oil.jpg"],
  },
];

/* ------------------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------------------ */

export default function StoreCategoryClient({ slug }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const category = storeCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Category not found
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === category.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? category.images.length - 1 : prev - 1
    );
  };

  const handleAddToCart = () => {
    addToCart({
      id: `${category.slug}-${Date.now()}`,
      title: category.title,
      price: String(category.basePrice),
      image: category.images[0],
    });

    setAddedToCart(true);
    window.alert("Product added to cart, visit cart to place order")
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-4 py-8 md:py-12"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="max-w-6xl mx-auto">
        {/* ================= BREADCRUMB ================= */}
        <nav
          className="text-sm text-gray-600 mb-6 flex items-center gap-2"
          data-aos="fade-up"
        >
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/store" className="hover:text-purple-600">
            Store
          </Link>
          <span>/</span>
          <span className="text-lotus-purple font-medium">
            {category.title}
          </span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* ================= IMAGE GALLERY ================= */}
          <div>
            <div
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
              data-aos="zoom-in"
            >
              <div className="relative aspect-square">
                <Image
                  src={category.images[currentImageIndex]}
                  alt={category.title}
                  fill
                  className="object-cover"
                  priority
                />

                {category.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow"
                    >
                      <ChevronLeft className="w-6 h-6 text-purple-600" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow"
                    >
                      <ChevronRight className="w-6 h-6 text-purple-600" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* ================= THUMBNAILS ================= */}
            {category.images.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {category.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden ${
                      i === currentImageIndex
                        ? "ring-4 ring-purple-500"
                        : "ring-2 ring-gray-200"
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= DETAILS ================= */}
          <div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h1
              className="text-3xl font-bold text-lotus-purple mb-4"
              data-aos="fade-up"
            >
              {category.title}
            </h1>

            <div
              className="mb-6 text-xl font-semibold text-lotus-purple"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Starting from ₹{category.basePrice}
            </div>

            <ul className="space-y-3 mb-8">
              {category.description.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <Check className="w-5 h-5 text-purple-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* ================= ACTIONS ================= */}
            <div
              className="flex gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`hover:scale-105 transition-all ease-in-out cursor-pointer flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold ${
                  addedToCart
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-lotus-pink to-lotus-purple text-white hover:bg-purple-700"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" /> Added
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </>
                )}
              </button>

              <button
                className="cursor-pointer transition-all ease-in-out hover:scale-105 px-6 py-4 border-2 border-lotus-pink text-lotus-purple rounded-xl font-semibold hover:bg-lotus-purple/10"
                onClick={() => {
                  const message = `I would like to inquire about this product. Here's the link: ${window.location.href}`;
                  const WHATSAPP_NUMBER = "8793877913";
                  window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}