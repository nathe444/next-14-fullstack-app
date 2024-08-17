"use client";
import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";
const Navlink = ({ item, onClick }) => {
  let pathName = usePathname();
  return (
    <Link
      className={`${styles.container} ${
        pathName === item.path ? styles.active : ""
      }`}
      href={item.path}
      onClick={onClick}
    >
      {item.name}
    </Link>
  );
};

export default Navlink;
