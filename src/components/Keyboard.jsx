import React from "react";
import clsx from "clsx";
import styles from "./Keyboard.module.css";

const Keyboard = ({ addLetter, currentWord, guessLetter, isGameOver }) => {
  const atoz = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return (
    <>
      <section className={styles.inputContainer}>
        {currentWord.split("").map((letter) => (
          <span key={letter} className={styles.kbInput}>
            {guessLetter.includes(letter) ? letter.toUpperCase() : ""}
          </span>
        ))}
      </section>
      <section className={styles.keyBtnContainer}>
        {atoz.map((letter) => {
          const isGuessed = guessLetter.includes(letter); //確認是否已按按鈕
          //按按鈕與答案對照
          const isCorrect = isGuessed && currentWord.includes(letter);
          const isWrong = isGuessed && !currentWord.includes(letter);
          const className = clsx(styles.key, {
            [styles.correct]: isCorrect,
            [styles.wrong]: isWrong,
          });

          return (
            <button
              key={letter}
              value={letter}
              className={className}
              onClick={() => addLetter(letter)}
              disabled={isGameOver}
            >
              <p>{letter}</p>
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Keyboard;
