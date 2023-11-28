"use client";

import { SocketIndicator } from "@/components/common/Socket-indicator";
import Temperature from "@/components/common/chart/temperature";
import Chart from "@/components/common/chart/Chart-Dashboard";
import MonitoringLandingPage from "@/components/shared/landingpage/Monitoring-Landingpage";
import { informationMonitoringDashboard } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const Page = (props: Props) => {
  const pathname = usePathname();
  const [activeCard, setActiveCard] = useState(0);
  const [showChart, setShowChart] = useState(informationMonitoringDashboard[0]);

  const {
    data: dashboardData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const { data } = await axios.get("/api/dashboard");

      console.log("data dashboard: ", data);

      return data;
    },
    refetchInterval: 60000,
  });

  const handleCardClick = (index: any) => {
    setActiveCard(index);
    setShowChart(informationMonitoringDashboard[index]);
    console.log("Show Chart: ", showChart);
  };

  return (
    <section className="h-full w-full flex flex-col gap-2 md:gap-4 md:overflow-auto">
      {/* <div>
        <h1 className="text-heading1-semibold">Dashboard</h1>
        <span>{pathname}</span>
      </div> */}
      {isLoading ? (
        <Skeleton className="w-full h-60" />
      ) : isError ? (
        <p>Error: Failed to fetch data</p>
      ) : (
        <div className=" w-full bg-light-1 flex flex-col md:flex-row rounded-md md:overflow-hidden">
          <div className="hidden lg:block h-full w-32 bg-blue">
            <Image
              src="/public/../assets/vector-people-mointoring.png"
              alt=""
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 px-4 py-2">
            <h3 className="text-body-bold md:text-heading3-bold">
              What is the air quality at Jember State Polytechnic now?
            </h3>
            <ul className="lg:h-60">
              {dashboardData.desc.map((item: string, index: number) => (
                <li key={index} className="flex gap-2">
                  <span className="">&#8226;</span>
                  <span className="">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="w-full flex gap-2 md:gap-6 flex-wrap">
        {isLoading ? (
          <>
            {informationMonitoringDashboard.map((item, index) => (
              <Skeleton
                key={index}
                className="grow h-32 min-w-[150px] p-4 rounded-md"
              />
            ))}
          </>
        ) : isError ? (
          <p>Error: Failed to fetch data</p>
        ) : (
          <>
            {" "}
            {informationMonitoringDashboard.map((item, index) => (
              <div
                key={index}
                className={`grow h-32 min-w-[150px] p-4 rounded-md ${
                  index === activeCard ? "bg-green-500" : "bg-white"
                }`}
                onClick={() => handleCardClick(index)}
              >
                <p>{item.title}</p>
                <div className="flex justify-between">
                  <div>
                    {item.data in dashboardData ? (
                      <p className="text-body-bold md:text-heading2-bold">
                        {dashboardData[item.data]} {item.unit}
                      </p>
                    ) : (
                      <p className="text-heading2-bold">-</p>
                    )}
                    <p className="md:text-base-regular">Now</p>
                  </div>
                  <div className="flex flex-col items-end">
                    {item.forecast in dashboardData ? (
                      <p className="text-body-normal md:text-heading3-bold opacity-70">
                        {dashboardData[item.forecast]} {item.unit}
                      </p>
                    ) : (
                      <p className="text-heading3-bold">-</p>
                    )}
                    <p className="text-[12px] md:text-small-regular opacity-70">
                      +1 hour
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex gap-1 h-56 md:h-full bg-light-1">
        {showChart.link.map((item, index) => (
          <iframe
            key={index}
            src={item}
            width="100%"
            height="100%"
            frameBorder="0"
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
