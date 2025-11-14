// components/common/Button.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  as = "button",
  href,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060a]";

  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-violet-500 text-black shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/60",
    ghost:
      "border border-white/10 text-slate-100 bg-white/5 hover:bg-white/10",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  const Comp: any = as === "a" ? motion.a : motion.button;

  return (
    <Comp
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={cls}
      {...rest}
    >
      {children}
    </Comp>
  );
}
