"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../component/data-table-column-header";
import { DataTableRowActions } from "../component/data-table-row-action";
import { image_detector } from "@prisma/client";
import { Checkbox } from "@/components/ui/checkbox";

export const columnsImageDetector: ColumnDef<image_detector>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
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
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("image")}</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row.original} />,
  },
];
