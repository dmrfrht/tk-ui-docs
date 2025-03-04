import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type TooltipPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export type TooltipColor = "dark" | "light";

type TooltipProps = {
  id: string;
  color?: TooltipColor;
  position?: TooltipPosition;
  content?: React.ReactNode;
  className?: string;
};

export const Tooltip: React.FC<TooltipProps> = ({
  id,
  color = "dark",
  position = "top",
  content,
  className,
}) => {
  const tooltip = useRef(null);
  const tooltipPosition = position;
  const tooltipColor = color;

  const [open, setOpen] = useState(false);

  const mouseEnter = () => {
    setOpen(true);
  };

  const mouseLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    const element =
      document.querySelector(`[data-tooltip="${id}"]`) ??
      document.querySelector(`.${id}`);

    if (element) {
      element.addEventListener("mouseenter", mouseEnter);
      element.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseover", mouseEnter);
        element.removeEventListener("mouseout", mouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    if (open && tooltip.current) {
      const element =
        document.querySelector(`[data-tooltip="${id}"]`) ??
        document.querySelector(`.${id}`);
      const elementBound = element?.getBoundingClientRect();
      const tooltipBound = tooltip.current?.getBoundingClientRect();

      let top = 0;
      let left = 0;

      if (tooltipPosition === "top") {
        top = elementBound!.top - tooltipBound.height - 10;
        left =
          elementBound!.left -
          tooltipBound!.width / 2 +
          elementBound!.width / 2;
      }

      if (tooltipPosition === "bottom") {
        top = elementBound!.top + elementBound!.height + 10;
        left =
          elementBound!.left - tooltipBound.width / 2 + elementBound!.width / 2;
      }

      if (tooltipPosition === "left") {
        top =
          elementBound!.top -
          tooltipBound.height / 2 +
          elementBound!.height / 2;
        left = elementBound!.left - tooltipBound.width - 10;
      }

      if (tooltipPosition === "right") {
        top =
          elementBound!.top -
          tooltipBound.height / 2 +
          elementBound!.height / 2;
        left = elementBound!.right + 10;
      }

      if (tooltipPosition === "top-right") {
        top = elementBound!.top;
        left = elementBound!.right + 10;
      }

      if (tooltipPosition === "top-left") {
        top = elementBound!.top;
        left = elementBound!.left - tooltipBound.width - 10;
      }

      if (tooltipPosition === "bottom-right") {
        top = elementBound!.bottom - tooltipBound.height;
        left = elementBound!.right + 10;
      }

      if (tooltipPosition === "bottom-left") {
        top = elementBound!.bottom - tooltipBound.height;
        left = elementBound!.left - tooltipBound.width - 10;
      }

      tooltip.current.style.top = `${top + window.scrollY}px`;
      tooltip.current.style.left = `${left}px`;
    }
  }, [open, id, tooltipPosition]);

  if (!open) return <></>;

  return createPortal(
    <div
      ref={tooltip}
      className={clsx(
        ` "absolute max-w-[13.75rem] rounded-md p-2 text-sm font-light leading-4 pointer-events-none z-[9999]",
       tooltipColor === "dark"
         ? "bg-black text-white shadow-md"
         : "bg-white text-black border border-gray-300",
       tooltipPosition === "top" &&
         "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
       tooltipPosition === "bottom" &&
         "top-full left-1/2 transform -translate-x-1/2 mt-3",
       tooltipPosition === "left" &&
         "right-full top-1/2 transform -translate-y-1/2 mr-3",
       tooltipPosition === "right" &&
         "left-full top-1/2 transform -translate-y-1/2 ml-3", ${className}`
      )}
    >
      {content}

      <div
        className={clsx(
          "absolute w-0 h-0 border-4 border-transparent",
          tooltipPosition === "top" &&
            "border-t-black bottom-[-8px] left-1/2 transform -translate-x-1/2",
          tooltipPosition === "bottom" &&
            "border-b-black top-[-8px] left-1/2 transform -translate-x-1/2",
          tooltipPosition === "left" &&
            "border-l-black right-[-8px] top-1/2 transform -translate-y-1/2",
          tooltipPosition === "right" &&
            "border-r-black left-[-8px] top-1/2 transform -translate-y-1/2",
          tooltipColor === "light" &&
            "border-t-gray-300 border-b-gray-300 border-l-gray-300 border-r-gray-300"
        )}
      />
    </div>,
    document.body
  );
};
