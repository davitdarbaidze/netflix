import React, { useContext, useState } from "react";
import styles from "../styles/carousel.module.scss";
import { DataContext } from "@/lib/dataContext";
import VideoThumbnailMob from "./videoSingleCompMob";
import MovieDetails from "./movieDetails";
import Image from "next/image";
import { useRouter } from "next/router";
import Loading from "./loading";
import Link from "next/link";

const MobileCarousel = (props) => {
  const { data } = useContext(DataContext);
  const router = useRouter();
  const [movieDetails, setMovieDetails] = useState(false);
  const [singleMovie, setSingleMovie] = useState(null);
  const [display, setDisplay] = useState(true);
  const [randomWordForLink, setRandomWordForLink] = useState('')
  const [some, setSome] = useState(null)

  const months = ["January", "February", "March", "April", "May", "June"];
  const itemsPerPage = data.length;

  const handleDirectToMoviePage = (e) => {
    const videoData = JSON.parse(sessionStorage.getItem("playback_data"));

    if (videoData) {
      delete videoData.link;
    }

    const newVideoData = {
      ...videoData,
      link: e.target.dataset.link,
      // Add other properties as needed
    };

    sessionStorage.setItem("playback_data", JSON.stringify(newVideoData));
    router.push("/play");
  };

  const handleMoreMovieClick = () =>{
    const word = sessionStorage.getItem('wordForSimilarMovie')
    // document.body.classList.remove('no-scroll')
    router.push(`similar/${word}`)
  }
  const handleVideoClick = async (e) => {
    //disable main body scroll so that mobile component doesn't break
    // document.body.classList.add("no-scroll");
    sessionStorage.removeItem('wordForSimilarMovie')

    const filterMovie = props.movies[0].data.filter(
      (item, index) => index == e.target.id
    );
    setSome(filterMovie)

    const randomIndex = Math.floor(Math.random() * months.length);
    const randomDay = Math.floor(Math.random() * 30);
    const randomWordFromUrl = filterMovie[0].url
      .replace("https://www.pexels.com/video/", "")
      .match(/[a-zA-Z]+/g);
    
      const randomWord = randomWordFromUrl[Math.floor(Math.random() * randomWordFromUrl.length)];
    sessionStorage.setItem('wordForSimilarMovie',randomWord)

    

    setSingleMovie(
      <div className={styles.singleMovie}>
        <div className={styles.imageBox}>
          <img src={filterMovie[0].image}></img>
          <div
            className={styles.playButton}
            onTouchEnd={handleDirectToMoviePage}
          >
            <Image
              src="/play-outline.svg"
              alt="Play movie button"
              width={20}
              height={20}
            ></Image>
            <button data-link={filterMovie[0].video_files.link}>Play</button>
          </div>
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

            <div className={styles.LastDayWatch}>
              Last Days to watch on Netflix: {months[randomIndex]} {randomDay}
            </div>
            <text>
              {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
                "when an unknown printer took a galley of type and scrambled it to make a type " +
                "specimen book. It has survived not only five centuries, but also the leap into " +
                "electronic typesetting, remaining essentially unchanged. It was popularised in " +
                "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
                "and more recently with desktop publishing software like Aldus PageMaker " +
                "including versions of Lorem Ipsum."}
            </text>
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
            <div>
              <button className={styles.moreSimilarMovies} onTouchEnd={handleMoreMovieClick}>Click here to see More like this</button>
            </div>
          </div>
        </div>
      </div>
    );
    if (!movieDetails) {
      setMovieDetails(true);
    }
  };

  const handleCoverClick = () => {
    setMovieDetails(!movieDetails);
  };

  return (
    <div className={styles.mobile_movies_carousel}>
      <div className={styles.mobile_movies_carousel__container}>
        {data.length >  0 ? (
          props.movies[0].data.slice(0, itemsPerPage).map((movie, index) => {
            return (
              <div
                key={index}
                id={index}
                className={`${styles.mobile_movies_carousel__movie} `}
                style={{ backgroundImage: `url(${movie.image})` }}
                onClick={handleVideoClick}
              >
                <VideoThumbnailMob
                  id={index}
                  thumbnailUrl={movie.image}
                  videoUrl={movie.video_files.link}
                />
                {movieDetails && (
                  <MovieDetails
                    id={index}
                    singleMovie={singleMovie}
                    toggle={handleCoverClick}
                    some={some}
                    handleDirectToMoviePage={handleDirectToMoviePage}
                    handleMoreMovieClick={handleMoreMovieClick}
                  />
                )}
                {/* {movieDetails && <>{singleMovie}</>} */}
              </div>
            );
          })
        ) : (
          <div>Error loading video</div>
        )}
      </div>
    </div>
  );
};

export default MobileCarousel;
