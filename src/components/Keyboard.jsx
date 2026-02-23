import React from "react";
import clsx from "clsx";
import styles from "./Keyboard.module.css";

const Keyboard = ({
  addLetter,
  currentWord,
  guessLetter,
  isGameOver,
  isGameLost,
}) => {
  const atoz = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <section className={styles.inputContainer}>
        {currentWord.split("").map((letter, index) => {
          const letterClassName = clsx(styles.kbInput, {
            [styles.missLetter]: isGameLost && !guessLetter.includes(letter),
          });
          return (
            <span key={`${letter}-${index}`} className={letterClassName}>
              {isGameLost || guessLetter.includes(letter) ? letter : ""}
            </span>
          );
        })}
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
