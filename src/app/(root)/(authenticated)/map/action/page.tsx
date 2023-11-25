"use client";
import CardMapMonitoringIot from "@/components/common/card/Card-MapmonitoringIoT";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { ModalType, useModal } from "../../../../../hooks/use-modal-store";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { esp } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import NavbarMap from "@/components/common/navbar/Navbar-Map";

type Props = {};

const Page = (props: Props) => {
  const {
    data: espData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["esp"],
    queryFn: async () => {
      const { data } = await axios.get("/api/esp");
      return data;
    },
  });

  const { onOpen } = useModal();
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-4 h-full overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Map Monitoring IOT</h1>
        <span>{pathname}</span>
      </div>
      <div className="flex flex-col h-full rounded-md overflow-auto">
        <NavbarMap />
        <div className="grid bg-light-1 p-6 grid-cols-1 h-full xl:grid-cols-2 gap-6 overflow-auto">
          {isLoading ? (
            <>
              <div className="flex flex-col gap-6 bg-light-1 rounded-md p-6 border">
                <div className="flex flex-col gap-2 ">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-5 w-40" />
                </div>
                <Skeleton className="h-full w-full" />
              </div>
              <div className="flex flex-col gap-6 bg-light-1 rounded-md p-6 border">
                <div className="flex flex-col gap-2 ">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-5 w-40" />
                </div>
                <Skeleton className="h-full w-full" />
              </div>
              <div className="flex flex-col gap-6 bg-light-1 rounded-md p-6 border">
                <div className="flex flex-col gap-2 ">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-5 w-40" />
                </div>
                <Skeleton className="h-full w-full" />
              </div>
              <div className="flex flex-col gap-6 bg-light-1 rounded-md p-6 border">
                <div className="flex flex-col gap-2 ">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-5 w-40" />
                </div>
                <Skeleton className="h-full w-full" />
              </div>
            </>
          ) : isError ? (
            <p>Error: Failed to fetch data</p>
          ) : (
            espData.map((item: esp) => (
              <CardMapMonitoringIot key={item.id} espData={item} />
            ))
          )}
        </div>
      </div>
      <Button
        className="fixed bottom-28 right-6 md:bottom-6 md:right-6 text-[40px]"
        size="iconAdd"
        onClick={() => onOpen("createEsp")}
      >
        <MdAdd />
      </Button>
    </section>
  );
};

export default Page;
