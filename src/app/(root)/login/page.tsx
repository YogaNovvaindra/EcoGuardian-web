"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import * as z from 'zod';




const Page = () => {
  const router = useRouter();
  // const form = useForm<z.infer<typeof loginValidation>>({
  //   resolver: zodResolver(loginValidation),
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //   },
  // });
  const [error, setError] = useState<string | null>(null);

  const formSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(1, "Password is required").min(8, "Password must have than 8 characters"),
  });
  
  type FormData = z.infer<typeof formSchema>;

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
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        // callbackUrl: "/dashboard",
      });

      console.log(result);


      if (result?.error) {
        setError(result.error);
      } else {
        // Redirect to home page
        // router.refresh();
        // router.push('/dashboard');
        console.log(result);

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


  return (
    <div className="h-screen flex items-center justify-center bg-blue">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] flex flex-col gap-4 p-4 bg-light-1 rounded-md">
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
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            className="bg-neutral-200 outline-none border-none focus:border-none"
            type="text"
            placeholder="email"
            // defaultValue={esp?.longitude ? esp?.longitude : ""}
            // {...register("longitude")}

            // register emil
            {...register("email")}
            />
          {/* {errors.longitude && <div>{errors.longitude.message}</div>} */}
        </div>
        {/* error */}
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            className="bg-neutral-200 outline-none border-none focus:border-none"
            type="password"
            placeholder="Password"
            // refister react hookform password
            {...register("password")}
            // defaultValue={esp?.longitude ? esp?.longitude : ""}
            // {...register("longitude")}
          />
          {/* {errors.longitude && <div>{errors.longitude.message}</div>} */}
        </div>
        {/* error */}
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-2">
          <p className="text-center">
            Don’t have an account? <Link href="/register">Sign Up</Link>
          </p>
        </div>
        <Button onClick={
          () => {
            console.log("clicked");
          }
        } 
          type="submit"
        
        variant="default">Sign In</Button>

      </form>
    </div>
  );
};

export default Page;
