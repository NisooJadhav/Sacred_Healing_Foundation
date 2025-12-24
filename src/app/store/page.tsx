"use client";
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

type Product = {
  id: string;
  title: string;
  price?: string;
  description?: string;
  image?: string;
  category?: string;
};

const products: Product[] = [
  {
    id: "1",
    title: "Holistic Healing Guidebook",
    price: "₹199.00",
    description: "A practical guide to holistic wellness.",
    image: "/logo.png",
    category: "Books",
  },
  {
    id: "2",
    title: "Set of Healing Crystals",
    price: "₹2,499.00",
    description: "Hand-selected crystals to support your practice.",
    image: "/reiki.png",
    category: "Crystals",
  },
  {
    id: "3",
    title: "Essential Oils Collection",
    price: "₹1,499.00",
    description: "Blended oils for relaxation and focus.",
    image: "/healing.png",
    category: "Oils",
  },
  {
    id: "4",
    title: "Meditation Cushion",
    price: "₹3,999.00",
    description: "Comfortable cushion for longer meditation sessions.",
    image: "/logo.png",
    category: "Accessories",
  },
];

export default function StorePage() {
  const [category, setCategory] = useState<string | null>(null);
  const { items } = useCart();

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (!category || category === "All") return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Sacred Healing Foundation Store
        </h1>
        <div className="ml-4 inline-flex items-center gap-3">
          <a
            href="/cart"
            className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow"
          >
            <svg
              className="w-5 h-5 text-[var(--color-lotus-purple)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="font-semibold">Cart</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-sm font-semibold bg-[var(--color-lotus-gold)] text-white">
              {items.length}
            </span>
          </a>
        </div>
      </div>
      <p className="text-gray-600 mb-8">
        Welcome to the Sacred Healing Foundation Store — find items to support
        your holistic healing journey.
      </p>

      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c === "All" ? null : c)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                category === c || (c === "All" && !category)
                  ? "bg-[var(--color-lotus-purple)] text-white"
                  : "bg-white text-[var(--color-lotus-text)] border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div>
          <label className="text-sm text-gray-600 mr-2">Sort:</label>
          <select className="px-3 py-1 border rounded" defaultValue="featured">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
