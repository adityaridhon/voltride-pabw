"use client";

import { useState } from "react";
import { logoutUser } from "@/actions/auth.actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      await logoutUser();

      router.refresh();
      router.replace("/");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={isLoading}
      variant="outline"
    >
      {isLoading ? "Logging out..." : "Logout"}
    </Button>
  );
}
