"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

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
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 text-primary mb-6">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        <h3 className="text-2xl font-heading font-bold text-neutral-900">
          Transmission Received
        </h3>
        <p className="text-gray-500 font-heading text-sm mt-3 leading-relaxed">
          Your message has been successfully transmitted to our command center. We will review your feedback and get back to you within 24-48 hours. Thank you for helping us drive the future of elite travel.
        </p>

        <div className="mt-8">
          <Button
            onClick={onClose}
            className="w-full text-white font-heading font-semibold">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
