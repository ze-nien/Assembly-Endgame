import GameStatus from "./components/GameStatus";
import Keyboard from "./components/Keyboard";
import Programing from "./components/Programing";
import Header from "./Header";
import langs from "./components/langs";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [currentWord, setCurrentWord] = useState("REACT");
  const [guessLetter, setGuessLetter] = useState([]);

  const wrongGuessCount = guessLetter.filter(
    (letter) => !currentWord.includes(letter),
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessLetter.includes(letter));
  const isGameLost = wrongGuessCount >= langs.length - 1;
  const isGameOver = isGameWon || isGameLost;

  console.log(isGameOver ? "true" : "false");
  const addLetter = (letter) => {
    setGuessLetter((prev) =>
      guessLetter.includes(letter) ? prev : [...prev, letter.toUpperCase()],
    );
  };

  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <GameStatus
            isGameOver={isGameOver}
            isGameLost={isGameLost}
            isGameWon={isGameWon}
          />
        </section>

        <section className={styles.section}>
          <Programing langs={langs} wrongGuessCount={wrongGuessCount} />
        </section>

        <section className={styles.section}>
          <Keyboard
            isGameOver={isGameOver}
            addLetter={addLetter}
            currentWord={currentWord.toUpperCase()}
            guessLetter={guessLetter}
          />
        </section>

        <section className={styles.section}>
          {isGameOver ? (
            <button className={styles.NewGame}>New Game</button>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default App;
