import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import DashboardAdmin from "@/app/admin/page/dashboardadmin";
import PartnersManagement from "@/app/admin/page/partnersmanagement";
import UserManagement from "@/app/admin/page/usermanagement";

export default async function AdminCatchAll({ params }: { params: Promise<{ slug: string[] }> }) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }
  
  const resolvedParams = await params;
  const path = resolvedParams.slug.join("/");

  if (path === "dashboard") return <DashboardAdmin />;
  if (path === "partners") return <PartnersManagement />;
  if (path === "users") return <UserManagement />;

  return notFound();
}
