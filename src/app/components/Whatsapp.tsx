'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const phoneNumber = '8793877913';
  const message = encodeURIComponent('Hi, I would like to know more about your services.');

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
};

export default Whatsapp;