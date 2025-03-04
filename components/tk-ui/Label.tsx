import clsx from "clsx";
import React, { forwardRef } from "react";
 
const Label = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(({ className, ...props }, ref) => {
  return <label className={clsx("text-black", className)} ref={ref} {...props} />;
});
 
export default Label;