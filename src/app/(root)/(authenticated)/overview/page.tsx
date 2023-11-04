"use client";

import Chart from "@/components/common/chart/Chart";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col gap-4 h-full overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Detail Overview</h1>
        <span>{pathname}</span>
      </div>
      <div className="h-full p-6 bg-light-1 rounded-md overflow-auto">
        <div className="grid grid-cols-1 h-full xl:grid-cols-2 gap-6 overflow-y-auto">
          <Chart />
          <Chart />
          <Chart />
          <Chart />
          <Chart />
          <Chart />
        </div>
      </div>
    </section>
  );
};

export default Page;
