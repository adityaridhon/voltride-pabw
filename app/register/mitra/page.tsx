"use client";

import Link from "next/link";
import { AtSign, Lock } from "lucide-react";

export default function MitraRegisterPage() {
  return (
    <div className="min-h-screen flex w-full bg-white text-zinc-900">
      
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-[#FAFAFA] order-2 lg:order-1">
        <div className="w-full max-w-sm space-y-8">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-zinc-800">Volt</span>
            <span className="text-[#00C689]">Ride</span>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-zinc-800">Partner Registration</h1>
            <p className="text-sm text-zinc-500">
              Enter your credentials to access the partner dashboard.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                Partner Name
              </label>
              <input
                type="text"
                placeholder="Sukajaya Showroom"
                className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none"
              />
            </div>

            {/* Location Field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                Partner Location
              </label>
              <input
                type="text"
                placeholder="Jl. Soekarno Hatta No.KM 15, Karang Joang"
                className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                Partner Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@mitra-volt.com"
                  className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none pr-10"
                />
                <AtSign className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                  Password
                </label>
                <Link href="#" className="text-[10px] text-[#009B65] hover:underline font-medium">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none pr-10"
                />
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#00C689] hover:bg-[#00B07A] text-white font-medium rounded-md py-3 text-sm transition-colors mt-2"
            >
              Register
            </button>
          </form>

          {/* Footer */}
          <div className="pt-6 text-center text-xs text-zinc-500">
            Already have an account?{" "}
            <Link href="/login/mitra" className="text-[#009B65] font-bold hover:underline">
              Login Here
            </Link>
          </div>

        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:flex w-1/2 relative bg-emerald-950 order-1 lg:order-2">
        <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply z-10" />
        <img
          src="https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=2000&auto=format&fit=crop"
          alt="Electric Car"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
