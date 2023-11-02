import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-blue">
      <form className="w-[500px] flex flex-col gap-4 p-4 bg-light-1 rounded-md">
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
