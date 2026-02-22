import React from "react";
import styles from "./Programing.module.css";
import clsx from "clsx";

const Programing = ({ langs, wrongGuessCount }) => {
  const langElements = langs.map((lang, index) => {
    const inLangLost = index < wrongGuessCount;
    const className = clsx({
      [styles.lost]: inLangLost,
    });
    return (
      <span
        className={className}
        key={lang.name}
        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
      >
        {lang.name}
      </span>
    );
  });

  return <div className={styles.ProgramingLangContainer}>{langElements}</div>;
};

export default Programing;
