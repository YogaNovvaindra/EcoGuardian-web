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

interface TopbarProps {
  // title?: string
}

const Topbar: FC<TopbarProps> = ({}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const realtimeClock = () => {
      setTime(new Date());
    };

    const intervalTime = setInterval(realtimeClock, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedDate = format(time, "EEEE, dd MMMM yyyy");

  return (
    <nav className="topbar">
      <p className="text-light-1">{`${formattedHours}:${formattedMinutes}:${formattedSeconds} ${formattedDate}`}</p>
      <Dialog>
        <DialogTrigger>
          <button className="relative">
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
          </button>
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
      </Dialog>
      <div className="w-8 h-8 bg-red-500 rounded-full overflow-clip">
        <Image
          alt=""
          src="/public/../assets/img/example-user.jpeg"
          width={24}
          height={24}
          className="object-cover w-full h-full"
        />
      </div>
    </nav>
  );
};

export default Topbar;
