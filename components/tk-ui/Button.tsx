import clsx from "clsx";
import React, { forwardRef } from "react";

export type ButtonProps = {
  /** Variant options of the button */
  variant?: "primary" | "transparent" | "text";
  /** Makes the button full width */
  fullWidth?: boolean;
  /** Makes the button rounded */
  rounded?: boolean;
  /** Icon to be displayed before the button text */
  prefixIcon?: React.ReactNode;
  /** Icon to be displayed after the button text */
  suffixIcon?: React.ReactNode;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      fullWidth,
      rounded,
      disabled,
      prefixIcon,
      suffixIcon,
      children,
      ...props
    },
    ref
  ) => {
   
    const variantClasses = {
      primary:
        "bg-red-500 text-white px-6 py-3 rounded hover:bg-red-700 active:bg-red-800",
      transparent: "border border-gray-600 text-gray-800 px-6 py-3 rounded",
      text: "text-red-500 px-6 py-3",
      fullWidth: "w-full bg-red-500 text-white",
      rounded: "bg-red-500 text-white px-6 py-3 rounded-full",
      disabled: "bg-gray-400 text-white px-6 py-3 rounded cursor-not-allowed"
    };

    return (
      <button
        ref={ref}
        className={clsx(
          "flex items-center justify-center gap-2 font-bold text-sm rounded px-6 py-3 cursor-pointer transition",
          variant && variantClasses[variant], 
          fullWidth && "w-full bg-red-500 text-white",
          rounded && "bg-red-500 text-white px-6 py-3 rounded-full",
          disabled && "bg-gray-400 text-white px-6 py-3 rounded cursor-not-allowed",
          className
        )}
        {...props}
      >
        {prefixIcon && <span className="rtl:rotate-180">{prefixIcon}</span>}
        {children}
        {suffixIcon && <span className="rtl:rotate-180">{suffixIcon}</span>}
      </button>
    );
  }
);

export default Button;
