"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { requestWithdrawal } from "@/actions/user.actions";

const quickAmounts = [100000, 250000, 500000, 1000000];

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("Rp", "Rp ");

type WithdrawClientProps = {
  initialBalance: number;
};

export default function WithdrawClient({
  initialBalance,
}: WithdrawClientProps) {
  const [amountInput, setAmountInput] = useState("");
  const [balance, setBalance] = useState(initialBalance);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const amountValue = useMemo(() => {
    const parsed = Number(amountInput);
    return Number.isFinite(parsed) ? parsed : 0;
  }, [amountInput]);

  const remainingBalance = Math.max(balance - amountValue, 0);

  const handleQuickPick = (value: number) => {
    setAmountInput(String(value));
    setError(null);
  };

  const handleAmountChange = (value: string) => {
    const digitsOnly = value.replace(/[^0-9]/g, "");
    setAmountInput(digitsOnly);
    setError(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setToast(null);

    const amount = Number(amountInput);
    if (!Number.isFinite(amount) || amount <= 0) {
      setError("Masukkan nominal yang valid.");
      return;
    }
    if (amount > balance) {
      setError("Nominal melebihi saldo yang tersedia.");
      return;
    }

    const formData = new FormData();
    formData.set("amount", String(amount));

    startTransition(async () => {
      const result = await requestWithdrawal(formData);
      if (!result.success) {
        setError(result.error);
        return;
      }

      setBalance(result.data.balance);
      setAmountInput("");
      setToast("Penarikan berhasil diproses.");
      window.setTimeout(() => setToast(null), 3500);
    });
  };

  return (
    <section className="space-y-6">
      <header>
        <Link
          href="/profile#wallet"
          className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 transition hover:text-emerald-700"
        >
          <span aria-hidden="true">←</span>
          Kembali ke profil
        </Link>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-emerald-500">
          Tarik dana
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
          Tarik saldo ke rekening bank
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Pastikan nominal sesuai dengan saldo yang tersedia.
        </p>
      </header>

      {toast ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {toast}
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">
            Saldo tersedia
          </h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">
            {formatRupiah(balance)}
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Saldo akan berkurang setelah penarikan sukses.
          </p>
          <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
            Sisa saldo setelah tarik: {formatRupiah(remainingBalance)}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-zinc-900">Nominal tarik</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {quickAmounts.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleQuickPick(item)}
                className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                  amountValue === item
                    ? "border-emerald-500/60 bg-emerald-50 text-emerald-700"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-emerald-300"
                }`}
              >
                {formatRupiah(item)}
                <p className="mt-2 text-xs text-zinc-500">Tanpa biaya admin</p>
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Nominal custom
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={amountInput}
              onChange={(event) => handleAmountChange(event.target.value)}
              placeholder="Masukkan nominal"
              className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
            />
          </div>

          {error ? (
            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isPending}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Memproses...
              </span>
            ) : (
              "Tarik dana"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
