"use client";
import styles from "./links.module.css";
import Navlink from "./navlink/Navlink";
import { useState } from "react";

const Links = () => {
  let links = [
    { name: "Homepage", path: "/" },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.name} />
        ))}
        {session ? (
          <>
            {isAdmin && <Navlink item={{ name: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <Navlink item={{ name: "Login", path: "/login" }} />
        )}
      </div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className={styles.menu}
      >
        <img src="./menu.png" alt="" className={styles.menu} />
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink
              item={link}
              key={link.name}
              onClick={() => {
                setOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
