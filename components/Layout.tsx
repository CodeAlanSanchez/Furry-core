import React from "react";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Furry Core</title>
        <meta name="description" content="Cute doggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
