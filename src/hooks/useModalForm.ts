"use client";

import { useState, useEffect } from "react";
import { useModal, ModalType } from "@/context/ModalContext";

export interface ModalFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  efinStatus: string;
  ptinStatus: string;
  preparerCount: string;
  experience: string;
  currentSoftware: string;
  message: string;
}

export function useModalForm() {
  const { isOpen, modalType, closeModal } = useModal();

  const [formData, setFormData] = useState<ModalFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    efinStatus: "no",
    ptinStatus: "yes",
    preparerCount: "1",
    experience: "new",
    currentSoftware: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      efinStatus: "no",
      ptinStatus: "yes",
      preparerCount: "1",
      experience: "new",
      currentSoftware: "",
      message: "",
    });
    setIsSubmitted(false);
    closeModal();
  };

  const getModalTitle = (type: ModalType) => {
    switch (type) {
      case "software":
        return "Get Professional Tax Software";
      case "ero":
        return "ERO Enablement Consultation";
      case "bureau":
        return "Apply for Service Bureau Mentorship";
      case "openoffice":
        return "Join The Open Office Community";
      case "strategy":
        return "Book Your Free Strategy Call";
      case "technology":
        return "Schedule a Technology Consultation";
      case "partner":
        return "Become a Partner";
      case "demo":
        return "Request a Software Walkthrough Demo";
      default:
        return "Connect with The Sector of Collectives";
    }
  };

  const getModalDescription = (type: ModalType) => {
    switch (type) {
      case "software":
        return "Gain access to professional-grade tax software and start maximizing your business revenue today.";
      case "ero":
        return "Learn how to obtain your own EFIN, stop splitting fees, and gain complete control over your tax business.";
      case "bureau":
        return "Take the leap from preparer to leader. Structure, package, and scale your own Service Bureau.";
      case "openoffice":
        return "Connect with experts and peers in our daily live office hours and business growth workshops.";
      case "strategy":
        return "Let's build a customized blueprint to launch, grow, or scale your tax business this year.";
      case "technology":
        return "Optimize your workflow with modern CRMs, client automations, and AI integrations.";
      case "partner":
        return "Partner with The Sector of Collectives to offer software, training, and community opportunities to your audience.";
      case "demo":
        return "See our professional tax software in action. Get a live tour of features, filing tools, and dashboards.";
      default:
        return "Tell us more about your business goals and how we can support your growth.";
    }
  };

  return {
    isOpen,
    modalType,
    closeModal,
    formData,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    handleReset,
    getModalTitle,
    getModalDescription,
  };
}
