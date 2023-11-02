import React, { useState, useEffect } from "react";
import Loading from "./loading";
import styles from "../styles/moreSimilarMovies.module.scss";

export default function MoreSimilarMovies(props) {

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    
    if (props.similarMovies.length > 0) {
      setDisplay(true);
    }
  }, [props.similarMovies]);

  return (
    <div>
      {display ? (
        <div className={styles.similarMovieContainer}>
          {props.similarMovies.map((item, index) => {
            return (
              <div className={styles.similarMovieItem} key={index}>
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
