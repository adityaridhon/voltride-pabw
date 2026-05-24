import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SidebarMitra from "@/app/mitra/components/sidebarmitra";
import HeaderMitra from "@/app/mitra/components/headermitra";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Handshake, Wallet, Clock, Leaf, Search, Calendar, TrendingUp, ChevronLeft, ChevronRight, Zap } from "lucide-react";

export default async function EarningsPage() {
  const session = await auth();
  if (!session || session.user.role !== "MITRA") redirect("/unauthorized");

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
                    <h2 className="text-3xl font-extrabold text-slate-800">Andre Showroom</h2>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 font-bold px-4 py-1.5 rounded-full border border-emerald-200">
                    Verified Partner
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-8 mt-12 z-10">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 mb-1">Member Since</p>
                    <p className="font-bold text-slate-800">Jan 2022</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 mb-1">Location</p>
                    <p className="font-bold text-slate-800">Jl. Karang Joan</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 mb-1">Fleet Size</p>
                    <p className="font-bold text-slate-800">42 Units</p>
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
                    <span className="text-emerald-200 font-bold text-2xl mt-1">$</span>
                    <h2 className="text-5xl font-extrabold tracking-tight">24,850.00</h2>
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
                    <TrendingUp size={10} /> +12.5%
                  </span>
                </div>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-emerald-500">$142,500.00</div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Trending up this month</p>
                </div>
              </Card>

              <Card className="border-none shadow-sm rounded-3xl p-6 bg-white flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Booking Total</h3>
                  <Clock size={16} className="text-slate-400" />
                </div>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-emerald-500">198</div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Trending up this month</p>
                </div>
              </Card>

              <Card className="border-none shadow-sm rounded-3xl p-6 bg-white flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Rental</h3>
                  <Leaf size={16} className="text-emerald-500" />
                </div>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-emerald-500">12</div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">On the road</p>
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
                    placeholder="Booking ID, Username..." 
                    className="w-full bg-slate-100 rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                    <button className="bg-slate-100 rounded-xl py-3 pl-10 pr-4 text-sm font-bold text-slate-600">
                      01 Jan - 31 Jan 2024
                    </button>
                  </div>
                  
                  <div className="bg-slate-100 p-1 rounded-xl flex gap-1">
                    <button className="px-4 py-2 text-xs font-bold bg-white text-slate-800 shadow-sm rounded-lg">All</button>
                    <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800">Active</button>
                    <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800">Completed</button>
                    <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800">Canceled</button>
                  </div>
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
                  {/* Row 1 */}
                  <TableRow className="border-b-slate-50">
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                          BK
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">Budi Kusuma</p>
                          <p className="text-[10px] text-slate-500">Premium Member</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Zap size={12} className="text-slate-400" />
                        <span className="font-medium text-slate-700 text-sm">Tesla Model 3 Performance</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-bold text-slate-800 text-sm">12 Jan - 15 Jan 2024</p>
                      <p className="text-[10px] text-slate-500">3 Days</p>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-emerald-100 hover:bg-emerald-100 text-emerald-600 border-none font-bold text-[9px] uppercase px-2.5 py-0.5">
                        ACTIVE
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-6 font-bold text-slate-800 text-sm">
                      Rp 4.500.000
                    </TableCell>
                  </TableRow>

                  {/* Row 2 */}
                  <TableRow className="border-b-slate-50">
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xs shrink-0">
                          AS
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">Anisa Sitorus</p>
                          <p className="text-[10px] text-slate-500">New User</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Zap size={12} className="text-slate-400" />
                        <span className="font-medium text-slate-700 text-sm">Hyundai IONIQ 5 Signature</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-bold text-slate-800 text-sm">10 Jan - 11 Jan 2024</p>
                      <p className="text-[10px] text-slate-500">1 Day</p>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-slate-200 hover:bg-slate-200 text-slate-600 border-none font-bold text-[9px] uppercase px-2.5 py-0.5">
                        COMPLETED
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-6 font-bold text-slate-800 text-sm">
                      Rp 1.250.000
                    </TableCell>
                  </TableRow>

                  {/* Row 3 */}
                  <TableRow className="border-b-slate-50">
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                          DP
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">Deni Pratama</p>
                          <p className="text-[10px] text-slate-500">Regular User</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Zap size={12} className="text-slate-400" />
                        <span className="font-medium text-slate-700 text-sm">Wuling Air EV Long Range</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-bold text-slate-800 text-sm">08 Jan - 10 Jan 2024</p>
                      <p className="text-[10px] text-slate-500">2 Days</p>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-emerald-300 hover:bg-emerald-300 text-emerald-800 border-none font-bold text-[9px] uppercase px-2.5 py-0.5">
                        INCOMING
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-6 font-bold text-slate-800 text-sm">
                      Rp 900.000
                    </TableCell>
                  </TableRow>

                  {/* Row 4 */}
                  <TableRow className="border-b-slate-50">
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">
                          RK
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">Rina Kartika</p>
                          <p className="text-[10px] text-slate-500">Business Client</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Zap size={12} className="text-slate-400" />
                        <span className="font-medium text-slate-700 text-sm">Tesla Model X Plaid</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-bold text-slate-800 text-sm">05 Jan - 08 Jan 2024</p>
                      <p className="text-[10px] text-slate-500">3 Days</p>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-red-100 hover:bg-red-100 text-red-600 border-none font-bold text-[9px] uppercase px-2.5 py-0.5">
                        CANCELED
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-6 font-bold text-slate-800 text-sm">
                      Rp 7.800.000
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="p-6 flex items-center justify-between border-t border-slate-50">
                <p className="text-xs text-slate-500 font-medium">Showing 1 - 4 from <strong className="text-slate-800">1,284</strong> booking</p>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">
                    <ChevronLeft size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs hover:bg-slate-50">
                    2
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs hover:bg-slate-50">
                    ...
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs hover:bg-slate-50">
                    45
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
