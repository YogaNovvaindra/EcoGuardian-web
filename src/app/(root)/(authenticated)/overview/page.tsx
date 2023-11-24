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
  const [selectTime, setSelectTime] = useState("from=now-24h&to=now-1m");
  const [selectEsp, setSelectEsp] = useState("");
  const pathname = usePathname();

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
                <SelectItem value="from=now-24h&to=now-1m">Today</SelectItem>
                <SelectItem value="&from=now-1h&to=now-1m">
                  1 hour ago
                </SelectItem>
                <SelectItem value="&from=now-3h&to=now-1m">
                  3 hours ago
                </SelectItem>
                <SelectItem value="&from=now-6h&to=now-1m">
                  6 hours ago
                </SelectItem>
                <SelectItem value="&from=now%2Fw&to=now%2Fw">1 week</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={setSelectEsp}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All ESP" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>ESP</SelectLabel>
                <SelectItem value="1hour">ESP Biru</SelectItem>
                <SelectItem value="2hours">ESP Coklat</SelectItem>
                <SelectItem value="3hours">ESP Hijau</SelectItem>
                <SelectItem value="1week">ESP Merah</SelectItem>
                <SelectItem value="1week">ESP Orange</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {informationMonitoringOverview.map((item, index) => (
            <iframe
              key={index}
              src={`${CHART_URL}/d-solo/f073b157-ee25-4bad-8ce5-d0de3543be4f/ecoguardian?orgId=1&refresh=1m${selectTime}${item}`}
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
