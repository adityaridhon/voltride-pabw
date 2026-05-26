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

const statusLabels: Record<string, string> = {
  SUCCESS: "Sukses",
  PENDING: "Diproses",
  FAILED: "Gagal",
};

export default async function HistoryPage() {
  const session = await requireAuth();
  const user = session.user!;
  const wallet = await prisma.wallet.findUnique({
    where: { userId: user.id },
    select: { id: true },
  });

  const historyRows = wallet
    ? await prisma.transaction.findMany({
        where: { walletId: wallet.id },
        orderBy: { createdAt: "desc" },
        take: 20,
      })
    : [];

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-500">
            Riwayat
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
            Riwayat transaksi
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Semua transaksi terbaru di dompet VoltRide.
          </p>
        </div>
      </header>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr_0.8fr] gap-4 border-b border-zinc-200 px-6 py-4 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <span>ID Transaksi</span>
          <span>Jenis</span>
          <span>Tanggal</span>
          <span>Nominal</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-zinc-200">
          {historyRows.length === 0 ? (
            <div className="px-6 py-8 text-center text-sm text-zinc-500">
              Belum ada transaksi di riwayat.
            </div>
          ) : (
            historyRows.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-[1.1fr_1fr_1fr_1fr_0.8fr] gap-4 px-6 py-4 text-sm"
              >
                <span className="text-emerald-600">
                  {row.id.slice(0, 8).toUpperCase()}
                </span>
                <span className="text-zinc-700">{row.type}</span>
                <span className="text-zinc-500">
                  {formatDate(row.createdAt)}
                </span>
                <span className="font-semibold text-emerald-600">
                  {row.direction === "CREDIT" ? "+" : "-"}
                  {formatRupiah(Number(row.amount))}
                </span>
                <span className="text-xs text-zinc-500">
                  {statusLabels[row.status]}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
