import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export function Input({ label, className = "", id, ...props }: InputProps) {
  const inputId = id || props.name || "input-field";
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label
        htmlFor={inputId}
        className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider"
      >
        {label}
      </label>
      <input
        id={inputId}
        className="w-full bg-[#1C2A47]/50 border border-[#1C2A47] focus:border-[#FFD94A] focus:ring-1 focus:ring-[#FFD94A] rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-sm"
        {...props}
      />
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
        className="w-full bg-[#1C2A47]/50 border border-[#1C2A47] focus:border-[#FFD94A] focus:ring-1 focus:ring-[#FFD94A] rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-sm resize-none"
        {...props}
      />
    </div>
  );
}
