import styles from "./index.module.scss";

export const Button = ({ type, children }: any) => (
  <a
    className={[styles.button, styles["button-outline"]].join(" ")}
    href="https://drive.google.com/file/d/18VNj8VmHDra18t2XIfd9N1-4IkgSG33P/view?usp=sharing"
    target="_blank"
    role="button"
  >
    {children}
  </a>
);
