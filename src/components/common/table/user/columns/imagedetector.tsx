"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../component/data-table-column-header";
import { DataTableRowActions } from "../component/data-table-row-action";
import { image_detector } from "@prisma/client";
import { Checkbox } from "@/components/ui/checkbox";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { EyeImage } from "@/components/modals/view/open";


// const { onOpen } = useModal();


export const columnsImageDetector: ColumnDef<image_detector>[] = [
  
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader className="hidden" column={column} title="id" />
    ),
    cell: ({ row }) => 
    <div
     className="w-[80px] hidden">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "label",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="label" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("label")}</div>,
  },
  {
    accessorKey: "confidence",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="confidence" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("confidence")}</div>
    ),
  },

  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="image" />
    ),
    cell: ({ row }) => 
    <div
     className="w-[80px]">{row.getValue("image")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <EyeImage id={row.getValue("id")} />,
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last detect" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("createdAt")}</div>
    ),
  },



];
