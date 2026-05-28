import React from "react";
import Image from "next/image";

const AboutEthosSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-20 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2 space-y-6">
        <span className="text-[#006949] font-heading font-bold text-xs tracking-widest uppercase">
          Our Ethos
        </span>

        <h1 className="text-5xl lg:text-7xl font-bold font-heading text-neutral-900 leading-tight">
          The Silent <br />
          <span className="text-[#006949]">Revolution.</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          {
            "We aren't just moving bodies; we're moving perspectives. VoltRide was born from the belief that luxury shouldn't cost the Earth."
          }
        </p>

        <div className="flex items-center gap-4 pt-4">
          <div className="w-12 h-0.5 bg-[#006949]"></div>
          <span className="text-sm text-gray-500 font-medium">
            Established 2024 • Silicon Valley
          </span>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 px-4 lg:px-0 max-w-lg mx-auto">
        <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
          <Image
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
            alt="VoltRide Interior"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-80 -translate-y-3 w-1/2 aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-xl bg-gray-200">
          <Image
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=500&q=80"
            alt="Charging EV"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutEthosSection;
