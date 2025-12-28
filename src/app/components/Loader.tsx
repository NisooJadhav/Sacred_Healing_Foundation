"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className="absolute inset-0 flex justify-center items-center bg-white z-100 opacity-90"
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-easing="ease-out"
        >
          <div className="flex flex-col justify-center items-center animate-fade-in">
            <Image
              src="/logo.png"
              alt="Loading..."
              width={500}
              height={100}
              className="h-32 md:h-38 h-auto animate-spin-slow"
            />
            <p className="mt-4 text-xl font-semibold text-gray-500">
              Loading...
            </p>
          </div>
        </div>
      )}
    </>
  );
}