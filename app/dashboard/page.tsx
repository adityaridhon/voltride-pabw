import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { signOut } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const { user } = session;

  const roleColor: Record<string, string> = {
    ADMIN: "bg-red-500/20 text-red-400 border-red-500/30",
    MITRA: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    USER: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <form action={async () => { "use server"; await signOut({ redirectTo: "/login" }); }}>
            <button type="submit" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Logout →
            </button>
          </form>
        </div>

        {/* Session Info Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Session Info</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-500 text-sm">ID</span>
              <code className="text-xs text-emerald-400 bg-zinc-800 px-2 py-1 rounded">{user.id}</code>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500 text-sm">Nama</span>
              <span className="text-white text-sm">{user.name ?? "—"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500 text-sm">Email</span>
              <span className="text-white text-sm">{user.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 text-sm">Role</span>
              <span className={`text-xs font-medium border px-2.5 py-1 rounded-full ${roleColor[user.role] ?? ""}`}>
                {user.role}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation berdasarkan role */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Akses Halaman</h2>
          <div className="grid gap-2">
            {user.role === "ADMIN" && (
              <>
                <NavLink href="/admin/dashboard" label="🔴 Admin Dashboard" desc="Hanya ADMIN" />
                <NavLink href="/admin/test-actions" label="🧪 Test CRUD Actions" desc="Test semua server actions" />
              </>
            )}
            {(user.role === "ADMIN" || user.role === "MITRA") && (
              <NavLink href="/mitra/dashboard" label="🔵 Mitra Dashboard" desc="ADMIN + MITRA" />
            )}
            <NavLink href="/dashboard" label="🟢 Dashboard" desc="Semua role" />
          </div>
        </div>

        {/* Test proteksi route */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Test Proteksi Route</h2>
          <p className="text-xs text-zinc-500">Coba akses route ini — middleware akan blokir jika role tidak sesuai:</p>
          <div className="grid gap-2">
            <TestRoute href="/admin/dashboard" label="/admin/dashboard" allowed="ADMIN" current={user.role} />
            <TestRoute href="/mitra/dashboard" label="/mitra/dashboard" allowed="ADMIN,MITRA" current={user.role} />
            <TestRoute href="/unauthorized" label="/unauthorized" allowed="Semua" current={user.role} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, label, desc }: { href: string; label: string; desc: string }) {
  return (
    <Link href={href} className="flex items-center justify-between bg-zinc-800 hover:bg-zinc-700 rounded-lg px-4 py-3 transition-colors group">
      <div>
        <div className="text-sm text-white">{label}</div>
        <div className="text-xs text-zinc-500">{desc}</div>
      </div>
      <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">→</span>
    </Link>
  );
}

function TestRoute({ href, label, allowed, current }: { href: string; label: string; allowed: string; current: string }) {
  const isAllowed = allowed === "Semua" || allowed.includes(current);
  return (
    <Link href={href} className="flex items-center justify-between bg-zinc-800 hover:bg-zinc-700 rounded-lg px-4 py-3 transition-colors">
      <div>
        <code className="text-xs text-zinc-300">{label}</code>
        <div className="text-xs text-zinc-500 mt-0.5">Diizinkan: {allowed}</div>
      </div>
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${isAllowed ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
        {isAllowed ? "✓ Boleh" : "✗ Akan diblokir"}
      </span>
    </Link>
  );
}
