"use client";

import { useEffect, useRef, useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { updateProfile } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";

type ProfileFormProps = {
  name: string;
  email: string;
  phone: string;
};

type ActionState =
  | {
      success: true;
      data: { name: string; email: string; phone: string | null };
    }
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
          Menyimpan...
        </span>
      ) : (
        "Simpan perubahan"
      )}
    </Button>
  );
}

export default function ProfileForm({ name, email, phone }: ProfileFormProps) {
  const [state, formAction] = useActionState(updateProfile, initialState);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVariant, setToastVariant] = useState<"success" | "error">(
    "success",
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      setToastVariant("success");
      setToastMessage("Profil berhasil diperbarui.");
      formRef.current?.reset();
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
        <div className="grid gap-4">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Nama lengkap
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Nomor HP
            </label>
            <input
              type="tel"
              name="phone"
              defaultValue={phone}
              className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400"
            />
          </div>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
