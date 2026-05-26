import React from "react";
import Image from "next/image"; 
import { Zap, Headset } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 w-full">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#00C389]">
            THE CONSERVATORY
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-neutral-900 mt-2 leading-tight">
            Precision Meets <br /> Organic Vitality
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-[360px] text-right ml-auto">
          At{" "}
          <span className="font-bold text-[#001F15]">
            Volt<span className="text-[#00C389]">Ride</span>
          </span>
          , we believe travel should be a silent, immersive experience that
          connects you back to the world.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-4 flex-1">
            <div className="mb-2">
              <Zap className="w-5 h-5 text-[#006949]" />
            </div>
            <h3 className="text-xl font-heading font-bold text-neutral-900">
              Eco-Conscious Fleet
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Each vehicle in our fleet is chosen for its zero-emission rating
              and sustainable interior materials, from vegan leathers to
              recycled ocean plastics.
            </p>
            <a
              href="#"
              className="inline-block text-[#006949] font-bold text-xs hover:text-[#00A372]"
            >
              Learn our mission
            </a>
          </div>

          <div className="relative w-full md:w-52 h-36 bg-neutral-900 rounded-xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=400&q=80"
              alt="EV Charger"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-[#006949] text-white rounded-2xl p-8 flex flex-col shadow-md">
          <div className="mb-2">
            <Headset className="w-5 h-5 text-emerald-100/80" />
          </div>

          <div className="mt-4 space-y-2">
            <h3 className="font-heading text-xl font-bold">24/7 Support</h3>
            <p className="font-heading text-emerald-100/80 text-xs leading-relaxed">
              AI chatbot available at the touch of a button to handle your
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
