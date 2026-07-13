import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-[#2A160E]/40 border border-[#FFB26A]/20 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs ${className}`}
        {...props}
      />
      {error && <p className="text-[10px] text-red-400">{error}</p>}
    </div>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
}

export function TextArea({ label, className = "", id, ...props }: TextAreaProps) {
  const textareaId = id || props.name || "textarea-field";
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label
        htmlFor={textareaId}
        className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        className="w-full bg-[#2A160E]/50 border border-[#2A160E] focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-sm resize-none"
        {...props}
      />
    </div>
  );
}
