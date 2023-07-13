import React, { useState, useEffect, useContext } from "react";
import { createClient } from "pexels";
import Loading from "./loading";
import { DataContext } from "@/lib/dataContext";
import styles from "../styles/moreSimilarMovies.module.scss";

export default function MoreSimilarMovies(props) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    
    if (props.similarMovies.length > 0) {
      setDisplay(true);
    }
    console.log(props.similarMovies)
  }, []);

  return (
    <div>
      {display ? (
        <div className={styles.similarMovieContainer}>
          {props.similarMovies.map((item) => {
            return (
              <div className={styles.similarMovieItem}>
                <img src={item.image} alt="video Thumbnail"></img>
                <p>{item.user.name}</p>
                
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
