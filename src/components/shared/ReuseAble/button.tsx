import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#3838F0] text-white shadow hover:bg-[#3838F0]/90",
        destructive: "bg-[#FF4949] text-white shadow-sm hover:bg-[#FF4949]/90",
        outline:
          "border border-[#FF4949] bg-white text-[#FF4949] shadow-sm hover:bg-[#FF4949]/10 ",
        secondary: "bg-[#000080] text-white shadow-sm hover:bg-[#000080]/80",
        ghost: "hover:bg-[#7373741A] bg-[#7373741A] text-gray-700",
        link: "text-[#3838F0] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      animation: {
        default: "active:scale-95",
        no: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  hideRing?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      hideRing,
      animation,
      loading,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          !hideRing &&
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          buttonVariants({
            variant,
            size,
            animation,
            className,
          })
        )}
        ref={ref}
        {...props}
        disabled={props.disabled || loading}
        type={props.type || "button"}
      >
        {loading ? (
          <span className="flex items-center gap-3">
            {loading && <Loader2 className="animate-spin" />}
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
