import type { NextPage } from "next";
import Head from "next/head";

const Dog: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Furry Core</title>
        <meta name="description" content="Cute doggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>id: id</p>
        <h1>name</h1>
        <p>description</p>
      </main>
    </>
  );
};

export default Dog;
