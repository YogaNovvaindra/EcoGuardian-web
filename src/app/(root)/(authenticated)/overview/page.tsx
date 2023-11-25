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
import { CHART_URL } from "@/utils/url";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [selectTime, setSelectTime] = useState("&from=now-24h&to=now");
  const [selectEsp, setSelectEsp] = useState("ESP Biru");
  const pathname = usePathname();

  const handlerSelectedESP = (selectedesp: String) => {
    return informationMonitoringOverview.find(
      (esp) => esp.name_esp === selectedesp
    );
  };

  const selectedEsp = handlerSelectedESP(selectEsp);

  console.log(
    selectedEsp?.link_panel.map((item, index) => {
      console.log("link ", index, item);
    })
  );

  return (
    <section className="flex flex-col gap-4 h-full overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Detail Overview</h1>
        <span>{pathname}</span>
      </div>
      <div className="h-full p-6 flex flex-col bg-light-1 rounded-md overflow-auto gap-2 box-border">
        <div className="flex gap-2">
          <Select onValueChange={setSelectTime}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="&from=now-24h&to=now-1m">Today</SelectItem>
                <SelectItem value="&from=now-1h&to=now">1 hour ago</SelectItem>
                <SelectItem value="&from=now-3h&to=now">3 hours ago</SelectItem>
                <SelectItem value="&from=now-6h&to=now">6 hours ago</SelectItem>
                <SelectItem value="&from=now-7d&to=now">1 week</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={setSelectEsp}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="ESP Biru" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>ESP</SelectLabel>
                <SelectItem value="ESP Biru">ESP Biru</SelectItem>
                <SelectItem value="ESP Coklat">ESP Coklat</SelectItem>
                <SelectItem value="ESP Hijau">ESP Hijau</SelectItem>
                <SelectItem value="ESP Merah">ESP Merah</SelectItem>
                <SelectItem value="ESP Orange">ESP Orange</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {selectedEsp?.link_panel.map((item, index) => (
            <iframe
              key={index}
              src={`${item}${selectTime}`}
              width="100%"
              height="300"
              frameBorder="0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
