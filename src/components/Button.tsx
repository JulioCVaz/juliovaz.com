import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-block text-sm text-center text-white leading-9 rounded-full border-solid border-2 border-blue",
  variants: {
    size: {
      default: "w-32 h-10 px-4",
    },
    outline: {
      true: "hover:bg-blue text-white transition duration-0.2",
      false: "bg-blue hover:bg-blue text-white",
    },
  },
  defaultVariants: {
    size: "default",
    outline: false,
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export function Button({
  outline = false,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ size, outline, className })} {...props}>
      {props.children}
    </button>
  );
}
