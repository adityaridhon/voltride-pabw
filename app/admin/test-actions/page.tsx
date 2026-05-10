import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUsers } from "@/actions/user.actions";
import { getAllMitra } from "@/actions/mitra.actions";
import { getAllArmada } from "@/actions/armada.actions";
import Link from "next/link";

export default async function TestActionsPage() {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/unauthorized");

  // Panggil semua server actions sekaligus
  const [usersResult, mitraResult, armadaResult] = await Promise.all([
    getUsers(),
    getAllMitra(),
    getAllArmada(),
  ]);

  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">🧪 Test Server Actions</h1>
            <p className="text-zinc-500 text-sm mt-1">Hasil pemanggilan getUsers(), getAllMitra(), getAllArmada()</p>
          </div>
          <Link href="/admin/dashboard" className="text-sm text-zinc-400 hover:text-white transition-colors">← Admin</Link>
        </div>

        {/* Users */}
        <Section title="getUsers()" badge="ADMIN only" result={usersResult}>
          {usersResult.success && (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-zinc-500 border-b border-zinc-800">
                  <th className="pb-2 font-medium">Nama</th>
                  <th className="pb-2 font-medium">Email</th>
                  <th className="pb-2 font-medium">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {usersResult.data.map((u) => (
                  <tr key={u.id}>
                    <td className="py-2 text-zinc-300">{u.name ?? "—"}</td>
                    <td className="py-2 text-zinc-400">{u.email}</td>
                    <td className="py-2">
                      <RoleBadge role={u.role} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Section>

        {/* Mitra */}
        <Section title="getAllMitra()" badge="ADMIN + MITRA" result={mitraResult}>
          {mitraResult.success && (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-zinc-500 border-b border-zinc-800">
                  <th className="pb-2 font-medium">Nama Mitra</th>
                  <th className="pb-2 font-medium">Jumlah Armada</th>
                  <th className="pb-2 font-medium">No. HP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {mitraResult.data.map((m) => (
                  <tr key={m.id}>
                    <td className="py-2 text-zinc-300">{m.namaMitra}</td>
                    <td className="py-2 text-zinc-400">{m._count.armada} unit</td>
                    <td className="py-2 text-zinc-400">{m.noHp ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Section>

        {/* Armada */}
        <Section title="getAllArmada()" badge="Semua role" result={armadaResult}>
          {armadaResult.success && (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-zinc-500 border-b border-zinc-800">
                  <th className="pb-2 font-medium">Kendaraan</th>
                  <th className="pb-2 font-medium">Plat</th>
                  <th className="pb-2 font-medium">Harga/Hari</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {armadaResult.data.map((a) => (
                  <tr key={a.id}>
                    <td className="py-2 text-zinc-300">{a.namaKendaraan}</td>
                    <td className="py-2">
                      <code className="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">{a.nomorPlat}</code>
                    </td>
                    <td className="py-2 text-zinc-400">
                      Rp {Number(a.hargaPerHari).toLocaleString("id-ID")}
                    </td>
                    <td className="py-2">
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                        {a.statusKetersediaan}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Section>

        {/* Raw JSON dump */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Raw ActionResponse</h2>
          <pre className="text-xs text-zinc-400 overflow-auto max-h-60 bg-zinc-950 rounded-lg p-4">
            {JSON.stringify({ usersResult, mitraResult, armadaResult }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  badge,
  result,
  children,
}: {
  title: string;
  badge: string;
  result: { success: boolean; error?: string };
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
      <div className="flex items-center gap-3">
        <code className="text-white font-mono text-sm">{title}</code>
        <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">{badge}</span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ml-auto ${result.success ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
          {result.success ? "✓ success: true" : `✗ ${result.error}`}
        </span>
      </div>
      {result.success ? children : null}
    </div>
  );
}

function RoleBadge({ role }: { role: string }) {
  const colors: Record<string, string> = {
    ADMIN: "bg-red-500/20 text-red-400",
    MITRA: "bg-blue-500/20 text-blue-400",
    USER: "bg-emerald-500/20 text-emerald-400",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${colors[role] ?? "bg-zinc-700 text-zinc-300"}`}>
      {role}
    </span>
  );
}
