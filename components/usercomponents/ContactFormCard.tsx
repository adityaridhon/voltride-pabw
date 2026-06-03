"use client";

import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

const ContactFormCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.message.trim()
    ) {
      setIsModalOpen(true);

      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Harap isi semua kolom form terlebih dahulu sebelum mengirim!");
    }
  };

  return (
    <div className="bg-white border border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12">
      <h2 className="text-3xl font-bold font-heading text-neutral-900">
        Transmission
      </h2>
      <p className="text-gray-500 font-heading text-sm mt-3 leading-relaxed">
        Send us your thoughts or inquiries. Our concierge team typically
        responds within 2 hours of electric-standard time.
      </p>

      <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Input Nama */}
          <div className="space-y-2">
            <label className="text-[#006949] text-[10px] font-heading font-bold tracking-widest uppercase block">
              NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="ALEX RIVERA"
              className="w-full font-heading bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-4 text-sm text-neutral-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C389]/20 focus:bg-white transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[#006949] text-[10px] font-heading font-bold tracking-widest uppercase block">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ALEX@STATION.COM"
              className="w-full font-heading bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-4 text-sm text-neutral-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C389]/20 focus:bg-white transition-all"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[#006949] text-[10px] font-heading font-bold tracking-widest uppercase block">
            KRITIK & SARAN
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="YOUR MESSAGE REGARDING OUR FLEET OR SERVICES..."
            className="w-full h-48 font-heading bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-4 text-sm text-neutral-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C389]/20 focus:bg-white transition-all resize-none"
            required
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="flex items-center justify-between gap-6 bg-neutral-900 text-white font-heading font-semibold text-xs tracking-wider px-6 py-4 rounded-xl hover:bg-neutral-800 transition-colors group"
          >
            <span>SEND MESSAGE</span>
            <svg
              className="w-4 h-4 font-heading transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ContactFormCard;
