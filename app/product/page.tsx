import Navbar from "@/components/usercomponents/Navbar";
import { prisma } from "@/lib/prisma";
import ProductCatalog, { type CatalogMobil } from "./product-catalog";

const ACTIVE_BOOKING_STATUSES = ["PENDING", "PAID"] as const;

export default async function ProductPage() {
  const mobils = await prisma.mobil.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      mitra: {
        select: {
          companyName: true,
          address: true,
        },
      },
      bookings: {
        where: {
          status: { in: [...ACTIVE_BOOKING_STATUSES] },
        },
        select: {
          startDate: true,
          endDate: true,
          status: true,
        },
      },
    },
  });

  const catalogMobils: CatalogMobil[] = mobils.map((mobil) => ({
    id: mobil.id,
    name: mobil.name,
    brand: mobil.brand,
    model: mobil.model,
    color: mobil.color,
    plateNumber: mobil.plateNumber,
    pricePerDay: mobil.pricePerDay,
    totalUnit: mobil.totalUnit,
    availableUnit: mobil.availableUnit,
    status: mobil.status,
    imageUrl: mobil.imageUrl,
    mitraName: mobil.mitra.companyName,
    mitraAddress: mobil.mitra.address,
    bookings: mobil.bookings.map((booking) => ({
      startDate: toDateKey(booking.startDate),
      endDate: toDateKey(booking.endDate),
      status: booking.status,
    })),
  }));

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8 flex-1">
        <ProductCatalog mobils={catalogMobils} />
      </div>
    </main>
  );
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
