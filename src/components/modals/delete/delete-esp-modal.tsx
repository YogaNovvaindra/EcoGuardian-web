"use client";

import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const DeleteEspModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const queryClient = useQueryClient();
  // menampung state error

  const isModalOpen = isOpen && type === "deleteEsp";

  const { esp } = data;

  const onSubmit = async () => {
    console.log("esp id: ", esp?.id);
    console.log(data);

    const response = await axios.delete(`/api/esp/${esp?.id}`);

    // consol log
    console.log(response.data);

    queryClient.invalidateQueries(["esp"]);
    onClose();
  };

  const handleClose = () => {
    // reset form
    // resetField("nama_kandang");
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-neutral text-black p-0 overflow-hidden px-4">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Esp
          </DialogTitle>
        </DialogHeader>
        <p className="text-center">Apakah Anda yakin menghapus {esp?.nama}</p>
        <DialogFooter className="px-6 pb-8">
          <Button type="button" onClick={handleClose} variant="ghost">
            Cancel
          </Button>

          <Button type="button" onClick={onSubmit} variant="destructive">
            Delete Esp
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
