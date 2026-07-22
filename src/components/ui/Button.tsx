import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-extrabold rounded-lg transition-all cursor-pointer uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] shadow-md shadow-[#FFB26A]/20",
    secondary: "bg-[#161412] hover:bg-[#24201C] text-white border border-[#FFB26A]/20",
    outline: "border border-[#FFB26A] text-[#FFB26A] hover:bg-[#FFB26A] hover:text-[#0A0908]",
    ghost: "text-[#EDE9E0]/70 hover:text-white hover:bg-[#161412]/50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-xs",
    lg: "px-8 py-3.5 text-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
