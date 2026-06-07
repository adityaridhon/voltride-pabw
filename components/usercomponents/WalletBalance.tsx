"use client";

import { useEffect, useState } from "react";

type WalletBalanceProps = {
  initialBalance: number;
  className?: string;
};

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("Rp", "Rp ");

export default function WalletBalance({
  initialBalance,
  className,
}: WalletBalanceProps) {
  const [balance, setBalance] = useState(initialBalance);

  useEffect(() => {
    let isActive = true;

    const fetchBalance = async () => {
      try {
        const response = await fetch("/api/wallet/balance", {
          cache: "no-store",
        });
        if (!response.ok) return;
        const data = (await response.json()) as { balance?: number };
        if (isActive && typeof data.balance === "number") {
          setBalance(data.balance);
        }
      } catch {
        // Ignore fetch errors to avoid blocking UI.
      }
    };

    const handleBalanceEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ balance?: number }>).detail;
      if (detail && typeof detail.balance === "number") {
        setBalance(detail.balance);
      } else {
        void fetchBalance();
      }
    };

    void fetchBalance();
    window.addEventListener("wallet:balance", handleBalanceEvent);

    return () => {
      isActive = false;
      window.removeEventListener("wallet:balance", handleBalanceEvent);
    };
  }, []);

  return <span className={className}>{formatRupiah(balance)}</span>;
}
