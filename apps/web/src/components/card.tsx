import type { LinkProps } from "next/link";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { Icon } from "@westeros/ui/icon";
import Link from "next/link";

function CardBody({
  children,
}: {
  children: string | JSX.Element;
}): JSX.Element {
  return <p className="mb-2">{children}</p>;
}

function CardTitle({
  children,
}: {
  children: string | JSX.Element;
}): JSX.Element {
  return <h3 className="mb-2 text-xl font-bold">{children}</h3>;
}

function CardFooter({
  children,
}: {
  children: string | JSX.Element;
}): JSX.Element {
  return <p className="mb-2 text-sm text-gray-400">{children}</p>;
}

function CardImage({
  ...props
}: {
  src: string;
  alt: string;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents -- Necessary create a correct structure to card to not use "unknown" type
  [key: string]: Omit<ImageProps, "quality" | "style"> | unknown;
}): JSX.Element {
  return (
    <Image
      {...props}
      className="mb-2 h-48 w-full"
      quality={75}
      style={{
        objectFit: "cover",
      }}
    />
  );
}

function BaseComponent({
  extended,
  children,
}: {
  extended?: boolean;
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <div className="group/item rounded-md bg-gray-700 p-4 transition duration-150 ease-out hover:bg-gray-600 hover:ease-in">
      {extended ? (
        <div className="flex items-center justify-between">
          <div className="col-auto md:w-full lg:w-4/5">{children}</div>
          <div className="max-md:hidden">
            <Icon
              className="group/edit invisible h-6 w-6 text-sky-500 transition duration-150 ease-out hover:ease-in group-hover/item:visible"
              name="arrow-right"
            />
          </div>
        </div>
      ) : (
        <>
          {children}
          <div className="max-md:hidden">
            <Icon
              className="group/edit invisible h-6 w-6 text-sky-500 transition duration-150 ease-out hover:ease-in group-hover/item:visible"
              name="arrow-right"
            />
          </div>
        </>
      )}
    </div>
  );
}

interface CardBaseProps {
  linkable?: boolean;
  extended?: boolean;
  children: JSX.Element | JSX.Element[];
  link: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

function CardBase({
  linkable,
  extended,
  children,
  link,
}: CardBaseProps): JSX.Element {
  return linkable ? (
    <Link target="_blank" {...link}>
      <BaseComponent extended={extended}>{children}</BaseComponent>
    </Link>
  ) : (
    <BaseComponent extended={extended}>{children}</BaseComponent>
  );
}

const Card = {
  Base: CardBase,
  Image: CardImage,
  Body: CardBody,
  Title: CardTitle,
  Footer: CardFooter,
};

export default Card;
