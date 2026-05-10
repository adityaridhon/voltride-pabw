const quickStats = [
  {
    label: "Saldo tersedia",
    value: "Rp 2.450.000",
    note: "+12% dari bulan lalu",
  },
  { label: "Poin perjalanan", value: "1.240", note: "Tukar untuk diskon" },
  { label: "Transaksi bulan ini", value: "28", note: "2 transaksi tertunda" },
];

const recentTransactions = [
  {
    title: "Top Up Instan",
    time: "10:24",
    amount: "+Rp 300.000",
    status: "Sukses",
  },
  {
    title: "Tarik dana ke BCA",
    time: "Kemarin",
    amount: "-Rp 150.000",
    status: "Diproses",
  },
  {
    title: "Transfer ke Dewa Putra",
    time: "09 Mei",
    amount: "-Rp 75.000",
    status: "Sukses",
  },
  {
    title: "Cashback perjalanan",
    time: "09 Mei",
    amount: "+Rp 25.000",
    status: "Sukses",
  },
];

const goals = [
  { label: "Dana perjalanan", progress: 64 },
  { label: "Dana darurat", progress: 48 },
  { label: "Upgrade paket", progress: 82 },
];

// export default function DashboardPage() {
//   return (
//     <section className="space-y-6">
//       <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//         <div>
//           <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
//             Ringkasan Dompet
//           </p>
//           <h1 className="mt-2 font-heading text-3xl font-semibold">
//             Selamat datang kembali, Raka
//           </h1>
//           <p className="mt-2 text-sm text-slate-400">
//             Pantau saldo, transaksi, dan target finansial perjalanan kamu di
//             satu tempat.
//           </p>
//         </div>
//         <div className="flex flex-wrap gap-3">
//           <button className="rounded-full border border-slate-700/80 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
//             Unduh laporan
//           </button>
//           <button className="rounded-full bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
//             Buat target baru
//           </button>
//         </div>
//       </header>

//       <div className="grid gap-4 md:grid-cols-3">
//         {quickStats.map((item, index) => (
//           <div
//             key={item.label}
//             className="wallet-fade-in rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5"
//             style={{ animationDelay: `${index * 120}ms` }}
//           >
//             <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
//               {item.label}
//             </p>
//             <p className="mt-3 text-2xl font-semibold">{item.value}</p>
//             <p className="mt-2 text-xs text-slate-400">{item.note}</p>
//           </div>
//         ))}
//       </div>

//       <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
//         <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//           <div className="flex items-center justify-between">
//             <h2 className="font-heading text-lg">Aktivitas terbaru</h2>
//             <button className="text-xs text-emerald-300/80 transition hover:text-emerald-200">
//               Lihat semua
//             </button>
//           </div>
//           <div className="mt-4 space-y-3">
//             {recentTransactions.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-900/50 px-4 py-3"
//               >
//                 <div>
//                   <p className="text-sm font-semibold text-slate-100">
//                     {item.title}
//                   </p>
//                   <p className="text-xs text-slate-400">
//                     {item.time} · {item.status}
//                   </p>
//                 </div>
//                 <span className="text-sm font-semibold text-emerald-200">
//                   {item.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//           <div className="flex items-center justify-between">
//             <h2 className="font-heading text-lg">Target bulan ini</h2>
//             <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
//               Rp 1.200.000 terkumpul
//             </span>
//           </div>
//           <div className="mt-4 space-y-4">
//             {goals.map((goal) => (
//               <div key={goal.label}>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-slate-200">{goal.label}</span>
//                   <span className="text-slate-400">{goal.progress}%</span>
//                 </div>
//                 <div className="mt-2 h-2 rounded-full bg-slate-800">
//                   <div
//                     className="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-300"
//                     style={{ width: `${goal.progress}%` }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button className="mt-5 w-full rounded-full border border-slate-700/80 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
//             Kelola target
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
