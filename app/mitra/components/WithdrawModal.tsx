"use client";

import { useState } from "react";
import { withdrawAction } from "@/actions/withdraw.actions";

type Props = {
  balance: number;
};

export default function WithdrawModal({ balance }: Props) {
  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState("BCA");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!amount || !accountNumber) {
      alert("Harap isi semua data");
      return;
    }
    
    setLoading(true);
    const result = await withdrawAction(
      Number(amount),
      provider,
      accountNumber
    );
    setLoading(false);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert("Withdraw berhasil");
    setOpen(false); // Tutup modal setelah sukses
    window.location.reload();
  }

  return (
    <>
      {/* 1. Tombol pemicu yang AKAN SELALU muncul di Card Available Balance */}
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-slate-50 transition-colors"
      >
        Withdraw Funds
      </button>

      {/* 2. Overlay & Konten Modal yang hanya muncul saat open === true */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center text-slate-800 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md text-left shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-xl font-bold mb-4">Withdraw Dana</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600">
                  Bank / E-Wallet
                </label>
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg p-3 mt-1 bg-white focus:outline-emerald-500"
                >
                  <option>BCA</option>
                  <option>BNI</option>
                  <option>BRI</option>
                  <option>Mandiri</option>
                  <option>OVO</option>
                  <option>DANA</option>
                  <option>GoPay</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Nomor Rekening
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg p-3 mt-1 focus:outline-emerald-500"
                  placeholder="Masukkan nomor rekening"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Nomor Nominal (Maks: {balance})
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg p-3 mt-1 focus:outline-emerald-500"
                  placeholder="100000"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex-1 border border-slate-200 text-slate-500 rounded-xl py-3 font-medium hover:bg-slate-50 transition-colors"
              >
                Batal
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-emerald-500 text-white font-medium rounded-xl py-3 hover:bg-emerald-600 disabled:bg-emerald-300 transition-colors"
              >
                {loading ? "Processing..." : "Withdraw"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 