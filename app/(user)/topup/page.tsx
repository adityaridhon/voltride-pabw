import { topUpWithQris } from "@/actions/wallet.actions";

const quickAmounts = ["50000", "100000", "150000", "250000", "500000"];


export default function TopupPage() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
          Top Up
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold">
          Isi saldo dengan cepat
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Pilih nominal favorit dan metode pembayaran yang paling nyaman.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <form
          action={topUpWithQris}
          className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5"
        >
          <h2 className="font-heading text-lg">Pembayaran QRIS</h2>
          <p className="mt-2 text-sm text-slate-400">
            Scan QRIS di bawah, lalu klik tombol sudah bayar untuk menambah
            saldo.
          </p>

          <div className="mt-5 flex items-center justify-center rounded-2xl border border-dashed border-emerald-400/40 bg-slate-900/50 p-6">
            <div className="grid grid-cols-6 gap-1">
              {Array.from({ length: 36 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-sm ${
                    index % 5 === 0 || index % 7 === 0
                      ? "bg-emerald-200"
                      : "bg-slate-800"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4">
            <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Nominal top up
            </label>
            <input
              name="amount"
              type="text"
              placeholder="Contoh: 100000"
              className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
              required
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {quickAmounts.map((amount) => (
                <span
                  key={amount}
                  className="rounded-full border border-slate-700/80 px-3 py-1 text-xs text-slate-300"
                >
                  Rp {Number(amount).toLocaleString("id-ID")}
                </span>
              ))}
            </div>
          </div>

          <button className="mt-5 w-full rounded-full bg-emerald-400/90 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Sudah bayar
          </button>
        </form>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Instruksi singkat</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                1. Buka aplikasi bank
              </p>
              <p className="mt-2">Pilih menu QRIS dan scan kode di samping.</p>
            </div>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                2. Masukkan nominal
              </p>
              <p className="mt-2">
                Pastikan nominal sesuai agar saldo terisi otomatis.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                3. Konfirmasi
              </p>
              <p className="mt-2">
                Klik tombol sudah bayar setelah transaksi berhasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
