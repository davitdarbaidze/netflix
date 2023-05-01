import React from "react";
import styles from "../styles/carousel.module.scss";
// import { useWindowDimensions } from "@/hooks/windowSize";
import useWindowDimensions from "@/hooks/windowSize";
import { useState, useEffect, useRef } from "react";

const NormalCarousel = (props) => {
  const { width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [responsive, setResponsive] = useState(6);
  const itemsPerPage = responsive;
  const totalPages = Math.ceil(props.movies / itemsPerPage);
  

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
  ];

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
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

  useEffect(() => {
    if (width < 992) {
      setResponsive(4);
    } else {
      setResponsive(6);
    }
  }, [width]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <div className={styles.movies_carousel}>
      <div className={styles.movies_carousel__container}>
        {props.movies.slice(startIndex, endIndex).map((movie, index) => (
          <div
            key={index}
            id={index}
            className={`${styles.movies_carousel__movie} ${
              index === activeIndex ? `${styles.active}` : ""
            }`}
            style={{ backgroundImage: `url(${movie.image})` }}
            onMouseEnter={handlePlay}
            onMouseLeave={handlePause}
          >
            <video ref={videoRefs[index]} className={styles.video} width="160px" height="100%"><source src={movie.video_files[0].link} type="video/mp4"/></video>
          </div>
        ))}
      </div>
      <button
        className={styles.movies_carousel__prev}
        onClick={handleClickPrev}
        disabled={currentPage === 1}
      >
        {/* {"<"} */}‹
      </button>
      <button
        className={styles.movies_carousel__next}
        onClick={handleClickNext}
        disabled={currentPage === totalPages}
      >
        {/* {">"} */}›
      </button>
    </div>
  );
};
export default NormalCarousel;
