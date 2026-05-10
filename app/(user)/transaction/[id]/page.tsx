type TransactionPageProps = {
  params: { id: string };
};

const detailRows = [
  { label: "Jenis", value: "Top Up" },
  { label: "Tanggal", value: "10 Mei 2026, 10:24" },
  { label: "Metode", value: "Bank transfer instan" },
  { label: "Referensi", value: "BR-009821" },
  { label: "Status", value: "Sukses" },
];

// insya allah  DETAIL TRANSAKSI
// ========================================

// 1. Dynamic transaction data
// - Ambil data transaksi berdasarkan params.id
// - Fetch dari database/API

// 2. Transaction status
// - Status berhasil
// - Pending
// - Gagal
// - Expired

// 3. Download receipt PDF
// - Generate bukti transaksi PDF
// - Export invoice

// 4. Share transaction
// - Share bukti transaksi
// - Copy transaction ID

// 5. Transaction timeline
// - Waktu dibuat
// - Diproses
// - Berhasil

// 6. User detail
// - Nama pengirim
// - Nama penerima
// - Nomor wallet

// 7. Payment detail
// - Metode pembayaran
// - Admin fee
// - Total transaksi




// export default function TransactionDetailPage({
//   params,
// }: TransactionPageProps) {
//   return (
//     <section className="space-y-6">
//       <header>
//         <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
//           Detail Transaksi
//         </p>
//         <h1 className="mt-2 font-heading text-3xl font-semibold">
//           Transaksi {params.id}
//         </h1>
//         <p className="mt-2 text-sm text-slate-400">
//           Tinjau detail transaksi dan simpan bukti untuk kebutuhan kamu.
//         </p>
//       </header>

//       <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
//         <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//           <h2 className="font-heading text-lg">Ringkasan transaksi</h2>
//           <p className="mt-3 text-3xl font-semibold text-emerald-200">
//             +Rp 300.000
//           </p>
//           <p className="mt-1 text-sm text-slate-400">
//             Saldo masuk ke dompet utama
//           </p>
//           <div className="mt-5 space-y-3">
//             {detailRows.map((row) => (
//               <div
//                 key={row.label}
//                 className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3"
//               >
//                 <span className="text-sm text-slate-400">{row.label}</span>
//                 <span className="text-sm font-semibold text-slate-100">
//                   {row.value}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//           <h2 className="font-heading text-lg">Bukti transaksi</h2>
//           <div className="mt-4 rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/60 p-6 text-center">
//             <p className="text-sm font-semibold text-slate-200">
//               Receipt digital
//             </p>
//             <p className="mt-2 text-xs text-slate-400">
//               Unduh bukti transaksi untuk arsip.
//             </p>
//             <button className="mt-4 rounded-full bg-emerald-400/90 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300">
//               Unduh bukti
//             </button>
//           </div>
//           <div className="mt-4 rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4">
//             <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
//               Catatan
//             </p>
//             <p className="mt-2 text-sm text-slate-300">
//               Transaksi ini sudah berhasil dan saldo sudah masuk ke dompet
//               utama.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
