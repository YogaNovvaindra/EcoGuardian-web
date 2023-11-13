"use client";

import { informationMonitoringDashboard } from "@/constants";
import Image from "next/image";
import Chart from "../../common/chart/Chart-Dashboard";
import { useDummySocket } from "@/hooks/use-dummy-socket";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import ChartDashboard from "../../common/chart/Chart-Dashboard";

const MonitoringLandingPage = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [showChart, setShowChart] = useState(informationMonitoringDashboard[0]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const realtimeClock = () => {
      setCurrentTime(new Date());
    };

    const intervalTime = setInterval(realtimeClock, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  const formattedDate = format(currentTime, "dd MMMM yyyy");

  const handleCardClick = (index: any) => {
    setActiveCard(index);
    setShowChart(informationMonitoringDashboard[index]);
  };
  return (
    <section
      id="MonitoringLandingPage"
      className="h-screen bg-sky-200 flex flex-col gap-4 items-center landingpage lg:px-60"
    >
      <h1 className="text-heading3-bold">Information Monitoring</h1>
      <div className="w-full bg-light-1 flex rounded-md overflow-hidden">
        <div>
          {/* <Image
            src="/../../public/../assets/vector-people-mointoring.png"
            alt="vector"
            width={100}
            height={100}
          /> */}
        </div>
        <div className="px-4 py-2">
          <h3>What is the air quality at Jember State Polytechnic now?</h3>
          <p>Deskripsi</p>
        </div>
      </div>
      <div className="w-full flex gap-6 flex-wrap">
        {informationMonitoringDashboard.map((item, index) => (
          <div
            key={index}
            className={`grow min-w-[150px] p-4 rounded-md ${
              index === activeCard ? "bg-green-500" : "bg-white"
            }`}
            onClick={() => handleCardClick(index)}
          >
            <p>{item.title}</p>
            <p className="text-heading2-bold">00</p>

            <p>{formattedDate}</p>
          </div>
        ))}
      </div>
      {/* <ChartDashboard showData={showChart} /> */}
    </section>
  );
};

export default MonitoringLandingPage;
