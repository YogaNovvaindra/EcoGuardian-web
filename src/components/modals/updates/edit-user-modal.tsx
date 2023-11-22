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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userRole } from "@prisma/client";

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
  role: z.enum(["user", "admin"]),
});

type FormData = z.infer<typeof formSchema>;

export const EditUserModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();

  const isModalOpen = isOpen && type === "editUser";

  const { User } = data;
  console.log("Id Select User: ", User?.id);
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
    if (User) {
      reset();
      setValue("name", User.name ? User.name : "");
      setValue("username", User.username ? User.username : "");
      setValue("email", User.email ? User.email : "");
      // setValue("password", User.password ? User.password : "");
      setValue("role", User.role ? userRole[User.role] : "user");
      // setValue("image", User.image ? User.image : null);
    }
  }, [User, resetField, setValue, reset]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { username, name, email, password, role } = data;
    console.log("password lama: ", User?.password);
    console.log("password baru: ", password);

    const response = {
      username: username,
      name: name,
      email: email,
      password: User?.password,
      role: role,
      // image: image,
    };

    try {
      await axios.put(`/api/user/${User?.id}`, response);
      router.refresh();
      console.log("data", User?.id, "Berhasil Edit");
      reset();
      onClose();

      queryClient.invalidateQueries(["User"]);
    } catch (error) {
      console.log("Error: ", error);
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
            <Label htmlFor="name">name</Label>
            <Input
              id="name"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="text"
              placeholder="name"
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
              id="email"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="password"
              placeholder="Password"
              defaultValue={""}
              {...register("password")}
            />
            {errors.email && <div>{errors.email.message}</div>}
          </div>
          {/* <div className="flex flex-col gap-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="email"
              className="bg-neutral-200 outline-none border-none focus:border-none"
              type="string"
              placeholder="Image"
              defaultValue={User?.image ? User?.image : ""}
              {...register("image")}
            />
            {errors.email && <div>{errors.email.message}</div>}
          </div> */}
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
              Edit User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
