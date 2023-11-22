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
    <section className="h-full w-full flex flex-col gap-4 md:overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Dashboard</h1>
        <span>{pathname}</span>
      </div>
      <div className="w-full bg-light-1 flex rounded-md overflow-hidden h-40">
        <div>
          <Image
            src="/public/../assets/vector-people-mointoring.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="px-4 py-2">
          <h3>What is the air quality at Jember State Polytechnic now?</h3>
          <p>Deskripsi</p>
        </div>
      </div>
      <div className="w-full flex gap-6 flex-wrap">
        {isLoading ? (
          <></>
        ) : isError ? (
          <p>Error: Failed to fetch data</p>
        ) : (
          <>
            {" "}
            {informationMonitoringDashboard.map((item, index) => (
              <div
                key={index}
                className={`grow min-w-[150px] p-4 rounded-md ${
                  index === activeCard ? "bg-green-500" : "bg-white"
                }`}
                onClick={() => handleCardClick(index)}
              >
                <p>{item.title}</p>
                <div className="flex justify-between">
                  <div>
                    {item.data in dashboardData ? (
                      <p className="text-heading2-bold">
                        {dashboardData[item.data]} {item.unit}
                      </p>
                    ) : (
                      <p className="text-heading2-bold">-</p>
                    )}
                    <p>Now</p>
                  </div>
                  <div>
                    {item.forecast in dashboardData ? (
                      <p className="text-heading2-bold">
                        {dashboardData[item.forecast]} {item.unit}
                      </p>
                    ) : (
                      <p className="text-heading2-bold">-</p>
                    )}
                    <p>+1 hour</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="h-full bg-light-1">
        <iframe
          src={showChart.link}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default Page;
