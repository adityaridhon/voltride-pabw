"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { requestWithdrawal } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";

type ActionState =
  | { success: true; data: { balance: number } }
  | { success: false; error: string };

const initialState: ActionState = {
  success: false,
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="gradient"
      size="lg"
      className="w-full rounded-full"
      disabled={pending}
    >
      {pending ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Memproses...
        </span>
      ) : (
        "Tarik sekarang"
      )}
    </Button>
  );
}

export default function WithdrawForm() {
  const [state, formAction] = useFormState(requestWithdrawal, initialState);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVariant, setToastVariant] = useState<"success" | "error">(
    "success",
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      setToastVariant("success");
      setToastMessage("Penarikan berhasil diproses.");
      formRef.current?.reset();
      window.dispatchEvent(
        new CustomEvent("wallet:balance", {
          detail: { balance: state.data.balance },
        }),
      );
      return;
    }

    if (state.error) {
      setToastVariant("error");
      setToastMessage(state.error);
    }
  }, [state]);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 3000);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  return (
    <div className="space-y-4">
      {toastMessage && (
        <div
          className={`fixed right-6 top-6 z-50 rounded-xl border px-4 py-3 text-sm font-semibold shadow-sm ${
            toastVariant === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {toastMessage}
        </div>
      )}

      <form ref={formRef} action={formAction} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Bank tujuan
            </label>
            <input
              type="text"
              name="bank"
              placeholder="Contoh: BCA"
              className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Nomor rekening
            </label>
            <input
              type="text"
              name="accountNumber"
              placeholder="Masukkan nomor rekening"
              className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Nominal
            </label>
            <input
              type="number"
              name="amount"
              min={1000}
              step={1000}
              placeholder="Masukkan nominal"
              className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
              required
            />
          </div>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
