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
import axios from "axios";
import { Import, Table } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/user");
        setData(response.data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
        setError(true);
      }
    }

    fetchData();
  }, []);

  const { onOpen } = useModal();
  const pathname = usePathname();

  return (
    <section className="h-full w-full flex flex-col gap-4 md:overflow-auto">
      <div>
        <h1 className="text-heading1-semibold">User</h1>
        <span>{pathname}</span>
      </div>
      <div className="w-full h-full bg-light-1 flex flex-col gap-4 rounded-md h-40 p-6 overflow-auto">
        {/* <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">username</TableCell>
              <TableCell>email</TableCell>
              <TableCell>role</TableCell>
              <TableCell className="text-right">image</TableCell>
            </TableRow>
          </TableBody>
        </Table> */}
        <TableUser userData={data}/>
      </div>
    </section>
  );
};

export default Page;
