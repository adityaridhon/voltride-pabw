const infoRows = [
  { label: "Nama lengkap", value: "Raka Pratama" },
  { label: "Email", value: "raka@voltride.id" },
  { label: "Nomor HP", value: "+62 812 1234 5678" },
  { label: "Status akun", value: "Terverifikasi" },
];

// ========================================
// i YANG BISA DIBUAT
// HALAMAN PROFILE
// ========================================

// 1. Edit profile feature
// - Edit nama user
// - Edit email
// - Edit nomor telepon
// - Edit alamat





export default function ProfilePage() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
          Profil
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold">
          Data akun dan preferensi
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Kelola informasi personal dan preferensi notifikasi kamu.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Informasi utama</h2>
          <div className="mt-4 space-y-3">
            {infoRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3"
              >
                <span className="text-sm text-slate-400">{row.label}</span>
                <span className="text-sm font-semibold text-slate-100">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-5 w-full rounded-full bg-emerald-400/90 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Edit profil
          </button>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Preferensi</h2>
          <div className="mt-4 space-y-3">
            {["Update transaksi", "Promo perjalanan", "Reminder top up"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3"
                >
                  <span className="text-sm text-slate-200">{item}</span>
                  <button className="rounded-full border border-slate-700/80 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-500">
                    Aktif
                  </button>
                </div>
              ),
            )}
          </div>
          <div className="mt-5 rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Zona waktu
            </p>
            <p className="mt-2 text-sm text-slate-200">GMT+7 (WIB)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
