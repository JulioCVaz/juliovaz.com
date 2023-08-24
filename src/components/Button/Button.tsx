import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex h-10 items-center justify-center rounded bg-zinc-50 text-zinc-900 font-medium py-1.5 text-small hover:bg-zinc-100",
  variants: {
    size: {
      default: "h-10 px-4",
      sm: "h-10 px-3",
      xs: "h-10 px-2 text-xs",
    },
    success: {
      true: "bg-emerald-500 hover:bg-emerald-600",
    },
  },
  defaultVariants: {
    size: "default",
    success: false,
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export function Button({
  success = false,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ size, success, className })} {...props}>
      {success ? "success" : props.children}
    </button>
  );
}
