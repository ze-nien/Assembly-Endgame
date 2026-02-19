import React from "react";
import styles from "./Keyboard.module.css";

const Keyboard = () => {
  const atoz = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const handleClick = (letter) => {
    console.log(letter);
  };

  return (
    <>
      <section className={styles.inputContainer}>
        <span className={styles.kbInput}></span>
        <span className={styles.kbInput}></span>
        <span className={styles.kbInput}></span>
        <span className={styles.kbInput}></span>
        <span className={styles.kbInput}></span>
        <span className={styles.kbInput}></span>
        <span className={styles.kbInput}></span>
        <span className={styles.kbInput}></span>
      </section>
      <section className={styles.keyBtnContainer}>
        {atoz.map((letter) => (
          <button
            key={letter}
            className={styles.key}
            onClick={() => handleClick(letter)}
          >
            <p>{letter}</p>
          </button>
        ))}
      </section>
    </>
  );
};

export default Keyboard;
