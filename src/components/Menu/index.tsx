import { useState } from "react";
import { MenuItem } from "./MenuItem";
import Image from "next/image";

import MenuIcon from "../../../icons/Menu.svg";

import styles from "./index.module.scss";

const menuItems = {
  about: {
    link: "#",
    label: "About",
  },
  experiences: {
    link: "#",
    label: "Experiences",
  },
  projects: {
    link: "#",
    label: "Projects",
  },
  resume: {
    link: "#",
    label: "Resume",
  },
  blog: {
    link: "#",
    label: "Blog",
  },
};

export const Menu = ({ translations }: any) => {
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
        <div className={styles.sidenavLinkContainer}>
          <a className={styles.closeMenuToggle} onClick={() => setOpen(false)}>
            &times;
          </a>
          {Object.entries(menuItems).map(([key, item]) => {
            const translation: string | any = Object.keys(translations).find(
              (word) => word == key
            );
            return (
              <MenuItem
                key={key}
                link={item.link}
                label={translations[translation]}
              />
            );
          })}
        </div>
      </div>
      <a className={styles.menuToggle}>
        <Image
          priority
          src={MenuIcon}
          alt="menu icon"
          onClick={() => setOpen(true)}
        />
      </a>
    </>
  );
};
