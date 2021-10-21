import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/cats">
        <a>
          <h6>Cats</h6>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h3 className={styles.logo}>Furry Core</h3>
        </a>
      </Link>
      <Link href="/dogs">
        <a>
          <h6>Dogs</h6>
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
