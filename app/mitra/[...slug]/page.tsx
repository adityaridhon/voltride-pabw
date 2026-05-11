import { notFound } from "next/navigation";
import DashboardMitra from "@/app/mitra/pages/dashboardmitra";
import FleetManagement from "@/app/mitra/pages/fleetmanagement";
import Earnings from "@/app/mitra/pages/earnings";
import TambahFleet from "@/app/mitra/pages/tambahfleet";
import EditFleet from "@/app/mitra/pages/editfleet";

export default async function MitraCatchAll({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const path = resolvedParams.slug.join("/");

  if (path === "dashboard") return <DashboardMitra />;
  if (path === "fleet") return <FleetManagement />;
  if (path === "earnings") return <Earnings />;
  if (path === "fleet/add") return <TambahFleet />;
  if (path.startsWith("fleet/edit/")) return <EditFleet />;

  return notFound();
}
