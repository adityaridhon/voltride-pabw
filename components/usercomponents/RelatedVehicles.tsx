import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedMobil } from "@/actions/mobil.actions";

interface RelatedVehiclesProps {
  currentMobilId: string;
}

const RelatedVehicles = async ({ currentMobilId }: RelatedVehiclesProps) => {
  // 1. Panggil fungsi action
  const result = await getRelatedMobil(currentMobilId);

  // 2. Cek apakah success === false ATAU datanya kosong/tidak ada
  if (!result.success || !result.data || result.data.length === 0) {
    return null; 
  }

  // 3. Ekstrak array mobil dari result.data
  const vehicles = result.data;

  return (
    <div className="font-heading pt-16 border-t border-neutral-200">
      <span className="text-primary font-bold text-[10px] tracking-widest uppercase block mb-2">
        Explore More
      </span>
      <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-8">
        Related VoltRide Vehicles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((vehicle: any) => (
          <Link
            href={`/product/${vehicle.id}`}
            key={vehicle.id}
            className="bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer flex flex-col h-full"
          >
            <div className="relative h-48 w-full bg-neutral-100 flex items-center justify-center">
              {/* Gunakan placeholder jika imageUrl kosong di database */}
              {vehicle.imageUrl ? (
                <Image
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <span className="text-neutral-400 text-sm font-medium">No Image</span>
              )}
            </div>
            
            <div className="p-6 flex flex-col grow">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                {vehicle.brand || "VoltRide"} {/* Fallback jika brand kosong */}
              </span>
              
              <h3 className="text-lg font-bold font-heading text-neutral-900 mb-2 line-clamp-1">
                {vehicle.name}
              </h3>
              
   
              <div className="flex justify-between items-center mt-auto">
                <p className="text-sm font-bold text-neutral-900">
                  Rp{vehicle.pricePerDay.toLocaleString("id-ID")}
                  <span className="text-xs font-normal text-gray-500">
                    /day
                  </span>
                </p>
                
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:text-[#00a372]">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedVehicles;