import { withErrorHandling } from "@/lib/auth-guard";
import { prisma } from "@/lib/prisma";

export async function getMobilDetail(id: string) {
  return withErrorHandling(async () => {
    const mobil = await prisma.mobil.findUnique({
      where: { id },
      include: {
        mitra: true,
        bookings: {
          where: {
            status: {
              in: ["PAID", "PENDING"],
            },
          },
        },
      },
    });

    if (!mobil) {
      throw new Error("Mobil tidak ditemukan");
    }

    const serializedMobil = {
      ...mobil,
      pricePerDay: Number(mobil.pricePerDay), 
    };

    return serializedMobil;
  });
}

export async function getRelatedMobil(currentMobilId: string) {
  return withErrorHandling(async () => {
    const relatedVehicles = await prisma.mobil.findMany({
      where: {
        id: { not: currentMobilId }, 
        status: "ACTIVE",            
      },
      take: 4, 
      orderBy: {
        createdAt: 'desc', 
      }
    });

    return relatedVehicles.map(mobil => ({
      ...mobil,
      pricePerDay: Number(mobil.pricePerDay),
    }));
  });
}

export async function getFleetCars() {
  return withErrorHandling(async () => {
    const cars = await prisma.mobil.findMany({
      where: {
        status: "ACTIVE", 
      },
      take: 5, 
      orderBy: {
        createdAt: "desc", 
      },
    });

    return cars.map((car) => ({
      ...car,
      pricePerDay: Number(car.pricePerDay),
    }));
  });
}