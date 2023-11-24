"use client";
import CardMapMonitoringIot from "@/components/common/card/Card-MapmonitoringIoT";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { CHART_URL } from "@/utils/url";
import { ModalType, useModal } from "../../../../../hooks/use-modal-store";
import { ModalProvider } from "@/components/providers/modal-provider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { esp } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import NavbarMap from "@/components/common/navbar/Navbar-Map";

type Props = {};

const Page = (props: Props) => {
  const MAP_URL = `${CHART_URL}/d-solo/ab42eb51-6501-46f0-ae35-a2456ab8cc25/map?orgId=1&theme=light&panelId=2`;

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
        <div className="bg-light-1 p-6 h-full gap-6 overflow-auto">
          <iframe src={MAP_URL} width="100%" height="100%" frameBorder="0" />
        </div>
      </div>
      <ModalProvider />
    </section>
  );
};

export default Page;
