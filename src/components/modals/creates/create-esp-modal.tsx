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
    .min(3, { message: "ESP name must be at least 3 characters long" })
    .refine((value) => !!value.trim(), {
      message: "ESP name is required and must not be empty",
      path: [],
    }),
  // latitude: z.number(),
  // longitude: z.number(),
  latitude: z.string().refine(
    (value) => {
      // Validasi menggunakan ekspresi reguler untuk angka dengan atau tanpa tanda minus
      return /^-?\d*\.?\d*$/.test(value);
    },
    { message: "Invalid longitude value" }
  ),
  longitude: z.string().refine(
    (value) => {
      // Validasi menggunakan ekspresi reguler untuk angka dengan atau tanpa tanda minus
      return /^-?\d*\.?\d*$/.test(value);
    },
    { message: "Invalid longitude value" }
  ),
  image: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const CreateEspModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
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
    const { nama, latitude, longitude, image } = data;

    const response = {
      nama: nama,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      image: image,
    };
    setIsLoading(true);
    try {
      await axios.post("/api/esp", response);
      console.log("Data Berhasil Ditambahkan!!");
      reset();
      onClose();
      setIsLoading(false);

      queryClient.invalidateQueries(["esp"]);
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
            Create ESP
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 px-6"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="nama	">ESP Name</Label>
            <Input
              id="nama"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="text"
              placeholder="ESP Name"
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
              type="text"
              placeholder="Latitude"
              min={-10}
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
              type="text"
              placeholder="Longitude"
              min={-10}
              defaultValue={esp?.longitude ? esp?.longitude : ""}
              {...register("longitude")}
            />
            {errors.longitude && <div>{errors.longitude.message}</div>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="longitudimagee">Link Image</Label>
            <Input
              id="image"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="text"
              placeholder="Image ESP"
              defaultValue={esp?.image ? esp?.image : ""}
              {...register("image")}
            />
            {errors.image && <div>{errors.image.message}</div>}
          </div>

          <DialogFooter className="px-6 pb-8">
            <Button type="button" variant="ghost" onClick={handleClose}>
              Cancel
            </Button>
            {isLoading ? (
              <Button disabled>Loading...</Button>
            ) : (
              <Button type="submit">Create Esp</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
