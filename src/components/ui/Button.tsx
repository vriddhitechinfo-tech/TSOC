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
      "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-md hover:shadow-emerald-500/10",
    secondary:
      "bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white",
    ghost:
      "bg-transparent hover:bg-zinc-900/30 text-zinc-400 hover:text-white border border-transparent",
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
