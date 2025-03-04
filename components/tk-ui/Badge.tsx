import clsx from "clsx";
import React, { forwardRef } from "react";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={clsx(
          "bg-red-500 text-white text-center max-w-max min-w-32 px-[16px] pt-[5px] pb-[4px]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Badge;
