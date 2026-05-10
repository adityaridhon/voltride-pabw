const historyRows = [
  {
    id: "TRX-9021",
    type: "Top Up",
    date: "10 Mei 2026",
    amount: "+Rp 300.000",
    status: "Sukses",
  },
  {
    id: "TRX-8920",
    type: "Transfer",
    date: "09 Mei 2026",
    amount: "-Rp 75.000",
    status: "Sukses",
  },
  {
    id: "TRX-8814",
    type: "Tarik Dana",
    date: "09 Mei 2026",
    amount: "-Rp 150.000",
    status: "Diproses",
  },
  {
    id: "TRX-8790",
    type: "Cashback",
    date: "08 Mei 2026",
    amount: "+Rp 25.000",
    status: "Sukses",
  },
];

// export default function HistoryPage() {
//   return (
//     <section className="space-y-6">
//       <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//         <div>
//           <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
//             Riwayat
//           </p>
//           <h1 className="mt-2 font-heading text-3xl font-semibold">
//             Riwayat transaksi
//           </h1>
//           <p className="mt-2 text-sm text-slate-400">
//             Filter transaksi berdasarkan jenis, status, dan rentang tanggal.
//           </p>
//         </div>
//         <div className="flex flex-wrap gap-3">
//           <button className="rounded-full border border-slate-700/80 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
//             Ekspor data
//           </button>
//           <button className="rounded-full bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
//             Filter lanjutan
//           </button>
//         </div>
//       </header>

//       <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//         <div className="flex flex-wrap gap-3">
//           {["Semua", "Top Up", "Transfer", "Tarik Dana", "Cashback"].map(
//             (item) => (
//               <button
//                 key={item}
//                 className="rounded-full border border-slate-700/80 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500"
//               >
//                 {item}
//               </button>
//             ),
//           )}
//         </div>
//       </div>

//       <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/40">
//         <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr_0.8fr] gap-4 border-b border-slate-800/80 px-6 py-4 text-xs uppercase tracking-[0.2em] text-slate-500">
//           <span>ID Transaksi</span>
//           <span>Jenis</span>
//           <span>Tanggal</span>
//           <span>Nominal</span>
//           <span>Status</span>
//         </div>
//         <div className="divide-y divide-slate-800/80">
//           {historyRows.map((row) => (
//             <div
//               key={row.id}
//               className="grid grid-cols-[1.1fr_1fr_1fr_1fr_0.8fr] gap-4 px-6 py-4 text-sm"
//             >
//               <span className="text-slate-200">{row.id}</span>
//               <span className="text-slate-200">{row.type}</span>
//               <span className="text-slate-400">{row.date}</span>
//               <span className="font-semibold text-emerald-200">
//                 {row.amount}
//               </span>
//               <span className="text-xs text-slate-300">{row.status}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
