const {
  PrismaClient,
  Role,
  MobilStatus,
  BookingStatus,
  TransactionType,
  TransactionDirection,
  TransactionStatus,
} = require("../src/generated/prisma");
const { PrismaNeon } = require("@prisma/adapter-neon");
const bcrypt = require("bcryptjs");

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Start seeding...");

  await prisma.transaction.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.mobil.deleteMany();
  await prisma.wallet.deleteMany();
  await prisma.mitra.deleteMany();
  await prisma.user.deleteMany();

  const adminPassword = await bcrypt.hash("Admin@12345", 12);
  const mitraPassword = await bcrypt.hash("Mitra@12345", 12);
  const userPassword = await bcrypt.hash("User@12345", 12);

  const admin = await prisma.user.create({
    data: {
      name: "Admin VoltRide",
      email: "admin@voltride.id",
      password: adminPassword,
      role: Role.ADMIN,
      phone: "081111111111",
      wallet: {
        create: {
          balance: 0,
        },
      },
    },
    include: { wallet: true },
  });

  const user = await prisma.user.create({
    data: {
      name: "Raka Randika",
      email: "user@voltride.id",
      password: userPassword,
      role: Role.USER,
      phone: "081222222222",
      wallet: {
        create: {
          balance: 2500000,
        },
      },
    },
    include: { wallet: true },
  });

  const mitraUser = await prisma.user.create({
    data: {
      name: "Mitra VoltRide",
      email: "mitra@voltride.id",
      password: mitraPassword,
      role: Role.MITRA,
      phone: "081333333333",
      wallet: {
        create: {
          balance: 0,
        },
      },
    },
    include: { wallet: true },
  });

  const mitra = await prisma.mitra.create({
    data: {
      userId: mitraUser.id,
      companyName: "VoltRide Mitra",
      phone: "081333333333",
      address: "Bandung",
    },
  });

  const mobils = await prisma.mobil.createMany({
    data: [
      {
        mitraId: mitra.id,
        name: "Tesla Model 3",
        brand: "Tesla",
        model: "Model 3",
        color: "Putih",
        plateNumber: "B 1987 EV",
        status: MobilStatus.ACTIVE,
        pricePerDay: 800000,
        totalUnit: 2,
        availableUnit: 2,
      },
      {
        mitraId: mitra.id,
        name: "Hyundai Ioniq 5",
        brand: "Hyundai",
        model: "Ioniq 5",
        color: "Biru",
        plateNumber: "D 2210 EV",
        status: MobilStatus.ACTIVE,
        pricePerDay: 650000,
        totalUnit: 3,
        availableUnit: 3,
      },
    ],
  });

  const mitraMobils = await prisma.mobil.findMany({
    where: { mitraId: mitra.id },
    orderBy: { createdAt: "asc" },
  });

  const booking = await prisma.booking.create({
    data: {
      userId: user.id,
      mobilId: mitraMobils[0].id,
      startDate: new Date("2026-05-10"),
      endDate: new Date("2026-05-12"),
      totalDays: 2,
      totalPrice: 1600000,
      status: BookingStatus.PAID,
    },
  });

  await prisma.transaction.createMany({
    data: [
      {
        userId: user.id,
        walletId: user.wallet.id,
        type: TransactionType.TOP_UP,
        direction: TransactionDirection.CREDIT,
        amount: 3000000,
        status: TransactionStatus.SUCCESS,
        description: "Top up saldo awal user",
      },
      {
        userId: user.id,
        walletId: user.wallet.id,
        bookingId: booking.id,
        type: TransactionType.BOOKING_PAYMENT,
        direction: TransactionDirection.DEBIT,
        amount: 500000,
        status: TransactionStatus.SUCCESS,
        description: "Pembayaran booking Tesla Model 3",
      },
    ],
  });

  console.log("Seeding finished.");
  console.log({
    admin: admin.email,
    mitra: mitraUser.email,
    user: user.email,
    bookingId: booking.id,
    totalMobil: mobils.count,
  });
}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
