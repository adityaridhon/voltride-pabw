import type { ReactNode } from "react";
import Link from "next/link";

const navSections = [
  {
    title: "Utama",
    items: [
      { href: "/dashboard", label: "Ringkasan" },
      { href: "/wallet", label: "Dompet" },
      { href: "/history", label: "Riwayat" },
      { href: "/payment-method", label: "Metode Pembayaran" },
    ],
  },
  {
    title: "Transaksi",
    items: [
      { href: "/topup", label: "Top Up" },
      { href: "/transfer", label: "Transfer" },
      { href: "/withdraw", label: "Tarik Dana" },
    ],
  },
  {
    title: "Akun",
    items: [
      { href: "/profile", label: "Profil" },
      { href: "/notifications", label: "Notifikasi" },
      { href: "/security", label: "Keamanan" },
    ],
  },
];

// ========================================
// Insya allah YANG BISA DIBUAT
// ========================================

// 1. Active menu navigation
// - Menu aktif otomatis sesuai route
// - Highlight halaman aktif

// 2. Backend integration
// - Fetch data user
// - Fetch wallet balance
// - Fetch navigation data



// export default function UserLayout({ children }: { children: ReactNode }) {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl wallet-float" />
//         <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl wallet-float" />
//         <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
//       </div>

//       <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 lg:flex-row lg:px-6">
//         <aside className="w-full max-w-full rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur lg:sticky lg:top-8 lg:h-fit lg:w-[260px]">
//           <Link href="/dashboard" className="flex flex-col gap-1">
//             <span className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
//               VoltRide
//             </span>
//             <span className="font-heading text-xl tracking-tight">
//               Wallet Center
//             </span>
//             <span className="text-xs text-slate-400">
//               Ringkasan saldo dan transaksi
//             </span>
//           </Link>

//           <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent p-4">
//             <p className="text-xs text-emerald-200/80">Saldo utama</p>
//             <p className="mt-2 text-2xl font-semibold">Rp 2.450.000</p>
//             <p className="mt-1 text-xs text-slate-400">
//               Terakhir update 2 menit lalu
//             </p>
//             <div className="mt-4 flex gap-2">
//               <Link
//                 href="/topup"
//                 className="flex-1 rounded-full bg-emerald-400/90 px-3 py-2 text-center text-xs font-semibold text-slate-950 transition hover:bg-emerald-300"
//               >
//                 Top Up
//               </Link>
//               <Link
//                 href="/transfer"
//                 className="flex-1 rounded-full border border-slate-700/80 px-3 py-2 text-center text-xs font-semibold text-slate-200 transition hover:border-slate-500"
//               >
//                 Transfer
//               </Link>
//             </div>
//           </div>

//           <div className="mt-6 space-y-5 text-sm">
//             {navSections.map((section) => (
//               <div key={section.title}>
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
//                   {section.title}
//                 </p>
//                 <div className="mt-3 flex flex-col gap-2">
//                   {section.items.map((item) => (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       className="rounded-xl border border-transparent px-3 py-2 text-slate-200 transition hover:border-slate-700/70 hover:bg-slate-900"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </aside>

//         <main className="flex-1">
//           <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
