"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ModalType = 
  | "software" 
  | "ero" 
  | "bureau" 
  | "openoffice" 
  | "strategy" 
  | "technology" 
  | "partner" 
  | "demo";

interface ModalContextType {
  isOpen: boolean;
  modalType: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("strategy");

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalType, openModal, closeModal }}>
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
