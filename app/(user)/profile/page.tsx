import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth-guard";

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("Rp", "Rp ");

const formatDate = (value: Date) =>
  new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(value);

export default async function ProfilePage() {
  const session = await requireAuth();
  const userId = session.user!.id;

  const [user, wallet, bookings] = await prisma.$transaction([
    prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true, phone: true },
    }),
    prisma.wallet.findUnique({
      where: { userId },
      select: { id: true, balance: true },
    }),
    prisma.booking.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 3,
      include: { mobil: true },
    }),
  ]);

  const activeBookingCount = await prisma.booking.count({
    where: {
      userId,
      status: { in: ["PENDING", "PAID"] },
    },
  });

  const balance = Number(wallet?.balance ?? 0);

  const transactionCount = wallet
    ? await prisma.transaction.count({
        where: { walletId: wallet.id },
      })
    : 0;

  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-500">
          Profil pengguna
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
          Ringkasan akun dan aktivitas
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Pantau saldo, pemesanan, dan informasi akun kamu di satu tempat.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            label: "Saldo dompet",
            value: formatRupiah(balance),
            note: "Siap dipakai",
          },
          {
            label: "Pemesanan aktif",
            value: activeBookingCount.toString(),
            note: "Sedang berjalan",
          },
          {
            label: "Transaksi bulan ini",
            value: transactionCount.toString(),
            note: "Total transaksi dompet",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              {item.label}
            </p>
            <p className="mt-3 text-2xl font-semibold text-zinc-900">
              {item.value}
            </p>
            <p className="mt-2 text-xs text-zinc-500">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Edit profil</h2>
          <div className="mt-4 grid gap-4">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                Nama lengkap
              </label>
              <input
                type="text"
                defaultValue={user?.name ?? ""}
                className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                Email
              </label>
              <input
                type="email"
                defaultValue={user?.email ?? ""}
                className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                Nomor HP
              </label>
              <input
                type="tel"
                defaultValue={user?.phone ?? ""}
                className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
              />
            </div>
          </div>
          <button className="mt-5 w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
            Simpan perubahan
          </button>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">
            Dompet & preferensi
          </h2>
          <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Saldo aktif
            </p>
            <p className="mt-2 text-2xl font-semibold text-zinc-900">
              {formatRupiah(balance)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/topup"
                className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white transition hover:bg-emerald-600"
              >
                Top up
              </Link>
              <Link
                href="/withdraw"
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700 transition hover:border-zinc-300"
              >
                Tarik dana
              </Link>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Zona waktu
            </p>
            <p className="mt-2 text-sm text-zinc-600">GMT+7 (WIB)</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900">
              Riwayat pemesanan
            </h2>
            <Link
              href="/history"
              className="text-xs text-emerald-600 transition hover:text-emerald-700"
            >
              Lihat semua
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {bookings.length === 0 ? (
              <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-6 text-center text-sm text-zinc-500">
                Belum ada pemesanan.
              </div>
            ) : (
              bookings.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {item.mobil?.name ?? "Mobil listrik"}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {formatDate(item.startDate)} -{" "}
                        {formatDate(item.endDate)}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-emerald-600">
                      {formatRupiah(Number(item.totalPrice))}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    Status: {item.status}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Akses cepat</h2>
          <div className="mt-4 space-y-3">
            <Link
              href="/wallet"
              className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm text-zinc-700"
            >
              Lihat dompet
              <span className="text-emerald-600">{formatRupiah(balance)}</span>
            </Link>
            <Link
              href="/history"
              className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm text-zinc-700"
            >
              Riwayat transaksi
              <span className="text-emerald-600">{transactionCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
