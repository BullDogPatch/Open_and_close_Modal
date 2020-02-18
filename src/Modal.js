import React from "react";
import styles from "./modal.module.css";

export default function Modal(props) {
  return (
    <div className={styles.modalContainer}>
      <h1>MODAL OPEN</h1>
      <button className={styles.btn} onClick={props.toggleModal}>
        Close Modal
      </button>
    </div>
  );
}
