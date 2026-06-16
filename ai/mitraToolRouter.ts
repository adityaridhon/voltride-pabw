import { prisma } from "@/lib/prisma";

export async function runMitraTool(
  action: string,
  params: any,
  mitraId: string
) {
  console.log("ACTION:", action);
  console.log("MITRA ID:", mitraId);

  switch (action) {
    case "list_my_cars":
      return prisma.mobil.findMany({
        where: {
          mitraId,
        },
      });

    case "search_my_car":
      return prisma.mobil.findMany({
        where: {
          mitraId,
          name: {
            contains: params.query,
            mode: "insensitive",
          },
        },
      });

    case "cars_in_maintenance":
      return prisma.mobil.findMany({
        where: {
          mitraId,
          status: "MAINTENANCE",
        },
      });

    case "get_fleet_summary": {
      const total = await prisma.mobil.count({
        where: {
          mitraId,
        },
      });

      const active = await prisma.mobil.count({
        where: {
          mitraId,
          status: "ACTIVE",
        },
      });

      const maintenance = await prisma.mobil.count({
        where: {
          mitraId,
          status: "MAINTENANCE",
        },
      });

      return {
        total,
        active,
        maintenance,
      };
    }

    case "get_booking_summary": {
      const totalBooking =
        await prisma.booking.count({
          where: {
            mobil: {
              mitraId,
            },
            status: "PAID",
          },
        });

      return {
        totalBooking,
      };
    }

    case "get_top_car": {
    const topCar = await prisma.booking.groupBy({
      by: ["mobilId"],

      where: {
        mobil: {
          mitraId,
        },

        status: "PAID",
      },

      _count: {
        mobilId: true,
      },

      orderBy: {
        _count: {
          mobilId: "desc",
        },
      },

      take: 1,
    });

    if (topCar.length === 0) {
      return {
        name: null,
        totalBooking: 0,
      };
    }

    const mobil = await prisma.mobil.findUnique({
      where: {
        id: topCar[0].mobilId,
      },

      select: {
        name: true,
      },
    });

    return {
      name: mobil?.name ?? "-",
      totalBooking: topCar[0]._count.mobilId,
    };
  }

    case "get_monthly_revenue": {
      const now = new Date();

      const startMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      );

      const endMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        1
      );

      const revenue =
        await prisma.booking.aggregate({
          where: {
            mobil: {
              mitraId,
            },
            status: "PAID",
            createdAt: {
              gte: startMonth,
              lt: endMonth,
            },
          },

          _sum: {
            totalPrice: true,
          },
        });

      return {
        revenue:
          revenue._sum.totalPrice ?? 0,
      };
    }

    default:
      throw new Error(
        `Unknown action: ${action}`
      );
  }
}