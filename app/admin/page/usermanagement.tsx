import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { UserManagementClient } from "../components/usermanagementclient";

export default async function UserManagement() {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  // Fetch all users
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalUsers = users.filter((u) => u.role === "USER").length;

  // Active bookings count
  const activeNowCount = await prisma.booking.count({
    where: {
      status: "PAID",
    },
  });

  // New signups in last 24 hours
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const newSignups = users.filter((u) => u.createdAt >= oneDayAgo).length;

  // Calculate dynamic weekly user growth chart data (last 7 days)
  const now = new Date();
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  const chartData = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(now.getDate() - (6 - i));
    const dayName = dayNames[d.getDay()];

    const startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
    const endOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59);

    const count = users.filter(
      (u) => u.createdAt >= startOfDay && u.createdAt <= endOfDay
    ).length;

    // Set max height of 240px and dynamic height calculation
    const height = count > 0 ? `${Math.min(20 + count * 40, 240)}px` : "20px";
    
    // Choose emerald color variations based on intensity
    let color = "bg-emerald-100";
    if (count > 4) color = "bg-emerald-800";
    else if (count > 2) color = "bg-emerald-500";
    else if (count > 0) color = "bg-emerald-300";

    return {
      day: dayName,
      height,
      color,
      value: count.toLocaleString("id-ID"),
    };
  });

  return (
    <UserManagementClient
      initialUsers={users}
      totalUsersCount={totalUsers}
      activeNowCount={activeNowCount}
      newSignupsCount={newSignups}
      chartData={chartData}
    />
  );
}
