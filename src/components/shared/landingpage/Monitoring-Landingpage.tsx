"use client";
import Page from "@/app/(root)/(authenticated)/dashboard/page";
import { Skeleton } from "@/components/ui/skeleton";
import { informationMonitoringDashboard } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchData } from "next-auth/client/_utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { BsInfoCircle } from "react-icons/bs";

// interface DashboardData {
//   desc: string[];
//   roundtemperature: string;
//   roundhumidity: string;
//   roundforecast_temperature: string;
//   roundforecast_humidity: string;
//   roundispu: string;
//   roundforecast_ispu: string;
//   ispu_status: string;
//   image_status: string;
//   forecast_createdAt: string;
//   ispu_createdAt: string;
//   [key: string]: string; // Tanda indeks
// }

const MonitoringLandingPage = () => {
  const [dashboardData, setDashboardData] = useState<any>({
    desc: [],
    roundtemperature: "",
    roundhumidity: "",
    roundforecast_temperature: "",
    roundforecast_humidity: "",
    roundispu: "",
    roundforecast_ispu: "",
    ispu_status: "",
    image_status: "",
    forecast_createdAt: "",
    ispu_createdAt: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [showChart, setShowChart] = useState(informationMonitoringDashboard[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/dashboard");
        setDashboardData(response.data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData(); // Panggil fungsi fetchData saat komponen dipasang

    // Jika Anda ingin menggunakan refetchInterval seperti useQuery, Anda dapat
    // mengatur interval untuk pembaruan data setiap 60 detik (1 menit)
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);

    // Membersihkan interval saat komponen dibongkar
    return () => clearInterval(intervalId);
  }, []);

  // console.log("Data monitoring dashboard: ", dashboardData);

  const handleCardClick = (index: any) => {
    setActiveCard(index);
    setShowChart(informationMonitoringDashboard[index]);
    console.log("Show Chart: ", showChart);
  };

  return (
    <section
      id="MonitoringLandingPage"
      className="h-screen w-full flex flex-col gap-4 md:overflow-auto landingpage"
    >
      <h1 className="text-heading3-bold text-center">Monitoring</h1>
      {isLoading ? (
        <p>loading</p>
      ) : isError ? (
        <p>Error: Failed to fetch data</p>
      ) : (
        <div className="w-full bg-light-1 flex rounded-md overflow-hidden min-h-fit shadow">
          <div className="h-full w-32 bg-blue">
            <Image
              src="/public/../assets/vector-people-mointoring.png"
              alt=""
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 px-4 py-2">
            <h3 className="text-heading3-bold">
              What is the air quality at Jember State Polytechnic now?
            </h3>
            <ul className="h-60">
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

      <div className="w-full flex gap-6 flex-wrap">
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
                className={`grow h-32 min-w-[150px] p-4 rounded-md shadow ${
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
                        <BsInfoCircle
                          className={`${
                            index === activeCard ? "text-white" : ""
                          }`}
                        />
                      </HoverCardTrigger>
                      <HoverCardContent className=" rounded-md p-4 flex flex-col gap-2 w-[350px] bg-light-1">
                        <div className="flex justify-between space-x-4 ">
                          <div className="bg-[#5BB318] flex justify-center w-16 h-12 rounded-full">
                            <Image
                              alt="gambar emoticon"
                              src={item.info[0].url_image}
                              width={32}
                              height={32}
                            />
                          </div>
                          <div className="bg-[#5BB318] flex gap-3 rounded-full px-4 py-2 items-center w-full justify-between">
                            <p className="text-base-semibold text-white">
                              {item.info[0].kategori}
                            </p>
                            <p className="text-base-semibold text-white opacity-70">
                              {item.info[0].number}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-4">
                          <div className="bg-[#377de7] flex justify-center w-16 h-12 rounded-full">
                            <Image
                              alt="gambar emoticon"
                              src={item.info[1].url_image}
                              width={32}
                              height={32}
                            />
                          </div>
                          <div className="bg-[#377de7] flex gap-3 rounded-full px-4 py-2 items-center w-full justify-between">
                            <p className="text-base-semibold text-white">
                              {item.info[1].kategori}
                            </p>
                            <p className="text-base-semibold text-white opacity-70">
                              {item.info[1].number}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-4">
                          <div className="bg-[#FFC436] flex justify-center w-16 h-12 rounded-full">
                            <Image
                              alt="gambar emoticon"
                              src={item.info[2].url_image}
                              width={32}
                              height={32}
                            />
                          </div>
                          <div className="bg-[#FFC436] flex gap-3 rounded-full px-4 py-2 items-center w-full justify-between">
                            <p className="text-base-semibold text-white">
                              {item.info[2].kategori}
                            </p>
                            <p className="text-base-semibold text-white opacity-70">
                              {item.info[2].number}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-4">
                          <div className="bg-[#990000] flex justify-center w-16 h-12 rounded-full">
                            <Image
                              alt="gambar emoticon"
                              src={item.info[3].url_image}
                              width={32}
                              height={32}
                            />
                          </div>
                          <div className="bg-[#990000] flex gap-3 rounded-full px-4 py-2 items-center w-full justify-between">
                            <p className="text-base-semibold text-white">
                              {item.info[3].kategori}
                            </p>
                            <p className="text-base-semibold text-white opacity-70">
                              {item.info[3].number}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-4">
                          <div className="bg-[#000000] flex justify-center w-16 h-12 rounded-full">
                            <Image
                              alt="gambar emoticon"
                              src={item.info[4].url_image}
                              width={32}
                              height={32}
                            />
                          </div>
                          <div className="bg-[#000000] flex gap-3 rounded-full px-4 py-2 items-center w-full justify-between">
                            <p className="text-base-semibold text-white">
                              {item.info[4].kategori}
                            </p>
                            <p className="text-base-semibold text-white opacity-70">
                              {item.info[4].number}
                            </p>
                          </div>
                        </div>
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
                      <p
                        className={`text-body-normal md:text-heading3-bold opacity-70 ${
                          index === activeCard ? "text-white" : ""
                        }`}
                      >
                        {dashboardData[item.forecast]} {item.unit}
                      </p>
                    )}
                    <p
                      className={`text-[12px] md:text-small-regular opacity-70 ${
                        index === activeCard ? "text-white" : ""
                      }`}
                    >
                      +1 hour
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex gap-1 h-full bg-light-1 shadow">
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

export default MonitoringLandingPage;
