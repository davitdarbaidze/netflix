import React from "react";
import styles from "../styles/carousel.module.scss";
import useWindowDimensions from "@/hooks/windowSize";
import { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "@/lib/dataContext";
import VideoThumbnail from "./videoSingleComp";

const NormalCarousel = (props) => {
  const { data } = useContext(DataContext);
  const { width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [responsive, setResponsive] = useState(6);
  const itemsPerPage = responsive;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
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
        {data.slice(startIndex, endIndex).map((movie, index) => (
          <div
            key={index}
            id={index}
            className={`${styles.movies_carousel__movie} ${
              index === activeIndex ? `${styles.active}` : ""
            }`}
            style={{ backgroundImage: `url(${movie.image})` }}
          >
            <VideoThumbnail thumbnailUrl={movie.image} videoUrl={movie.video_files.link} />
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
