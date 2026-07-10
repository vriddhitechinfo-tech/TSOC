import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed";
  
  const variants = {
    primary:
      "bg-[#FFD94A] hover:bg-[#FFAA2A] text-[#050A14] shadow-md hover:shadow-[#FFD94A]/10",
    secondary:
      "bg-[#1C2A47] border border-[#FFD94A]/20 hover:border-[#FFD94A]/40 text-[#EDE9E0]/70 hover:text-white",
    ghost:
      "bg-transparent hover:bg-[#1C2A47]/30 text-[#EDE9E0]/50 hover:text-white border border-transparent",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
