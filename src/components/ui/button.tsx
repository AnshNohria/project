import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-purple-600 text-white shadow hover:bg-purple-700",
        outline:
          "border border-purple-200 bg-transparent hover:bg-purple-100 hover:text-purple-900",
        ghost: "hover:bg-purple-100 hover:text-purple-900",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-3",
        lg: "h-14 px-8",
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
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };