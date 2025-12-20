"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "brochure_seen";

const BrochureModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setOpen(true);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-[50vw] max-w-md sm:max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        {/* Brochure Image */}
        <img
          src="/brochure.png"
          alt="Brochure"
          className="w-[40vw] h-auto object-contain"
        />

        {/* Actions */}
        <div className="p-4 flex flex-col sm:flex-row gap-3 justify-between">
          <a
            href="/brochure.png"
            download
            className="w-full sm:w-auto text-center px-5 py-2 rounded-lg bg-[#6B4A8C] text-white font-medium hover:opacity-90"
          >
            Download Brochure
          </a>

          <button
            onClick={closeModal}
            className="cursor-pointer w-full sm:w-auto px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;