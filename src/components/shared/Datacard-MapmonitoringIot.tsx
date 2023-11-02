import { data } from "@prisma/client";
import React from "react";
import { Input } from "../ui/input";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  espData: any;
}

const DataCardMonitoringIot: React.FC<Props> = ({ espData }) => {
  //   const {
  //     data: espData,
  //     isLoading,
  //     isError,
  //   } = useQuery({
  //     queryKey: ["kambing"],
  //     queryFn: async () => {
  //       const { data } = await axios.get(`/api/esp/${espDataSensor}`);
  //       return data;
  //     },
  //   });

  //   const { data } = espData;

  console.log("aowkoawko", espData);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <p className="w-40">DHT 22</p>
          <Input
            type="number"
            value={espData.data[0]?.kelembaban || 0}
            disabled
          />
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-40">Temperature</p>
          <Input type="number" value={espData.data[0]?.suhu || 0} disabled />
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-40">CO2</p>
          <Input
            type="number"
            value={espData.data[0]?.mq135_co2 || 0}
            disabled
          />
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-40">Dangerous Gas</p>
          <Input type="number" value={espData.data[0]?.mq2_lpg || 0} disabled />
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-40">Pollution</p>
          <Input
            type="number"
            value={espData.data[0]?.mq2_smoke || 0}
            disabled
          />
        </div>
      </div>
    </>

    // <>
    //   {isLoading ? (
    //     <div className="">loding</div>
    //   ) : isError ? (
    //     <div className="">error</div>
    //   ) : (
    //     espData.map((item: any) => (
    //   <div key={item.id} className="flex flex-col gap-4">
    //     <div className="flex gap-4 items-center">
    //       <p className="w-40">DHT 22</p>
    //       <Input type="number" value={item.kelembaban || 0} disabled />
    //     </div>
    //     <div className="flex gap-4 items-center">
    //       <p className="w-40">Temperature</p>
    //       <Input type="number" value={item.suhu || 0} disabled />
    //     </div>
    //     <div className="flex gap-4 items-center">
    //       <p className="w-40">CO2</p>
    //       <Input type="number" value={item.mq135_co2 || 0} disabled />
    //     </div>
    //     <div className="flex gap-4 items-center">
    //       <p className="w-40">Dangerous Gas</p>
    //       <Input type="number" value={item.mq2_lpg || 0} disabled />
    //     </div>
    //     <div className="flex gap-4 items-center">
    //       <p className="w-40">Pollution</p>
    //       <Input type="number" value={item.mq2_smoke || 0} disabled />
    //     </div>
    //   </div>
    //     ))
    //   )}
    // </>
  );
};

export default DataCardMonitoringIot;
