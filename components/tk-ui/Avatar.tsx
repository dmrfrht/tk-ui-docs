import React, { ReactNode } from "react";
import { Tooltip, TooltipPosition } from "./Tooltip";
import { generateUUID } from "../../utils/uuidGenerator";

export type AvatarProps = {
  size: number;

  variant?: "primary" | "black" | "gray";

  layout?: "horizontal" | "vertical";

  title: string;

  subTitle?: string;

  infoIcon?: ReactNode;

  infoContent?: ReactNode;

  componentStyle?: AvatarComponentStyle;

  className?: string;

  showShortName?: boolean;

  imgSource?: string;

  testId?: string;

  avatarId?: string;

  tooltipPagePosition?: TooltipPosition;
};

export type AvatarComponentStyle = {
  avatarCircleStyle?: string;
  avatarContentStyle?: string;
  avatarTitleStyle?: string;
  avatarTooltipStyle?: string;
};

const Avatar = ({
  title,
  subTitle,
  size,
  componentStyle,
  variant = "primary",
  layout = "vertical",
  infoContent,
  infoIcon,
  className,
  showShortName = false,
  imgSource,
  avatarId = generateUUID(),
  tooltipPagePosition,
}: AvatarProps) => {
  const getShortNameFromTitle = () => {
    const splitTitle = title.split(" ");

    const firstLetter = splitTitle[0].charAt(0);

    const lastLetter = splitTitle[splitTitle.length - 1].charAt(0);

    let fullLetter: string;

    if (splitTitle.length > 1) {
      fullLetter = firstLetter + lastLetter;
    } else {
      fullLetter = firstLetter;
    }

    return fullLetter;
  };

  const sizeStyle = { width: `${size}px`, height: `${size}px` };

  const variantClassnames = {
    primary: "bg-red-500 text-white",
    black: "bg-black text-white",
    gray: "bg-gray-500",
  };

  return (
    <div
      className={`mt-4 flex inline-flex justify-center items-center ${
        layout === "vertical" ? "flex-col" : "flex-row"
      } ${className}`}
    >
      <div
        className={`inline-flex items-center justify-center rounded-full overflow-hidden relative ${variantClassnames[variant]} ${componentStyle?.avatarCircleStyle}`}
        style={sizeStyle}
      >
        {imgSource && (
          <img
            src={imgSource}
            alt="avatar"
            className={`w-full h-full object-cover`}
          />
        )}
        {showShortName && (
          <span className="absolute">{getShortNameFromTitle()}</span>
        )}
      </div>
      <div
        className={`${
          layout === "vertical" ? "mt-[6px] items-center" : "ml-1 items-center"
        } flex flex-col`}
      >
        <div
          className={`inline-flex items-center font-bold text-[14px] leading-6 ${componentStyle?.avatarContentStyle}`}
        >
          <span
            className={`ml-1 cursor-pointer ${componentStyle?.avatarTitleStyle}`}
          >
            {title}
          </span>
          {infoIcon && (
            <span data-tooltip={`${avatarId}-avatar`} className="ml-1">
              {infoIcon}
            </span>
          )}
          {infoContent && (
            <Tooltip
              id={`${avatarId}-avatar`}
              content={infoContent}
              position={tooltipPagePosition}
              className={componentStyle?.avatarTooltipStyle}
            />
          )}
        </div>
        <div className="text-[12px]">{subTitle}</div>
      </div>
    </div>
  );
};

export default Avatar;
