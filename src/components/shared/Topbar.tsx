"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../common/ThemeSetting";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";

interface TopbarProps {
  // title?: string
}

const Topbar: FC<TopbarProps> = ({}) => {
  const { data: session } = useSession();
  console.log("Data session: ", session?.user);

  const [currentDate, setCurrentDate] = useState(new Date());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentDate(new Date());
  //   }, 1000); // Update setiap detik

  //   return () => clearInterval(intervalId);
  // }, []);

  // // Date Now
  // const options: any = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric",
  // };

  // // Helper function to format the day as "Day" (e.g., "Monday")
  // const getFormattedDay = (date: any) => {
  //   const dayNames = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];

  //   return dayNames[date.getDay()];
  // };

  // // Helper function to format the time as "HH:MM:SS"
  // const getFormattedTime = (date: any) => {
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   const seconds = String(date.getSeconds()).padStart(2, "0");
  //   return `${hours}:${minutes}:${seconds}`;
  // };

  // // Helper function to format the date as "YYYY-MM-DD"
  // const getFormattedDate = (date: any) => {
  //   console.log("Date: ", date);
  //   const year = date.getFullYear();
  //   const monthNames = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   const month = monthNames[date.getMonth()];
  //   const day = String(date.getDate()).padStart(2, "0");
  //   return `${day} ${month} ${year}`;
  // };

  // const formattedDateTime = `${getFormattedTime(currentDate)} ${getFormattedDay(
  //   currentDate
  // )}, ${getFormattedDate(currentDate)} `;

  return (
    <nav className="topbar">
      <p className="text-light-1"></p>
      {/* <Dialog>
        <DialogTrigger>
          <div className="relative">
            <div className="w-6 h-6 bg-red-500 absolute top-1 right-1 flex justify-center items-center rounded-full">
              <p className="text-light-1 text-small-regular">10</p>
            </div>
            <div className="p-2">
              <Image
                alt=""
                src="/public/../assets/bell.svg"
                width={32}
                height={32}
              ></Image>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
      {session ? (
        <Link href={"/profile"} className="">
          <p className="">{session?.user.username}</p>
          {/* <Image
          alt=""
          src="/public/../assets/img/example-user.jpeg"
          width={24}
          height={24}
          className="object-cover w-full h-full"
        /> */}
        </Link>
      ) : (
        <Link href={"/sign-in"} className="">
          <Button
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: `/sign-in`,
              })
            }
            className="flex cursor-pointer gap-4 p-4"
          >
            <p className="text-light-2 max-lg:hidden">Sign In</p>
          </Button>
          {/* <Image
          alt=""
          src="/public/../assets/img/example-user.jpeg"
          width={24}
          height={24}
          className="object-cover w-full h-full"
        /> */}
        </Link>
      )}

      {/* {session ? (
        <Button variant="outline" onClick={() => signOut()}>
          Sign Out
        </Button>
      ) : (
        <Link href="/login">
          <Button variant="secondary">Sign In</Button>
        </Link>
      )} */}
    </nav>
  );
};

export default Topbar;
