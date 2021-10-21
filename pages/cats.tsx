import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../api";
import Button from "../components/Button";
import styles from "../styles/Animal.module.css";

interface Cat {
  cat: string;
}

const Cat: NextPage<Cat> = ({ cat }: Cat) => {
  const [data, setData] = useState(cat);

  const fetchData = async () => {
    const req = await fetch("https://cataas.com/cat?json=true");
    const res = await req.json();

    setData(res.url);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className={styles.content}>
      <div className="image-container">
        <Image
          src={`https://cataas.com/${data}`}
          layout="fill"
          objectFit="contain"
          alt="cats"
        />
      </div>
      <Button onClick={() => handleClick()}>New Cat</Button>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://cataas.com/cat?json=true");
  const { url: cat } = await res.json();

  return {
    props: { cat },
  };
}

export default Cat;
