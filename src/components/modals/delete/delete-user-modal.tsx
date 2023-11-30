"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

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
import { useEffect, useState } from "react";
import Image from "next/image";
import { UploadCloud } from "lucide-react";
import { Label } from "../../ui/label";

export const DeleteUserModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  // menampung state error

  const isModalOpen = isOpen && type === "deleteUser";

  const { User } = data;

  const onSubmit = async () => {
    setIsLoading(true);

    console.log(User?.id);
    console.log(data);

    const response = await axios.delete(`/api/user/${User?.id}`);

    setIsLoading(false);

    // consol log
    console.log(response.data);

    queryClient.invalidateQueries(["User"]);
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
            Delete User
          </DialogTitle>
        </DialogHeader>
        <p className="text-center">
          Apakah Anda yakin menghapus {User?.username}
        </p>
        <DialogFooter className="px-6 pb-8">
          <Button type="button" variant="ghost" onClick={handleClose}>
            Cancel
          </Button>

          {isLoading ? (
            <Button variant="destructive" disabled>
              Loading...
            </Button>
          ) : (
            <Button type="button" onClick={onSubmit} variant="destructive">
              Delete User
            </Button>
          )}

          {/* <Button type="button" onClick={onSubmit} variant="destructive">
            Delete User
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
