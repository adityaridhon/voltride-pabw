import React from "react";
import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";

const FleetSection = () => {
  const cars = [
    {
      name: "TESLA XX",
      series: "PERFORMANCE SERIES",
      price: "Rp800.000",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=500&q=80",
      specs: "420mi Range | 0-60 in 2.3s",
    },
    {
      name: "TESLA XX",
      series: "PERFORMANCE SERIES",
      price: "Rp800.000",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=500&q=80",
      specs: "420mi Range | 0-60 in 2.3s",
    },
    {
      name: "TESLA XX",
      series: "PERFORMANCE SERIES",
      price: "Rp800.000",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=500&q=80",
      specs: "420mi Range | 0-60 in 2.3s",
    },
    {
      name: "TESLA XX",
      series: "PERFORMANCE SERIES",
      price: "Rp800.000",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=500&q=80",
      specs: "420mi Range | 0-60 in 2.3s",
    },
    {
      name: "PULSE MINI",
      series: "URBAN SERIES",
      price: "$95",
      image:
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=500&q=80",
      specs: "170mi Range | Zero Plastic",
    },
    {
      name: "PULSE MINI",
      series: "URBAN SERIES",
      price: "$95",
      image:
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=500&q=80",
      specs: "170mi Range | Zero Plastic",
    },
    {
      name: "PULSE MINI",
      series: "URBAN SERIES",
      price: "$95",
      image:
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=500&q=80",
      specs: "170mi Range | Zero Plastic",
    },
    {
      name: "PULSE MINI",
      series: "URBAN SERIES",
      price: "$95",
      image:
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=500&q=80",
      specs: "170mi Range | Zero Plastic",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16 w-full">
      {/* Header Fleet */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl lg:text-3xl font-heading font-extrabold text-neutral-900">
          Volt<span className="text-[#00C389]">Ride</span> Fleet
        </h2>
        <a
          href="#"
          className="flex items-center gap-1 text-xs font-bold text-[#00523C] hover:text-[#00C389] transition-colors"
        >
          Explore Full Gallery <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {cars.map((car, index) => (
          <div
            key={index}
            className="min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between"
          >
            <div className="h-48 w-full bg-neutral-200 relative overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                fill
                unoptimized
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 bg-white">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-heading font-extrabold text-neutral-900 text-base tracking-tight">
                    {car.name}
                  </h3>
                  <span className="text-[10px] font-heading font-bold text-[#00C389] uppercase tracking-wider block mt-0.5">
                    {car.series}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-heading font-extrabold text-neutral-900 text-base">
                    {car.price}
                  </span>
                  <span className="text-[10px] font-heading text-gray-400 block">
                    / day
                  </span>
                </div>
              </div>

              <hr className="my-3 border-gray-100" />
              <p className="flex items-center gap-1.5 text-[11px] font-heading text-gray-400 tracking-wide">
                <Zap className="w-3.5 h-3.5" />
                <span>{car.specs}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FleetSection;
