import React from "react";

interface ProductHighlightsProps {
  mobil: any;
}

const ProductHighlights = ({ mobil }: ProductHighlightsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div className="bg-linear-to-r from-primary via-primary/60 to-secondary p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col justify-between">
        <p className="text-[10px] font-bold text-gray-100 uppercase tracking-wider mb-2">
          Range
        </p>
        <p className="text-4xl font-bold font-heading text-white">
          {mobil.range} <span className="text-sm font-normal">km</span>
        </p>
      </div>
      <div className="bg-linear-to-r from-primary via-primary/60 to-secondary p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col justify-between">
        <p className="text-[10px] font-bold text-gray-100 uppercase tracking-wider mb-2">
          Battery
        </p>
        <p className="text-4xl font-bold font-heading text-white">
          {mobil.battery} <span className="text-sm font-normal text-gray-100">kWh</span>
        </p>
      </div>
    </div>
  );
};

export default ProductHighlights;
