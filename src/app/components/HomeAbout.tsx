"use client";

import Image from "next/image";

export default function HomeAbout() {
  return (
    <section
      className="w-full bg-lotus-bg pt-16 pb-5 px-6 md:px-12"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">
          <h2
            className="text-center text-3xl md:text-4xl font-serif text-lotus-purple leading-tight"
            data-aos="fade-up"
          >
            The Most Trusted Expert in Reiki
          </h2>

          <p
            className="text-lotus-text text-base md:text-lg text-justify leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <strong className="font-semibold text-lotus-text">
              Poonam Thore
            </strong>{" "}
            is a professional Spiritual Healer and Energy Healing Mentor with
            experience in teaching and guiding hundreds of students and clients
            on their healing journey. She specializes in Reiki Healing, Crystal
            Healing, Angel Therapy, Chakra Balancing, and Guided Meditation
            practices.
          </p>

          <p
            className="text-lotus-text text-base md:text-lg text-justify leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Her teaching style is simple, practical, and spiritually aligned,
            making healing accessible to everyone. Poonam’s goal is to empower
            individuals to heal themselves, gain emotional clarity, raise their
            vibration, and live a balanced, peaceful, and abundant life through
            ethical and conscious spiritual practices.
          </p>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="relative flex justify-center md:justify-center"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <div
            className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[360px] md:h-[480px] 
                       rounded-3xl overflow-hidden shadow-sacred bg-lotus-gold/30"
          >
            <Image
              src="/homeabout.png"
              alt="Poonam Thore - Reiki Expert"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}