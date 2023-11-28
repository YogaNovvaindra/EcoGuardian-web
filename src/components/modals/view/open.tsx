"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {imageDetectorData } from "@/hooks/use-modal-store"
import { useModal } from "@/hooks/use-modal-store";

import { Eye } from "lucide-react";

interface EyeImageType<TData> {
 
        id: string;
      
}

export function EyeImage<TData>({
  id,
}: EyeImageType<TData>) {
  const { onOpen } = useModal();

  return (
        <Button onClick={() => onOpen("imageDetector", {imageDetectorData: id })}>
          <Eye />
        </Button>
  );
}