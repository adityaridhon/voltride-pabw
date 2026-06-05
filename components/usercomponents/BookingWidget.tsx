// components/product/BookingWidget.tsx
import React from "react";
import { MapPin, CalendarDays } from "lucide-react";

const BookingWidget = () => {
  return (
    <div className="bg-white font-heading rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 sticky top-24">
      <h3 className="text-xl font-bold text-neutral-900">Reserve Your Drive</h3>
      <p className="text-sm text-gray-500 mt-1">
        Select your itinerary for the Etherea S9.
      </p>

      <div className="space-y-4 mt-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            Pickup Location
          </label>
          <div className="flex items-center gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-neutral-800 font-medium">
              Los Angeles, CA - Neo Hub
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Start Date
            </label>
            <div className="flex items-center gap-2 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
              <CalendarDays className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-neutral-800 font-medium">
                Jun 12
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              End Date
            </label>
            <div className="flex items-center gap-2 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
              <CalendarDays className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-neutral-800 font-medium">
                Jun 15
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-100 space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>$240.00 × 3 Days</span>
            <span className="font-medium text-neutral-900">$720.00</span>
          </div>
          <div className="flex justify-between text-sm text-[#006949]">
            <span>Elite Member Discount</span>
            <span className="font-medium">-$72.00</span>
          </div>
          <div className="flex justify-between items-center pt-3 mt-3 border-t border-neutral-100">
            <span className="text-base font-bold text-neutral-900">Total</span>
            <span className="text-2xl font-bold text-[#006949]">$648.00</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-linear-to-r from-[#006B4F] to-[#00D096] hover:brightness-110 text-white font-bold py-4 rounded-xl transition-all duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;
