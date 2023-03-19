import React from "react";
import Image from "next/image";
import styles from "../styles/siteHeader.module.scss";

export default function Languages(props) {
  const languages = ["English", "Spanish", "French", "German"];
  return (
    <div className={props.className}>
      <Image
        src="/globe-outline.svg"
        width={22}
        height={22}
        alt="Globe icon"
        id="globe"
        style={{filter: "invert(100%)"}}
      />
      <select className={styles.customSelect}>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
}
