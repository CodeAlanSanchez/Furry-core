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
        <a className="image-container">
          <Image
            src="https://images.dog.ceo/breeds/bulldog-french/n02108915_57.jpg"
            layout="fill"
            objectFit="contain"
            alt="dogs"
          />
        </a>
      </Link>
    </main>
  );
};

export default Home;
