import { cn } from "@/lib/utils";
import { Popover } from "@mui/material";
import { ChevronDown } from "lucide-react";
import * as React from "react";

export type OptionsType = { label: string; value: string };

export type SelectType = {
  options: OptionsType[];
  value?: string;
  className?: string;
  label?: string;
};

export default function SelectComp({
  options,
  value,
  className,
  label,
}: SelectType) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [select, setSelect] = React.useState<string | undefined>(undefined);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    setSelect(value);
  }, [value]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="relative ">
      <button
        onClick={handleClick}
        className={cn(
          `bg-[#1D98F0] flex items-center gap-4 md:text-sm text-xs text-white  px-5 py-2 rounded-lg`,
          className
        )}
      >
        <span>{select ? select : label || "None"}</span>
        <ChevronDown className="" />
      </button>
      <Popover
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className=" "
      >
        <h3 className="px-3 py-2 text-[#000080] text-center">Filter By</h3>
        <hr />
        <div className="w-full flex flex-col   py-3  min-w-xl min-h-[100px]">
          {options?.map((item) => (
            <button
              className={cn(
                select === item?.value && "bg-gray-100 ",
                "md:px-10 px-7  py-1 hover:bg-gray-100 text-left"
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
      </Popover>
    </div>
  );
}
