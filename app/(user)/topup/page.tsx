"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { confirmTopup } from "@/actions/user.actions";

const topupOptions = [50000, 100000, 150000, 250000, 500000, 1000000];

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("Rp", "Rp ");

export default function TopupPage() {
  const [selectedAmount, setSelectedAmount] = useState(topupOptions[1]);
  const [customAmount, setCustomAmount] = useState("" as string);

  const finalAmount = useMemo(() => {
    const parsed = Number(customAmount);
    if (Number.isFinite(parsed) && parsed > 0) return parsed;
    return selectedAmount;
  }, [customAmount, selectedAmount]);

  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-500">
          Top Up
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
          Isi saldo dengan cepat
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Pilih nominal favorit dan metode pembayaran yang paling nyaman.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Nominal cepat</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {topupOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSelectedAmount(item);
                  setCustomAmount("");
                }}
                className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                  selectedAmount === item && !customAmount
                    ? "border-emerald-500/60 bg-emerald-50 text-emerald-700"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-emerald-300"
                }`}
              >
                {formatRupiah(item)}
                <p className="mt-2 text-xs text-zinc-500">
                  Tanpa biaya tambahan
                </p>
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Nominal custom
            </label>
            <input
              type="number"
              min={1000}
              step={1000}
              value={customAmount}
              onChange={(event) => setCustomAmount(event.target.value)}
              placeholder="Masukkan nominal"
              className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
            />
          </div>
          <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
            Nominal dipilih:{" "}
            <span className="font-semibold">{formatRupiah(finalAmount)}</span>
          </div>
        </div>

        <form
          action={confirmTopup}
          className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-zinc-900">
            QRIS untuk pembayaran
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Scan QRIS berikut, lalu klik tombol "sudah bayar" untuk menambah
            saldo secara otomatis.
          </p>
          <div className="mt-5 flex items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-6">
            <Image
              src="/qris-placeholder.svg"
              width={180}
              height={180}
              alt="QRIS VoltRide"
              className="rounded-xl bg-white p-2"
            />
          </div>
          <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
            Total yang akan ditambahkan:{" "}
            <span className="font-semibold">{formatRupiah(finalAmount)}</span>
          </div>
          <input type="hidden" name="amount" value={finalAmount} />
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Sudah bayar
          </button>
        </form>
      </div>
    </section>
  );
}
