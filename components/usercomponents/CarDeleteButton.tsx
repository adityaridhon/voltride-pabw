"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteArmada } from "@/actions/armada.actions";
import { Trash2} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

export default function DeleteArmadaButton({
  armadaId,
}: {
  armadaId: string;
}) {
  const router = useRouter();

  async function handleDelete() {
    const res = await deleteArmada(armadaId);

    if (res && "error" in res) {
      toast.error(res.error as string);
      return;
    }

    toast.success("Armada berhasil dihapus");

    router.refresh();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="lg">
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete Car?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. Are you sure you want to delete this car?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
          >
            Yes, Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}