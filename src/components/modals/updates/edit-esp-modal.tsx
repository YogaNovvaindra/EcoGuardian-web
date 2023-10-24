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

const formSchema = z.object({
    nama: z.string()
        .min(3, { message: "Kandang name must be at least 3 characters long" })
        .refine(value => !!value.trim(), {
            message: "Kandang name is required and must not be empty",
            path: [],
        }),
    // gambar_kandang dengan typedata file
    latitude: z.number(),
    longitude: z.number(),
});

type FormData = z.infer<typeof formSchema>;

export const EditEspModal = () => {
    const { isOpen, onClose, type, data } = useModal();
    const router = useRouter();
    const queryClient = useQueryClient();
    // menampung state error

    const isModalOpen = isOpen && type === "editEsp";



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

    // ketika open modal, set value form reset field

    useEffect(() => {
        if (esp) {
            reset()
            setValue("nama", esp.nama || "");
            setValue("latitude", esp.latitude || 0);
            setValue("longitude", esp.longitude || 0);
        }

    }, [esp, resetField, setValue, reset]);

    const onSubmit: SubmitHandler<FormData> = async (data) => {

        console.log(esp?.id);
        console.log(data);

        const formData = new FormData();
        formData.append("nama", data.nama);
        formData.append("latitude", data.latitude.toString());
        formData.append("longitude", data.longitude.toString());

        const response = await axios.put(`/api/esp/${esp?.id}`
            , formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        // consol log
        console.log(response.data);

        queryClient.invalidateQueries(["esp"]);
        onClose();

    };



    const handleClose = () => {
        // reset form
        // resetField("nama_kandang");
        reset();
        onClose();
    }



    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose} >
            <DialogContent className="bg-neutral-100 text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Edit Esp
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 px-6">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="nama">
                            Nama esp
                        </Label>
                        <Input
                            id="nama"
                            className="bg-neutral-200 outline-none border-none focus:border-none"
                            type="text"
                            placeholder="Nama Esp"
                            defaultValue={esp?.nama ? esp?.nama : ""}
                            {...register("nama")}
                        />
                        {errors.nama && (
                            <div>{errors.nama.message}</div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="latitude">
                            Latitude
                        </Label>
                        <Input
                            id="latitude"
                            className="bg-neutral-200 outline-none border-none focus:border-none"
                            type="number"
                            placeholder="Latitude"
                            defaultValue={esp?.latitude ? esp?.latitude : ""}
                            {...register("latitude")}
                        />
                        {errors.latitude && (
                            <div>{errors.latitude.message}</div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="longitude">
                            Longitude
                        </Label>
                        <Input
                            id="longitude"
                            className="bg-neutral-200 outline-none border-none focus:border-none"
                            type="number"
                            placeholder="Longitude"
                            defaultValue={esp?.longitude ? esp?.longitude : ""}
                            {...register("longitude")}
                        />
                        {errors.longitude && (
                            <div>{errors.longitude.message}</div>
                        )}
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

                        <Button
                            type="submit"
                            variant="themeMode"
                        >
                            Edit Esp
                        </Button>

                    </DialogFooter>

                </form>

            </DialogContent>
        </Dialog >
    );
}
