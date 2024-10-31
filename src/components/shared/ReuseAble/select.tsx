import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import CustomPopover from "./custom-popover";

export type OptionsType = { label: string; value: string };

export type SelectType =
  | {
      options: OptionsType[];
      value?: string;
      className?: string;
      label?: string;
      containerClass?: string;
      Component?: React.ReactElement;
      btnClassName?: string;
      title?: string;
      btnIcon?: React.ReactElement;
    }
  | {
      options?: OptionsType[];
      value?: string;
      className?: string;
      label?: string;
      containerClass?: string;
      Component: React.ReactElement;
      title?: string;
      btnIcon?: React.ReactElement;
      btnClassName?: string;
    };

export default function SelectComp({
  options,
  value,
  className,
  label,
  containerClass,
  Component,
  btnIcon,
  title,
  btnClassName,
}: SelectType) {
  const [select, setSelect] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setSelect(value);
  }, [value]);

  return (
    <div className={cn(`relative`, containerClass)}>
      <CustomPopover
        btnClassName={btnClassName}
        popIcon={
          btnIcon || (
            <button
              className={cn(
                `bg-[#1D98F0] w-full  flex whitespace-nowrap font-medium items-center gap-4 md:text-sm text-xs text-white  px-5 py-2 rounded-lg`,
                className
              )}
            >
              <span>{select ? select : label || "None"}</span>
              <ChevronDown className="" />
            </button>
          )
        }
      >
        <div className=" w-full relative ">
          {!Component && (
            <h3 className="px-3 py-2 text-[#000080] font-medium text-center">
              {title || "Filter By"}
            </h3>
          )}
          {!Component && <hr />}
          {!Component && (
            <div className="w-full flex flex-col   py-3  min-w-xl min-h-[100px]">
              {options?.map((item) => (
                <button
                  className={cn(
                    select === item?.value && "bg-gray-100 ",
                    "md:px-10 px-7 font-medium text-gray-600 py-1.5 hover:bg-gray-100 text-left"
                  )}
                  key={item.label}
                  onClick={() => {
                    setSelect(select ? undefined : item?.value);
                  }}
                >
                  {item?.label}
                </button>
              ))}
            </div>
          )}
          {Component && Component}
        </div>
      </CustomPopover>
    </div>
  );
}
