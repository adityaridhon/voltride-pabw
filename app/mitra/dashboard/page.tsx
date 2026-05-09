import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function MitraDashboardPage() {
  const session = await auth();
  if (!session || !["ADMIN", "MITRA"].includes(session.user.role)) {
    redirect("/unauthorized");
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Mitra Dashboard</h1>
            <p className="text-zinc-500 text-sm mt-1">Login sebagai: {session.user.email}</p>
          </div>
          <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-medium px-3 py-1 rounded-full">
            {session.user.role}
          </span>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">✅ Middleware OK</h2>
          <p className="text-zinc-300 text-sm">
            Halaman ini bisa diakses oleh <strong className="text-blue-400">ADMIN</strong> dan{" "}
            <strong className="text-blue-400">MITRA</strong>. Login sebagai USER akan diblokir middleware
            dan diredirect ke <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">/unauthorized</code>.
          </p>
        </div>

        <Link href="/dashboard" className="block bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 transition-colors">
          <div className="text-lg mb-1">← Kembali ke Dashboard</div>
        </Link>
      </div>
    </div>
  );
}
