import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children, onClick }: any) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
