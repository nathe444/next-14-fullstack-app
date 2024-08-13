import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";
const Navlink = ({ item }) => {
  let pathName = usePathname();
  return (
    <Link
      className={`${styles.container} ${
        pathName === item.path ? styles.active : ""
      }`}
      href={item.path}
    >
      {item.name}
    </Link>
  );
};

export default Navlink;
