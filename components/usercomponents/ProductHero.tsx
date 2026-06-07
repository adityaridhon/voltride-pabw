import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

const ProductHero = () => {
  return (
    <div className="relative w-full h-[80vh] min-h-150 flex items-end pb-24 bg-neutral-900 overflow-hidden">
      <Image
        src="/images/etherea-s9-bg.jpg" // nnti di masukkin gamabr
        alt="Etherea S9"
        fill
        className="object-cover opacity-60"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-24 flex justify-between items-end z-10">
        <div>
          <span className="text-[#00C389] font-heading font-bold text-[10px] tracking-widest uppercase">
            Performance Sedan
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-neutral-900 mt-2">
            Etherea S9
          </h1>
          <div className="flex items-center gap-6 mt-6">
            <div>
              <p className="text-[11px] font-heading font-bold text-gray-500 uppercase tracking-wider">
                Starting At
              </p>
              <p className="text-3xl font-heading font-bold text-[#006B4F] mt-0.5">
                $240
                <span className="text-base font-heading text-gray-500 ml-0.5">
                  /day
                </span>
              </p>
            </div>

            <div className="w-[1px] h-10 bg-neutral-200" />

            <div className="flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-[#006B4F]" />
              <span className="text-lg font-heading font-bold text-neutral-800 tracking-tight">
                Elite Certified
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:block bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-xs shadow-lg border border-neutral-100">
          <p className="text-gray-600 font-heading italic text-sm leading-relaxed">
            {`"The S9 isn't just a car; it's a silent symphony of engineering and organic grace."`}
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-6 h-6 rounded-full bg-[#00C389]"></div>
            <span className="text-xs font-heading font-bold text-neutral-900">
              — Head of Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
