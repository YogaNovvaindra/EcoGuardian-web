"use client";

import TableUser from "@/components/common/table/Table-User";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Import, Table } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { DataTable } from "@/components/common/table/user/component/data-table";
import { columnsUser } from "@/components/common/table/user/columns/user";

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

  console.log("ini data: ", userData);

  const { onOpen } = useModal();
  const pathname = usePathname();

  return (
    <section className="h-full w-full flex flex-col gap-4 md:overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">User</h1>
        <span>{pathname}</span>
      </div>
      <div className="w-full h-full bg-light-1 flex flex-col gap-4 rounded-md p-6 overflow-auto">
        <div className="flex flex-col gap-1">
          <h2 className="text-heading2-semibold">User Data Table</h2>
          <p>List of all user data</p>
        </div>
        {isLoading ? (
          <p className="text-black">Loading...</p>
        ) : isError ? (
          <p>Error: Failed to fetch data</p>
        ) : (
          // <TableUser userData={userData} />
          <DataTable columns={columnsUser} data={userData} />
        )}
      </div>
      <Button
        className="fixed bottom-28 right-6 md:bottom-6 md:right-6 text-[40px]"
        size="iconAdd"
        onClick={() => onOpen("createUser")}
      >
        <MdAdd />
      </Button>
    </section>
  );
};

export default Page;
