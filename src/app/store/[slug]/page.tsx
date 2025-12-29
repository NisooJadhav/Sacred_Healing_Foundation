import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const storeCategories = [
  {
    title: "Raw Crystals",
    slug: "raw-crystals",
    description: [
      "100% natural, unpolished stones",
      "Used for cleansing, Reiki, chakra & aura balancing",
      "Reiki charged & intention activated",
      "Natural variations in size & color",
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
    slug: "crystal-jewelry",
    description: [
      "Wearable crystal energy support",
      "Protection, positivity & emotional balance",
      "Reiki charged & intention activated",
      "Ready to wear",
    ],
    images: [
      "/products/bracelet-1.jpg",
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
    title: "Angel Crystals & Angels",
    slug: "angel-crystals",
    description: [
      "High-vibration angelic energy",
      "Divine protection, peace & intuition",
      "Used for meditation & prayer",
      "Reiki charged & intention activated",
    ],
    images: ["/products/angel-1.jpeg", "/products/angel-2.jpeg"],
  },
];

export default async function StoreCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = storeCategories.find((c) => c.slug === slug);

  if (!category) notFound();

  return (
    <section className="min-h-screen bg-lotus-bg px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-lotus-muted mb-6">
          <Link href="/">Home</Link> / <Link href="/store">Store</Link> /{" "}
          <span className="text-lotus-text">{category.title}</span>
        </nav>

        <h1 className="text-3xl font-semibold text-lotus-purple mb-6">
          {category.title}
        </h1>

        {/* Slideshow */}
        <div className="relative overflow-hidden rounded-3xl bg-lotus-section shadow-lg">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {category.images.map((img, i) => (
              <div key={i} className="relative min-w-full h-80 snap-center">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <ul className="mt-10 space-y-3">
          {category.description.map((d, i) => (
            <li
              key={i}
              className="bg-white rounded-xl px-5 py-4 border border-lotus-purple/10"
            >
              {d}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-lotus-muted">
          * Prices vary based on size, crystal type & energy work.
        </p>
      </div>
    </section>
  );
}
