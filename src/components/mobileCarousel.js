import React, {useState, useRef} from "react";
import styles from "../styles/carousel.module.scss";


const MobileCarousel = (props) => {
  const itemsPerPage = props.movies.length;
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handlePlay = (event) => {
    const index = event.target.id;
    if (videoRefs[index] && videoRefs[index].current) {
      videoRefs[index].current.play();
    }
  };
  const handlePause = (event) => {
    const index = event.target.id;
    if (videoRefs[index] && videoRefs[index].current) {
      videoRefs[index].current.pause();
      videoRefs[index].current = null;
    }
  };

  return (
    <div className={styles.mobile_movies_carousel}>
      <div className={styles.mobile_movies_carousel__container}>
        {props.movies ? props.movies.slice(0, itemsPerPage).map((movie, index) => {
          return(
          <div
            key={index}
            id={index}
            className={`${styles.mobile_movies_carousel__movie} `}
            style={{ backgroundImage: `url(${movie.image})` }}
            onMouseEnter={handlePlay}
            onMouseLeave={handlePause}
          >
            <video ref={videoRefs[index]} className={styles.video} width="160px" height="100%"><source src={movie.video_files[0].link} type="video/mp4"/></video>
          </div>
        )
        }) : <div>Error loading video</div>}

      </div>
    </div>
  );
};

export default MobileCarousel;