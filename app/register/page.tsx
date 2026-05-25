"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  registerUser,
  registerAdmin,
  registerMitra,
} from "@/actions/auth.actions";
import type {
  RegisterInput,
  RegisterAdminInput,
  RegisterMitraInput,
} from "@/lib/validations/auth";

type Role = "USER" | "ADMIN" | "MITRA";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("USER");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Form state for all roles
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [namaMitra, setNamaMitra] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      let result;

      if (role === "USER") {
        result = await registerUser({
          name,
          email,
          password,
          confirmPassword,
          noHp,
        } as RegisterInput);
      } else if (role === "ADMIN") {
        result = await registerAdmin({
          email,
          password,
          confirmPassword,
        } as RegisterAdminInput);
      } else if (role === "MITRA") {
        result = await registerMitra({
          email,
          password,
          confirmPassword,
          namaMitra,
          noHp,
          alamat,
        } as RegisterMitraInput);
      }

      if (!result || !result.success) {
        setError(result?.error || "Terjadi kesalahan saat pendaftaran.");
        return;
      }

      setSuccess(`${role} berhasil terdaftar! Silakan login.`);
      setTimeout(() => {
        router.push("/login");
        router.refresh();
      }, 1500);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Terjadi kesalahan tidak terduga.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">VoltRide</h1>
          <p className="text-zinc-400 text-sm mt-1">Daftar akun baru</p>
        </div>

        {/* Role Selection Tabs */}
        <div className="flex gap-2 bg-zinc-800 p-1 rounded-lg">
          {(["USER", "ADMIN", "MITRA"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => {
                setRole(r);
                setError("");
                setSuccess("");
              }}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded transition-all ${
                role === r
                  ? "bg-emerald-600 text-white"
                  : "bg-transparent text-zinc-400 hover:text-zinc-300"
              }`}
            >
              {r === "MITRA" ? "Mitra" : r}
            </button>
          ))}
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm rounded-lg px-4 py-3">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* USER Role Form */}
          {role === "USER" && (
            <>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  No. HP (Opsional)
                </label>
                <input
                  type="tel"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                  placeholder="+62..."
                />
              </div>
            </>
          )}

          {/* ADMIN Role Form */}
          {role === "ADMIN" && (
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <p className="text-blue-400 text-xs">
                Pendaftaran admin memerlukan verifikasi tambahan. Hubungi
                administrator.
              </p>
            </div>
          )}

          {/* MITRA Role Form */}
          {role === "MITRA" && (
            <>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  Nama Mitra
                </label>
                <input
                  type="text"
                  value={namaMitra}
                  onChange={(e) => setNamaMitra(e.target.value)}
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                  placeholder="Nama bisnis/perusahaan"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  No. HP (Opsional)
                </label>
                <input
                  type="tel"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                  placeholder="+62..."
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  Alamat (Opsional)
                </label>
                <input
                  type="text"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
                  placeholder="Alamat lengkap"
                />
              </div>
            </>
          )}

          {/* Common Fields for All Roles */}
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
            <p className="text-xs text-zinc-500 mt-1">Minimal 8 karakter</p>
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1">
              Konfirmasi Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-medium rounded-lg py-2.5 text-sm transition-colors"
          >
            {loading
              ? "Mendaftar..."
              : `Daftar sebagai ${role === "MITRA" ? "Mitra" : role}`}
          </button>
        </form>

        <div className="border-t border-zinc-800 pt-4 text-center">
          <p className="text-sm text-zinc-400">
            Sudah punya akun?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
            >
              Masuk di sini
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
