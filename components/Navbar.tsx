import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <h3>Furry Core</h3>
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
