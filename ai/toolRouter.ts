import { prisma } from "@/lib/prisma";

export async function runTool(
  action: string,
  params: any,
  userId: string
) {
  switch (action) {

    case "list_available_cars":
      return prisma.mobil.findMany({
        where: {
          status: "ACTIVE",
        },
      });

    case "filter_by_color":
      return prisma.mobil.findMany({
        where: {
          color: {
            contains: params.color,
            mode: "insensitive",
          },
          status: "ACTIVE",
        },
      });

    case "search_cars": {
      const cars = await prisma.mobil.findMany({
        where: {
          OR: [
            {
              name: {
                contains: params.query,
                mode: "insensitive",
              },
            },
            {
              brand: {
                contains: params.query,
                mode: "insensitive",
              },
            },
          ],
        },

        include: {
          mitra: {
            select: {
              companyName: true,
              address: true,
            },
          },
          bookings: true,
        },
      });

      console.dir(cars, { depth: null });

      return cars;
    }

    case "filter_by_price":
      return prisma.mobil.findMany({
        where: {
          pricePerDay: {
            lte: Number(params.maxPrice),
          },
          status: "ACTIVE",
        },
      });

    default:
      throw new Error(
        `Unknown action: ${action}`
      );
  }
}