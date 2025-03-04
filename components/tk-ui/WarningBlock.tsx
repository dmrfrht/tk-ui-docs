import React from "react";
import { BsChevronDoubleRight, BsInfoCircleFill } from "react-icons/bs";
import Button from "./Button";

export interface WarningBlockProps {
  warning: string;
  buttonText: string;
  onClick: () => void;
}

// FIXME: Fix font size for better UI

const WarningBlock = ({ warning, buttonText, onClick }: WarningBlockProps) => {
  return (
    <div className="flex gap-[12px] border-[1px] border-[#c3cbd7] p-[15px] px-[15.6px] text-[14px] items-center mt-[30px]">
      <BsInfoCircleFill className="text-[20px] flex-shrink-0" />
      <div className={"flex items-center gap-2"}>
        {warning}
        <Button variant="text" onClick={onClick} className="text-[14px]">
          {buttonText}
          <BsChevronDoubleRight className="stroke-[1]" />
        </Button>
      </div>
    </div>
  );
};

export default WarningBlock;
