"use client";

import { useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { CONNECT_TO_SECTOR_LINK } from "@/lib/constants";

export function useModalForm() {
  const { isOpen, modalType, closeModal } = useModal();

  // Close on Escape press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);

  return {
    isOpen,
    modalType,
    closeModal,
    bookingUrl: CONNECT_TO_SECTOR_LINK,
  };
}
