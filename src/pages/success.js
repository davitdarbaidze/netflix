import FrequentQuestions from "@/components/frequentQuestions";
import React from "react";
import styles from "../styles/success.module.scss";

export default function Success() {
  return (
    <div>
      <a className={styles.something}>success</a>
      {FrequentQuestions()}
    </div>
  );
}
