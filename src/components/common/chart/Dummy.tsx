"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "@/hooks/use-query";
import { useDummySocket } from "@/hooks/use-dummy-socket";
// import AreaChartContainer from "./AreaChartContainer";
import { dummy } from "@prisma/client";

// interface SensorData {
//   temperature: number;
//   humidity: number;
//   co2: number;
//   pm25: number;
//   mq2F: number;
//   mq7: number;
//   mq135: number;
//   createdAt: string;
//   updatedAt: string;
// }

export const Dummy = () => {
  const queryKey = `dummy`;
  const addKey = `addDummy`;

  const { data, status } = useQuery({
    queryKey,
    apiUrl: "api/dummy",
  });
  useDummySocket({ queryKey, addKey });

  data?.pages.map((item, index) => {
    // console.log("isi pages map:", item);
    {
      item.map((itemData: any) => {
        console.log("item data: ", itemData);
      });
    }
  });

  //   const formattedData: { x: string; y: number }[] =
  //     data?.pages[0].sensorData.map((item: SensorData) => ({
  //       x: item.createdAt,
  //       y: item.temperature,
  //     }));

  return (
    <div>
      <h1>Data Sensor</h1>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <p>Error loading data</p>
      ) : (
        <div>
          {data?.pages.map((page, pageIndex) => (
            <Fragment key={pageIndex}>
              {page.map((item: any) => (
                <div key={item.id}>
                  <p>mq2: {item.mq2}</p>
                </div>
              ))}
            </Fragment>
          ))}
          {/* buatkan AreaChartContainer dengan data item.Temperature dan item.createAt */}

          {/* <AreaChartContainer data={formattedData.reverse()} size={{ height: 300, width: 400 }} /> */}
        </div>
      )}
    </div>
  );
};
export default Dummy;
