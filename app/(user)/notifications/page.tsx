const notifications = [
  {
    title: "Top up berhasil",
    message: "Saldo kamu bertambah Rp 300.000 melalui Bank Transfer Instan.",
    time: "2 menit lalu",
  },
  {
    title: "Tarik dana diproses",
    message: "Penarikan Rp 150.000 ke BCA sedang diproses.",
    time: "1 jam lalu",
  },
  {
    title: "Promo perjalanan",
    message: "Dapatkan diskon 15% untuk perjalanan akhir pekan.",
    time: "Kemarin",
  },
];

// export default function NotificationsPage() {
//   return (
//     <section className="space-y-6">
//       <header>
//         <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
//           Notifikasi
//         </p>
//         <h1 className="mt-2 font-heading text-3xl font-semibold">
//           Pusat notifikasi
//         </h1>
//         <p className="mt-2 text-sm text-slate-400">
//           Semua update transaksi dan promo terbaru ada di sini.
//         </p>
//       </header>

//       <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//         <div className="flex items-center justify-between">
//           <h2 className="font-heading text-lg">Terbaru</h2>
//           <button className="text-xs text-emerald-300/80 transition hover:text-emerald-200">
//             Tandai semua dibaca
//           </button>
//         </div>
//         <div className="mt-4 space-y-3">
//           {notifications.map((item) => (
//             <div
//               key={item.title}
//               className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4"
//             >
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-semibold text-slate-100">
//                   {item.title}
//                 </p>
//                 <span className="text-xs text-slate-400">{item.time}</span>
//               </div>
//               <p className="mt-2 text-xs text-slate-400">{item.message}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
