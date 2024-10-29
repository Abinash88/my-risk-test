import * as React from "react";
import { Loader2 } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#000080] text-white active:scale-95 hover:opacity-95 transition-all",
        destructive:
          "bg-[#1D98F0] text-white hover:bg-[#1D98F0]/90  active:scale-95 transition-all",
        outline:
          "border  border-[#00000033] bg-white hover:bg-[#D9D9D99C] hover:text-[#000080] hover:border-[#000080] active:scale-95 transition-all",
        secondary:
          "bg-[#3838F0] text-white hover:bg-[#3838F0]/80 active:scale-95 transition-all",
        ghost: " shadow-md active:scale-95  transition-all",
        link: "text-primary underline-offset-4 hover:underline active:scale-95 transition-all",
        light:
          "bg-[#D9D9D99C] text-[#000000] hover:opacity-90 active:scale-95 transition-all",
        success:
          "bg-[#28AE60] text-white hover:opacity-90 active:scale-95 transition-all",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  message?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      isLoading,
      message,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        type="button"
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-3">
            {isLoading && <Loader2 className="animate-spin" />}
            {message && <span>{message}</span>}
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
