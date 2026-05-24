import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SidebarMitra from "@/app/mitra/components/sidebarmitra";
import HeaderMitra from "@/app/mitra/components/headermitra";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Pencil, Trash2, ArrowRight, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export default async function FleetManagementPage() {
  const session = await auth();
  if (!session || session.user.role !== "MITRA") redirect("/unauthorized");

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <SidebarMitra />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderMitra title="Fleet Management" />
        
        <main className="flex-1 overflow-y-auto p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Header Section */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest mb-1">Fleet Overview</p>
                <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Fleet Management</h1>
              </div>
              <Link href="/mitra/fleet/add">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-6 rounded-xl shadow-sm">
                  Add New Car
                </Button>
              </Link>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Card className="border-none shadow-sm p-6 rounded-3xl flex flex-col justify-between h-[140px]">
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Total Vehicles</h3>
                  <div className="text-4xl font-extrabold text-slate-800 mt-2">24</div>
                </div>
                <div className="w-full h-1.5 bg-emerald-500 rounded-full mt-4"></div>
              </Card>

              <Card className="border-none shadow-sm p-6 rounded-3xl flex flex-col justify-between h-[140px]">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Available</h3>
                    <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-md">50%</span>
                  </div>
                  <div className="text-4xl font-extrabold text-emerald-500 mt-2">12</div>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden flex">
                  <div className="h-full bg-emerald-500 w-1/2 rounded-full"></div>
                </div>
              </Card>

              <Card className="border-none shadow-sm p-6 rounded-3xl flex flex-col justify-between h-[140px]">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Rented</h3>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">33%</span>
                  </div>
                  <div className="text-4xl font-extrabold text-slate-800 mt-2">8</div>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden flex">
                  <div className="h-full bg-emerald-700 w-1/3 rounded-full"></div>
                </div>
              </Card>

              <Card className="border-none shadow-sm p-6 rounded-3xl flex flex-col justify-between h-[140px]">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Maintenance</h3>
                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-md">17%</span>
                  </div>
                  <div className="text-4xl font-extrabold text-red-600 mt-2">4</div>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden flex">
                  <div className="h-full bg-red-600 w-1/6 rounded-full"></div>
                </div>
              </Card>

            </div>

            {/* Car Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              
              {/* Car Card 1 */}
              <Card className="border-none shadow-sm rounded-[32px] overflow-hidden flex flex-col bg-white">
                <div className="aspect-[4/3] relative bg-slate-100 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop" 
                    alt="Ethereal GT-S"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <Badge className="relative bg-emerald-500 hover:bg-emerald-500 text-white font-bold px-3 py-1 rounded-full text-[10px] tracking-wide border-none">AVAILABLE</Badge>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-800">Ethereal GT-S</h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Luxury Performance • Electric</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Plate</p>
                      <p className="text-sm font-bold text-emerald-500 leading-tight">B 2024<br/>EVN</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <div className="bg-slate-100 text-slate-700 px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-bold flex-1 justify-center">
                      <Users size={14} className="text-emerald-500" />
                      7 SEATS
                    </div>
                    <div className="bg-slate-100 text-slate-700 px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-bold flex-1 justify-center">
                      <div className="w-3 h-3 rounded-full border-2 border-emerald-500"></div>
                      BLUE
                    </div>
                  </div>

                  <div className="mt-auto pt-8 flex items-center justify-between">
                    <div className="flex gap-2">
                      <Link href="/mitra/fleet/edit/1">
                        <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                          <Pencil size={16} />
                        </button>
                      </Link>
                      <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <button className="text-emerald-500 font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:text-emerald-600 transition-colors">
                      View Logs <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </Card>

              {/* Car Card 2 */}
              <Card className="border-none shadow-sm rounded-[32px] overflow-hidden flex flex-col bg-white">
                <div className="aspect-[4/3] relative bg-slate-100 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop" 
                    alt="Kinetic Voyager"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <Badge className="relative bg-emerald-800 hover:bg-emerald-800 text-emerald-100 font-bold px-3 py-1 rounded-full text-[10px] tracking-wide border-none">RENTED</Badge>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-800">Kinetic Voyager</h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Family SUV • Electric</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Plate</p>
                      <p className="text-sm font-bold text-emerald-800 leading-tight">D 1088<br/>KNT</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <div className="bg-slate-100 text-slate-700 px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-bold flex-1 justify-center">
                      <Users size={14} className="text-emerald-500" />
                      7 SEATS
                    </div>
                    <div className="bg-slate-100 text-slate-700 px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-bold flex-1 justify-center">
                      <div className="w-3 h-3 rounded-full border-2 border-emerald-500"></div>
                      BLUE
                    </div>
                  </div>

                  <div className="mt-auto pt-8 flex items-center justify-between">
                    <div className="flex gap-2">
                      <Link href="/mitra/fleet/edit/1">
                        <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                          <Pencil size={16} />
                        </button>
                      </Link>
                      <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                      Return in 2 Days
                    </span>
                  </div>
                </div>
              </Card>

              {/* Car Card 3 */}
              <Card className="border-none shadow-sm rounded-[32px] overflow-hidden flex flex-col bg-white">
                <div className="aspect-[4/3] relative bg-slate-100 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1662512695576-651ca99b7941?q=80&w=1000&auto=format&fit=crop" 
                    alt="Neo Sedan Elite"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <Badge className="relative bg-red-600 hover:bg-red-600 text-white font-bold px-3 py-1 rounded-full text-[10px] tracking-wide border-none">MAINTENANCE</Badge>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-800">Neo Sedan Elite</h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Executive • Electric</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Plate</p>
                      <p className="text-sm font-bold text-red-600 leading-tight">L 442<br/>ETH</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <div className="bg-slate-100 text-slate-700 px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-bold flex-1 justify-center">
                      <Users size={14} className="text-emerald-500" />
                      7 SEATS
                    </div>
                    <div className="bg-slate-100 text-slate-700 px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-bold flex-1 justify-center">
                      <div className="w-3 h-3 rounded-full border-2 border-emerald-500"></div>
                      BLUE
                    </div>
                  </div>

                  <div className="mt-auto pt-8 flex items-center justify-between">
                    <div className="flex gap-2">
                      <Link href="/mitra/fleet/edit/1">
                        <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                          <Pencil size={16} />
                        </button>
                      </Link>
                      <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <button className="text-red-600 font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 hover:text-red-700 transition-colors">
                      Service Status <MoreHorizontal size={14} />
                    </button>
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
