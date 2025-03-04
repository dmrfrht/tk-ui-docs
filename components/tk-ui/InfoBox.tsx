import clsx from "clsx";
import React, { forwardRef } from "react";

import {
  BsExclamationTriangleFill,
  BsInfoCircleFill,
  BsXCircleFill,
} from "react-icons/bs";

export type InfoBoxProps = {
  icon?: React.ReactElement;
  variant?: "notification" | "warning" | "error";
} & React.HTMLAttributes<HTMLDivElement>;

const ICON_MAP = {
  notification: <BsInfoCircleFill className="text-blue-500" />,
  warning: <BsExclamationTriangleFill className="text-yellow-500 " />,
  error: <BsXCircleFill className="text-red-500" />,
};

const InfoBox = forwardRef<HTMLDivElement, InfoBoxProps>(
  (
    {
      children,
      icon: customIcon,
      className,
      variant = "notification",
      ...props
    },
    ref
  ) => {
    const icon = customIcon || ICON_MAP[variant];

    return (
      <div
        className={clsx(
          "flex items-center py-[12px] px-[10px] border-[3.008px] border-t-0 border-r-0 border-b-0 gap-2",
          className,
          variant === "notification" && "border-blue-500 bg-blue-100",
          variant === "warning" && "border-yellow-500 bg-yellow-100",
          variant === "error" && "border-red-500 bg-red-100"
        )}
        ref={ref}
        {...props}
      >
        {icon} {children}
      </div>
    );
  }
);

InfoBox.displayName = "InfoBox";

export default InfoBox;
