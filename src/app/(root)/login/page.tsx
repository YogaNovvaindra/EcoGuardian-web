"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { loginValidation } from "@/lib/validation/user-validation";

const Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginValidation>>({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: z.infer<typeof loginValidation>) => {
    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (result?.error) {
        setError(result.error);
      } else {
        // Redirect to home page
        router.refresh();
        router.push("/admin");
      }
    } catch (error) {
      const errorMessage = error as string;
      if (errorMessage) {
        const { email, password } = JSON.parse(errorMessage);
        if (email) {
          setError(email);
        } else if (password) {
          setError(password);
        } else {
          setError("Something went wrong. Please try again later.");
        }
      }
    }
  };

  // const loginWithGoogle = () =>
  //   signIn("google", {
  //     callbackUrl: "http://localhost:3000/admin",
  //   });
  return (
    <div className="h-screen flex items-center justify-center bg-blue">
      <form
        onClick={form.handleSubmit(onSubmit)}
        className="w-[500px] flex flex-col gap-4 p-4 bg-light-1 rounded-md"
      >
        <div className="flex justify-between">
          <div>
            <h2 className="text-heading2-semibold">Sign In</h2>
            <p>Sign In to continue</p>
          </div>
          <Link href="/">
            <Button variant="ghost" className="">
              <IoMdClose />
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            className="bg-neutral-200 outline-none border-none focus:border-none"
            type="text"
            placeholder="Username"
            // defaultValue={esp?.longitude ? esp?.longitude : ""}
            // {...register("longitude")}
          />
          {/* {errors.longitude && <div>{errors.longitude.message}</div>} */}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            className="bg-neutral-200 outline-none border-none focus:border-none"
            type="text"
            placeholder="Username"
            // defaultValue={esp?.longitude ? esp?.longitude : ""}
            // {...register("longitude")}
          />
          {/* {errors.longitude && <div>{errors.longitude.message}</div>} */}
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="default">Sign In</Button>
          <p className="text-center">
            Don’t have an account? <Link href="/register">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
