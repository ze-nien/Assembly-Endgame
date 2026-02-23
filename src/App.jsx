import GameStatus from "./components/GameStatus";
import Keyboard from "./components/Keyboard";
import Programing from "./components/Programing";
import Header from "./Header";
import langs from "./components/langs";
import styles from "./App.module.css";
import { useState } from "react";
import { getRandomWord } from "./components/utils";
import Confetti from "react-confetti";

function App() {
  const [currentWord, setCurrentWord] = useState(() =>
    getRandomWord().toUpperCase(),
  );
  console.log(currentWord);
  const [guessLetter, setGuessLetter] = useState([]);

  const wrongGuessCount = guessLetter.filter(
    (letter) => !currentWord.includes(letter),
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessLetter.includes(letter));
  const isGameLost = wrongGuessCount >= langs.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessLetter[guessLetter.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const addLetter = (letter) => {
    setGuessLetter((prev) =>
      guessLetter.includes(letter) ? prev : [...prev, letter.toUpperCase()],
    );
  };

  const startNewGame = () => {
    setCurrentWord(() => getRandomWord().toUpperCase());
    setGuessLetter([]);
  };

  return (
    <>
      <Header />
      <main>
        {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
        <section className={styles.section}>
          <GameStatus
            isGameOver={isGameOver}
            isGameLost={isGameLost}
            isGameWon={isGameWon}
            isLastGuessIncorrect={isLastGuessIncorrect}
            langs={wrongGuessCount > 0 && langs[wrongGuessCount - 1].name}
          />
        </section>

        <section className={styles.section}>
          <Programing langs={langs} wrongGuessCount={wrongGuessCount} />
        </section>

        <section className={styles.section}>
          <Keyboard
            isGameOver={isGameOver}
            isGameLost={isGameLost}
            addLetter={addLetter}
            currentWord={currentWord}
            guessLetter={guessLetter}
          />
        </section>

        <section className={styles.section}>
          {isGameOver ? (
            <button className={styles.NewGame} onClick={startNewGame}>
              New Game
            </button>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default App;
