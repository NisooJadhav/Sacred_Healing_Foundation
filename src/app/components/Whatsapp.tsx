'use client';

import Link from 'next/link';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Whatsapp = () => {
  const phoneNumber = '8793877913';
  const message = encodeURIComponent(
    'Hi, I would like to know more about your services.'
  );

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-duration="500">
      {/* Back to Top (after 100vh) */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition hover:scale-110 hover:bg-gray-900"
        >
          <FaArrowUp size={18} />
        </button>
      )}

      {/* WhatsApp (always visible) */}
      <Link
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
      >
        <FaWhatsapp size={28} />
      </Link>
    </div>
  );
};

export default Whatsapp;
