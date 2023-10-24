"use client";

import { useEffect, useState } from "react";

import { CreateEspModal } from "@/components/modals/creates/create-esp-modal";
import { EditEspModal } from "@/components/modals/updates/edit-esp-modal";

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
            <CreateEspModal />
            <EditEspModal />
        </>
    )
}