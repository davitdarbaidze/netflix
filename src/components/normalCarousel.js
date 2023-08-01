import React from "react";
import styles from "../styles/carousel.module.scss";
import useWindowDimensions from "@/hooks/windowSize";
import { useState, useEffect, useRef, useContext } from "react";
import VideoThumbnail from "./videoThumbnail";
import MovieDetails from "./movieDetails";
import Image from "next/image";

const NormalCarousel = (props) => {
  const { width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [responsive, setResponsive] = useState(6);
  const itemsPerPage = responsive;
  const totalPages = Math.ceil(24 / itemsPerPage);
  const [movieDetails, setMovieDetails] = useState(false);

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

  //This function sets movie id in Media component
  //so then that one can pass it to OverlayPage component
  //in case user opens the movie for more details
  const preAssignMovieNumber = (e) => {
    console.log(e.target)
    props.filteredMovie(e.target.id);
    props.movieThumbnail(e.target.src);
    // console.log(props.movies[0].)
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className={styles.movies_carousel}>
      <div className={styles.movies_carousel__container}>
        {props.movies[0] ? (
          props.movies[0].data
            .slice(startIndex, endIndex)
            .map((movie, index) => (
              <div
                key={index}
                id={index}
                className={`${styles.movies_carousel__movie} ${
                  index === activeIndex ? `${styles.active}` : ""
                } ${styles.grid_item}`}
                style={{
                  backgroundImage: `url(${movie.image})`,
                  position: "relative",
                }}
                onClick={props.movieDetailsToggle}
                onMouseEnter={preAssignMovieNumber}
              >
                <VideoThumbnail
                  movieDetails={movieDetails}
                  id={index}
                  thumbnailUrl={movie.image}
                  fullItem={movie}
                  videoUrl={movie.video_files.link}
                />
              </div>
            ))
        ) : (
          <div>Error loading video</div>
        )}
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
