import React, { useEffect, useState } from "react";
import styles from "../styles/moviedetails.module.scss";
import Loading from "./loading";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchDataFromPexels } from "@/lib/generalFunctions";
import MoreSimilarMovies from "./moreSimilarMovies";
import { MONTHS } from "@/lib/dataContext";

export default function MovieDetails(props) {
  const [display, setDisplay] = useState(false);
  const [movie, setMovie] = useState(null);
  const [randomWordFromUrl, setRandomWordFromUrl] = useState("");
  const [randomWord, setRandomWord] = useState("");
  const [similarContent, setSimilarContent] = useState([]);
  const router = useRouter();

  const randomIndex = Math.floor(Math.random() * MONTHS.length);
  const randomDay = Math.floor(Math.random() * 30);

  useEffect(() => {
    const tempRandomWord =
      randomWordFromUrl[Math.floor(Math.random() * randomWordFromUrl.length)];

    async function fetchData() {
      const similarMovies = await fetchDataFromPexels(tempRandomWord);
      setSimilarContent(similarMovies);
    }

    if (randomWordFromUrl.length > 0) {
      fetchData();
      setRandomWord(tempRandomWord);
      sessionStorage.setItem("wordForSimilarMovie", tempRandomWord);
    }
  }, [randomWordFromUrl]);

  useEffect(() => {
    if (sessionStorage.getItem("specificMovie")) {
      const retrievedData = JSON.parse(sessionStorage.getItem("specificMovie"));
      setDisplay(true);
      setMovie(retrievedData);
      setRandomWordFromUrl(
        retrievedData.url
          .replace("https://www.pexels.com/video/", "")
          .match(/[a-zA-Z]+/g)
      );
    }
  }, []);

  const handleClick = () => {
    props.movieDetailsToggle(false);
    sessionStorage.removeItem("specificMovie");
    sessionStorage.removeItem("wordForSimilarMovie");
  };

  //function to direct user to specific video and play it
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

  //function which direct to another page
  //the page shows similar content based on URL Random word
  const handleMoreMovieClick = () => {
    const word = sessionStorage.getItem("wordForSimilarMovie");
    // document.body.classList.remove('no-scroll')
    router.push(`similar/${word}`);
  };

  return (
    <div>
      {display ? (
        <div className={styles.container}>
          <div className={styles.singleMovie}>
            <div className={styles.imageBox}>
              <img src={movie.image}></img>
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
                <button data-link={movie.video_files.link}>Play</button>
              </div>
            </div>
            <div className={styles.descriptionBox}>
              <div className={styles.mainInfo}>
                <div className={styles.grayText}>
                  Duration: {movie.duration}m
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
                  Last Days to watch on Netflix: {MONTHS[randomIndex]}{" "}
                  {randomDay}
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
                <h1>{movie.video_files.quality}</h1>

                <div>{movie.video_files.fps}</div>
                <div>{movie.video_files.file_type}</div>
              </div>
              <div className={styles.secondInfo}>
                {movie.user.name}
                <div>
                  <p>Cast:</p> {movie.user.name} {movie.user.name}
                  <p>Genre:</p> {movie.user.name} {movie.user.name}
                </div>
                <div>
                  <button
                    className={styles.moreSimilarMovies}
                    onTouchEnd={handleMoreMovieClick}
                  >
                    Click here to see More like this
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2 style={{ paddingLeft:'0.5rem'}}>Similar content</h2>
              <MoreSimilarMovies similarMovies={similarContent} />
            </div>
          </div>
          <button className={styles.closeButton} onTouchEnd={handleClick}>
            X
          </button>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
