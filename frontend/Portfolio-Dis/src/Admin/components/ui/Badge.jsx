import React from "react";
import clsx from "clsx";

const variants = {
  primary: "bg-indigo-100 text-indigo-700",

  success: "bg-emerald-100 text-emerald-700",

  danger: "bg-red-100 text-red-700",

  warning: "bg-amber-100 text-amber-700",

  info: "bg-sky-100 text-sky-700",

  secondary: "bg-gray-100 text-gray-700",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",

  md: "px-3 py-1.5 text-sm",

  lg: "px-4 py-2 text-base",
};

const Badge = ({
  children,
  variant = "secondary",
  size = "sm",
  rounded = true,
  className = "",
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center font-medium",
        rounded ? "rounded-full" : "rounded-lg",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;