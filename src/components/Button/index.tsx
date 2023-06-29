import styles from "./index.module.scss";
import { clsx } from "clsx";

[(styles.button, styles["button-outline"])].join(" ");

export const Button = ({
  type = "default",
  link,
  target = "_blank",
  children,
}: any) => (
  <a
    className={clsx(styles.button, {
      [styles["button-default"]]: type === "default",
      [styles["button-outline"]]: type === "outline",
    })}
    href={link}
    target={target}
    role="button"
  >
    {children}
  </a>
);
