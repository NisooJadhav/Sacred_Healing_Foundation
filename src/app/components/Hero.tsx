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
    </section>
    </center>
  );
}
