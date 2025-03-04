import clsx from "clsx";

import React, { JSX } from "react";

export type DividerClassNames = {
  dividerClass?: string;
  lineClass?: string;
  iconClass?: string;
};

type Orientation = "horizontal" | "vertical";

type DividerProps = {
  icon?: JSX.Element;

  componentStyle?: DividerClassNames;

  orientation?: Orientation;
};

const Divider = ({
  icon,
  componentStyle,
  orientation = "horizontal",
}: DividerProps) => {
  const isHorizontal = orientation === "horizontal";

  const isVertical = orientation === "vertical";

  return (
    <div
      className={clsx(
        "flex items-center",
        isHorizontal && "my-5",
        isVertical && "flex-col mx-5",
        componentStyle?.dividerClass
      )}
      data-testid="divider"
      role="separator"
    >
      {isHorizontal && (
        <>
          <div
            className={clsx(
              "flex-grow h-[2px] w-[1px] bg-[#eaf2fc]",
              componentStyle?.lineClass
            )}
            data-testid="line"
            aria-orientation={orientation}
          />

          {icon && (
            <div
              className={clsx(
                "w-[1.875rem] h-[1.875rem] flex justify-center items-center",
                componentStyle?.iconClass
              )}
              data-testid="icon"
            >
              {icon}
            </div>
          )}

          <div
            className={clsx(
              "flex-grow h-[2px] w-[1px] bg-[#eaf2fc]",
              componentStyle?.lineClass
            )}
            data-testid="line"
            aria-orientation={orientation}
          />
        </>
      )}

      {isVertical && (
        <div
          className={clsx(
            "flex-col flex-grow h-14 w-[1px] bg-[#eaf2fc]",
            componentStyle?.lineClass
          )}
          data-testid="line"
          aria-orientation={orientation}
        />
      )}
    </div>
  );
};

export default Divider;
