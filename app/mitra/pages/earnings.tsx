import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SidebarMitra from "@/app/mitra/components/sidebarmitra";
import HeaderMitra from "@/app/mitra/components/headermitra";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Handshake, Wallet, Clock, Leaf, Search, Calendar, TrendingUp, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function EarningsPage() {
  const session = await auth();
  if (!session || session.user.role !== "MITRA") redirect("/unauthorized");

  // Get Mitra profile
  const mitra = await prisma.mitra.findUnique({
    where: { userId: session.user.id },
    include: {
      mobils: {
        include: {
          bookings: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  });

  if (!mitra) redirect("/unauthorized");

  // Get wallet balance for the Mitra
  const wallet = await prisma.wallet.findUnique({
    where: { userId: session.user.id },
  });

  const balance = wallet?.balance || 0;

  // Flatten all bookings of the Mitra's cars
  const allBookings = mitra.mobils.flatMap((m) =>
    m.bookings.map((b) => ({
      ...b,
      mobilName: m.name,
    }))
  );

  // Sort bookings by creation date descending
  allBookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Statistics
  const totalRevenue = allBookings
    .filter((b) => ["PAID", "COMPLETED"].includes(b.status))
    .reduce((sum, b) => sum + b.totalPrice, 0);

  const totalBookings = allBookings.length;
  const activeRentals = allBookings.filter((b) => b.status === "PAID").length;

  const formattedBalance = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(balance);

  const formattedRevenue = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(totalRevenue);

  const memberSince = new Date(mitra.createdAt).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <SidebarMitra />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderMitra title="Earnings" />
        
        <main className="flex-1 overflow-y-auto p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Top Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Partner Identity Card */}
              <Card className="lg:col-span-2 border-none shadow-sm rounded-3xl p-8 bg-white relative overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-start z-10">
                  <div>
                    <p className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest mb-1">Partner Identity</p>
                    <h2 className="text-3xl font-extrabold text-slate-800">{mitra.companyName || "Partner"}</h2>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 font-bold px-4 py-1.5 rounded-full border border-emerald-200">
                    Verified Partner
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-8 mt-12 z-10">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 mb-1">Member Since</p>
                    <p className="font-bold text-slate-800">{memberSince}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 mb-1">Location</p>
                    <p className="font-bold text-slate-800 max-w-[150px] truncate">{mitra.address || "No Address"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 mb-1">Fleet Size</p>
                    <p className="font-bold text-slate-800">{mitra.mobils.length} Units</p>
                  </div>
                </div>

                {/* Handshake Background Graphic */}
                <div className="absolute right-[-40px] bottom-[-60px] opacity-5 pointer-events-none transform -rotate-12 scale-150">
                  <Handshake size={300} strokeWidth={1} />
                </div>
              </Card>

              {/* Available Balance Card */}
              <Card className="border-none shadow-sm rounded-3xl p-8 bg-emerald-500 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-start z-10">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest opacity-90">Available Balance</p>
                  <Wallet size={20} className="opacity-90" />
                </div>
                
                <div className="mt-8 z-10">
                  <div className="flex items-start gap-1">
                    <h2 className="text-4xl font-extrabold tracking-tight">{formattedBalance}</h2>
                  </div>
                </div>

                <div className="mt-8 z-10 text-center">
                  <button className="w-full bg-white text-emerald-600 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors shadow-sm mb-3">
                    <Wallet size={18} />
                    Withdraw Funds
                  </button>
                  <p className="text-[10px] text-emerald-100 font-medium">Payouts processed every 24-48 hours</p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 to-transparent"></div>
              </Card>

            </div>

            {/* Middle Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Card className="border-none shadow-sm rounded-3xl p-6 bg-white flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Revenue</h3>
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <TrendingUp size={10} /> Live
                  </span>
                </div>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-emerald-500">{formattedRevenue}</div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Accumulated income</p>
                </div>
              </Card>

              <Card className="border-none shadow-sm rounded-3xl p-6 bg-white flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Booking Total</h3>
                  <Clock size={16} className="text-slate-400" />
                </div>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-emerald-500">{totalBookings}</div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Showroom total rentals</p>
                </div>
              </Card>

              <Card className="border-none shadow-sm rounded-3xl p-6 bg-white flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Rental</h3>
                  <Leaf size={16} className="text-emerald-500" />
                </div>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-emerald-500">{activeRentals}</div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Currently on the road</p>
                </div>
              </Card>

            </div>

            {/* Filters and Table Section */}
            <div className="bg-white border-none shadow-sm rounded-3xl overflow-hidden">
              <div className="p-6 border-b border-slate-50/50 flex flex-wrap gap-4 items-center justify-between bg-white">
                <div className="flex-1 min-w-[200px] relative">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search bookings..." 
                    className="w-full bg-slate-100 rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50/50 border-none hover:bg-slate-50/50">
                    <TableHead className="font-extrabold text-[10px] text-slate-500 tracking-widest uppercase py-4 px-6">Customer</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-500 tracking-widest uppercase">Fleet</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-500 tracking-widest uppercase">Rent Duration</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-500 tracking-widest uppercase">Status</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-500 tracking-widest uppercase text-right px-6">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allBookings.length > 0 ? (
                    allBookings.map((b) => {
                      const clientInitials = (b.user.name || b.user.email || "PL").slice(0, 2).toUpperCase();
                      const rentDurationStr = `${new Date(b.startDate).toLocaleDateString("id-ID", { day: "numeric", month: "short" })} - ${new Date(b.endDate).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}`;

                      let statusBadgeColor = "bg-yellow-100 text-yellow-600";
                      if (b.status === "COMPLETED") statusBadgeColor = "bg-slate-200 text-slate-600";
                      if (b.status === "PAID") statusBadgeColor = "bg-emerald-100 text-emerald-600";
                      if (b.status === "CANCELLED" || b.status === "FAILED") statusBadgeColor = "bg-red-100 text-red-600";

                      const formattedTotalPrice = new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(b.totalPrice);

                      return (
                        <TableRow key={b.id} className="border-b-slate-50">
                          <TableCell className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                                {clientInitials}
                              </div>
                              <div>
                                <p className="font-bold text-slate-800 text-sm">{b.user.name || b.user.email}</p>
                                <p className="text-[10px] text-slate-500">VoltRide Member</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Zap size={12} className="text-slate-400" />
                              <span className="font-medium text-slate-700 text-sm">{b.mobilName}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <p className="font-bold text-slate-800 text-sm">{rentDurationStr}</p>
                            <p className="text-[10px] text-slate-500">{b.totalDays} Days</p>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${statusBadgeColor} border-none font-bold text-[9px] uppercase px-2.5 py-0.5`}>
                              {b.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right px-6 font-bold text-slate-800 text-sm">
                            {formattedTotalPrice}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="py-8 text-center text-gray-500 text-sm">
                        No bookings found for your fleet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
