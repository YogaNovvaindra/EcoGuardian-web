"use client";

import { useEffect, useState } from "react";

import { DeleteEsp } from "../modals/delete/delete-esp-modal";
import { CreateEspModal } from "@/components/modals/creates/create-esp-modal";
import { CreateFeedbacQuestionskModal } from "../modals/creates/create-feedbackquestions-modal";
import { CreateFeedbacResponseModal } from "../modals/creates/create-feedbackresponse-modal";
import { EditEspModal } from "@/components/modals/updates/edit-esp-modal";
import { CreateUserModal } from "../modals/creates/create-user-modal";
import { EditUserModal } from "../modals/updates/edit-user-modal";

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
      <EditUserModal />
      <CreateEspModal />
      <EditEspModal />
      <DeleteEsp />
      <CreateFeedbacQuestionskModal />
      <CreateFeedbacResponseModal />
    </>
  );
};
