import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

/* ================= TYPES ================= */

type Course = {
  title: string;
  slug: string;
  description: string;
  image: string;
  syllabus: string[];
};

/* ================= COURSE DATA ================= */

const courses: Course[] = [
  {
    title: "Usui Reiki Level 1",
    slug: "usui-reiki-level-1",
    description:
      "A foundational Reiki course focused on self-healing, chakras, energy awareness, grounding, and ethical Reiki practice.",
    image: "/courses/usui-reiki-level-1.png",
    syllabus: [
      "Introduction to Reiki",
      "What is Reiki Energy",
      "History of Reiki – Dr. Mikao Usui",
      "How Reiki Works",
      "Five Reiki Principles (Precepts)",
      "Chakras – Introduction & Basic Understanding",
      "Aura & Energy Body Basics",
      "Hand Positions for Self-Healing",
      "Step-by-Step Self-Healing Technique",
      "Daily Reiki Practice Routine",
      "Reiki Ethics & Responsibility",
      "Grounding & Protection Basics",
    ],
  },
  {
    title: "Usui Reiki Level 2",
    slug: "usui-reiki-level-2",
    description:
      "Advanced Reiki training introducing sacred symbols, distance healing, emotional healing, and energy clearing techniques.",
    image: "/courses/usui-reiki-level-2.png",
    syllabus: [
      "Advanced Reiki Concepts",
      "Introduction to Reiki Symbols",
      "Cho Ku Rei – Meaning & Usage",
      "Sei He Ki – Meaning & Usage",
      "Hon Sha Ze Sho Nen – Meaning & Usage",
      "Symbol Activation Techniques",
      "Distance Healing – Past, Present & Future",
      "Emotional & Mental Healing with Reiki",
      "Reiki for Others (Friends, Family, Clients)",
      "Clearing Negative Energies",
      "Healing Addictions & Habits",
      "Reiki for Situations & Relationships",
      "Reiki Boosting Techniques",
    ],
  },
  {
    title: "Usui Reiki Master (Level 3A & 3B)",
    slug: "usui-reiki-master",
    description:
      "Master-level Reiki training focusing on deep spiritual healing, attunements, teaching, and advanced ethical responsibility.",
    image: "/courses/usui-reiki-master.png",
    syllabus: [
      "Reiki Master Symbol – Dai Ko Myo",
      "Deep Spiritual Healing Practices",
      "Aura Strengthening & Expansion",
      "Karmic Healing Basics",
      "Reiki for Major Life Issues",
      "Advanced Healing Techniques",
      "Reiki Attunement – Self & Others",
      "How to Conduct Reiki Classes",
      "How to Heal Large Groups",
      "Master Level Ethics & Responsibility",
    ],
  },
  {
    title: "Karuna Reiki",
    slug: "karuna-reiki",
    description:
      "A compassion-based Reiki system designed for deep emotional healing, trauma release, and higher consciousness work.",
    image: "/courses/karuna-reiki.png",
    syllabus: [
      "Introduction to Karuna Reiki",
      "Difference Between Usui Reiki & Karuna Reiki",
      "Karuna Reiki Symbols & Meanings",
      "Healing Past Trauma & Deep Emotional Pain",
      "Compassion-Based Healing Practices",
      "Healing Inner Child Issues",
      "Working with Higher Consciousness",
      "Advanced Distance Healing",
      "Karuna Reiki Meditations",
    ],
  },
  {
    title: "Money Reiki",
    slug: "money-reiki",
    description:
      "A specialized Reiki course focused on clearing money blocks, healing financial karma, and activating abundance energy.",
    image: "/courses/money-reiki.png",
    syllabus: [
      "Introduction to Money Reiki",
      "Understanding Energy Blocks Related to Money",
      "Chakras Connected to Wealth (Root & Solar Plexus)",
      "Clearing Money Karma",
      "Healing Financial Fears & Scarcity Mindset",
      "Reiki Symbols for Abundance",
      "Healing Business & Career Issues",
      "Charging Wallets, Bank Accounts & Cheques",
      "Manifestation Techniques with Money Reiki",
    ],
  },
  {
    title: "Angel Therapy (Basic to Advanced)",
    slug: "angel-therapy",
    description:
      "Learn to connect with angels and archangels for healing, protection, guidance, and spiritual support.",
    image: "/courses/angel-therapy.png",
    syllabus: [
      "Introduction to Angels & Archangels",
      "Guardian Angels & Their Roles",
      "Angel Numbers (111, 222, 444, etc.)",
      "How Angels Communicate",
      "Angel Prayers & Invocations",
      "Angel Meditation Techniques",
      "Angel Healing for Self & Others",
      "Calling Angels for Protection & Guidance",
      "Working with Archangel Michael, Raphael, Gabriel & Uriel",
    ],
  },
  {
    title: "Tarot Card Reading",
    slug: "tarot-card-reading",
    description:
      "A complete tarot reading course covering card meanings, spreads, intuition development, and ethical guidance.",
    image: "/courses/tarot-card-reading.png",
    syllabus: [
      "Introduction to Tarot",
      "Major Arcana – Meanings & Interpretations",
      "Minor Arcana – Meanings & Interpretations",
      "Understanding All Tarot Cards",
      "Tarot Spreads (1 Card, 3 Card, Celtic Cross)",
      "How to Ask the Right Questions",
      "Intuition Development for Tarot",
      "Tarot Ethics",
      "Love, Career & Finance Readings",
      "Tarot Healing & Spiritual Guidance",
    ],
  },
  {
    title: "Crystal Healing",
    slug: "crystal-healing",
    description:
      "A holistic crystal healing course covering crystal properties, chakra alignment, grids, and healing techniques.",
    image: "/courses/crystal-healing.png",
    syllabus: [
      "Introduction to Crystal Healing",
      "How Crystals Work",
      "Types of Crystals & Their Properties",
      "Chakras & Crystal Connections",
      "Crystal Cleansing Methods",
      "Crystal Charging Techniques",
      "Crystal Grids",
      "Self-Healing & Client Healing",
      "Wearing Crystals & Crystal Jewelry Healing",
    ],
  },
  {
    title: "EFT (Emotional Freedom Technique)",
    slug: "eft",
    description:
      "A practical tapping therapy course for emotional release, stress reduction, and mind–body healing.",
    image: "/courses/eft.png",
    syllabus: [
      "Introduction to EFT",
      "What is Tapping Therapy",
      "Meridian Points Explanation",
      "EFT for Stress, Fear & Anxiety",
      "EFT for Physical Pain",
      "EFT for Money & Relationship Issues",
      "Creating Effective EFT Statements",
      "Self-Tapping & Client Sessions",
    ],
  },
  {
    title: "Reiki Grand Mastership",
    slug: "reiki-grand-mastership",
    description:
      "The highest level of Reiki mastery focusing on lineage holding, advanced symbols, karmic healing, and spiritual discipline.",
    image: "/courses/reiki-grand-mastership.png",
    syllabus: [
      "Reiki Grand Master Consciousness & Role",
      "Advanced Reiki Energy Science",
      "Grand Master Reiki Symbols (20 Symbols)",
      "High-Level Protection Techniques",
      "Wealth & Abundance Healing Methods",
      "Sacred Protection & Wealth Mantras",
      "Grand Master Attunement Process",
      "Distance & Mass Attunements",
      "Teaching & Training Methodology",
      "Advanced Healing Techniques",
      "Karmic & Ancestral Healing",
      "Angelic & Higher Guidance Healing",
      "Tantra–Mantra–Yantra Integration",
      "Ethics, Karma & Energy Responsibility",
      "Lineage Holding & Spiritual Discipline",
    ],
  },
];

/* ================= SEO ================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title} | Sacred Healing Foundation`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.image],
    },
  };
}

/* ================= PAGE ================= */

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const phoneNumber = "8793877913";
  const message = encodeURIComponent(
    `Hi, I would like to know more about the ${course.title} course.`
  );

  return (
    <section
      className="min-h-screen bg-lotus-bg px-4 py-12"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="mx-auto max-w-5xl">
        {/* ================= BREADCRUMBS ================= */}
        <nav
          className="mb-6 text-sm text-lotus-muted"
          data-aos="fade-up"
        >
          <Link href="/" className="hover:text-lotus-purple">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/courses" className="hover:text-lotus-purple">
            Courses
          </Link>
          <span className="mx-2">/</span>
          <span className="text-lotus-text">{course.title}</span>
        </nav>

        {/* ================= HERO ================= */}
        <div
          className="relative rounded-3xl bg-lotus-section shadow-lg overflow-hidden group"
          data-aos="zoom-in"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-lotus-pink via-lotus-gold to-lotus-purple blur-xl opacity-30" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1
                className="text-3xl sm:text-4xl font-semibold text-lotus-purple"
                data-aos="fade-up"
              >
                {course.title}
              </h1>

              <p
                className="mt-4 text-lotus-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {course.description}
              </p>

              <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-fit rounded-full bg-lotus-gold px-6 py-3 text-white text-sm font-medium hover:scale-105 transition"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ================= SYLLABUS ================= */}
        <div className="mt-14">
          <h2
            className="text-2xl font-semibold text-lotus-purple mb-6"
            data-aos="fade-up"
          >
            What You Will Learn
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.syllabus.map((item, i) => (
              <li
                key={i}
                className="rounded-xl bg-white px-5 py-4 border border-lotus-purple/10 hover:border-lotus-gold transition"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
