"use client";

import Link from "next/link";
import { AtSign, Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function MitraLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      role: "MITRA",
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Email, password salah, atau Anda tidak memiliki akses Mitra.");
    } else {
      const session = await getSession();
      if (session?.user?.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else if (session?.user?.role === "MITRA") {
        router.push("/mitra/dashboard");
      } else {
        router.push("/dashboard");
      }
      router.refresh();
    }
  }

  return (
    <div className="h-screen flex w-full bg-white text-zinc-900">
      {/* Left side - Image */}
      <div className="hidden lg:flex w-1/2 relative bg-emerald-950">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=2000&auto=format&fit=crop"
          alt="Electric Car"
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-[#FAFAFA]">
        <div className="w-full max-w-sm space-y-8">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-zinc-800">Volt</span>
            <span className="text-[#00C689]">Ride</span>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-zinc-800">Partner Login</h1>
            <p className="text-sm text-zinc-500">
              Enter your credentials to access the partner dashboard.
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 text-sm rounded-md px-4 py-3">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-[#009B65] uppercase tracking-wider">
                Partner Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-[#F3F4F6] border-none rounded-md px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00C689] focus:outline-none pr-10"
                />
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full disabled:opacity-50 mt-2"
            >
              {loading ? "Processing..." : "Login"}
            </Button>
          </form>

          {/* Footer */}
          <div className="pt-6 text-center text-xs text-zinc-500">
            New to our ecosystem?{" "}
            <Link href="/register/mitra" className="text-[#009B65] font-bold hover:underline">
              Become a Partner
            </Link>
          </div>



        </div>
      </div>
    </div>
  );
}
