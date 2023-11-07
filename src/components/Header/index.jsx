import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header_container}>
      <h3>Todo App</h3>
      <h3>React_Standard</h3>
    </div>
  );
}
