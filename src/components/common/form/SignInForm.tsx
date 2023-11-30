"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginValidation } from "@/lib/validation/user-validation";
import Image from "next/image";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    console.log("pw sign-in: ", values.password);
    try {
      setIsLoading(true);
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (result?.error) {
        setError(result.error);
        setIsLoading(false);
      } else {
        // Redirect to home page
        router.refresh();
        router.push("/dashboard");
      }
      setIsLoading(true);
    } catch (error) {

      const errorMessage = error as string;
      if (errorMessage) {
        setIsLoading(false);

        const { email, password } = JSON.parse(errorMessage);
        if (email) {
          setIsLoading(false);

          setError(email);
        } else if (password) {
          setIsLoading(false);

          setError(password);
        } else {
          setIsLoading(false);

          setError("Something went wrong. Please try again later.");
        }
      }
    }
  };
  return (
    <Card className="md:w-[450px]">
      <CardHeader className="space-y-1">
        <div className="flex w-full justify-center">
          <Image
            alt="logo"
            src={"/assets/img/logoEco.png"}
            height={150}
            width={150}
            className="w-52 md:w-72"
          />
        </div>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Sign in to continue</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="relative"></div>
            <div className="space-y-2">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="mail@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="text-2xl">{error}</div>
            {isLoading ? (
              <Button disabled className="w-full mt-5">
                Loading...
              </Button>
            ) : (
              <Button type="submit" className="w-full mt-5">
                Sign In
              </Button>
            )}
            {/* <Button className="w-full mt-5" type="submit">
              Sign In
            </Button> */}
          </form>
        </Form>
      </CardContent>
      {/* <CardFooter>
        <p className="text-center text-sm text-gray-600 ">
          If you don&apos;t have an account, please&nbsp;
          <Link className="text-blue text-base-medium hover:underline" href="/sign-up">
            Sign Up
          </Link>
        </p>
      </CardFooter> */}
    </Card>
  );
};

export default SignInForm;
