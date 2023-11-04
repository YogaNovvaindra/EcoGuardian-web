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

interface Props {
  userData: any;
}

const TableUser: React.FC<Props> = ({ userData }) => {
  const { onOpen } = useModal();
  return (
    <>
      {/* <Table className="bg-red-400 w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Usernma</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((item: User) => {
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.username}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell className="text-right">{item.image}</TableCell>
            </TableRow>;
          })}
        </TableBody>
      </Table> */}

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <RowTableUser userData={userData} />
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
