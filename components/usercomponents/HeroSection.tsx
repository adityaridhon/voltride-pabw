import React from "react";
import Image from "next/image";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-20 gap-10 max-w-7xl mx-auto w-full">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#006949]">
          The Future of Travel
        </span>

        <h1 className="text-4xl lg:text-6xl font-heading font-extrabold text-neutral-900 leading-tight">
          Silent Luxury <br />
          <span className="text-[#00C389]">Endless Energy</span>
        </h1>

        <p className="text-gray-500 max-w-md mx-auto lg:mx-0 text-sm lg:text-base leading-relaxed">
          Experience the raw precision of electric performance. High-end EV
          curated for those who seek sustainable elegance without compromise.
        </p>

        <div className="flex items-center bg-white p-2 rounded-xl shadow-md border border-gray-100 max-w-md mx-auto lg:mx-0">
          <div className="flex items-center flex-1 px-3 gap-2">
            <input
              type="text"
              placeholder="Search your EV!"
              className="w-full bg-transparent outline-none text-sm text-gray-700"
            />
          </div>
          <Button size="lg" variant="gradient">
            Search
          </Button>
        </div>
      </div>

      <div className="flex-1 relative w-full flex justify-center">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-lg aspect-[4/3] bg-neutral-800">
          <Image
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
            alt="VoltRide EV Car"
            fill
            unoptimized
            className="object-cover object-center opacity-90"
          />

          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20 max-w-[160px]">
            <div className="flex items-center gap-2 text-[#006949] font-bold text-xs">
              <Zap className="w-4 h-4 fill-[#006949]" />
              <span className="font-heading ">100% GREEN</span>
            </div>
            <p className="text-[10px] text-gray-500 mt-1 leading-tight">
              Powering your journey with renewable wind energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
