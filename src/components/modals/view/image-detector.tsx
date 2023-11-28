"use client";

import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Image from "next/image";





export const ViewImageDetector = () => {
  const { isOpen, onClose, type, data } = useModal();

  // menampung state error

  const isModalOpen = isOpen && type === "imageDetector";

  const { imageDetectorData } = data;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-neutral-100 text-black p-0 overflow-hidden w-72">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Image Detector
          </DialogTitle>
        </DialogHeader>
          <div className="flex flex-col gap-2">
           <Image
                src={`/api/image_detector/image/${imageDetectorData}`}
                alt="Detected Image"
                width={1920}
                height={1080}
                />

          
        </div>
      </DialogContent>
    </Dialog>
  );
};
