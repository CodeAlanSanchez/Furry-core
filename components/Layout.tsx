import React from "react";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Head from "next/head";

import { Provider } from "react-redux";
import store from "../store";

const Layout = ({ children }: { children: any }) => {
  return (
    <Provider store={store}>
      <div className={styles.page}>
        <Head>
          <title>Furry Core</title>
        </Head>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </Provider>
  );
};

export default Layout;
