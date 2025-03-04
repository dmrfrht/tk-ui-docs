import clsx from "clsx";

import React, { forwardRef } from "react";

import { PatternFormat, PatternFormatProps } from "react-number-format";

import InlineError from "./InlineError";

export type InputGroupProps = React.HTMLAttributes<HTMLDivElement>;

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={clsx("flex flex-col relative gap-y-[6px]", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

InputGroup.displayName = "InputGroup";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// FIXME: Fix float label and overall styles hover, animation etc.

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder = "", ...props }, ref) => {
    return (
      <input
        className={clsx(
          "input border border-[#c3cbd7] p-3 font-medium text-base rounded-md w-full text-black focus:outline-none focus:border-blue-500 disabled:opacity-65 disabled:pointer-events-none",
          className
        )}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export type InputMaskedProps = PatternFormatProps;

const InputMasked: React.FC<InputMaskedProps> = ({ ...props }) => {
  return <PatternFormat customInput={Input} {...props} />;
};

export type InputFloatLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const InputFloatLabel = forwardRef<HTMLLabelElement, InputFloatLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={clsx(
          "floatLabel absolute font-medium text-base top-[13px] right-[13px] left-[13px] text-black flex items-center pointer-events-none opacity-75 transition-all group-has-[.input:focus]:text-blue-500 group-has-[.input:focus]:top-[5px] group-has-[.input:focus]:opacity-100 group-has-[.input:not(:placeholder-shown)]:top-[5px] group-has-[.input:not(:placeholder-shown)]:opacity-100",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

InputFloatLabel.displayName = "InputFloatLabel";

export type InputLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={clsx("label font-medium text-sm text-black", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

InputLabel.displayName = "InputLabel";

export type InputErrorProps = React.HTMLAttributes<HTMLDivElement>;

const InputError = forwardRef<HTMLDivElement, InputErrorProps>(
  ({ className, ...props }, ref) => {
    return (
      <InlineError
        className={clsx(className)}
        ref={ref}
        {...props}
      />
    );
  }
);

InputError.displayName = "InputError";

export default {
  Group: InputGroup,

  Field: Input,

  MaskField: InputMasked,

  FloatLabel: InputFloatLabel,

  Label: InputLabel,

  Error: InputError,
};
