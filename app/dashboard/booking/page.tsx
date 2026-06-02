"use client";

import { useMemo, useState, useTransition } from "react";
import { testBookingAvailability } from "@/actions/booking.actions";

type Banner = { tone: "success" | "error" | "info"; text: string } | null;

const formatDate = (date: Date) => date.toISOString().slice(0, 10);

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

export default function BookingTestPage() {
  const [userId, setUserId] = useState("");
  const [mobilId, setMobilId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [banner, setBanner] = useState<Banner>(null);
  const [isPending, startTransition] = useTransition();

  const today = useMemo(() => new Date(), []);

  const applyScenario = (type: "h-1" | "max" | "overlap") => {
    if (type === "h-1") {
      setStartDate(formatDate(today));
      setEndDate(formatDate(addDays(today, 1)));
      setBanner({
        tone: "info",
        text: "Scenario H-1: startDate hari ini (harus error).",
      });
      return;
    }

    if (type === "max") {
      const start = addDays(today, 4);
      setStartDate(formatDate(start));
      setEndDate(formatDate(addDays(start, 2)));
      setBanner({
        tone: "info",
        text: "Scenario max 3 hari: startDate H+4 (harus error).",
      });
      return;
    }

    const start = addDays(today, 1);
    setStartDate(formatDate(start));
    setEndDate(formatDate(addDays(start, 2)));
    setBanner({
      tone: "info",
      text: "Scenario overlap: pakai tanggal ini untuk test overlap.",
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBanner(null);

    startTransition(async () => {
      const result = await testBookingAvailability({
        userId,
        mobilId,
        startDate,
        endDate,
      });

      if (!result.success) {
        setBanner({ tone: "error", text: result.error });
        return;
      }

      setBanner({ tone: "success", text: "Validasi sukses. Tidak ada konflik." });
    });
  };

  return (
    <div className="booking-test">
      <div className="hero">
        <div>
          <p className="eyebrow">Booking Validation Lab</p>
          <h1>Test aturan booking dengan cepat</h1>
          <p className="subtitle">
            Fokus pada H-1, maksimal 3 hari, dan overlap. Jalankan dari sini tanpa
            ubah flow utama.
          </p>
        </div>
        <div className="scenario-grid">
          <button
            type="button"
            className="chip"
            onClick={() => applyScenario("h-1")}
          >
            Test H-1
          </button>
          <button
            type="button"
            className="chip"
            onClick={() => applyScenario("max")}
          >
            Test Max 3 Hari
          </button>
          <button
            type="button"
            className="chip"
            onClick={() => applyScenario("overlap")}
          >
            Test Overlap
          </button>
        </div>
      </div>

      <div className="panel">
        <form onSubmit={onSubmit} className="form-grid">
          <label>
            User ID
            <input
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
              placeholder="cuid user"
              required
            />
          </label>
          <label>
            Mobil ID
            <input
              value={mobilId}
              onChange={(event) => setMobilId(event.target.value)}
              placeholder="cuid mobil"
              required
            />
          </label>
          <label>
            Start Date
            <input
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              required
            />
          </label>
          <label>
            End Date
            <input
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              required
            />
          </label>
          <button type="submit" className="primary" disabled={isPending}>
            {isPending ? "Mengecek..." : "Jalankan Validasi"}
          </button>
        </form>

        {banner && (
          <div className={`banner ${banner.tone}`} role="status">
            {banner.text}
          </div>
        )}

        <div className="note">
          <p>
            Untuk test overlap, pastikan sudah ada booking aktif pada mobil yang
            sama dengan tanggal yang beririsan.
          </p>
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          font-family: "Space Grotesk", "Segoe UI", sans-serif;
        }

        .booking-test {
          min-height: 100vh;
          padding: 56px 8vw 80px;
          background: radial-gradient(circle at top, #f7f1e8, #e6edf3 55%, #d9e5f2);
          color: #13213c;
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          align-items: center;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.32em;
          font-size: 12px;
          color: #6b7a90;
        }

        h1 {
          font-size: clamp(32px, 4vw, 54px);
          margin: 12px 0;
        }

        .subtitle {
          max-width: 520px;
          font-size: 16px;
          color: #3c4b64;
        }

        .scenario-grid {
          display: grid;
          gap: 12px;
        }

        .chip {
          border: 1px solid #13213c;
          background: transparent;
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(19, 33, 60, 0.15);
        }

        .panel {
          margin-top: 36px;
          padding: 28px;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 18px 40px rgba(19, 33, 60, 0.18);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          align-items: end;
        }

        label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-weight: 600;
          color: #2a3754;
        }

        input {
          border: 1px solid #b8c4d9;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
        }

        .primary {
          background: #13213c;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          padding: 14px 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .primary:not(:disabled):hover {
          transform: translateY(-2px);
        }

        .banner {
          margin-top: 20px;
          padding: 14px 16px;
          border-radius: 14px;
          font-weight: 600;
        }

        .banner.success {
          background: #e5f7ec;
          color: #1d6b3a;
          border: 1px solid #1d6b3a;
        }

        .banner.error {
          background: #fee8e3;
          color: #8a2c1c;
          border: 1px solid #8a2c1c;
        }

        .banner.info {
          background: #eef4ff;
          color: #2a457a;
          border: 1px solid #2a457a;
        }

        .note {
          margin-top: 20px;
          color: #4a5a75;
        }

        @media (max-width: 720px) {
          .booking-test {
            padding: 40px 6vw 64px;
          }
        }
      `}</style>
    </div>
  );
}
