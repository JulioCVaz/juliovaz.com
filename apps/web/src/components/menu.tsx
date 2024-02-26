import type { IconProps } from "@westeros/ui/icon";
import { Icon } from "@westeros/ui/icon";
import Link from "next/link";
import type { LinkProps } from "next/link";

interface MenuLinkType {
  icon: IconProps["name"];
  children: string;
  link: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

function MenuItem({ icon, link, children: label }: MenuLinkType): JSX.Element {
  return (
    <li>
      <Link className="flex hover:underline" {...link}>
        <Icon className="mr-xxsmall" color="white" name={icon} />
        {label}
      </Link>
    </li>
  );
}

function Root({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <header className="flex flex-col items-center justify-between border-b border-gray-700 p-4 sm:flex-row">
      <Link className="mb-4 text-xl font-semibold sm:mb-0" href="/">
        juliovaz.com
      </Link>
      <nav>
        <ul className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          {children}
        </ul>
      </nav>
    </header>
  );
}

const Menu = {
  Root,
  Item: MenuItem,
};

export default Menu;
