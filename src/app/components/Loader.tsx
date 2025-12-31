"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  // Init AOS once
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out" });
  }, []);

  // Show loader only on first visit
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(false);
    } else {
      localStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className="absolute inset-0 flex justify-center items-center bg-white z-100 opacity-90"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-easing="ease-out"
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/logo.png"
          alt="Loading..."
          width={500}
          height={100}
          className="h-32 md:h-38 w-auto animate-spin-slow"
        />
        <p className="mt-4 text-xl font-semibold text-gray-500">
          Loading...
        </p>
      </div>
    </div>
  );
}
