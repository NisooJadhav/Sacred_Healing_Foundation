"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <center className="bg-fuchsia-950">
    <section className="relative w-[90vw] h-[90svh] overflow-hidden">
      {/* Hero Image */}
      <Image
        src="/hero-bg.png"
        alt="Hero"
        fill
        priority
        className="object-cover object-bottom"
        sizes="100vw"
      />
    </section>
    </center>
  );
}
