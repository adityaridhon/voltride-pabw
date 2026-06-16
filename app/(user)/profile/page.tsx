import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/auth-guard";
import WalletBalance from "@/components/usercomponents/WalletBalance";
import ProfileForm from "@/components/usercomponents/ProfileForm";
import LogoutButton from "@/components/usercomponents/LogoutButton";

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

export default async function ProfilePage() {
  const session = await requireRole(["USER"]);
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

  const transactions = wallet
    ? await prisma.transaction.findMany({
        where: { walletId: wallet.id },
        orderBy: { createdAt: "desc" },
        take: 10,
      })
    : [];

  return (
  <section className="space-y-6">
    {/* PROFILE HEADER */}
    <div className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/60 to-secondary" />

      <div className="relative flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-200 text-3xl font-bold text-zinc-700">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              {user?.name}
            </h1>

            <p className="text-zinc-300 mb-1">
              {user?.email}
            </p>

            <LogoutButton/>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row">
          {/* BALANCE CARD */}
          <div className="rounded-2xl bg-white p-5 shadow-xl min-w-70 space-y-2">
            <p className="text-xs text-zinc-400">
              Balance
            </p>

            <div className="mt-1 space-y-4">
              <div className="text-3xl font-bold text-emerald-500">
                <WalletBalance initialBalance={balance} />
              </div>

              <Link
                href="/topup"
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
              >
                Top-up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="grid grid-cols-3 mx-auto gap-2">
      {/* EDIT PROFILE */}
      <div className="rounded-2xl bg-white p-5 shadow-xl col-span-full lg:col-span-1 border border-zinc-200">
          <h2 className="text-3xl font-bold text-zinc-900">
                Edit{" "}
                <span className="text-secondary">
                  Profile
                </span>
          </h2>
        <div className="mt-4">
          <ProfileForm
            name={user?.name ?? ""}
            email={user?.email ?? ""}
            phone={user?.phone ?? ""}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 col-span-full lg:col-span-2">
        {/* RECENT BOOKING */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-zinc-900">
               Recent{" "}
                <span className="text-secondary">
                  Booking
                </span>
              </h2>

            <span className="text-sm text-zinc-500">
              {activeBookingCount} Active Booking
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {bookings.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-6 text-center text-sm text-zinc-500">
                No booking found.
              </div>
            ) : (
              bookings.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-zinc-200 p-4"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        {item.mobil?.name}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">
                        {formatDate(item.startDate)} -{" "}
                        {formatDate(item.endDate)}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-emerald-600">
                        {formatRupiah(
                          Number(item.totalPrice)
                        )}
                      </span>

                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* TRANSACTION HISTORY */}
        <div
          id="history"
          className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900">
                Transaction{" "}
                <span className="text-secondary">
                  History
                </span>
              </h2>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            {transactions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-8 text-center text-sm text-zinc-500">
                No Transaction.
              </div>
            ) : (
              <table className="w-full min-w-225">
                <thead>
                  <tr className="bg-zinc-100 text-xs uppercase text-zinc-500">
                    <th className="px-4 py-4 text-left">
                      ID
                    </th>
                    <th className="px-4 py-4 text-left">
                      Type
                    </th>
                    <th className="px-4 py-4 text-left">
                      Date
                    </th>
                    <th className="px-4 py-4 text-left">
                      Status
                    </th>
                    <th className="px-4 py-4 text-left">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-zinc-100"
                    >
                      <td className="px-4 py-5 font-medium text-emerald-600">
                        #{item.id.slice(0, 8)}
                      </td>

                      <td className="px-4 py-5">
                        {item.type}
                      </td>

                      <td className="px-4 py-5">
                        <div>
                          {formatDate(item.createdAt)}
                        </div>

                        <div className="text-xs text-zinc-500">
                          {item.description ??
                            "Wallet transaction"}
                        </div>
                      </td>

                      <td className="px-4 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
                        >
                          {statusLabels[item.status]}
                        </span>
                      </td>

                      <td className="px-4 py-5 font-semibold">
                        {item.direction === "CREDIT"
                          ? "+"
                          : "-"}
                        {formatRupiah(
                          Number(item.amount)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
