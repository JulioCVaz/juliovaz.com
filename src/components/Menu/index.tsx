import { useState } from "react";
import { MenuItem } from "./MenuItem";
import Image from "next/image";

import MenuIcon from "../../../icons/Menu.svg";

import styles from "./index.module.scss";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        id="mySidenav"
        className={styles.sidenav}
        style={{
          display: open ? "block" : "none",
        }}
      >
        <a className={styles.closebtn} onClick={() => setOpen(false)}>
          &times;
        </a>
        {Object.entries(menuItems).map(([key, item]) => (
          <MenuItem key={key} link={item.link} label={item.label} />
        ))}
      </div>
      <Image
        priority
        src={MenuIcon}
        alt="menu icon"
        onClick={() => setOpen(true)}
      />
    </>
  );
};
