import React from "react";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className={styles.page}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
