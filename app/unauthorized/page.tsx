import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="text-center space-y-4">
        <div className="text-6xl">🚫</div>
        <h1 className="text-2xl font-bold text-white">Akses Ditolak</h1>
        <p className="text-zinc-400">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
        <Link
          href="/dashboard"
          className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg px-6 py-2.5 transition-colors"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}
