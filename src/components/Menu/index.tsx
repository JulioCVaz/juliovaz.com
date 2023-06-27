import { MenuItem } from "./MenuItem";

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
    <aside>
      {Object.entries(menuItems).map(([key, item]) => (
        <MenuItem key={key} link={item.link} label={item.label} />
      ))}
    </aside>
  );
};
