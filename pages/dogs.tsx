import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../api";
import Button from "../components/Button";
import styles from "../styles/Animal.module.css";

interface Dog {
  dog: string;
}

const Dog: NextPage<Dog> = ({ dog }: Dog) => {
  const router = useRouter();
  const [data, setData] = useState(dog);

  const fetchData = async () => {
    const req = await fetch("https://dog.ceo/api/breeds/image/random");
    const res = await req.json();

    setData(res.message);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className={styles.content}>
      <div className="image-container">
        <Image src={data} layout="fill" objectFit="contain" alt="dogs" />
      </div>
      <Button onClick={() => handleClick()}>New Dog</Button>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const { message: dog } = await res.json();

  return {
    props: { dog },
  };
}

export default Dog;
