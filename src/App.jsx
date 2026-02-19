import GameStatus from "./components/GameStatus";
import Keyboard from "./components/Keyboard";
import Programing from "./components/Programing";
import Header from "./Header";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <body>
        <main>
          <section className={styles.section}>
            <GameStatus />
          </section>

          <section className={styles.section}>
            <Programing />
          </section>

          <section className={styles.section}>
            <Keyboard />
          </section>
          <section className={styles.section}>
            <button className={styles.NewGame}>
              <strong>New Game</strong>
            </button>
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
