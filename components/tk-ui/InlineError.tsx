import { forwardRef } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";

export type InlineErrorProps = React.HtmlHTMLAttributes<HTMLDivElement>;

const InlineError = forwardRef<HTMLDivElement, InlineErrorProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={`flex items-start gap-[6px] flex items-center ${className}`}
        ref={ref}
        {...props}
      >
        {
          <BsExclamationTriangleFill className="text-red-500 text-primary text-sm flex-shrink-0" />
        }
        <small className="text-black text-xs">{children}</small>
      </div>
    );
  }
);

export default InlineError;
