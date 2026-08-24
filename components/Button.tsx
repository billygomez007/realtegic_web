import React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  asLink = false,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
