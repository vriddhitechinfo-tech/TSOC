"use client";

import { useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { MODAL_CONFIG } from "@/lib/modalConfig";

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

  const config = MODAL_CONFIG[modalType];

  return {
    isOpen,
    modalType,
    closeModal,
    bookingUrl: config.bookingUrl,
    headerTitle: config.headerTitle,
    nextSteps: config.nextSteps,
  };
}
