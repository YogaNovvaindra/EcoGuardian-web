"use client";
import Page from "@/app/(root)/(authenticated)/dashboard/page";
import { Skeleton } from "@/components/ui/skeleton";
import { informationMonitoringDashboard } from "@/constants";
import axios from "axios";
import { fetchData } from "next-auth/client/_utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const MonitoringLandingPage = () => {
  const [dashboardData, setDashboardData] = useState({
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
  }, [fetchData]);

  console.log("Data monitoring dashboard: ", dashboardData);

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
      {/* <h1 className="text-heading3-bold text-center">Monitoring</h1>
      {isLoading ? (
        <p>loading</p>
      ) : isError ? (
        <p>Error: Failed to fetch data</p>
      ) : (
        <div className="w-full bg-light-1 flex rounded-md overflow-hidden min-h-fit">
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
                className={`grow h-32 min-w-[150px] p-4 rounded-md ${
                  index === activeCard ? "card-dashboard-active" : "bg-white"
                }`}
                onClick={() => handleCardClick(index)}
              >
                <p className={`${index === activeCard ? "text-white" : ""}`}>
                  {item.title}
                </p>
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
                    {item.forecast in dashboardData ? (
                      <p
                        className={`text-body-normal md:text-heading3-bold opacity-70 ${
                          index === activeCard ? "text-white" : ""
                        }`}
                      >
                        {dashboardData[item.forecast]} {item.unit}
                      </p>
                    ) : (
                      <p
                        className={`text-heading3-bold ${
                          index === activeCard ? "text-white" : ""
                        }`}
                      >
                        -
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
      <div className="flex gap-1 h-full bg-light-1">
        {showChart.link.map((item, index) => (
          <iframe
            key={index}
            src={item}
            width="100%"
            height="100%"
            frameBorder="0"
          />
        ))}
      </div> */}
    </section>
  );
};

export default MonitoringLandingPage;
