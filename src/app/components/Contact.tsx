"use client";

import { useState } from "react";
import { Phone, Mail, Home } from "lucide-react";

const WHATSAPP_NUMBER = "8793877913";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    note: "",
    option: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `New Contact Request:\n\n` +
        `Full Name: ${form.name}\n` +
        `Mobile: ${form.mobile}\n` +
        `Email: ${form.email}\n` +
        `Date of Birth: ${form.dob}\n` +
        `Preferred Mode: ${form.option}\n\n` +
        `Query / Note:\n${form.note}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      className="bg-lotus-bg py-4 pb-8 px-4"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="mx-auto max-w-6xl rounded-3xl bg-lotus-section shadow-sacred p-6 md:p-12 grid lg:grid-cols-2 gap-8 md:gap-10">
        {/* ================= LEFT INFO ================= */}
        <div className="text-lotus-purple space-y-8">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-serif mb-2">
              Contact Us
            </h2>
            <p className="text-lotus-text text-sm md:text-base">
              We're here to guide you on your healing journey
            </p>
          </div>

          {/* Branch */}
          <div
            className="bg-white/50 rounded-2xl p-5 border border-lotus-purple/20"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
              <Home className="w-5 h-5 text-lotus-purple" />
              Our Branch
            </h3>
            <p className="text-lotus-text ml-7">Pune, Maharashtra</p>
          </div>

          {/* Call Us */}
          <div
            className="bg-white/50 rounded-2xl p-5 border border-lotus-purple/20"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-lotus-purple" />
              Call Us
            </h3>
            <div className="space-y-2 text-lotus-text ml-7">
              <a
                href="tel:+918668555532"
                className="block hover:text-lotus-purple transition-colors"
              >
                +91 86685 55532
              </a>
              <a
                href="tel:+918793877913"
                className="block hover:text-lotus-purple transition-colors"
              >
                +91 87938 77913
              </a>
            </div>
          </div>

          {/* Email */}
          <div
            className="bg-white/50 rounded-2xl p-5 border border-lotus-purple/20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5 text-lotus-purple" />
              Email Support
            </h3>
            <a
              href="mailto:sacredhealingfoundation2712@gmail.com"
              className="text-lotus-text hover:text-lotus-purple transition-colors ml-7 block break-all"
            >
              sacredhealingfoundation2712@gmail.com
            </a>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-lotus-purple to-lotus-purple/90 rounded-3xl p-6 md:p-8 text-white space-y-5 shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 ml-2">
                Full Name *
              </label>
              <input
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="py-2 pl-2 border border-lotus-gold rounded-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 ml-2">
                Email *
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="py-2 pl-2 border border-lotus-gold rounded-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 ml-2">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                value={form.mobile}
                onChange={handleChange}
                required
                maxLength={10}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
                className="py-2 pl-2 border border-lotus-gold rounded-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 ml-2">
                Date of Birth
              </label>
              <input
                name="dob"
                type="date"
                value={form.dob}
                onChange={handleChange}
                className="w-full py-2 pl-2 pr-2 border border-lotus-gold rounded-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 ml-2">
              Preferred Mode of Contact *
            </label>
            <select
              name="option"
              value={form.option}
              onChange={handleChange}
              required
              className="py-2 pl-2 pr-2 border border-lotus-gold rounded-full w-full"
            >
              <option value="">Select an option</option>
              <option>Meet in Person</option>
              <option>Phone Call</option>
              <option>Zoom Call</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 ml-2">
              Your Message / Query
            </label>
            <textarea
              name="note"
              placeholder="Tell us how we can help you..."
              rows={4}
              value={form.note}
              onChange={handleChange}
              className="w-full py-2 pl-2 border border-lotus-gold rounded-lg resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-lotus-gold text-lotus-purple px-8 py-4 rounded-full font-semibold hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-base md:text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}