"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import Link from "next/link";


interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginDialog({
  open,
  onOpenChange,
}: LoginDialogProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Email atau password salah.");
      return;
    }

    const session = await getSession();

    onOpenChange(false);

    if (session?.user?.role === "ADMIN") {
      router.push("/admin/dashboard");
    } else if (session?.user?.role === "MITRA") {
      router.push("/mitra/dashboard");
    } else {
      router.push("/profle");
    }

    router.refresh();
  }

  async function handleGoogleLogin() {
    setGoogleLoading(true);
    setError("");

    await signIn("google", {
      callbackUrl: "/profile",
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-zinc-800 bg-white text-black">
        <DialogHeader>
          <DialogTitle className="font-bold text-center text-2xl text-zinc-900">
            Volt<span className="text-secondary font-extrabold">Ride</span>
          </DialogTitle>

          <p className="text-center text-sm text-zinc-400">
            Login to your Account
          </p>
        </DialogHeader>

        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading || loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-medium text-white transition hover:bg-primary/80 disabled:opacity-50"
        >
          <FaGoogle />
          {googleLoading
            ? "Process..."
            : "Login with Google"}
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-700" />
          <span className="text-xs text-zinc-500">
            or
          </span>
          <div className="h-px flex-1 bg-zinc-700" />
        </div>

        <div className="flex gap-2 w-full justify-center">
            <Link href="/login/admin">
              <Button variant="outline">Admin Login</Button>
            </Link>
            <Link href="/login/mitra">
              <Button variant="outline">Partner Login</Button>
            </Link>
        </div>

      </DialogContent>
    </Dialog>
  );
}