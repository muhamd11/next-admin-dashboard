"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch className={styles.searchIcon}/>
          <input
            type="text"
            placeholder="Search...."
            className={styles.input}
          />
        </div>
        <div className={styles.icons}>
          <MdNotifications size={25} className={styles.icon}/>
          <MdOutlineChat size={25} className={styles.icon}/>
          <MdPublic size={25} className={styles.icon}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
