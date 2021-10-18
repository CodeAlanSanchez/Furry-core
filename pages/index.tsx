import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Link href="/dogs">
        <a>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0UkR_Zl_lCSYZ02uBDRPQwHaEK%26pid%3DApi&f=1"
            alt="dogs"
          />
        </a>
      </Link>
    </main>
  );
};

export default Home;
