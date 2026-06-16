import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

interface ProductHeroProps {
  mobil: any;
}

export default function ProductHero({
  mobil,
}: ProductHeroProps)  {
  return (
  <div className="relative w-full h-[85vh] min-h-150 flex items-end pb-24 bg-neutral-950 overflow-hidden">
    <Image
      src={mobil.imageUrl}
      alt={mobil.name}
      fill
      className="object-cover object-center opacity-70 z-0"
      priority
    />

    <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/60 to-transparent z-10" />

    {/* Text */}
    <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-24 flex justify-between items-end z-20">
      <div className="max-w-3xl"> 
        <span className="text-secondary font-heading font-bold text-[11px] tracking-widest uppercase block">
          {mobil.brand} {mobil.model}
        </span>
        
        <h1 className="text-6xl md:text-7xl font-bold font-heading text-white mt-3 leading-tight tracking-tighter">
          {mobil.name}
        </h1>
        
        <div className="flex items-center gap-6 mt-8">
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-5 rounded-2xl"> {/* Tambah boks transparan premium */}
            <p className="text-[11px] font-heading font-bold text-neutral-400 uppercase tracking-wider">
              Starting At
            </p>
            
            <p className="text-4xl font-heading font-bold text-emerald-400 mt-1">
              {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(mobil.pricePerDay)}
              <span className="text-lg font-heading text-neutral-300 ml-1.5 font-normal">
                /day
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
};

