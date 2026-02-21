import GameStatus from "./components/GameStatus";
import Keyboard from "./components/Keyboard";
import Programing from "./components/Programing";
import Header from "./Header";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [slots, setSlots] = useState(Array(8).fill(""));
  const [cursor, setCursor] = useState(0);
  const [activeKey, setActiveKey] = useState(null);

  const addChar = (char) => {
    if (cursor < 8) {
      setSlots((prev) => {
        const newArr = [...prev];
        newArr[cursor] = char.toUpperCase();
        return newArr;
      });
      setCursor((c) => c + 1);
      setActiveKey(char.toUpperCase());
    }
  };

  useEffect(() => {
    const keyDown = (e) => {
      if (e.key.length === 1) {
        addChar(e.key);
      }
    };
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  }, [cursor]);

  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <GameStatus />
        </section>

        <section className={styles.section}>
          <Programing />
        </section>

        <section className={styles.section}>
          <Keyboard slots={slots} addChar={addChar} activeKey={activeKey} />
        </section>

        <section className={styles.section}>
          <button className={styles.NewGame}>
            <strong>New Game</strong>
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
