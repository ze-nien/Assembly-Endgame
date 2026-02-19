import React from "react";
import styles from "./GameStatus.module.css";

const GameStatus = () => {
  const isWon = true;
  const isLost = false;
  const isGameOver = true;
  let statusElement = null;

  if (isGameOver) {
    if (isWon) {
      statusElement = (
        <>
          <h2>You win!</h2>
          <h3>Well done!</h3>
        </>
      );
    } else if (isLost) {
      statusElement = (
        <>
          <h2>Game over!</h2>
          <h3>You lose! Better start learning Assembly 💀</h3>
        </>
      );
    }
  } else {
    statusElement = <></>;
  }

  return (
    <div
      className={`${styles.GameStatusContainer} ${isWon && styles.isWon}  ${isLost && styles.isLost}`}
    >
      {statusElement}
    </div>
  );
};

export default GameStatus;
