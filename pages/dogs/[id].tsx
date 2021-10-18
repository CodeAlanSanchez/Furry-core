import type { NextPage } from "next";
import Head from "next/head";
import animals from "../../animals.json";

const Dog: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Furry Core</title>
        <meta name="description" content="Cute doggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>id: {props.animal.id}</p>
        <h1>{props.animal.name}</h1>
        <p>{props.animal.description}</p>
      </main>
    </>
  );
};

Dog.getInitialProps = ({ query }) => {
  return {
    animal: animals["dogs"][query.id],
  };
};

export default Dog;
