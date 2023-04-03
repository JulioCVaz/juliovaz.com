import Link from "next/link";

type MenuLinkProps = {
  link: string;
  label: string;
};

export const MenuItem = ({ link, label, ...props }: MenuLinkProps) => (
  <Link href={link} {...props}>
    {label}
  </Link>
);
