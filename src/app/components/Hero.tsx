"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const StarsBackground = dynamic(
  () => import("../components/StarsBackground"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-hero.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ================= STARS (WebGL) ================= */}
      <StarsBackground />

      {/* ================= SPIRITUAL LIGHT RAYS ================= */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Rotating glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="sm:w-[50px] sm:h-[50px] md:w-[800px] md:h-[800px] rounded-full opacity-40 animate-spin"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 30%, transparent 60%)",
              filter: "blur(40px)",
              animationDuration: "120s",
            }}
          />
        </div>

        {/* Static center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-[400px] h-[400px] sm:w-[50px] sm:h-[50px] rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-20 flex flex-col items-center justify-end h-full">
        {/* Hero Image */}
        <Image
          src="/hero.png"
          alt="Hero"
          width={500}
          height={500}
          priority
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="drop-shadow-[0_0_70px_rgba(255,255,255,0.4)] sm:w-[320px] sm:h-[320px] md:w-[550px] md:h-[580px]"
        />

        {/* Quote */}
        <div
          className="z-50 w-screen bg-white flex justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <p className="my-4 text-center text-3xl md:text-6xl font-medium text-pink-800 tracking-wide">
            <b>जहाँ समर्पण है, वहीं उपचार है।</b>
          </p>
        </div>
      </div>
    </section>
  );
}