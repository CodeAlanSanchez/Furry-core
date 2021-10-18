import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h4>Like this page? Consider donating 🐶</h4>
        <div className={styles.donate}>
          {/* <Link href="/donate">
            <a className={[styles.stripe, styles.info].join(" ")}>Stripe</a>
          </Link> */}
          <p className={[styles.bitcoin, styles.info].join(" ")}>
            Bitcoin address: 9283fhjdpsqo8rj4p9asdjp9ausf89j
          </p>
          <p className={[styles.ether, styles.info].join(" ")}>
            Ethereum address: 9283fhjdpsqo8rj4p9asdjp9ausf89j
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
