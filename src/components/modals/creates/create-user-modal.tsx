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
import { User } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Kandang name must be at least 3 characters long" })
    .refine((value) => !!value.trim(), {
      message: "Kandang name is required and must not be empty",
      path: [],
    }),
  username: z
    .string()
    .min(3, { message: "Kandang name must be at least 3 characters long" })
    .refine((value) => !!value.trim(), {
      message: "Kandang name is required and must not be empty",
      path: [],
    }),
  email: z.string(),
  password: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const CreateUserModal = () => {
  const [passwordAccount, setPasswordAccount] = useState("");
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const queryClient = useQueryClient();
  const bcrypt = require("bcryptjs");

  // menampung state error

  const isModalOpen = isOpen && type === "createUser";

  const { User } = data;

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
    const { name, username, email, password } = data;

    const hashPassword = await bcrypt.hashSync(password, 10);

    setPasswordAccount(hashPassword);
    console.log("password bcrypt: ", passwordAccount);

    const response = {
      nama: name,
      username: username,
      email: email,
      password: passwordAccount,
    };
    console.log("Proses...");

    try {
      await axios.post("/api/user", response);
      console.log("Data Berhasil Ditambahkan!!");
      router.refresh();
      reset();
      onClose();

      queryClient.invalidateQueries(["User"]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    console.log("tutup");
    reset();
    onClose();
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-neutral-100 text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit User
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 px-6"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="text"
              placeholder="Username"
              defaultValue={User?.username ? User?.username : ""}
              {...register("username")}
            />
            {errors.username && <div>{errors.username.message}</div>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nama</Label>
            <Input
              id="name"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="text"
              placeholder="Nama"
              defaultValue={User?.name ? User?.name : ""}
              {...register("name")}
            />
            {errors.name && <div>{errors.name.message}</div>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="email"
              placeholder="Email"
              defaultValue={User?.email ? User?.email : ""}
              {...register("email")}
            />
            {errors.email && <div>{errors.email.message}</div>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="password"
              placeholder="Username"
              defaultValue={""}
              {...register("password")}
            />
            {errors.password && <div>{errors.password.message}</div>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="role">Role</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={User?.role ? User?.role : "Select Role"}
                  // {...register("role")}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Role</SelectLabel>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
              Tambah User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
