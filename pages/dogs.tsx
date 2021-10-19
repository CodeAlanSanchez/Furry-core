import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../api";
import Button from "../components/Button";
import styles from "../styles/Dog.module.css";

const Animal: NextPage = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state: { dogs: [{}] }) => state.dogs);

  // useEffect(() => {
  //   dispatch(fetchDogs);
  // }, []);

  const handleClick = () => {
    dispatch(fetchDogs);
  };

  return (
    <div className={styles.content}>
      <Image
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Qe-7V3Hiec0ZVD2f31FFzQHaEK%26pid%3DApi&f=1"
        alt="Dog"
        width={800}
        height={450}
        className={styles.image}
      />
      <Button onClick={() => handleClick()}>New Dog</Button>
    </div>
  );
};

export default Animal;
