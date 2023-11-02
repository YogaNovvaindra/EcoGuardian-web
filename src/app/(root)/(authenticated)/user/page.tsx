"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const pathname = usePathname();
  return (
    <section className="h-full w-full flex flex-col gap-4 md:overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">User</h1>
        <span>{pathname}</span>
      </div>
      <div className="w-full h-full bg-light-1 flex flex-col gap-4 rounded-md h-40 p-6 overflow-auto"></div>
    </section>
  );
};

export default Page;
