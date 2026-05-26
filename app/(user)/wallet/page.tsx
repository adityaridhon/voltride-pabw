import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth-guard";
import { getCurrentUserWallet } from "@/actions/user.actions";

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

const statusStyles: Record<string, string> = {
  SUCCESS: "bg-emerald-100 text-emerald-700",
  PENDING: "bg-zinc-100 text-zinc-600",
  FAILED: "bg-rose-100 text-rose-700",
};

const statusLabels: Record<string, string> = {
  SUCCESS: "Sukses",
  PENDING: "Diproses",
  FAILED: "Gagal",
};

export default async function WalletPage() {
  const session = await requireAuth();
  const user = session.user!;
  const { wallet } = await getCurrentUserWallet();
  const transactions = await prisma.transaction.findMany({
    where: { walletId: wallet.id },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-zinc-800 px-6 py-6 text-white shadow-sm md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 rounded-full bg-zinc-200" />
            <div>
              <h1 className="text-2xl font-semibold">
                {user.name ?? "Pengguna"}
              </h1>
              <p className="text-sm text-zinc-300">{user.email ?? "-"}</p>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Balance
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xl font-semibold text-emerald-600">
                {formatRupiah(Number(wallet.balance ?? 0))}
              </span>
              <Link
                href="/topup"
                className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600"
              >
                Top-up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-zinc-900">Transaction</h2>
          <span className="text-2xl font-semibold text-emerald-500">
            History
          </span>
        </div>

        <div className="mt-6 overflow-x-auto">
          {transactions.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-8 text-center text-sm text-zinc-500">
              Belum ada transaksi dompet.
            </div>
          ) : (
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  <th className="px-4 py-3 font-semibold">ID</th>
                  <th className="px-4 py-3 font-semibold">Jenis</th>
                  <th className="px-4 py-3 font-semibold">Tanggal</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Nominal</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-zinc-200 text-zinc-700"
                  >
                    <td className="px-4 py-4 text-emerald-600">
                      {item.id.slice(0, 8).toUpperCase()}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400">⚡</span>
                        <span className="font-medium text-zinc-900">
                          {item.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-medium text-zinc-900">
                        {formatDate(item.createdAt)}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {item.description ?? "Transaksi dompet"}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
                      >
                        {statusLabels[item.status]}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-semibold text-zinc-900">
                      {item.direction === "CREDIT" ? "+" : "-"}
                      {formatRupiah(Number(item.amount))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}
