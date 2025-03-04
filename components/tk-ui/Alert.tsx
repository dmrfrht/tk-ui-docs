import React, { forwardRef } from "react";
import clsx from "clsx";
import { BsInfoCircleFill } from "react-icons/bs";

export type AlertProps = {
  type?: "error" | "warning" | "information";
  heightLimit?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ type = "error", children, className, heightLimit, ...props }, ref) => {
    return (
      <div
        className={clsx(
          `flex gap-6 border-2 border-dashed border-yellow-500 p-[12px_15px] text-[12px] mt-5 flex items-center ${
            heightLimit && "max-h-[100px] overflow-auto"
          } ${className}`
        )}
        ref={ref}
        {...props}
        tabIndex={0}
      >
        <BsInfoCircleFill
          className={clsx(
            type === "error" && "text-red-500 text-lg",
            type === "warning" && "text-yellow-500 text-lg",
            type === "information" && "text-blue-500 text-lg"
          )}
        />
        {children}
      </div>
    );
  }
);

export default Alert;
