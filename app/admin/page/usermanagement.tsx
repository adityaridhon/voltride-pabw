"use client";

import { Sidebar } from "../components/sidebaradmin";
import { HeaderAdmin } from "../components/headeradmin";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Search, 
  Filter, 
  Calendar, 
  MoreVertical, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  User
} from "lucide-react";

export default function UserManagement() {
  const chartData = [
    { day: "MON", height: "80px", color: "bg-emerald-50", value: "1,204" },
    { day: "TUE", height: "120px", color: "bg-emerald-100", value: "2,450" },
    { day: "WED", height: "100px", color: "bg-emerald-200", value: "1,890" },
    { day: "THU", height: "160px", color: "bg-emerald-300", value: "3,200" },
    { day: "FRI", height: "140px", color: "bg-emerald-400", value: "2,800" },
    { day: "SAT", height: "200px", color: "bg-emerald-600", value: "4,100" },
    { day: "SUN", height: "240px", color: "bg-emerald-800", value: "5,482" },
  ];

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
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Users</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> +12.5%
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">12,482</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Active verification requests: 38</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Now</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1 items-center">
                    <Users size={12} /> 842
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">842</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Current concurrent sessions</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Signups</p>
                  <Badge className="bg-red-50 text-red-500 border-none font-bold text-[10px] flex gap-1">
                    <TrendingDown size={12} /> -4.2%
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">156</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Last 24 hours activity</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conversion</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <CheckCircle2 size={12} /> 98%
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">98.2%</h2>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">KYC verification success rate</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Chart Section */}
            <Card className="p-8 border-none shadow-sm rounded-3xl bg-white">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">User Growth Velocity</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">Aggregation of new account creations per day</p>
                </div>
                <div className="bg-slate-50 p-1 rounded-xl border border-slate-100 flex gap-1">
                  <button className="px-4 py-2 text-xs font-bold bg-white text-slate-800 rounded-lg shadow-sm">Last 7 days</button>
                  <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors">Last 30 days</button>
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
                    className="w-full bg-slate-100 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                  />
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-slate-100 px-5 py-3 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors">
                    <Filter size={16} />
                    Status
                  </button>
                  <button className="flex items-center gap-2 bg-slate-100 px-5 py-3 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors">
                    <Calendar size={16} />
                    Join Date
                  </button>
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
                  {/* Row 1 */}
                  <TableRow className="border-b-slate-50 hover:bg-slate-50/30 transition-colors">
                    <TableCell className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                          <img src="https://github.com/shadcn.png" alt="avatar" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Alex Van De Kamp</p>
                          <p className="text-xs text-slate-400 font-medium">alex.kamp@kinetic.eco</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-slate-100 text-slate-600 border-none font-bold text-[9px] uppercase px-2.5 py-0.5 rounded">
                        Fleet Partner
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm font-medium text-slate-600">
                      Oct 12, 2023
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Verified
                      </div>
                    </TableCell>
                    <TableCell className="text-right px-8">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </TableCell>
                  </TableRow>

                  {/* Row 2 */}
                  <TableRow className="border-b-slate-50 hover:bg-slate-50/30 transition-colors">
                    <TableCell className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                          <img src="https://i.pravatar.cc/150?u=elena" alt="avatar" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Elena Rodriguez</p>
                          <p className="text-xs text-slate-400 font-medium">e.rodriguez@vision.io</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-slate-100 text-slate-600 border-none font-bold text-[9px] uppercase px-2.5 py-0.5 rounded">
                        Eco Member
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm font-medium text-slate-600">
                      Jan 05, 2024
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[10px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Verified
                      </div>
                    </TableCell>
                    <TableCell className="text-right px-8">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="p-8 flex items-center justify-between border-t border-slate-50 bg-white">
                <p className="text-xs text-slate-400 font-medium">Showing <span className="text-slate-800 font-bold">2</span> of 12,482 users</p>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:bg-slate-50 rounded-lg transition-colors">
                    <ChevronLeft size={16} />
                  </button>
                  <button className="w-8 h-8 bg-slate-800 text-white font-bold text-xs flex items-center justify-center rounded-lg shadow-sm">1</button>
                  <button className="w-8 h-8 text-slate-400 font-bold text-xs flex items-center justify-center hover:bg-slate-50 rounded-lg transition-colors">2</button>
                  <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:bg-slate-50 rounded-lg transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </Card>

          </div>
        </main>
      </div>
    </div>
  );
}
