import React from "react";
import styles from "./GameStatus.module.css";
import clsx from "clsx";
import { getFarewellText } from "./utils";

const GameStatus = ({
  isGameOver,
  isGameLost,
  isGameWon,
  isLastGuessIncorrect,
  langs,
}) => {
  const className = clsx(styles.GameStatusContainer, {
    [styles.isWon]: isGameWon,
    [styles.isLost]: isGameLost,
    [styles.incorrect]: !isGameOver && isLastGuessIncorrect,
  });

  const renderGameStatus = () => {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <>
          <h3>{getFarewellText(langs)}</h3>
        </>
      );
    }
    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <h3>Well done!</h3>
        </>
      );
    }
    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <h3>You lose! Better start learning Assembly 💀</h3>
        </>
      );
    }
    return null;
  };

  return <div className={className}>{renderGameStatus()}</div>;
};

export default GameStatus;
