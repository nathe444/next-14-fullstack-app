"use client";
import { auth } from "@/lib/auth";
import styles from "./links.module.css";
import Navlink from "./navlink/Navlink";
import { useState } from "react";
import { handleLogOut } from "@/lib/action";

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

const Links = async ({ session }) => {
  const isAdmin = true;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.name} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <Navlink item={{ name: "Admin", path: "/admin" }} />
            )}

            <form action={handleLogOut}>
              <button className={styles.logout}>Logout</button>
            </form>
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
