"use client";

import TableUser from "@/components/common/table/Table-User";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useModal } from "@/hooks/use-modal-store";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Import, Table } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = () => {
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["User"],
    queryFn: async () => {
      const { data } = await axios.get("/api/user");
      return data;
    },
  });

  const { onOpen } = useModal();
  const pathname = usePathname();

  return (
    <section className="h-full w-full flex flex-col gap-4 md:overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">User</h1>
        <span>{pathname}</span>
      </div>
      <div className="w-full h-full bg-light-1 flex flex-col gap-4 rounded-md h-40 p-6 overflow-auto">
        {isLoading ? (
          <p className="text-black">Loading...</p>
        ) : isError ? (
          <p>Error: Failed to fetch data</p>
        ) : (
          <TableUser userData={userData} />
        )}
      </div>
    </section>
  );
};

export default Page;
