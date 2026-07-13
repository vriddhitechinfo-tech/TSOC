"use client";

import React, { useState, useEffect } from "react";
import { useModal, ModalType } from "@/context/ModalContext";
import { X, CheckCircle2, Loader2 } from "lucide-react";

export default function InteractiveModal() {
  const { isOpen, modalType, closeModal } = useModal();
  const [formData, setFormData] = useState({
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

  if (!isOpen) return null;

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-[#1C2A47] border border-[#FF9F76]/30 overflow-hidden rounded-xl shadow-2xl transition-all duration-300 transform scale-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-[#EDE9E0]/40 hover:text-[#FF9F76] transition-colors p-1.5 hover:bg-[#1C2A47]/60 rounded-lg"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {!isSubmitted ? (
            <>
              <h3 className="text-lg font-bold text-white mb-2 pr-6">
                {getModalTitle(modalType)}
              </h3>
              <p className="text-xs text-[#EDE9E0]/50 mb-6 leading-relaxed">
                {getModalDescription(modalType)}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 555-5555"
                      className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
                    />
                  </div>
                </div>

                {/* Conditional Fields based on Modal Type */}
                {modalType === "software" && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="modal-exp" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                        Experience Level
                      </label>
                      <select
                        id="modal-exp"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                      >
                        <option value="new">New Tax Preparer</option>
                        <option value="intermediate">1-3 Years Experience</option>
                        <option value="advanced">3+ Years Experience</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="modal-ptin-software" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                        Do you have a PTIN?
                      </label>
                      <select
                        id="modal-ptin-software"
                        name="ptinStatus"
                        value={formData.ptinStatus}
                        onChange={handleChange}
                        className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                      >
                        <option value="yes">Yes, I have a PTIN</option>
                        <option value="no">No, not yet</option>
                      </select>
                    </div>
                    {formData.experience !== "new" && (
                      <div>
                        <label htmlFor="modal-efin-software" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                          Do you have an EFIN?
                        </label>
                        <select
                          id="modal-efin-software"
                          name="efinStatus"
                          value={formData.efinStatus}
                          onChange={handleChange}
                          className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                        >
                          <option value="yes">Yes, I have an active EFIN</option>
                          <option value="no">No, not yet</option>
                        </select>
                      </div>
                    )}
                  </div>
                )}

                {modalType === "ero" && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="modal-ptin-ero" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                        Do you have a PTIN?
                      </label>
                      <select
                        id="modal-ptin-ero"
                        name="ptinStatus"
                        value={formData.ptinStatus}
                        onChange={handleChange}
                        className="w-full bg-[#FF9F76]/15 border border-[#FF9F76]/30 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76] rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                      >
                        <option value="yes">Yes, I have a PTIN</option>
                        <option value="no">No, not yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="modal-efin-ero" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                        Do you have an EFIN?
                      </label>
                      <select
                        id="modal-efin-ero"
                        name="efinStatus"
                        value={formData.efinStatus}
                        onChange={handleChange}
                        className="w-full bg-[#FF9F76]/15 border border-[#FF9F76]/30 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76] rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                      >
                        <option value="no">No, I need guidance getting one</option>
                        <option value="yes">Yes, I already have an EFIN</option>
                        <option value="pending">Applied — waiting for approval</option>
                      </select>
                    </div>
                  </div>
                )}

                {modalType === "bureau" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-efin-bureau" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                        Are you an active ERO?
                      </label>
                      <select
                        id="modal-efin-bureau"
                        name="efinStatus"
                        value={formData.efinStatus}
                        onChange={handleChange}
                        className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                      >
                        <option value="yes">Yes, active ERO</option>
                        <option value="no">No, preparing under someone</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="modal-prep" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                        Number of Preparers on Team
                      </label>
                      <select
                        id="modal-prep"
                        name="preparerCount"
                        value={formData.preparerCount}
                        onChange={handleChange}
                        className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                      >
                        <option value="1">Just Me (1)</option>
                        <option value="2-5">2 to 5 Preparers</option>
                        <option value="6-10">6 to 10 Preparers</option>
                        <option value="11+">11+ Preparers</option>
                      </select>
                    </div>
                  </div>
                )}

                {modalType === "technology" && (
                  <div>
                    <label htmlFor="modal-tech" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                      Current Softwares/CRM Used (if any)
                    </label>
                    <input
                      type="text"
                      id="modal-tech"
                      name="currentSoftware"
                      value={formData.currentSoftware}
                      onChange={handleChange}
                      placeholder="e.g. TaxSlayer, HubSpot, sheets"
                      className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="modal-msg" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                    How can we help you succeed?
                  </label>
                  <textarea
                    id="modal-msg"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business goals..."
                    className="w-full bg-[#1C2A47]/40 border border-[#FF9F76]/25 focus:border-[#FF9F76] focus:ring-1 focus:ring-[#FF9F76]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-[#FF9F76] hover:bg-[#F4845F] text-[#050A14] font-extrabold py-3 px-4 rounded-lg transition-all text-xs disabled:opacity-75 disabled:cursor-not-allowed mt-6 cursor-pointer uppercase tracking-wider shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" />
                      Submitting Request...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
              {/* Success Checkmark */}
              <div className="w-12 h-12 bg-[#FF9F76]/10 rounded-full flex items-center justify-center text-[#FF9F76] ring-4 ring-[#FF9F76]/15">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Application Received
              </h3>
              
              <p className="text-xs text-[#EDE9E0]/55 max-w-sm leading-relaxed">
                Thank you, <span className="font-semibold text-white">{formData.name}</span>. A business advisor from The Sector of Collectives will contact you at <span className="font-semibold text-white">{formData.email}</span> within 24 hours to schedule your strategy call.
              </p>

              <button
                onClick={handleReset}
                className="mt-6 bg-[#FF9F76] hover:bg-[#F4845F] text-[#050A14] font-extrabold py-2 px-6 rounded-lg transition-all text-xs cursor-pointer uppercase tracking-wider shadow-md"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
