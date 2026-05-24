import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const pemesanan = [
  {
    id_pemesanan: "VB-2305",
    id_pengguna: 128,
    id_mobil: "EV-210",
    tanggal_sewa: "12 Mei 2026",
    tanggal_selesai: "14 Mei 2026",
    total_harga: "Rp 520.000",
    status_pemesanan: "Selesai",
    mobil: "Wuling Air EV",
  },
  {
    id_pemesanan: "VB-2291",
    id_pengguna: 128,
    id_mobil: "EV-305",
    tanggal_sewa: "08 Mei 2026",
    tanggal_selesai: "10 Mei 2026",
    total_harga: "Rp 1.200.000",
    status_pemesanan: "Berjalan",
    mobil: "Hyundai Ioniq 5",
  },
  {
    id_pemesanan: "VB-2276",
    id_pengguna: 128,
    id_mobil: "EV-144",
    tanggal_sewa: "01 Mei 2026",
    tanggal_selesai: "02 Mei 2026",
    total_harga: "Rp 310.000",
    status_pemesanan: "Selesai",
    mobil: "Nissan Leaf",
  },
];

const mobilListrik = [
  {
    id_mobil: "EV-305",
    id_mitra: "MT-09",
    tipe_mobil: "Hyundai Ioniq 5",
    status_ketersediaan: "Tersedia",
    warna: "Putih",
    plat: "B 1987 EV",
  },
  {
    id_mobil: "EV-210",
    id_mitra: "MT-04",
    tipe_mobil: "Wuling Air EV",
    status_ketersediaan: "Terjadwal",
    warna: "Biru",
    plat: "D 2210 EV",
  },
  {
    id_mobil: "EV-144",
    id_mitra: "MT-02",
    tipe_mobil: "Nissan Leaf",
    status_ketersediaan: "Tersedia",
    warna: "Hitam",
    plat: "B 4431 EV",
  },
];

const methods = [
  { name: "BCA Virtual Account", info: "Aktif · Berakhir 09/28" },
  { name: "Kartu Debit BNI", info: "Aktif · Berakhir 03/27" },
  { name: "E-Wallet OVO", info: "Terhubung" },
];

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      name: true,
      email: true,
      noHp: true,
      dompet: { select: { saldo: true } },
    },
  });

  const saldo = formatRupiah(Number(user?.dompet?.saldo ?? 0));

  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
          Profil pengguna
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold">
          Ringkasan akun dan aktivitas
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Pantau saldo, pemesanan, dan informasi akun kamu di satu tempat.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            label: "Saldo dompet",
            value: saldo,
            note: "Siap dipakai",
          },
          {
            label: "Pemesanan aktif",
            value: "2",
            note: "Sedang berjalan",
          },
          {
            label: "Transaksi bulan ini",
            value: "14",
            note: "2 tertunda",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {item.label}
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-100">
              {item.value}
            </p>
            <p className="mt-2 text-xs text-slate-400">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Edit profil</h2>
          <div className="mt-4 grid gap-4">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Nama lengkap
              </label>
              <input
                type="text"
                defaultValue={user?.name ?? ""}
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Email
              </label>
              <input
                type="email"
                defaultValue={user?.email ?? ""}
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Nomor HP
              </label>
              <input
                type="tel"
                defaultValue={user?.noHp ?? ""}
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
              />
            </div>
          </div>
          <button className="mt-5 w-full rounded-full bg-emerald-400/90 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Simpan perubahan
          </button>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Dompet & preferensi</h2>
          <div className="mt-4 rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Saldo aktif
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-100">
              {saldo}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="rounded-full bg-emerald-400/90 px-3 py-1 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300">
                Top up
              </button>
              <button className="rounded-full border border-slate-700/80 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-500">
                Tarik dana
              </button>
            </div>
          </div>
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

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg">Riwayat pemesanan</h2>
            <button className="text-xs text-emerald-300/80 transition hover:text-emerald-200">
              Lihat semua
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {pemesanan.map((item) => (
              <div
                key={item.id_pemesanan}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-100">
                      {item.mobil}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {item.tanggal_sewa} - {item.tanggal_selesai} ·{" "}
                      {item.id_pemesanan}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-emerald-200">
                    {item.total_harga}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300">
                  Status: {item.status_pemesanan}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Daftar mobil listrik</h2>
          <div className="mt-4 space-y-3">
            {mobilListrik.map((car) => (
              <div
                key={car.id_mobil}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-100">
                    {car.tipe_mobil}
                  </p>
                  <span className="rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                    {car.id_mitra}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  {car.warna} · {car.plat}
                </p>
                <p className="mt-2 text-xs text-emerald-200">
                  {car.status_ketersediaan}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-full border border-slate-700/80 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
            Lihat ketersediaan
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
          <h2 className="font-heading text-lg">Metode pembayaran</h2>
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
