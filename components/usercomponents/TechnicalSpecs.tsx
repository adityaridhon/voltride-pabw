import React from "react";
import { Shield, Volume2, Cloud } from "lucide-react";

const TechnicalSpecs = () => {
  return (
    <div className="lg:col-span-8 font-heading ">
      <h2 className="text-3xl font-bold text-neutral-900 mb-8">
        Technical Architecture
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Battery Capacity</span>
          <span className="text-sm font-bold text-neutral-900">
            120 kWh Solid-State
          </span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Charging (10-80%)</span>
          <span className="text-sm font-bold text-neutral-900">
            12 Minutes @ 350kW
          </span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Interior Materials</span>
          <span className="text-sm font-bold text-neutral-900">
            100% Recycled Vegan Silk
          </span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Safety Rating</span>
          <span className="text-sm font-bold text-neutral-900">
            5-Star EURO NCAP+
          </span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Drive Configuration</span>
          <span className="text-sm font-bold text-neutral-900">
            Tri-Motor AWD Kinetic
          </span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span className="text-sm text-gray-500">Cargo Volume</span>
          <span className="text-sm font-bold text-neutral-900">
            28.5 cu ft (Frunk + Rear)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex flex-col items-center text-center">
          <Shield className="w-8 h-8 text-[#006949] mb-4" />
          <h4 className="text-sm font-bold text-neutral-900 mb-2">
            Bioweapon Defense
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            HEPA filtration for 100% clean cabin air.
          </p>
        </div>

        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex flex-col items-center text-center">
          <Volume2 className="w-8 h-8 text-[#006949] mb-4" />
          <h4 className="text-sm font-bold text-neutral-900 mb-2">
            Kinetic Audio
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            24-speaker immersive haptic soundstage.
          </p>
        </div>

        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex flex-col items-center text-center">
          <Cloud className="w-8 h-8 text-[#006949] mb-4" />
          <h4 className="text-sm font-bold text-neutral-900 mb-2">
            Neural Sync
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Seamless profile migration via Kinetic ID.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;
