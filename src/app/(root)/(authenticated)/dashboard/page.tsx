"use client";
import { SocketIndicator } from "@/components/common/Socket-indicator";
import Temperature from "@/components/common/chart/temperature";
import Chart from "@/components/common/chart/Chart";
import MonitoringLandingPage from "@/components/shared/landingpage/Monitoring-Landingpage";
import { informationMonitoring } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect } from "react";
// import addNotification, { Notifications } from 'react-push-notification';

type Props = {};

const Page = (props: Props) => {
  const pathname = usePathname();
  // const apiUrl sama dengan url api/sensor dengan params sensor date ?= sehari
  const apiUrl = "/api/sensor?date=sehari";

  const TryNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("example notification", {
          body: "This is an example notification",
          data: {
            hello: "world",
          },
        });
      }
    });
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
        {informationMonitoring.map((item) => (
          <div
            key={item.title}
            className="grow min-w-[150px] p-4 bg-white rounded-md"
          >
            <p>{item.title}</p>
            <p className="text-heading2-bold">{item.unit}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
      <Chart />
    </section>
  );
};

export default Page;
