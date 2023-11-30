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
import { useState } from "react";
import ImageUser from "@/app/(root)/(authenticated)/user/imageuser/page";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "name must be at least 3 characters long" })
    .refine((value) => !!value.trim(), {
      message: "name is required and must not be empty",
      path: [],
    }),
  username: z
    .string()
    .min(3, { message: "name must be at least 3 characters long" })
    .refine((value) => !!value.trim(), {
      message: "name is required and must not be empty",
      path: [],
    }),
  email: z.string(),
  password: z
    .string()
    .min(8, { message: "minimal 8 Characters" })
    .refine((value) => !!value.trim(), {
      message: "name is required and must not be empty",
      path: [],
    }),
  confirmPassword: z.string(),
  // image: z.any(),
});

type FormData = z.infer<typeof formSchema>;

export const CreateUserModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

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
    const { name, username, email, password, confirmPassword } = data;

    // console.log("file gambar: ", image[0]);
    setIsLoading(true);

    if (password == confirmPassword) {
      console.log("Password Sama!!!");
    } else {
      setIsLoading(false);
      return console.log("Salah Blok!");
    }

    const response = {
      name: name,
      username: username,
      email: email,
      password: password,
    };

    console.log("nama user: ", name);

    try {
      await axios.post("/api/user", response);

      console.log("Data Berhasil Ditambahkan!!", response);
      reset();
      onClose();
      setIsLoading(false);

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
            Add User
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
            <Label htmlFor="name">Fullname</Label>
            <Input
              id="name"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="text"
              placeholder="fullname"
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
          {/* <ImageUser /> */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="password"
              placeholder="Password"
              defaultValue={""}
              {...register("password")}
            />
            {errors.password && <div>{errors.password.message}</div>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="confirmpassword">Password Confirmation</Label>
            <Input
              id="confirmpassword"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="password"
              placeholder="Masukkan Ulang Password"
              defaultValue={""}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <div>{errors.confirmPassword.message}</div>
            )}
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
            <Button type="button" variant="ghost" onClick={handleClose}>
              Cancel
            </Button>

            {isLoading ? (
              <Button disabled>Loading...</Button>
            ) : (
              <Button type="submit">Add User</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
