import React from "react";
import styles from "../styles/carousel.module.scss";
import useWindowDimensions from "@/hooks/windowSize";
import { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "@/lib/dataContext";
import VideoThumbnail from "./videoSingleComp";
import MovieDetails from "./movieDetails";
import Image from "next/image";

const NormalCarousel = (props) => {
  const { data } = useContext(DataContext);
  const { width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [responsive, setResponsive] = useState(6);
  const itemsPerPage = responsive;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [singleMovie, setSingleMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(false);
  const months = ['January', 'February', 'March', 'April', 'May', 'June']

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

  const handleCoverClick = () => {
    console.log(movieDetails)
    setMovieDetails(false);
  };

  const handleVideoClick = (e) => {
    // router.push({
    //   pathname: `/videos/${id}`,
    //   query: { videoUrl },

    // })
    const filterMovie = data.filter((item, index) => index == e.target.id);
    console.log(e.target)
    const randomIndex = Math.floor(Math.random() * months.length);
    const randomDay = Math.floor(Math.random() * 30);

    
    setSingleMovie(
      <div className={styles.singleMovie}>
        <div className={styles.imageBox}>
          <img src={filterMovie[0].image}></img>
        </div>
        <div className={styles.descriptionBox}>
          <div className={styles.mainInfo}>
            <div className={styles.grayText}>
              Duration: {filterMovie[0].duration}m
            </div>
            <div>
              <Image
                src="/tv-outline.svg"
                alt="Movie Quality"
                width={20}
                height={20}
              ></Image>
              <Image
                src="/subtitles.svg"
                alt="Subtitle icon"
                width={20}
                height={20}
              ></Image>
            </div>

            <div className={styles.LastDayWatch}>Last Days to watch on Netflix: {months[randomIndex]} {randomDay}</div>
            <text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into electronic 
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
              software like Aldus PageMaker including versions of Lorem Ipsum.</text>
            <h1>{filterMovie[0].video_files.quality}</h1>

            <div>{filterMovie[0].video_files.fps}</div>
            <div>{filterMovie[0].video_files.file_type}</div>
          </div>
          <div className={styles.secondInfo}>
            {filterMovie[0].user.name}
            <div>
              <p>Cast:</p> {filterMovie[0].user.name} {filterMovie[0].user.name}
              <p>Genre:</p> {filterMovie[0].user.name}{" "}
              {filterMovie[0].user.name}
            </div>
          </div>
        </div>
        <h1>More like this</h1>
      </div>
    );
    if (!movieDetails) {
      setMovieDetails(true);
      console.log(itemsPerPage);
    }
  };

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
            style={{ backgroundImage: `url(${movie.image})`,position:'relative' }}
            onClick={handleVideoClick}
          >
            <VideoThumbnail movieDetails={movieDetails} id={index} thumbnailUrl={movie.image} videoUrl={movie.video_files.link} />
            {movieDetails && (
                  <MovieDetails
                    id={index}
                    singleMovie={singleMovie}
                    toggle={handleCoverClick}
                  />
                )}
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
