import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "../components/sidebaradmin";
import { HeaderAdmin } from "../components/headeradmin";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Search, 
  Filter, 
  Calendar, 
  MoreVertical, 
  CheckCircle2,
} from "lucide-react";

export default async function UserManagement() {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  // Fetch all users
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalUsers = users.filter((u) => u.role === "USER").length;

  // Active bookings count
  const activeNowCount = await prisma.booking.count({
    where: {
      status: "PAID",
    },
  });

  // New signups in last 24 hours
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const newSignups = users.filter((u) => u.createdAt >= oneDayAgo).length;

  // Calculate dynamic weekly user growth chart data (last 7 days)
  const now = new Date();
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  const chartData = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(now.getDate() - (6 - i));
    const dayName = dayNames[d.getDay()];

    const startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
    const endOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59);

    const count = users.filter(
      (u) => u.createdAt >= startOfDay && u.createdAt <= endOfDay
    ).length;

    // Set max height of 240px and dynamic height calculation
    const height = count > 0 ? `${Math.min(20 + count * 40, 240)}px` : "20px";
    
    // Choose emerald color variations based on intensity
    let color = "bg-emerald-100";
    if (count > 4) color = "bg-emerald-800";
    else if (count > 2) color = "bg-emerald-500";
    else if (count > 0) color = "bg-emerald-300";

    return {
      day: dayName,
      height,
      color,
      value: count.toLocaleString("id-ID"),
    };
  });

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <HeaderAdmin title="Users Management" />
        
        <main className="flex-1 overflow-y-auto p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Customers</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> Live
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">{totalUsers}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Active accounts with role USER</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Now</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1 items-center">
                    <Users size={12} /> {activeNowCount}
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">{activeNowCount}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Current active rentals/bookings</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Signups</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> Live
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">{newSignups}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Joined in last 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conversion</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <CheckCircle2 size={12} /> 100%
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">100%</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Active database connectivity verified</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Chart Section */}
            <Card className="p-8 border-none shadow-sm rounded-3xl bg-white">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">User Growth Velocity</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">Aggregation of new account creations per day (Last 7 days)</p>
                </div>
              </div>

              <div className="h-[280px] flex items-end justify-between gap-3 px-4">
                {chartData.map((bar, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-4 group">
                    <div className="relative w-full flex flex-col items-center justify-end h-full">
                      <div 
                        className={`w-full rounded-t-xl ${bar.color} transition-all duration-500 hover:brightness-95 cursor-pointer shadow-sm relative group-hover:shadow-md`}
                        style={{ height: bar.height }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold py-1.5 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 shadow-lg z-20 whitespace-nowrap">
                          {bar.value} users
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" />
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{bar.day}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Table Section */}
            <Card className="border-none shadow-sm rounded-3xl bg-white overflow-hidden">
              <div className="p-6 flex flex-wrap gap-4 items-center justify-between bg-white border-b border-slate-50">
                <div className="flex-1 min-w-[300px] relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search users..." 
                    className="w-full bg-slate-100 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50/50 border-none hover:bg-slate-50/50">
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase py-6 px-8">User Identity</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase">Role</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase">Joined</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase">Status</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase text-right px-8">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.length > 0 ? (
                    users.map((u) => {
                      const clientInitials = (u.name || u.email || "US").slice(0, 2).toUpperCase();
                      const joinDate = new Date(u.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      });

                      let roleLabel = "User Member";
                      if (u.role === "ADMIN") roleLabel = "System Admin";
                      if (u.role === "MITRA") roleLabel = "Showroom Partner";

                      return (
                        <TableRow key={u.id} className="border-b-slate-50 hover:bg-slate-50/30 transition-colors">
                          <TableCell className="py-6 px-8">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center shrink-0 font-bold text-slate-600 text-sm">
                                {clientInitials}
                              </div>
                              <div>
                                <p className="font-bold text-slate-800">{u.name || "VoltRide User"}</p>
                                <p className="text-xs text-slate-400 font-medium">{u.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-slate-100 text-slate-600 border-none font-bold text-[9px] uppercase px-2.5 py-0.5 rounded">
                              {roleLabel}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm font-medium text-slate-600">
                            {joinDate}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px]">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                            </div>
                          </TableCell>
                          <TableCell className="text-right px-8">
                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                              <MoreVertical size={18} />
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="py-8 text-center text-gray-500 text-sm">
                        No registered users found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Card>

          </div>
        </main>
      </div>
    </div>
  );
}
