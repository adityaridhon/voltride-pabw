import React from "react";

const ProductHighlights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col justify-between">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
          Range
        </p>
        <p className="text-4xl font-bold font-heading text-neutral-900">
          420 <span className="text-sm font-normal text-gray-500">mi</span>
        </p>
      </div>
      <div className="bg-[#006949] p-6 rounded-2xl shadow-md text-white flex flex-col justify-between">
        <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-2">
          Acceleration
        </p>
        <p className="text-4xl font-bold font-heading">
          2.1 <span className="text-sm font-normal text-white/70">s</span>
        </p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col justify-between">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
          Battery
        </p>
        <p className="text-4xl font-bold font-heading text-neutral-900">
          80 <span className="text-sm font-normal text-gray-500">kWh</span>
        </p>
      </div>
    </div>
  );
};

export default ProductHighlights;
