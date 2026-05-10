const banks = [
  { name: "BCA", note: "Proses 1-3 menit" },
  { name: "Mandiri", note: "Proses instan" },
  { name: "BNI", note: "Proses 5 menit" },
];

const quickAmount = ["Rp 100.000", "Rp 250.000", "Rp 500.000", "Rp 1.000.000"];

export default function WithdrawPage() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
          Tarik Dana
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold">
          Tarik saldo ke rekening bank
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Pilih rekening tujuan dan tentukan nominal penarikan dana.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Rekening tujuan</h2>
          <div className="mt-4 space-y-3">
            {banks.map((bank) => (
              <div
                key={bank.name}
                className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    {bank.name}
                  </p>
                  <p className="text-xs text-slate-400">{bank.note}</p>
                </div>
                <button className="rounded-full border border-slate-700/80 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-500">
                  Pilih
                </button>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-full border border-slate-700/80 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
            Tambah rekening baru
          </button>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Nominal tarik</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {quickAmount.map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4 text-left text-sm font-semibold text-slate-200 transition hover:border-emerald-400/60"
              >
                {item}
                <p className="mt-2 text-xs text-slate-400">
                  Biaya admin Rp 2.500
                </p>
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4">
            <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Nominal custom
            </label>
            <input
              type="text"
              placeholder="Masukkan nominal"
              className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
            />
          </div>
          <button className="mt-5 w-full rounded-full bg-emerald-400/90 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Tarik dana
          </button>
          <p className="mt-3 text-xs text-slate-400">
            Saldo tersisa setelah tarik: Rp 2.200.000
          </p>
        </div>
      </div>
    </section>
  );
}
