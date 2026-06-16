"use client";

import Link from "next/link";
import { AtSign, Lock } from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { registerMitra } from "@/actions/auth.actions";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";


export default function MitraRegisterPage() {

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [namaMitra, setNamaMitra] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 
  const [confirmPassword, setConfirmPassword] =
  useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        const result = await registerMitra({
          namaMitra,
          alamat,
          noHp,
          email,
          password,
          confirmPassword,
        });

        if (!result.success) {
          setError(result.error ?? "Registrasi gagal");
          return;
        }

        setSuccess("Registrasi berhasil!");

        setTimeout(() => {
          router.push("/login/mitra");
        }, 1500);
      } catch {
        setError("Terjadi kesalahan.");
      }
    });
};
  return (
    <div className="h-screen flex w-full bg-white text-zinc-900">
      
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-18 bg-[#FAFAFA] order-2 lg:order-1">
        <div className="w-full max-w-xl space-y-6">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            Volt<span className="text-secondary">Ride</span>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-zinc-800">Partner Registration</h1>
            <p className="text-sm text-zinc-500">
              Enter your credentials to access the partner dashboard.
            </p>
          </div>

          {/* Form */}
          {error && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-600">
              {success}
            </div>
          )}
          <form 
          className="space-y-4" 
          onSubmit={handleSubmit}
          >
          <div className="flex flex-row gap-2 w-full justify-between">  
            {/* Name Field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                Partner Name
              </label>
              <input
                type="text"
                value={namaMitra}
                onChange={(e) => setNamaMitra(e.target.value)}
                placeholder="Sukajaya Showroom"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none pr-10"
                />
                <AtSign className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                Phone Number
              </label>

              <input
                type="text"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                placeholder="08123456789"
                className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none"
              />
            </div>
          </div>

            {/* Location Field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                Partner Location
              </label>
              <input
                type="text"
                placeholder="Jl. Soekarno Hatta No.KM 15, Karang Joang"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none"
              />
            </div>

          <div className="flex flex-row gap-2 w-full justify-between">  
            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none pr-10"
                />
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none pr-10"
                />

                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
              </div>
            </div>
          </div>        
            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#00C689] hover:bg-[#00B07A]"
            >
              {isPending ? "Registering..." : "Register"}
            </Button>
          </form>

          {/* Footer */}
          <div className="pt-2 text-center text-xs text-zinc-500">
            Already have an account?{" "}
            <Link href="/login/mitra" className="text-[#009B65] font-bold hover:underline">
              Login Here
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:flex w-1/2 relative bg-emerald-950 order-1 lg:order-2">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=2000&auto=format&fit=crop"
          alt="Electric Car"
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
