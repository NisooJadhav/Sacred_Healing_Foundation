"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <center className="bg-black">
    <section className="relative w-[80vw] h-[80svh] overflow-hidden">
      {/* Hero Image */}
      <Image
        src="/hero-bg.png"
        alt="Hero"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay (optional – remove if not needed) */}
      <div className="absolute inset-0 bg-black/10" />
      {/* Explore More Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-xs tracking-widest uppercase opacity-90">
          Explore More
        </span>

        {/* Animated Arrow */}
        <div className="mt-1 h-6 w-[1px] bg-white animate-bounce" />
      </div>
    </section>
    </center>
  );
}
