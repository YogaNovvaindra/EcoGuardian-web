"use client";

import { SocketIndicator } from "@/components/common/Socket-indicator";

import { informationMonitoringDashboard } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Button } from "@/components/ui/button";
import { HoverCardContent } from "@/components/ui/hover-card";
import { BsInfoCircle } from "react-icons/bs";

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
        <div className="bg-light-1 rounded-md w-full h-60 p-4">
          Error: Failed to fetch data
        </div>
      ) : (
        <div className=" w-full  bg-light-1 flex flex-col md:flex-row rounded-md ">
          <div className=" hidden lg:block w-32">
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
            <ul className="lg:h">
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
          <>
            {informationMonitoringDashboard.map((item, index) => (
              <div
                key={index}
                className="bg-light-1 grow h-32 min-w-[150px] p-4 rounded-md"
              >
                Error: Failed to fetch data
              </div>
            ))}
          </>
        ) : (
          <>
            {" "}
            {informationMonitoringDashboard.map((item, index) => (
              <div
                key={index}
                className={`grow h-32 min-w-[150px] p-4 rounded-md ${
                  index === activeCard ? "card-dashboard-active" : "bg-white"
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className="flex gap-2 items-center">
                  <p className={`${index === activeCard ? "text-white" : ""}`}>
                    {item.title}
                  </p>
                  {item.info && item.info.length > 0 && (
                    <HoverCard>
                      <HoverCardTrigger>
                        <BsInfoCircle />
                      </HoverCardTrigger>
                      <HoverCardContent className="flex flex-col gap-2 w-[350px]">
                        {item.info.map((itemInfo, index) => (
                          <div
                            key={index}
                            className="flex justify-between space-x-4"
                          >
                            <div
                              className={`bg-[${itemInfo.color}] flex justify-center w-16 h-12 rounded-full`}
                            >
                              <Image
                                alt="gambar emoticon"
                                src={itemInfo.url_image}
                                width={32}
                                height={32}
                              />
                            </div>
                            <div
                              className={`bg-[${itemInfo.color}] flex gap-3 rounded-full px-4 py-2 items-center w-full justify-between`}
                            >
                              <p className="text-base-semibold text-white">
                                {itemInfo.kategori}
                              </p>
                              <p className="text-base-semibold text-white opacity-70">
                                {itemInfo.number}
                              </p>
                            </div>
                          </div>
                        ))}
                      </HoverCardContent>
                    </HoverCard>
                  )}
                </div>
                <div className="flex justify-between">
                  <div>
                    {item.data in dashboardData ? (
                      <p
                        className={`text-body-bold md:text-heading2-bold ${
                          index === activeCard ? "text-white" : ""
                        }`}
                      >
                        {dashboardData[item.data]} {item.unit}
                      </p>
                    ) : (
                      <p
                        className={` ${
                          index === activeCard ? "text-white" : ""
                        }`}
                      >
                        -
                      </p>
                    )}
                    <p
                      className={`md:text-base-regular ${
                        index === activeCard ? "text-white" : ""
                      }`}
                    >
                      Now
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    {item.forecast && (
                      <>
                        <p
                          className={`text-body-normal md:text-heading3-bold opacity-70 ${
                            index === activeCard ? "text-white" : ""
                          }`}
                        >
                          {dashboardData[item.forecast]} {item.unit}
                        </p>
                        <p
                          className={`text-[12px] md:text-small-regular opacity-70 ${
                            index === activeCard ? "text-white" : ""
                          }`}
                        >
                          +1 hour
                        </p>
                      </>
                    )}
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
            // className="h-[300px]"
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
