import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const RelatedVehicles = () => {
  return (
    <div className="font-heading pt-16 border-t border-neutral-200">
      <span className="text-[#006949] font-bold text-[10px] tracking-widest uppercase block mb-2">
        Explore More
      </span>
      <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-8">
        Related Kinetic Vehicles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            id: 1,
            type: "Grand Tourer",
            name: "Neon GT-X",
            desc: "The raw expression of kinetic energy. 0 to 60 in...",
            price: 150,
            img: "/images/neon-gtx.jpg",
          },
          {
            id: 2,
            type: "Luxury Sedan",
            name: "Aether GT",
            desc: "Refinement meets velocity. 400mi extended range.",
            price: 210,
            img: "/images/aether-gt.jpg",
          },
          {
            id: 3,
            type: "Luxury Sedan",
            name: "Aether GT",
            desc: "Refinement meets velocity. 400mi extended range.",
            price: 210,
            img: "/images/aether-gt.jpg",
          },
          {
            id: 4,
            type: "Luxury Sedan",
            name: "Aether GT",
            desc: "Refinement meets velocity. 400mi extended range.",
            price: 210,
            img: "/images/aether-gt.jpg",
          },
        ].map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer flex flex-col h-full"
          >
            <div className="relative h-48 w-full bg-neutral-900">
              <Image
                src={vehicle.img}
                alt={vehicle.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                {vehicle.type}
              </span>
              <h3 className="text-lg font-bold font-heading text-neutral-900 mb-2">
                {vehicle.name}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-grow">
                {vehicle.desc}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-sm font-bold text-neutral-900">
                  ${vehicle.price}
                  <span className="text-xs font-normal text-gray-500">
                    /day
                  </span>
                </p>
                <span className="text-xs font-bold text-[#006949] flex items-center gap-1 group-hover:text-[#00a372]">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVehicles;
