import SidebarMitra from "@/app/mitra/components/sidebarmitra";
import HeaderMitra from "@/app/mitra/components/headermitra";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ReceiptText, CarFront, Wallet } from "lucide-react"
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function DashboardMitra() {
  const session = await auth();
  if (!session || !session.user || session.user.role !== "MITRA") {
    redirect("/unauthorized");
  }

  // Get Mitra profile using the session userId
  const mitra = await prisma.mitra.findUnique({
    where: { userId: session.user.id },
    include: {
      mobils: true,
    },
  });

  if (!mitra) {
    redirect("/unauthorized");
  }

  // 1. Jumlah Mobil
  const totalCars = mitra.mobils.length;
  const activeCars = mitra.mobils.filter(c => c.status === "ACTIVE").length;
  const rentedCars = mitra.mobils.filter(c => c.status === "INACTIVE").length;
  const maintenanceCars = mitra.mobils.filter(c => c.status === "MAINTENANCE").length;

  // 2. Total Transaksi (Total booking count for Mitra's cars)
  const totalTransactions = await prisma.booking.count({
    where: {
      mobil: {
        mitraId: mitra.id,
      },
    },
  });

  // 3. Pendapatan Bulan Ini (Total value of PAID or COMPLETED bookings created this month for Mitra's cars)
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const bookingsForRevenue = await prisma.booking.findMany({
    where: {
      mobil: {
        mitraId: mitra.id,
      },
      status: {
        in: ["PAID", "COMPLETED"],
      },
      createdAt: {
        gte: startOfMonth,
      },
    },
    select: {
      totalPrice: true,
    },
  });
  const revenueThisMonth = bookingsForRevenue.reduce((sum, b) => sum + b.totalPrice, 0);
  const formattedRevenue = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(revenueThisMonth);

  // 4. Recent Activity (Get last 5 bookings)
  const recentBookings = await prisma.booking.findMany({
    where: {
      mobil: {
        mitraId: mitra.id,
      },
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      mobil: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  const recentActivity = recentBookings.map((b) => {
    let statusColor = "bg-yellow-100 text-yellow-700";
    let statusText = "In Progress";

    if (b.status === "COMPLETED") {
      statusColor = "bg-emerald-100 text-emerald-700";
      statusText = "Completed";
    } else if (b.status === "PAID") {
      statusColor = "bg-blue-100 text-blue-700";
      statusText = "Paid";
    } else if (b.status === "CANCELLED") {
      statusColor = "bg-red-100 text-red-700";
      statusText = "Cancelled";
    } else if (b.status === "FAILED") {
      statusColor = "bg-red-100 text-red-700";
      statusText = "Failed";
    } else if (b.status === "PENDING") {
      statusColor = "bg-yellow-100 text-yellow-700";
      statusText = "Pending";
    }

    return {
      user: b.user.name || b.user.email || "Pelanggan",
      vehicle: b.mobil.name,
      date: new Date(b.createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      status: statusText,
      amount: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }).format(b.totalPrice),
      statusColor,
    };
  });

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <SidebarMitra />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderMitra />
        
        <main className="flex-1 overflow-y-auto p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Hi, {mitra.companyName || "Partner"}!</h2>
            <p className="text-gray-500 mt-1">Your sustainable fleet is operating and ready to serve.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-sm border-gray-100">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500">
                  <ReceiptText size={20} />
                </div>
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50">Live</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-gray-500 mb-1">Total Transaksi</p>
                <p className="text-3xl font-bold text-gray-900">{totalTransactions}</p>
                <p className="text-xs text-gray-500 mt-2">All time rentals booked</p>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-4">
                  <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-gray-100">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                 <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500">
                  <CarFront size={20} />
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-100">Fleet</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-gray-500 mb-1">Jumlah Mobil</p>
                <p className="text-3xl font-bold text-gray-900">{totalCars} Units</p>
                <p className="text-xs text-gray-500 mt-2">{activeCars} Active · {rentedCars} Rented · {maintenanceCars} Service</p>
                <div className="flex w-full h-1.5 mt-4 rounded-full overflow-hidden bg-gray-100">
                  {totalCars > 0 ? (
                    <>
                      <div className="bg-emerald-400" style={{ width: `${(activeCars / totalCars) * 100}%` }}></div>
                      <div className="bg-yellow-400" style={{ width: `${(rentedCars / totalCars) * 100}%` }}></div>
                      <div className="bg-red-400" style={{ width: `${(maintenanceCars / totalCars) * 100}%` }}></div>
                    </>
                  ) : (
                    <div className="bg-gray-200 w-full"></div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-gray-100">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500">
                  <Wallet size={20} />
                </div>
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50">Month</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-gray-500 mb-1">Pendapatan Bulan Ini</p>
                <p className="text-3xl font-bold text-emerald-500">{formattedRevenue}</p>
                <p className="text-xs text-gray-500 mt-2">Revenue generated this month</p>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-4">
                  <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section (Table & Banner) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Table Recent Activity */}
            <Card className="lg:col-span-2 shadow-sm border-gray-100">
              <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                <CardTitle className="text-lg font-bold text-gray-800">Recent Activity</CardTitle>
                <Button variant="link" className="text-emerald-500 font-semibold p-0 h-auto" asChild>
                  <a href="/mitra/earnings">View All</a>
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                {recentActivity.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                        <TableHead className="font-semibold text-gray-400 text-[10px] uppercase tracking-wider h-10 px-6">USER</TableHead>
                        <TableHead className="font-semibold text-gray-400 text-[10px] uppercase tracking-wider h-10">VEHICLE</TableHead>
                        <TableHead className="font-semibold text-gray-400 text-[10px] uppercase tracking-wider h-10">DATE</TableHead>
                        <TableHead className="font-semibold text-gray-400 text-[10px] uppercase tracking-wider h-10">STATUS</TableHead>
                        <TableHead className="text-right font-semibold text-gray-400 text-[10px] uppercase tracking-wider h-10 px-6">AMOUNT</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentActivity.map((activity, index) => (
                        <TableRow key={index} className="border-b-gray-50">
                          <TableCell className="font-medium text-gray-900 px-6 py-4">{activity.user}</TableCell>
                          <TableCell className="text-gray-500 py-4">{activity.vehicle}</TableCell>
                          <TableCell className="text-gray-500 py-4">{activity.date}</TableCell>
                          <TableCell className="py-4">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${activity.statusColor}`}>
                              {activity.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right font-semibold text-gray-900 px-6 py-4">{activity.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="p-8 text-center text-gray-500 text-sm">
                    No activity found for your fleet yet.
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Performance Banner */}
            <Card className="bg-[#12141D] text-white border-none overflow-hidden relative shadow-md flex flex-col justify-between p-8">
              <div>
                <CardTitle className="text-emerald-400 text-xl font-bold">Fleet Performance</CardTitle>
                <CardDescription className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Your vehicles are connected and operational. Access fleet management to manage availability.
                </CardDescription>
              </div>
              <div className="mt-8">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6" asChild>
                  <a href="/mitra/fleet">Manage Fleet</a>
                </Button>
              </div>
            </Card>
            
          </div>
        </main>
      </div>
    </div>
  )
}