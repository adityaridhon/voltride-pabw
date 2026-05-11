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

// Dummy data sesuai desain
const recentActivity = [
  { user: "Budi Santoso", vehicle: "Lucid Air Dream Ed.", date: "Oct 12, 2023", status: "Completed", amount: "Rp 3.500.000", statusColor: "bg-emerald-100 text-emerald-700" },
  { user: "Siti Rahma", vehicle: "Tesla Model S Plaid", date: "Oct 11, 2023", status: "In Progress", amount: "Rp 2.800.000", statusColor: "bg-yellow-100 text-yellow-700" },
  { user: "Andi Wijaya", vehicle: "Rimac Nevera", date: "Oct 11, 2023", status: "Cancelled", amount: "Rp 0", statusColor: "bg-red-100 text-red-700" },
  { user: "Lestari Putri", vehicle: "Porsche Taycan Turbo", date: "Oct 10, 2023", status: "Completed", amount: "Rp 4.200.000", statusColor: "bg-emerald-100 text-emerald-700" },
]

export default function DashboardMitra() {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <SidebarMitra />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderMitra />
        
        <main className="flex-1 overflow-y-auto p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Hi, Andre Showroom!</h2>
            <p className="text-gray-500 mt-1">Your sustainable fleet is operating at 94% efficiency today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-sm border-gray-100">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500">
                  <ReceiptText size={20} />
                </div>
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50">+12.5%</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-gray-500 mb-1">Total Transaksi</p>
                <p className="text-3xl font-bold text-gray-900">1,284</p>
                <p className="text-xs text-gray-500 mt-2">Trending up this month</p>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-4">
                  <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-gray-100">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                 <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500">
                  <CarFront size={20} />
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-100">Stable</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-gray-500 mb-1">Jumlah Mobil</p>
                <p className="text-3xl font-bold text-gray-900">24 Units</p>
                <p className="text-xs text-gray-500 mt-2">18 Active · 4 Charging · 2 Service</p>
                <div className="flex w-full h-1.5 mt-4 rounded-full overflow-hidden">
                  <div className="bg-emerald-400" style={{ width: '75%' }}></div>
                  <div className="bg-yellow-400" style={{ width: '15%' }}></div>
                  <div className="bg-red-400" style={{ width: '10%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-gray-100">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500">
                  <Wallet size={20} />
                </div>
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50">+ Rp 4.2M</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-gray-500 mb-1">Pendapatan Bulan Ini</p>
                <p className="text-3xl font-bold text-emerald-500">Rp 48.500.000</p>
                <p className="text-xs text-gray-500 mt-2">Strong revenue growth</p>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-4">
                  <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '85%' }}></div>
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
                <div className="flex items-center gap-4">
                  <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-100">
                    <button className="px-3 py-1 text-xs bg-white rounded shadow-sm font-medium text-gray-800">Last 30 days</button>
                    <button className="px-3 py-1 text-xs text-gray-500 font-medium hover:text-gray-700">Last 7 days</button>
                  </div>
                  <Button variant="link" className="text-emerald-500 font-semibold p-0 h-auto">View All</Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
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
              </CardContent>
            </Card>

            {/* Performance Banner */}
            <Card className="bg-[#12141D] text-white border-none overflow-hidden relative shadow-md">
              <CardHeader className="relative z-10 pt-8 px-6">
                <CardTitle className="text-emerald-400 text-xl font-bold">Fleet Performance</CardTitle>
                <CardDescription className="text-gray-400 mt-2 text-sm leading-relaxed max-w-[200px]">
                  Tesla Model 3 units show highest utility rates this weekend.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 mt-16 px-6 pb-8">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6">
                  Optimize Fleet
                </Button>
              </CardContent>
              {/* Note: Kalau punya asset gambar mobilnya, masukkan dengan tag <img> posisi absolute di kanan bawah */}
            </Card>
            
          </div>
        </main>
      </div>
    </div>
  )
}