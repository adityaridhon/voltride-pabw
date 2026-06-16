"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface FleetSliderProps {
  cars: any[];
}

export default function FleetSlider({ cars }: FleetSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Header & Tombol Navigasi */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-2xl lg:text-4xl font-heading font-extrabold text-neutral-900">
            Volt<span className="text-secondary">Ride</span> Fleet
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Explore our premium electric vehicle fleet for your next journey.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => slide("left")}
            className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-neutral-600 transition-colors"
            aria-label="Geser Kiri"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => slide("right")}
            className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-neutral-600 transition-colors"
            aria-label="Geser Kanan"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 pb-8 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-none] scroll-smooth"
      >
        {cars.map((car) => (
          <Link
            href={`/product/${car.id}`}
            key={car.id}
            className="min-w-70 md:min-w-[320px] shrink-0 snap-start bg-[#FDFDFD] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
          >
            <div className="h-48 w-full bg-neutral-100 relative overflow-hidden">
              {car.imageUrl ? (
                <Image
                  src={car.imageUrl}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}
            </div>

            <div className="p-6 bg-white flex flex-col grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-heading font-extrabold text-neutral-900 text-lg tracking-tight line-clamp-1">
                    {car.name}
                  </h3>
                  <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-wider block mt-1">
                    {car.brand} {car.model || ""}
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-end gap-1 mb-4">
                  <span className="font-heading font-extrabold text-neutral-900 text-xl">
                    Rp {car.pricePerDay.toLocaleString("id-ID")}
                  </span>
                  <span className="text-xs font-heading text-gray-500 mb-1">
                    / day
                  </span>
                </div>

                <hr className="mb-4 border-gray-100" />

                <p className="flex items-center gap-2 text-xs font-heading text-gray-500 tracking-wide line-clamp-1">
                  <Zap className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    {car.range ? `${car.range} km Range` : ""}{" "}
                    {car.acceleration ? `| 0-100 km/h in ${car.acceleration}s` : ""}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}

        {/* Card Terakhir: Lihat Semua */}
        <div className="min-w-70 md:min-w-[320px] shrink-0 snap-start rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-colors group">
          <Link
            href="/product"
            className="flex flex-col items-center justify-center w-full h-full min-h-87.5 p-6"
          >
            <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-6 h-6 text-primary" />
            </div>
            <span className="font-heading font-bold text-neutral-900 text-lg">
              View More
            </span>
            <span className="text-sm text-gray-500 text-center mt-2">
              Explore more our fleet!
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}