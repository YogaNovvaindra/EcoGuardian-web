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
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  nama: z
    .string()
    .min(3, { message: "Kandang name must be at least 3 characters long" })
    .refine((value) => !!value.trim(), {
      message: "Kandang name is required and must not be empty",
      path: [],
    }),
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
  // latitude: z.string(),
  // longitude: z.string(),
  image: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const EditEspModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  // menampung state error

  const isModalOpen = isOpen && type === "editEsp";

  const { esp } = data;
  console.log("id esp: ", esp?.id);

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

  // ketika open modal, set value form reset field

  useEffect(() => {
    if (esp) {
      reset();
      setValue("nama", esp.nama ? esp.nama : "");
      setValue("latitude", esp.latitude ? String(esp.latitude) : "");
      setValue("longitude", esp.longitude ? String(esp.longitude) : "");
      setValue("image", esp.image ? String(esp.image) : "");
    }
  }, [esp, resetField, setValue, reset]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { nama, latitude, longitude, image } = data;
    setIsLoading(true);

    const response = {
      nama: nama,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      image: image,
    };
    try {
      await axios.put(`/api/esp/${esp?.id}`, response);
      console.log("data", esp?.id, "Berhasil Edit");
      reset();
      onClose();
      setIsLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }

    // consol log

    queryClient.invalidateQueries(["esp"]);
    onClose();
  };

  const handleClose = () => {
    // reset form
    // resetField("nama_kandang");
    reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-neutral-100 text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit ESP
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 px-6"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="nama">Esp Name</Label>
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
              defaultValue={esp?.longitude ? esp?.longitude : ""}
              {...register("longitude")}
            />
            {errors.longitude && <div>{errors.longitude.message}</div>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="image">Link Image</Label>
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
              <Button type="submit">Edit ESP</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
