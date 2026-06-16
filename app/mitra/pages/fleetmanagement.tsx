import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SidebarMitra from "@/app/mitra/components/sidebarmitra";
import HeaderMitra from "@/app/mitra/components/headermitra";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Plus } from "lucide-react";
import DeleteCarButton from "@/components/usercomponents/CarDeleteButton";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteArmada } from "@/actions/armada.actions";
import { revalidatePath } from "next/cache";

export default async function FleetManagementPage() {
  const session = await auth();
  if (!session || session.user.role !== "MITRA") redirect("/unauthorized");

  // Get Mitra profile and their fleet
  const mitra = await prisma.mitra.findUnique({
    where: { userId: session.user.id },
    include: {
      mobils: true,
    },
  });

  if (!mitra) redirect("/unauthorized");

  const mobils = mitra.mobils;
  const totalVehicles = mobils.length;
  const availableVehicles = mobils.filter((m) => m.status === "ACTIVE").length;
  const rentedVehicles = mobils.filter((m) => m.status === "INACTIVE").length;
  const maintenanceVehicles = mobils.filter((m) => m.status === "MAINTENANCE").length;

  // Calculate percentages
  const availablePercent = totalVehicles > 0 ? Math.round((availableVehicles / totalVehicles) * 100) : 0;
  const rentedPercent = totalVehicles > 0 ? Math.round((rentedVehicles / totalVehicles) * 100) : 0;
  const maintenancePercent = totalVehicles > 0 ? Math.round((maintenanceVehicles / totalVehicles) * 100) : 0;

  async function handleDelete(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    if (id) {
      await deleteArmada(id);
      revalidatePath("/mitra/fleet");
    }
  }

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
              <Link href="/mitra/fleet/create">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Car
                </Button>
              </Link>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Card className="border-none shadow-sm p-6 rounded-3xl flex flex-col justify-between h-[140px]">
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Total Vehicles</h3>
                  <div className="text-4xl font-extrabold text-slate-800 mt-2">{totalVehicles}</div>
                </div>
                <div className="w-full h-1.5 bg-emerald-500 rounded-full mt-4"></div>
              </Card>

              <Card className="border-none shadow-sm p-6 rounded-3xl flex flex-col justify-between h-[140px]">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Available</h3>
                    <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-md">{availablePercent}%</span>
                  </div>
                  <div className="text-4xl font-extrabold text-emerald-500 mt-2">{availableVehicles}</div>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden flex">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${availablePercent}%` }}></div>
                </div>
              </Card>

              <Card className="border-none shadow-sm p-6 rounded-3xl flex flex-col justify-between h-[140px]">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Rented</h3>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">{rentedPercent}%</span>
                  </div>
                  <div className="text-4xl font-extrabold text-slate-800 mt-2">{rentedVehicles}</div>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden flex">
                  <div className="h-full bg-emerald-700 rounded-full" style={{ width: `${rentedPercent}%` }}></div>
                </div>
              </Card>

              <Card className="border-none shadow-sm p-6 rounded-3xl flex flex-col justify-between h-[140px]">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Maintenance</h3>
                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-md">{maintenancePercent}%</span>
                  </div>
                  <div className="text-4xl font-extrabold text-red-600 mt-2">{maintenanceVehicles}</div>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden flex">
                  <div className="h-full bg-red-600 rounded-full" style={{ width: `${maintenancePercent}%` }}></div>
                </div>
              </Card>

            </div>

            {/* Car Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              {mobils.length > 0 ? (
                mobils.map((mobil) => {
                  let statusLabel = "AVAILABLE";
                  let statusColor = "bg-emerald-500 hover:bg-emerald-500 text-white";
                  if (mobil.status === "INACTIVE") {
                    statusLabel = "RENTED";
                    statusColor = "bg-emerald-800 hover:bg-emerald-800 text-emerald-100";
                  } else if (mobil.status === "MAINTENANCE") {
                    statusLabel = "MAINTENANCE";
                    statusColor = "bg-red-600 hover:bg-red-600 text-white";
                  }

                  const formattedPrice = new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(mobil.pricePerDay);

                  return (
                    <Card key={mobil.id} className="border-none shadow-sm rounded-[32px] overflow-hidden flex flex-col bg-white">
                      <div className="aspect-[4/3] relative bg-slate-100 p-4">
                        <img 
                          src={mobil.imageUrl || "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop"} 
                          alt={mobil.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <Badge className={`relative font-bold px-3 py-1 rounded-full text-[10px] tracking-wide border-none ${statusColor}`}>
                          {statusLabel}
                        </Badge>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-1 itmes-center">
                        <div className="flex justify-between items-start font-heading">
                          <div>
                            <h3 className="text-xl font-extrabold text-slate-800">{mobil.name}</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                              {mobil.brand} {mobil.model} • {formattedPrice}/day
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 mt-6">
                          <div className="bg-slate-100 text-slate-700 px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-bold flex-1 justify-center">
                            <div className="w-3 h-3 rounded-full border-2 border-emerald-500" style={{ backgroundColor: mobil.color || "grey" }}></div>
                            {mobil.color?.toUpperCase() || "N/A"}
                          </div>
                        </div>

                        <div className="mt-auto pt-8 flex items-center justify-right">
                          <div className="flex gap-2">
                            <Link href={`/mitra/fleet/edit/${mobil.id}`}>
                              <Button size="lg" variant="outline">
                                <Pencil size={16} />
                              </Button>
                            </Link>
                            <DeleteCarButton
                              armadaId={mobil.id}
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })
              ) : (
                <div className="col-span-full py-16 text-center text-gray-500">
                  No vehicles found in your fleet.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
