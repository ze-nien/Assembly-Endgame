import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>Assembly: Endgame</h1>
      <p>
        Guess the word in under 8 attempts to keep the
        <br /> programming world safe from Assembly!
      </p>
    </div>
  );
};

export default Header;
