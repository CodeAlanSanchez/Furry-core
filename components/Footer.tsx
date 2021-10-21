import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h4>Like this page? Consider donating 🐶</h4>
        <div className={styles.donate}>
          <p className={[styles.bitcoin, styles.info].join(" ")}>
            Bitcoin address: 17c4Zh3pvdAsaYYMRTuw6QnK3ZngAcRmKt
          </p>
          <p className={[styles.ether, styles.info].join(" ")}>
            Ethereum address: 0xAe51562b8fe1aE7bA13Ed8497CEdfEbC46Ffe5F3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
