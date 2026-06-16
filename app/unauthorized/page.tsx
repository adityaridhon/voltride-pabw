import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="text-6xl">🚫</div>
        <h1 className="text-2xl font-bold text-gray-800">Access Denied</h1>
        <p className="text-gray-500">You do not have permission to access this page.</p>
        <Link
          href="/"
          className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg px-6 py-2.5 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
