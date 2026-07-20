"use client";

import React from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { useModalForm } from "@/hooks/useModalForm";

export default function InteractiveModal() {
  const {
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
  } = useModalForm();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-[#161412] border border-[#FFB26A]/30 overflow-hidden rounded-xl shadow-2xl transition-all duration-300 transform scale-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-[#EDE9E0]/40 hover:text-[#FFB26A] transition-colors p-1.5 hover:bg-[#161412]/60 rounded-lg"
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
                    className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
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
                      className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
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
                      className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
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
                        className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
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
                        className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
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
                          className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
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
                        className="w-full bg-[#FFB26A]/15 border border-[#FFB26A]/30 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A] rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
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
                        className="w-full bg-[#FFB26A]/15 border border-[#FFB26A]/30 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A] rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                      >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
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
                        className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
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
                        className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
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
                      className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
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
                    className="w-full bg-[#161412]/40 border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3 px-4 rounded-lg transition-all text-xs disabled:opacity-75 disabled:cursor-not-allowed mt-6 cursor-pointer uppercase tracking-wider shadow-lg"
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
              <div className="w-12 h-12 bg-[#FFB26A]/10 rounded-full flex items-center justify-center text-[#FFB26A] ring-4 ring-[#FFB26A]/15">
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
                className="mt-6 bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-2 px-6 rounded-lg transition-all text-xs cursor-pointer uppercase tracking-wider shadow-md"
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
