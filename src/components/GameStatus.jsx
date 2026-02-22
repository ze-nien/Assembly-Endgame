import React from "react";
import styles from "./GameStatus.module.css";
import clsx from "clsx";

const GameStatus = ({ isGameOver, isGameLost, isGameWon }) => {
  const className = clsx(styles.GameStatusContainer, {
    [styles.isWon]: isGameWon,
    [styles.isLost]: isGameLost,
  });

  return (
    <div className={className}>
      {isGameOver ? (
        isGameWon ? (
          <div>
            <h2>You win!</h2>
            <h3>Well done!</h3>
          </div>
        ) : (
          <div>
            <h2>Game over!</h2>
            <h3>You lose! Better start learning Assembly 💀</h3>
          </div>
        )
      ) : null}
    </div>
  );
};

export default GameStatus;
