"use client";

import { useEffect, useState } from "react";

import { DeleteEspModal } from "../modals/delete/delete-esp-modal";
import { CreateEspModal } from "@/components/modals/creates/create-esp-modal";
import { EditEspModal } from "@/components/modals/updates/edit-esp-modal";
import { CreateUserModal } from "../modals/creates/create-user-modal";
import { EditUserModal } from "../modals/updates/edit-user-modal";
import { DeleteUserModal } from "../modals/delete/delete-user-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateUserModal />
      <DeleteUserModal />
      <EditUserModal />
      <CreateEspModal />
      <EditEspModal />
      <DeleteEspModal />
    </>
  );
};
