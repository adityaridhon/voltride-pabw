"use client";

import { Sidebar } from "../components/sidebaradmin";
import { HeaderAdmin } from "../components/headeradmin";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  TrendingUp, 
  TrendingDown, 
  MoreVertical, 
  Ban, 
  CheckCircle2, 
  X,
  Building2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function PartnersManagement() {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <HeaderAdmin title="Partner Management" />
        
        <main className="flex-1 overflow-y-auto p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Page Header */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest mb-1">Manage Partners</p>
                <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Partners Management</h1>
              </div>
              <div className="bg-white p-1 rounded-xl border border-slate-100 flex gap-1 shadow-sm">
                <button className="px-4 py-2 text-xs font-bold bg-emerald-50 text-emerald-600 rounded-lg">All Partners</button>
                <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">Pending Approvals</button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-2/3">Total Registered Partners</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> +12.5%
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">1,284</h2>
                  <div className="mt-4">
                    <p className="text-[10px] font-bold text-slate-800 uppercase">Trending up this month</p>
                    <p className="text-[10px] text-slate-400">Visitors for the last 6 months</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-2/3">Pending Applications</p>
                  <Badge className="bg-red-50 text-red-500 border-none font-bold text-[10px] flex gap-1">
                    <TrendingDown size={12} /> -20%
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-emerald-500">24</h2>
                  <div className="mt-4">
                    <p className="text-[10px] font-bold text-slate-800 uppercase">Down 20% this period</p>
                    <p className="text-[10px] text-slate-400">Acquisition needs attention</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-2/3">Total Fleet Size</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> +12.5%
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">14,502</h2>
                  <div className="mt-4">
                    <p className="text-[10px] font-bold text-slate-800 uppercase">Strong user retention</p>
                    <p className="text-[10px] text-slate-400">Engagement exceed targets</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-2/3">Growth Rate</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> +4.5%
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">4.5%</h2>
                  <div className="mt-4">
                    <p className="text-[10px] font-bold text-slate-800 uppercase">Steady performance increase</p>
                    <p className="text-[10px] text-slate-400">Meets growth projections</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content Table Card */}
            <Card className="border-none shadow-sm rounded-3xl bg-white overflow-hidden">
              <div className="p-8 flex justify-between items-center border-b border-slate-50">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Total Visitors</h3>
                  <p className="text-xs text-slate-400 font-medium">Total for the last 3 months</p>
                </div>
                <div className="bg-slate-50 p-1 rounded-xl flex gap-1 border border-slate-100">
                  <button className="px-4 py-2 text-xs font-bold bg-white text-slate-800 rounded-lg shadow-sm">Last 3 months</button>
                  <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors">Last 30 days</button>
                  <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors">Last 7 days</button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50/50 border-none hover:bg-slate-50/50">
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase py-6 px-8">Company Name</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase">Contact Info</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase">Fleet Size</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase text-center">Status</TableHead>
                    <TableHead className="font-extrabold text-[10px] text-slate-400 tracking-widest uppercase text-right px-8">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Row 1 */}
                  <TableRow className="border-b-slate-50 hover:bg-slate-50/30 transition-colors">
                    <TableCell className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white shrink-0">
                          <Building2 size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Nexus Mobility Corp</p>
                          <p className="text-xs text-slate-400 font-medium">Joined Jan 2024</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm font-bold text-slate-700">contact@nexusmobility.io</p>
                        <p className="text-xs text-slate-400 font-medium">+62 812-4433-2211</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">150</span>
                        <Badge className="bg-emerald-400 text-white border-none font-bold text-[8px] px-1 py-0 rounded">EV</Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] px-3 py-1 rounded-full flex gap-1 items-center justify-center mx-auto w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-8">
                      <div className="flex justify-end gap-2 text-slate-400">
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><Ban size={18} /></button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><MoreVertical size={18} /></button>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Row 2 */}
                  <TableRow className="border-b-slate-50 hover:bg-slate-50/30 transition-colors">
                    <TableCell className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-600 flex items-center justify-center text-white shrink-0">
                          <Building2 size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">EcoDrive Logistics</p>
                          <p className="text-xs text-slate-400 font-medium">Applied 2 days ago</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm font-bold text-slate-700">admin@ecodrive.co</p>
                        <p className="text-xs text-slate-400 font-medium">+62 21-500-299</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">45</span>
                        <Badge className="bg-emerald-400 text-white border-none font-bold text-[8px] px-1 py-0 rounded">EV</Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-slate-100 text-slate-600 border-none font-bold text-[10px] px-3 py-1 rounded-full flex gap-1 items-center justify-center mx-auto w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-8">
                      <div className="flex justify-end gap-3 items-center">
                        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold h-9 px-6 rounded-lg text-xs">
                          Approve
                        </Button>
                        <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><X size={20} /></button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="p-8 flex items-center justify-between border-t border-slate-50 bg-white">
                <p className="text-xs text-slate-400 font-medium">Showing <span className="text-slate-800 font-bold">1-10</span> of 1,284 partners</p>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:bg-slate-50 rounded-lg transition-colors">
                    <ChevronLeft size={16} />
                  </button>
                  <button className="w-8 h-8 bg-emerald-600 text-white font-bold text-xs flex items-center justify-center rounded-lg shadow-sm">1</button>
                  <button className="w-8 h-8 text-slate-400 font-bold text-xs flex items-center justify-center hover:bg-slate-50 rounded-lg transition-colors">2</button>
                  <button className="w-8 h-8 text-slate-400 font-bold text-xs flex items-center justify-center hover:bg-slate-50 rounded-lg transition-colors">3</button>
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
