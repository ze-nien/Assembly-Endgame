import React from "react";
import styles from "./Programing.module.css";
import langs from "./langs";

const Programing = () => {
  const langElements = langs.map((lang) => (
    <span
      key={lang.name}
      style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
    >
      {lang.name}
    </span>
  ));
  return <div className={styles.ProgramingLangContainer}>{langElements}</div>;
};

export default Programing;
