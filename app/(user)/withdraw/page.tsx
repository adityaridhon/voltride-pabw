import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/auth-guard";
import WalletBalance from "@/components/usercomponents/WalletBalance";
import WithdrawForm from "@/components/usercomponents/WithdrawForm";

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("Rp", "Rp ");

export default async function WithdrawPage() {
  const session = await requireRole(["USER"]);
  const userId = session.user!.id;

  const wallet = await prisma.wallet.findUnique({
    where: { userId },
    select: { balance: true },
  });

  const balance = Number(wallet?.balance ?? 0);

  return (
    <section className="space-y-6">
      <header>
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 transition hover:text-emerald-700"
        >
          <span aria-hidden="true">←</span>
          Kembali ke profil
        </Link>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-emerald-500">
          Tarik Tunai
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
          Tarik saldo ke rekening
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Lengkapi data penarikan. Fitur ini sedang disiapkan.
        </p>
      </header>

      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-zinc-900">
          Informasi penarikan
        </h2>
        <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700">
          Saldo tersedia:{" "}
          <WalletBalance initialBalance={balance} className="font-semibold" />
        </div>
        <div className="mt-4">
          <WithdrawForm />
        </div>
      </div>
    </section>
  );
}
