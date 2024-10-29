import { cn } from "@/lib/utils";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React, { type ReactNode } from "react";

type CustomPopoverType = {
  label?: string;
  className?: string;
  popIcon?: ReactNode | React.ReactElement;
  children: React.ReactNode;
};

const CustomPopover = ({
  label,
  popIcon,
  className,
  children,
}: CustomPopoverType) => {
  return (
    <Popover>
      <PopoverButton className="block cursor-pointer relative z-40 text-sm/6 font-semibold  focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        {label && label}
        <div className="">{popIcon}</div>
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className={cn(
          `divide-y divide-white/5 rounded-xl shadow-lg  relative z-40 bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0`,
          className
        )}
      >
        <div className="">{children}</div>
      </PopoverPanel>
    </Popover>
  );
};

export default CustomPopover;
