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
import { usePathname, useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Image from "next/image";
import { UploadCloud } from "lucide-react";
import { Label } from "../../ui/label";

const formSchema = z.object({
  nama: z
    .string()
    .min(3, { message: "Kandang name must be at least 3 characters long" })
    .refine((value) => !!value.trim(), {
      message: "Kandang name is required and must not be empty",
      path: [],
    }),
  latitude: z.string(),
  longitude: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const CreateEspModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const queryClient = useQueryClient();
  // menampung state error

  const isModalOpen = isOpen && type === "createEsp";

  const { esp } = data;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    resetField,

    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { nama, latitude, longitude } = data;

    const response = {
      nama: nama,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    };
    console.log(response.latitude);
    console.log(typeof response.latitude);

    try {
      await axios.post("/api/esp", response);
      console.log("Data Berhasil Ditambahkan!!");
      router.refresh();
      reset();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-neutral-100 text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit Kandang
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 px-6"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="nama	">Nama Kandang</Label>
            <Input
              id="nama"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="text"
              placeholder="Nama Kandang"
              defaultValue={esp?.nama ? esp?.nama : ""}
              {...register("nama")}
            />
            {errors.nama && <div>{errors.nama.message}</div>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              id="latitude"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="number"
              placeholder="Nama Kandang"
              defaultValue={esp?.latitude ? esp?.latitude : ""}
              {...register("latitude")}
            />
            {errors.latitude && <div>{errors.latitude.message}</div>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              id="longitude"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="number"
              placeholder="Nama Kandang"
              defaultValue={esp?.longitude ? esp?.longitude : ""}
              {...register("longitude")}
            />
            {errors.longitude && <div>{errors.longitude.message}</div>}
          </div>

          <DialogFooter className="px-6 pb-8">
            <Button
              type="button"
              variant="default"
              className="bg-neutral-800 hover:bg-neutral-800/80 text-light-2"
              onClick={handleClose}
            >
              Cancel
            </Button>

            <Button type="submit" variant="themeMode">
              Tambah Kandang
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
