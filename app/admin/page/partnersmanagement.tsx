import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "../components/sidebaradmin";
import { HeaderAdmin } from "../components/headeradmin";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import { 
  TrendingUp, 
  MoreVertical, 
  Ban, 
  Building2,
} from "lucide-react";

export default async function PartnersManagement() {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  // Fetch partners from DB
  const partners = await prisma.mitra.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
          phone: true,
        },
      },
      _count: {
        select: {
          mobils: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalPartners = partners.length;
  const totalFleetSize = await prisma.mobil.count();

  // Showrooms with 0 fleet are marked as pending approvals/activity
  const pendingPartners = partners.filter((p) => p._count.mobils === 0).length;
  const activePartners = totalPartners - pendingPartners;

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
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-2/3">Total Registered Partners</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> Live
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">{totalPartners}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] font-bold text-slate-800 uppercase">Active showrooms</p>
                    <p className="text-[10px] text-slate-400">Total partners registered</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-2/3">Pending Showrooms</p>
                  <Badge className="bg-yellow-50 text-yellow-600 border-none font-bold text-[10px] flex gap-1">
                    Attention
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-yellow-600">{pendingPartners}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] font-bold text-slate-800 uppercase">0 fleet partners</p>
                    <p className="text-[10px] text-slate-400">Requires onboarding</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-2/3">Total Fleet Size</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <Building2 size={12} /> Active
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">{totalFleetSize}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] font-bold text-slate-800 uppercase">Vehicles in system</p>
                    <p className="text-[10px] text-slate-400">Managed fleet size</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-sm rounded-3xl bg-white flex flex-col justify-between h-48">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-2/3">Active Partners</p>
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] flex gap-1">
                    <TrendingUp size={12} /> Live
                  </Badge>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-800">{activePartners}</h2>
                  <div className="mt-4">
                    <p className="text-[10px] font-bold text-slate-800 uppercase">Partners with fleet</p>
                    <p className="text-[10px] text-slate-400">Operating showrooms</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content Table Card */}
            <Card className="border-none shadow-sm rounded-3xl bg-white overflow-hidden">
              <div className="p-8 flex justify-between items-center border-b border-slate-50">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Showrooms List</h3>
                  <p className="text-xs text-slate-400 font-medium">All registered partners details</p>
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
                  {partners.length > 0 ? (
                    partners.map((p) => {
                      const joinDate = new Date(p.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      });
                      const isActive = p._count.mobils > 0;

                      return (
                        <TableRow key={p.id} className="border-b-slate-50 hover:bg-slate-50/30 transition-colors">
                          <TableCell className="py-6 px-8">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white shrink-0">
                                <Building2 size={24} />
                              </div>
                              <div>
                                <p className="font-bold text-slate-800">{p.companyName || p.user.name}</p>
                                <p className="text-xs text-slate-400 font-medium">Joined {joinDate}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm font-bold text-slate-700">{p.user.email}</p>
                              <p className="text-xs text-slate-400 font-medium">{p.phone || p.user.phone || "-"}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-800">{p._count.mobils}</span>
                              <Badge className="bg-emerald-400 text-white border-none font-bold text-[8px] px-1 py-0 rounded">EV</Badge>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            {isActive ? (
                              <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[10px] px-3 py-1 rounded-full flex gap-1 items-center justify-center mx-auto w-fit">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                              </Badge>
                            ) : (
                              <Badge className="bg-yellow-50 text-yellow-600 border-none font-bold text-[10px] px-3 py-1 rounded-full flex gap-1 items-center justify-center mx-auto w-fit">
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> Pending
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right px-8">
                            <div className="flex justify-end gap-2 text-slate-400">
                              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><Ban size={18} /></button>
                              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><MoreVertical size={18} /></button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="py-8 text-center text-gray-500 text-sm">
                        No registered partners found in database.
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
