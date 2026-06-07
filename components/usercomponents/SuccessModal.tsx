"use client";

import React from "react";
import { CheckCircle2, X } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-md rounded-[2rem] p-8 text-center shadow-2xl border border-neutral-100 transform scale-100 transition-all duration-300 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-neutral-900 transition-colors p-1 rounded-full hover:bg-neutral-50"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#00C389]/10 text-[#006949] mb-6">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        <h3 className="text-2xl font-heading font-bold text-neutral-900">
          Transmission Received
        </h3>
        <p className="text-gray-500 font-heading text-sm mt-3 leading-relaxed">
          Pesan kamu telah berhasil terkirim ke jaringan VoltRide. Tim concierge
          kami akan segera menghubungimu kembali dalam waktu kurang dari 2 jam.
        </p>

        <div className="mt-8">
          <button
            onClick={onClose}
            className="w-full bg-neutral-900 text-white font-heading font-semibold text-xs tracking-wider py-4 rounded-xl hover:bg-neutral-800 transition-all"
          >
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
