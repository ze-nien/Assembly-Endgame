import React from "react";
import styles from "./Keyboard.module.css";

const Keyboard = ({ slots, addChar, activeKey }) => {
  const atoz = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const word = slots.map((w, i) => (
    <span key={i} className={styles.kbInput}>
      {w.toUpperCase()}
    </span>
  ));
  return (
    <>
      <section className={styles.inputContainer}>{word}</section>

      <section className={styles.keyBtnContainer}>
        {atoz.map((letter) => (
          <button
            style={{
              backgroundColor: activeKey === letter ? "#4CAF50" : "orange",
              transition: "all 0.1s",
            }}
            key={letter}
            value={letter}
            className={styles.key}
            onClick={() => addChar(letter)}
          >
            <p>{letter}</p>
          </button>
        ))}
      </section>
    </>
  );
};

export default Keyboard;
