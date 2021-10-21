import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.dogs}>
          <h4>Dogs</h4>
          <Link href="/dogs">
            <a className={styles.imageContainer}>
              <Image
                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_57.jpg"
                className={styles.image}
                layout="fill"
                objectFit="contain"
                alt="dogs"
              />
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
