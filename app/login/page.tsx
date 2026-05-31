"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Email atau password salah.");
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

  async function handleGoogleLogin() {
    setGoogleLoading(true);
    setError("");
    try {
      await signIn("google", { redirect: false });
      const session = await getSession();
      if (session?.user?.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else if (session?.user?.role === "MITRA") {
        router.push("/mitra/dashboard");
      } else {
        router.push("/dashboard");
      }
      router.refresh();
    } catch (err) {
      setError("Gagal login dengan Google. Silakan coba lagi.");
    } finally {
      setGoogleLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">VoltRide</h1>
          <p className="text-zinc-400 text-sm mt-1">Masuk ke akun Anda</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading || loading}
          className="w-full bg-white hover:bg-zinc-100 disabled:opacity-50 text-zinc-900 font-medium rounded-lg py-2.5 text-sm transition-colors flex items-center justify-center gap-2"
        >
          <Globe size={18} />
          {googleLoading ? "Memproses..." : "Login dengan Google"}
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-zinc-700" />
          <span className="text-xs text-zinc-500">atau</span>
          <div className="flex-1 h-px bg-zinc-700" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
              placeholder="email@voltride.id"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading || googleLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-medium rounded-lg py-2.5 text-sm transition-colors"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <div className="border-t border-zinc-800 pt-4">
          <p className="text-xs text-zinc-500 text-center">
            Belum punya akun?{" "}
            <a
              href="/register"
              className="text-emerald-500 hover:text-emerald-400 font-medium"
            >
              Daftar di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
