import React from "react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm",

  secondary:
    "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",

  success:
    "bg-emerald-600 hover:bg-emerald-700 text-white",

  danger:
    "bg-red-600 hover:bg-red-700 text-white",

  warning:
    "bg-amber-500 hover:bg-amber-600 text-white",

  outline:
    "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",

  ghost:
    "text-gray-700 hover:bg-gray-100",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-indigo-400",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              opacity="0.25"
            />
            <path
              d="M22 12a10 10 0 00-10-10"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>

          Loading...
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;