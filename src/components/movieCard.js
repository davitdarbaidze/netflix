import React from "react";

import styles from "@/styles/carousel.module.scss";
import Image from "next/image";

export default function MovieCard(props) {


  return (


      <div class={styles.item}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        >
          {props.movie}
        </div>
      </div>

  );
}
