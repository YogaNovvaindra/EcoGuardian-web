"use client";

import ChartOverview from "@/components/common/chart/Chart-Overview";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { informationMonitoringOverview } from "@/constants";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [selectValue, setSelectvalue] = useState("today");
  const pathname = usePathname();

  console.log(selectValue);

  return (
    <section className="flex flex-col gap-4 h-full overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Detail Overview</h1>
        <span>{pathname}</span>
      </div>
      <div className="h-full p-6 flex flex-col bg-light-1 rounded-md overflow-auto gap-2 box-border">
        <Select onValueChange={setSelectvalue}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selct a time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Time</SelectLabel>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="1hour">1 hour ago</SelectItem>
              <SelectItem value="2hours">2 hours ago</SelectItem>
              <SelectItem value="3hours">3 hours ago</SelectItem>
              <SelectItem value="1week">1 week</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {informationMonitoringOverview.map((item, index) => (
            <ChartOverview key={index} showData={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
