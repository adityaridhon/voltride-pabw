const walletCards = [
  { name: "Saldo utama", number: "**** 9921", amount: "Rp 2.450.000" },
  { name: "Dana perjalanan", number: "**** 3810", amount: "Rp 820.000" },
];

const insights = [
  { label: "Top up tercepat", value: "Bank transfer instan" },
  { label: "Kategori teratas", value: "Sewa harian" },
  { label: "Hemat minggu ini", value: "Rp 120.000" },
];

// Halaman utama wallet user belum kepikiran

export default function WalletPage() {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
            Dompet Digital
          </p>
          <h1 className="mt-2 font-heading text-3xl font-semibold">
            Pusat kendali saldo kamu
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Kelola beberapa saldo sekaligus dan pantau insight penggunaan
            harian.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full border border-slate-700/80 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
            Atur prioritas saldo
          </button>
          <button className="rounded-full bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Tambah saldo baru
          </button>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {walletCards.map((card, index) => (
          <div
            key={card.name}
            className="wallet-fade-in rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {card.name}
                </p>
                <p className="mt-2 text-2xl font-semibold">{card.amount}</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                Aktif
              </span>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
              <span>{card.number}</span>
              <span>VoltRide Wallet</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Aksi cepat</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Top up instan",
              "Transfer sesama user",
              "Tarik dana ke bank",
              "Atur limit transaksi",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4 text-left text-sm font-semibold text-slate-200 transition hover:border-emerald-400/60"
              >
                {item}
                <p className="mt-2 text-xs text-slate-400">
                  Kelola langsung tanpa keluar halaman.
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Insight mingguan</h2>
          <div className="mt-4 space-y-4">
            {insights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-slate-100">{item.value}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-full border border-slate-700/80 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
            Lihat analitik detail
          </button>
        </div>
      </div>
    </section>
  );
}
