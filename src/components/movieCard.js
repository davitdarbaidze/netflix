import React from "react";

import styles from "@/styles/carousel.module.scss";

export default function MovieCard(props) {

  return (
      <div className={styles.item}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        >
          {props.movie}
        </div>
      </div>

  );
}
