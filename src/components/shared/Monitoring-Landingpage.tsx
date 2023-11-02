import { informationMonitoring } from "@/constants";
import Image from "next/image";
import Chart from "./Chart";

const MonitoringLandingPage = () => {
  return (
    <section
      id="MonitoringLandingPage"
      className="h-screen bg-sky-200 flex flex-col gap-4 items-center landingpage lg:px-60"
    >
      <h1 className="text-heading3-bold">Information Monitoring</h1>
      <div className="w-full bg-light-1 flex rounded-md overflow-hidden">
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
      {/* <Chart /> */}
    </section>
  );
};

export default MonitoringLandingPage;
