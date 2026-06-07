import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth-guard";
import {
  getCurrentUserWallet,
  getRecentTransactions,
} from "@/actions/user.actions";

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("Rp", "Rp ");

const formatDateLabel = (value: Date) =>
  new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
  }).format(value);

const statusLabelMap: Record<string, string> = {
  SUCCESS: "Sukses",
  PENDING: "Diproses",
  FAILED: "Gagal",
};

export default async function DashboardPage() {
  const session = await requireAuth();
  const user = session.user!;
  const { wallet } = await getCurrentUserWallet();
  const recentTransactions = await getRecentTransactions(4);

  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);

  const [monthlyTransactionCount, totalTransactionCount] =
    await prisma.$transaction([
      prisma.transaction.count({
        where: {
          walletId: wallet.id,
          createdAt: { gte: monthStart },
        },
      }),
      prisma.transaction.count({
        where: { walletId: wallet.id },
      }),
    ]);

  const quickStats = [
    {
      label: "Saldo tersedia",
      value: formatRupiah(Number(wallet.balance ?? 0)),
      note: "Saldo terakhir dari database",
    },
    {
      label: "Transaksi bulan ini",
      value: monthlyTransactionCount.toString(),
      note: "Dihitung dari transaksi sukses/pending",
    },
    {
      label: "Total transaksi",
      value: totalTransactionCount.toString(),
      note: "Semua aktivitas dompet",
    },
  ];

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-500">
            Ringkasan Dompet
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
            Selamat datang kembali, {user.name ?? "Pengguna"}
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Pantau saldo, transaksi, dan target finansial perjalanan kamu di
            satu tempat.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/profile"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300"
          >
            Profil
          </Link>
          <Link
            href="/topup"
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Top up
          </Link>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {quickStats.map((item, index) => (
          <div
            key={item.label}
            className="wallet-fade-in rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            style={{ animationDelay: `${index * 120}ms` }}
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

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900">
              Aktivitas terbaru
            </h2>
            <Link
              href="/profile#history"
              className="text-xs text-emerald-600 transition hover:text-emerald-700"
            >
              Lihat semua
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {recentTransactions.length === 0 ? (
              <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-6 text-center text-sm text-zinc-500">
                Belum ada transaksi. Mulai top up untuk menambah saldo.
              </div>
            ) : (
              recentTransactions.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {item.description ?? "Transaksi dompet"}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {formatDateLabel(item.createdAt)} ·{" "}
                      {statusLabelMap[item.status]}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">
                    {item.direction === "CREDIT" ? "+" : "-"}
                    {formatRupiah(Number(item.amount))}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
