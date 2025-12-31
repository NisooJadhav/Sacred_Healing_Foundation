"use client";

import Link from "next/link";
import Image from "next/image";

type Course = {
  id: number;
  title: string;
  slug: string;
  shortDesc: string;
  image: string;
};

const coursesData: Course[] = [
  {
    id: 1,
    title: "Usui Reiki Level 1",
    slug: "usui-reiki-level-1",
    shortDesc:
      "Foundation course for self-healing, chakras, and Reiki principles.",
    image: "/courses/usui-reiki-level-1.png",
  },
  {
    id: 2,
    title: "Usui Reiki Level 2",
    slug: "usui-reiki-level-2",
    shortDesc:
      "Symbols, distance healing, emotional and mental healing techniques.",
    image: "/courses/usui-reiki-level-2.png",
  },
  {
    id: 3,
    title: "Usui Reiki Master (3A & 3B)",
    slug: "usui-reiki-master",
    shortDesc:
      "Master symbols, attunements, teaching, and advanced healing.",
    image: "/courses/usui-reiki-master.png",
  },
  {
    id: 4,
    title: "Karuna Reiki",
    slug: "karuna-reiki",
    shortDesc:
      "Compassion-based healing for deep emotional and karmic wounds.",
    image: "/courses/karuna-reiki.png",
  },
  {
    id: 5,
    title: "Money Reiki",
    slug: "money-reiki",
    shortDesc:
      "Healing money blocks, abundance mindset, and prosperity energy.",
    image: "/courses/money-reiki.png",
  },
  {
    id: 6,
    title: "Angel Therapy",
    slug: "angel-therapy",
    shortDesc:
      "Connect with angels and archangels for healing and guidance.",
    image: "/courses/angel-therapy.png",
  },
  {
    id: 7,
    title: "Tarot Card Reading",
    slug: "tarot-card-reading",
    shortDesc:
      "Learn tarot meanings, intuition, and ethical readings.",
    image: "/courses/tarot-card-reading.png",
  },
  {
    id: 8,
    title: "Crystal Healing",
    slug: "crystal-healing",
    shortDesc:
      "Crystals, chakras, grids, cleansing, and healing practices.",
    image: "/courses/crystal-healing.png",
  },
  {
    id: 9,
    title: "EFT (Emotional Freedom Technique)",
    slug: "eft",
    shortDesc:
      "Tapping therapy for stress, fears, and emotional release.",
    image: "/courses/eft.png",
  },
  {
    id: 10,
    title: "Reiki Grand Mastership",
    slug: "reiki-grand-mastership",
    shortDesc:
      "Highest level of Reiki with lineage, mastery, and discipline.",
    image: "/courses/reiki-grand-mastership.png",
  },
];

export default function CoursesPage() {
  return (
    <section
      className="min-h-screen bg-lotus-bg px-4 py-16"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center">
          <h1
            className="text-3xl sm:text-4xl font-semibold text-lotus-purple"
            data-aos="fade-up"
          >
            Spiritual Healing Courses
          </h1>
          <p
            className="mt-3 text-lotus-muted max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Structured, ethical, and spiritually aligned courses designed for
            self-healing, mastery, and conscious growth.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group rounded-2xl bg-lotus-section shadow-md hover:shadow-xl transition overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-lotus-text group-hover:text-lotus-purple transition">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-lotus-muted leading-relaxed">
                  {course.shortDesc}
                </p>

                <div className="mt-4 text-sm font-medium text-lotus-gold">
                  View Course →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}