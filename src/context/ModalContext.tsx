"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { MODAL_CONFIG } from "@/lib/modalConfig";

export type ModalType =
  | "software"
  | "ero"
  | "bureau"
  | "openoffice"
  | "strategy"
  | "technology"
  | "partner"
  | "demo"
  | "erogrowth";

interface ModalContextType {
  openModal: (type: ModalType) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  // Previously opened an in-page modal with an embedded booking iframe.
  // Each CTA now opens its booking/intake link directly in a new tab.
  const openModal = (type: ModalType) => {
    const url = MODAL_CONFIG[type]?.bookingUrl;
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
