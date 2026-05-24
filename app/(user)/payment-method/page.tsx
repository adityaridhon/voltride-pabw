const methods = [
  { name: "BCA Virtual Account", info: "Aktif · Berakhir 09/28" },
  { name: "Kartu Debit BNI", info: "Aktif · Berakhir 03/27" },
  { name: "E-Wallet OVO", info: "Terhubung" },
];





export default function PaymentMethodPage() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
          Metode Pembayaran
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold">
          Kelola metode pembayaran
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Simpan beberapa metode untuk transaksi yang lebih cepat.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Metode tersimpan</h2>
          <div className="mt-4 space-y-3">
            {methods.map((method) => (
              <div
                key={method.name}
                className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    {method.name}
                  </p>
                  <p className="text-xs text-slate-400">{method.info}</p>
                </div>
                <button className="rounded-full border border-slate-700/80 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-500">
                  Kelola
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Tambah metode baru</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Nama metode
              </label>
              <input
                type="text"
                placeholder="Contoh: Kartu debit"
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Nomor
              </label>
              <input
                type="text"
                placeholder="Masukkan nomor kartu atau VA"
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
              />
            </div>
          </div>
          <button className="mt-5 w-full rounded-full bg-emerald-400/90 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Simpan metode
          </button>
        </div>
      </div>
    </section>
  );
}
