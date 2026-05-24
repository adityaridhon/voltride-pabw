import React from "react";

const BrandLogos = () => {
  const brands = ["TESLA", "BYD", "CHERY", "WULING"];

  return (
    <section className="font-heading bg-[#F4F4F4] py-12 w-full mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-6">
          OUR ELECTRIC VEHICLE
        </span>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
          {brands.map((brand, index) => (
            <span
              key={index}
              className="font-bold text-xl lg:text-2xl text-gray-400 tracking-wider hover:text-gray-600 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
