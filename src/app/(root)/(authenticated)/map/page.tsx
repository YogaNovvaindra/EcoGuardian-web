"use client";
import CardMapMonitoringIot from "@/components/shared/Card-MapmonitoringIoT";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { CreateEspModal } from "@/components/modals/creates/create-esp-modal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ModalType, useModal } from "../../../../hooks/use-modal-store";
import { ModalProvider } from "@/components/providers/modal-provider";

type Props = {};

const Page = (props: Props) => {
  const { onOpen } = useModal();
  const pathname = usePathname();
  return (
    <section className="flex flex-col gap-4 h-full overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Map Monitoring IOT</h1>
        <span>{pathname}</span>
      </div>
      <div className="h-full p-6 bg-light-1 rounded-md overflow-auto">
        <div className="grid grid-cols-1 h-full xl:grid-cols-2 gap-6 overflow-y-auto">
          <CardMapMonitoringIot />
          <CardMapMonitoringIot />
          <CardMapMonitoringIot />
          <CardMapMonitoringIot />
        </div>
      </div>
      <Button
        className="fixed bottom-28 right-6 md:bottom-6 md:right-6 text-[40px]"
        size="iconAdd"
        onClick={() => onOpen("createEsp")}
      >
        <MdAdd />
      </Button>
      <ModalProvider />
    </section>
  );
};

export default Page;
