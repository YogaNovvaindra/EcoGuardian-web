"use client";

import CardMapMonitoringIot from "@/components/common/card/Card-MapmonitoringIoT";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { CreateEspModal } from "@/components/modals/creates/create-esp-modal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ModalProvider } from "@/components/providers/modal-provider";
import Link from "next/link";
import { useModal } from "@/hooks/use-modal-store";
import NavbarFeedback from "@/components/common/navbar/Navbar-Feedback";
import CardFeedback from "@/components/common/card/Card-Feedback";

type Props = {};

const Page = (props: Props) => {
  const { onOpen } = useModal();
  const pathname = usePathname();
  return (
    <section className="flex flex-col gap-4 h-full overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">Anonymous Feedback</h1>
        <span>{pathname}</span>
      </div>
      <div className="flex flex-col h-full overflow-auto">
        <NavbarFeedback />
        <div className="h-full bg-light-1 overflow-auto p-6">
          <CardFeedback />
          <CardFeedback />
          <CardFeedback />
          <CardFeedback />
          <CardFeedback />
        </div>
      </div>
      <Button
        className="fixed bottom-28 right-6 md:bottom-6 md:right-6 text-[40px]"
        size="iconAdd"
        onClick={() => onOpen("createFeedbackResponse")}
      >
        <MdAdd />
      </Button>
      <ModalProvider />
    </section>
  );
};

export default Page;
