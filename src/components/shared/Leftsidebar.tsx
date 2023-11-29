"use client";

import { FC, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { sidebarLinks } from "@/constants";
import Logout from "./Logout";
import { signOut, useSession } from "next-auth/react";
import { buttonVariants } from "../ui/button";
import { Linden_Hill } from "next/font/google";

interface LeftsidebarProps {
  // title?: string
}

const Leftsidebar: FC<LeftsidebarProps> = ({}) => {
  const { data: session } = useSession();
  if (session) console.log("data session: ", session);

  const router = useRouter();
  const pathname = usePathname();

  // const { userId } = useAuth();
  return (
    <section className="custom-scrollbar leftsidebar blue-gradient">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        <Link href="/dashboard" className="flex items-center gap-4">
          <Image
            src="/public/../assets/img/logoEco.png"
            alt="logo"
            width={56}
            height={56}
          />
          <p className="text-heading3-bold text-light-1 hidden lg:inline-block">
            Eco Guardian
          </p>
        </Link>
        {sidebarLinks.map((link) => {
          // const isActive =
          //   (pathname?.includes(link.route) && link.route.length > 1) ||
          //   pathname === link.route;
          const isActive = link.route.some((route) =>
            pathname?.includes(route)
          );

          // if (link.route === "/profile") link.route = `${link.route}/${userId}`;
          return (
            <Link
              // href={link.route}
              href={isActive ? link.route[0] : link.route[0]}
              key={link.label}
              className={`leftsidebar_link ${
                isActive && "bg-[#5593f0] dark:bg-red-500"
              }`}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
                className="min-w-[24px]"
              />

              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <button
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: `${window.location.origin}/sign-in`,
            })
          }
          className="flex cursor-pointer gap-4 p-4"
        >
          <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />

          <p className="text-light-2 max-lg:hidden">Logout</p>
        </button>
      </div>

      <div className="mt-10 px-6"></div>
    </section>
  );
};

export default Leftsidebar;
