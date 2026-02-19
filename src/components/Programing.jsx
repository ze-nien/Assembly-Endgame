import React from "react";
import styles from "./Programing.module.css";

const Programing = () => {
  return (
    <div className={styles.ProgramingLangContainer}>
      <strong style={{ backgroundColor: "OrangeRed" }}>HTML</strong>
      <strong style={{ backgroundColor: "DodgerBlue" }}>CSS</strong>
      <strong style={{ backgroundColor: "Gold", color: "black" }}>
        JavaScript
      </strong>
      <strong style={{ backgroundColor: "Cyan", color: "black" }}>React</strong>
      <strong style={{ backgroundColor: "DeepSkyBlue" }}>Typescript</strong>
      <strong style={{ backgroundColor: "Green" }}>Node.js</strong>
      <strong style={{ backgroundColor: "Orange", color: "black" }}>
        Python
      </strong>
      <strong style={{ backgroundColor: "Red" }}>Ruby</strong>
      <strong style={{ backgroundColor: "SteelBlue" }}>Assembly</strong>
    </div>
  );
};

export default Programing;
