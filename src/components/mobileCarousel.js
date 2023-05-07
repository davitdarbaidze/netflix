import React, {useState, useRef, useContext} from "react";
import styles from "../styles/carousel.module.scss";
import { DataContext } from "@/lib/dataContext";


const MobileCarousel = (props) => {
  const { data } = useContext(DataContext);
  // console.log(data, 'some')
  const itemsPerPage = data.length;
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
  const videoRef = useRef(null);
  const playVideo = () => {
    if (videoRef.current && videoRef.current.paused) {
      console.log(videoRef)
      videoRef.current.play();
    }
  };

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
        {data ? data.slice(0, itemsPerPage).map((movie, index) => {
          return(
          <div
            key={index}
            id={index}
            className={`${styles.mobile_movies_carousel__movie} `}
            style={{ backgroundImage: `url(${movie.image})` }}
            onMouseEnter={handlePlay}
            onMouseLeave={handlePause}
          >
            <video ref={videoRefs[index]} className={styles.video} width="160px" height="100%"><source src={movie.url} type="video/mp4"/></video>
          </div>
        )
        }) : <div>Error loading video</div>}

      </div>
    </div>
  );
};

export default MobileCarousel;