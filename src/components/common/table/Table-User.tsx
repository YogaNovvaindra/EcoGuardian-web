import { Button } from "@/components/ui/button";
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
import { Table } from "lucide-react";
import React from "react";
import RowTableUser from "./row/Row-Table-User";
import { TableHeaderUser } from "@/constants";

interface Props {
  userData: any;
}

const TableUser: React.FC<Props> = ({ userData }) => {
  const { onOpen } = useModal();
  return (
    <table>
      <thead className="bg-blue">
        <tr>
          {TableHeaderUser.map((item, index) => (
            <th key={index} className="p-3">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        <RowTableUser userData={userData} />
      </tbody>
    </table>
  );
};

export default TableUser;
