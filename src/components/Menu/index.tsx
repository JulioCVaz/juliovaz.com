import { MenuItem } from "./MenuItem";
import styles from "./styles.module.css";

const menuItems = {
  home: {
    link: "#",
    label: "Home",
  },
  about: {
    link: "#",
    label: "About",
  },
  blog: {
    link: "#",
    label: "Blog",
  },
};

export const Menu = () => {
  return (
    <aside className={styles.menu}>
      {Object.entries(menuItems).map(([key, item]) => (
        <MenuItem key={key} link={item.link} label={item.label} />
      ))}
    </aside>
  );
};
