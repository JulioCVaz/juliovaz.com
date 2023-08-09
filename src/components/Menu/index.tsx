import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";

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
    // <aside>
    //   {Object.entries(menuItems).map(([key, item]) => (
    //     <MenuItem key={key} link={item.link} label={item.label} />
    //   ))}
    // </aside>
    <>
      <div
        id="mySidenav"
        className={styles.sidenav}
        style={{
          display: open ? "block" : "none",
        }}
      >
        <a
          href="javascript:void(0)"
          className={styles.closebtn}
          onClick={() => setOpen(false)}
        >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <h2>Sidenav Example</h2>
      <p>Click on the element below to open the side navigation menu.</p>
      <span onClick={() => setOpen(true)}>&#9776; open</span>
    </>
  );
};
