"use client";

import NavbarImageDetector from "@/components/common/navbar/Navbar-Imagedetector";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { data } from "@prisma/client";
import { DataTable } from "@/components/common/table/user/component/data-table";
import { columnsImageDetector } from "@/components/common/table/user/columns/imagedetector";
import ImageDetector from "@/components/common/Image/image-detector";

type Props = {}
;

const Page = (props: Props) => {
  const [objectInfo, setObjectInfo] = useState("");
  const pathname = usePathname();

  const {
    data: detectorData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["User"],
    queryFn: async () => {
      const { data } = await axios.get("/api/image_detector");
      return data;
    },
  });
  console.log("data image detector: ", detectorData);
  return (
    <section className="h-full w-full flex flex-col gap-4 md:overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Air Pollution Image Detector</h1>
        <span>{pathname}</span>
      </div>
      <div className="flex flex-col h-full overflow-auto">
        <NavbarImageDetector />
        <div className="w-full h-full bg-light-1 flex gap-4 rounded-md p-6 overflow-auto">
          {isLoading ? (
            <p className="text-black">Loading...</p>
          ) : isError ? (
            <p>Error: Failed to fetch data</p>
          ) : (
            <>
              <div className="w-full">
                <DataTable columns={columnsImageDetector} data={detectorData}   />
              </div>
              {/* <ImageDetector item={detectorData} /> */}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
