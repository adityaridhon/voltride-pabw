import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "../components/sidebaradmin";
import { HeaderAdmin } from "../components/headeradmin";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  Zap,
  ArrowUpRight
} from "lucide-react";

export default async function DashboardAdmin() {
  const session = await auth();
  
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <HeaderAdmin />
        <main className="flex-1 overflow-y-auto p-8 space-y-6">
          
          {/* 4 Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Total Users" 
              value="12,482" 
              trend="+ 12.5%" 
              subtext="Trending up this month" 
              type="up" 
            />
            <StatCard 
              title="Total Partners" 
              value="482" 
              trend=" 4.0%" 
              subtext="Acquisition needs attention" 
              type="down" 
            />
            <StatCard 
              title="Active Accounts" 
              value="3,105" 
              trend="+ 12.5%" 
              subtext="Strong user retention" 
              type="up" 
            />
            <StatCard 
              title="Growth Rate" 
              value="4.5%" 
              trend="+ 4.5%" 
              subtext="Steady performance increase" 
              type="up" 
            />
          </div>

          {/* System Health & Fleet Performance Chart */}
          <Card className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">System Health & Fleet Performance</h3>
                  <p className="text-slate-500 text-sm">Real-time telemetry and network stability</p>
                </div>
                <div className="flex bg-slate-100 p-1.5 rounded-xl gap-2">
                  <button className="px-4 py-2 text-sm font-semibold bg-white text-slate-800 shadow-sm rounded-lg">Last 3 months</button>
                  <button className="px-4 py-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">Last 30 days</button>
                  <button className="px-4 py-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">Last 7 days</button>
                </div>
              </div>
              
              <div className="h-[280px] w-full relative pt-4">
                <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                  {/* Wave Peaks */}
                  <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* The Graphic from the image */}
                  <g>
                    {/* Peak 1 */}
                    <path d="M50,180 Q80,80 110,180" fill="url(#waveGradient)" stroke="#065f46" strokeWidth="2" opacity="0.8" />
                    <path d="M60,180 Q80,110 100,180" fill="none" stroke="#065f46" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                    
                    {/* Peak 2 */}
                    <path d="M150,180 Q210,100 270,180" fill="url(#waveGradient)" stroke="#065f46" strokeWidth="2" opacity="0.8" />
                    <path d="M170,180 Q210,120 250,180" fill="none" stroke="#065f46" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                    
                    {/* Peak 3 (Highest) */}
                    <path d="M350,180 Q430,20 510,180" fill="url(#waveGradient)" stroke="#065f46" strokeWidth="2" opacity="0.8" />
                    <path d="M380,180 Q430,60 480,180" fill="none" stroke="#065f46" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                    
                    {/* Peak 4 */}
                    <path d="M550,180 Q620,40 690,180" fill="url(#waveGradient)" stroke="#065f46" strokeWidth="2" opacity="0.8" />
                    <path d="M580,180 Q620,70 660,180" fill="none" stroke="#065f46" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                    
                    {/* Peak 5 */}
                    <path d="M750,180 Q820,30 890,180" fill="url(#waveGradient)" stroke="#065f46" strokeWidth="2" opacity="0.8" />
                    <path d="M780,180 Q820,60 860,180" fill="none" stroke="#065f46" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                  </g>
                </svg>
                
                {/* Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-10 text-[10px] font-bold text-slate-400 uppercase">
                  <span>Apr 7</span>
                  <span>Apr 26</span>
                  <span>May 14</span>
                  <span>Jun 2</span>
                  <span>Jun 22</span>
                  <span>Jun 30</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Partners Table */}
            <Card className="lg:col-span-2 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800">Recent Partners</h3>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-bold">View All</button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50/50">
                      <TableHead className="font-bold text-slate-500 py-4 px-6">Partner Name</TableHead>
                      <TableHead className="font-bold text-slate-500">Location</TableHead>
                      <TableHead className="font-bold text-slate-500">Fleet</TableHead>
                      <TableHead className="font-bold text-slate-500">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "NeoDrive Mobility", loc: "Jakarta Central", fleet: "124 EVs", status: "ACTIVE", color: "bg-emerald-100 text-emerald-700" },
                      { name: "EcoSwift Logistics", loc: "Bandung Hub", fleet: "86 EVs", status: "ACTIVE", color: "bg-emerald-100 text-emerald-700" },
                      { name: "Aether Transit", loc: "Bali Coastal", fleet: "215 EVs", status: "FLAGGED", color: "bg-red-100 text-red-700" },
                    ].map((m, i) => (
                      <TableRow key={i} className="border-b-slate-100">
                        <TableCell className="py-5 px-6 font-bold text-slate-800">{m.name}</TableCell>
                        <TableCell className="text-slate-500">{m.loc}</TableCell>
                        <TableCell className="text-slate-500 font-medium">{m.fleet}</TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${m.color}`}>
                            {m.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* Fleet Expansion Progress */}
            <Card className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-slate-800 fill-slate-800" />
                  <h3 className="text-xl font-bold text-slate-800">Fleet Expansion</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  New sustainable hubs opening in Southeast Asia next quarter. Optimize partner logistics now for the new grid.
                </p>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-slate-400">Grid Load</span>
                      <span className="text-sm font-bold text-emerald-600">75%</span>
                    </div>
                    <Progress value={75} className="h-2.5 bg-slate-100" />
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-bold text-slate-400">Latency</span>
                    <span className="text-sm font-bold text-slate-800">12ms</span>
                  </div>
                </div>

                <button className="w-full mt-10 bg-emerald-400 hover:bg-emerald-500 text-slate-800 font-bold py-4 rounded-xl transition-colors shadow-sm">
                  Review Plan
                </button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, subtext, type }: { title: string; value: string; trend: string; subtext: string; type: 'up' | 'down' }) {
  return (
    <Card className="border border-slate-200 rounded-3xl shadow-sm p-6 relative overflow-hidden">
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <span className="text-sm font-bold text-slate-400">{title}</span>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold ${type === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
            {type === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {trend}
          </div>
        </div>
        <div className="mt-4">
          <div className="text-4xl font-extrabold text-slate-800 tracking-tight">{value}</div>
          <div className="text-[11px] font-bold text-slate-400 mt-2 flex items-center gap-1">
            {subtext} 
            {type === 'up' && <ArrowUpRight className="h-3 w-3" />}
            {type === 'down' && <span className="ml-1">✓</span>}
          </div>
        </div>
      </div>
    </Card>
  );
}
