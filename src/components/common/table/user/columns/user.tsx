"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../component/data-table-column-header";
import { DataTableRowActions } from "../component/data-table-row-action";
import { User } from "@prisma/client";

export const columnsUser: ColumnDef<User>[] = [
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="id" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  // },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="username" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="email" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("email")}</div>,
  },

  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="role" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("role")}</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row.original} />,
  },
];
