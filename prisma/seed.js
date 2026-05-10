const {
  PrismaClient,
  Role,
  MobilStatus,
  BookingStatus,
  TransactionType,
  TransactionDirection,
  TransactionStatus,
} = require("../src/generated/prisma");

const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Start seeding...");

  // Hapus data lama biar tidak duplicate saat seed ulang
  await prisma.transaction.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.wallet.deleteMany();
  await prisma.mobil.deleteMany();
  await prisma.mitra.deleteMany();
  await prisma.user.deleteMany();

  // ======================
  // USERS
  // ======================

  const admin = await prisma.user.create({
    data: {
      name: "Admin VoltRide",
      email: "admin@voltride.com",
      phone: "081111111111",
      role: Role.ADMIN,
      password: "admin123",
      wallet: {
        create: {
          balance: 0,
        },
      },
    },
    include: {
      wallet: true,
    },
  });

  const user1 = await prisma.user.create({
    data: {
      name: "Budi Santoso",
      email: "budi@example.com",
      phone: "082111111111",
      role: Role.USER,
      password: "user123",
      wallet: {
        create: {
          balance: 3000000,
        },
      },
    },
    include: {
      wallet: true,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Siti Aminah",
      email: "siti@example.com",
      phone: "082222222222",
      role: Role.USER,
      password: "user123",
      wallet: {
        create: {
          balance: 1500000,
        },
      },
    },
    include: {
      wallet: true,
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: "Raka Pratama",
      email: "raka@example.com",
      phone: "082333333333",
      role: Role.USER,
      password: "user123",
      wallet: {
        create: {
          balance: 500000,
        },
      },
    },
    include: {
      wallet: true,
    },
  });

  // ======================
  // MITRA USERS + MITRA PROFILE
  // ======================

  const mitraUser1 = await prisma.user.create({
    data: {
      name: "Andi Wijaya",
      email: "andi.mitra@example.com",
      phone: "083111111111",
      role: Role.MITRA,
      password: "mitra123",
      wallet: {
        create: {
          balance: 0,
        },
      },
      mitraProfile: {
        create: {
          companyName: "Andi EV Rent",
          address: "Balikpapan",
          phone: "083111111111",
        },
      },
    },
    include: {
      wallet: true,
      mitraProfile: true,
    },
  });

  const mitraUser2 = await prisma.user.create({
    data: {
      name: "Dewi Lestari",
      email: "dewi.mitra@example.com",
      phone: "083222222222",
      role: Role.MITRA,
      password: "mitra123",
      wallet: {
        create: {
          balance: 0,
        },
      },
      mitraProfile: {
        create: {
          companyName: "Dewi Electric Car",
          address: "Samarinda",
          phone: "083222222222",
        },
      },
    },
    include: {
      wallet: true,
      mitraProfile: true,
    },
  });

  // ======================
  // MOBIL
  // ======================

  const mobilData = [
    {
      name: "Tesla Model 3",
      brand: "Tesla",
      model: "Model 3",
      color: "Putih",
      plateNumber: "KT 1001 EV",
      pricePerDay: 800000,
      totalUnit: 3,
      availableUnit: 2,
      mitraId: mitraUser1.mitraProfile.id,
    },
    {
      name: "Hyundai Ioniq 5",
      brand: "Hyundai",
      model: "Ioniq 5",
      color: "Biru",
      plateNumber: "KT 1002 EV",
      pricePerDay: 650000,
      totalUnit: 4,
      availableUnit: 4,
      mitraId: mitraUser1.mitraProfile.id,
    },
    {
      name: "Wuling Air EV",
      brand: "Wuling",
      model: "Air EV",
      color: "Kuning",
      plateNumber: "KT 1003 EV",
      pricePerDay: 300000,
      totalUnit: 5,
      availableUnit: 5,
      mitraId: mitraUser1.mitraProfile.id,
    },
    {
      name: "Nissan Leaf",
      brand: "Nissan",
      model: "Leaf",
      color: "Hitam",
      plateNumber: "KT 2001 EV",
      pricePerDay: 500000,
      totalUnit: 2,
      availableUnit: 1,
      mitraId: mitraUser2.mitraProfile.id,
    },
    {
      name: "BYD Atto 3",
      brand: "BYD",
      model: "Atto 3",
      color: "Merah",
      plateNumber: "KT 2002 EV",
      pricePerDay: 550000,
      totalUnit: 3,
      availableUnit: 3,
      mitraId: mitraUser2.mitraProfile.id,
    },
    {
      name: "Hyundai Kona Electric",
      brand: "Hyundai",
      model: "Kona Electric",
      color: "Abu-abu",
      plateNumber: "KT 2003 EV",
      pricePerDay: 600000,
      totalUnit: 2,
      availableUnit: 2,
      mitraId: mitraUser2.mitraProfile.id,
    },
  ];

  const mobils = [];

  for (const mobil of mobilData) {
    const createdMobil = await prisma.mobil.create({
      data: {
        ...mobil,
        status: MobilStatus.ACTIVE,
      },
    });

    mobils.push(createdMobil);
  }

  // ======================
  // BOOKING
  // ======================

  const booking1 = await prisma.booking.create({
    data: {
      userId: user1.id,
      mobilId: mobils[0].id,
      startDate: new Date("2026-05-10"),
      endDate: new Date("2026-05-12"),
      totalDays: 2,
      totalPrice: 1600000,
      status: BookingStatus.PAID,
    },
  });

  const booking2 = await prisma.booking.create({
    data: {
      userId: user2.id,
      mobilId: mobils[3].id,
      startDate: new Date("2026-05-15"),
      endDate: new Date("2026-05-16"),
      totalDays: 1,
      totalPrice: 500000,
      status: BookingStatus.PAID,
    },
  });

  const booking3 = await prisma.booking.create({
    data: {
      userId: user3.id,
      mobilId: mobils[2].id,
      startDate: new Date("2026-05-20"),
      endDate: new Date("2026-05-22"),
      totalDays: 2,
      totalPrice: 600000,
      status: BookingStatus.PENDING,
    },
  });

  // ======================
  // TRANSACTIONS
  // ======================

  await prisma.transaction.createMany({
    data: [
      {
        userId: user1.id,
        walletId: user1.wallet.id,
        type: TransactionType.TOP_UP,
        direction: TransactionDirection.CREDIT,
        amount: 3000000,
        status: TransactionStatus.SUCCESS,
        description: "Top up saldo awal user Budi",
      },
      {
        userId: user1.id,
        walletId: user1.wallet.id,
        bookingId: booking1.id,
        type: TransactionType.BOOKING_PAYMENT,
        direction: TransactionDirection.DEBIT,
        amount: 1600000,
        status: TransactionStatus.SUCCESS,
        description: "Pembayaran booking Tesla Model 3",
      },
      {
        userId: mitraUser1.id,
        walletId: mitraUser1.wallet.id,
        bookingId: booking1.id,
        type: TransactionType.MITRA_INCOME,
        direction: TransactionDirection.CREDIT,
        amount: 1600000,
        status: TransactionStatus.SUCCESS,
        description: "Pendapatan mitra dari booking Tesla Model 3",
      },
      {
        userId: user2.id,
        walletId: user2.wallet.id,
        type: TransactionType.TOP_UP,
        direction: TransactionDirection.CREDIT,
        amount: 1500000,
        status: TransactionStatus.SUCCESS,
        description: "Top up saldo awal user Siti",
      },
      {
        userId: user2.id,
        walletId: user2.wallet.id,
        bookingId: booking2.id,
        type: TransactionType.BOOKING_PAYMENT,
        direction: TransactionDirection.DEBIT,
        amount: 500000,
        status: TransactionStatus.SUCCESS,
        description: "Pembayaran booking Nissan Leaf",
      },
      {
        userId: mitraUser2.id,
        walletId: mitraUser2.wallet.id,
        bookingId: booking2.id,
        type: TransactionType.MITRA_INCOME,
        direction: TransactionDirection.CREDIT,
        amount: 500000,
        status: TransactionStatus.SUCCESS,
        description: "Pendapatan mitra dari booking Nissan Leaf",
      },
      {
        userId: user3.id,
        walletId: user3.wallet.id,
        type: TransactionType.TOP_UP,
        direction: TransactionDirection.CREDIT,
        amount: 500000,
        status: TransactionStatus.SUCCESS,
        description: "Top up saldo awal user Raka",
      },
      {
        userId: user3.id,
        walletId: user3.wallet.id,
        bookingId: booking3.id,
        type: TransactionType.BOOKING_PAYMENT,
        direction: TransactionDirection.DEBIT,
        amount: 600000,
        status: TransactionStatus.PENDING,
        description: "Percobaan pembayaran booking Wuling Air EV",
      },
    ],
  });

  console.log("Seeding finished.");
  console.log({
    admin: admin.email,
    users: [user1.email, user2.email, user3.email],
    mitras: [mitraUser1.email, mitraUser2.email],
    totalMobil: mobils.length,
    totalBooking: 3,
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
