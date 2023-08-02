import React from "react";
import styles from "../styles/SingleMovieDetailsNMCarousel.module.scss";
import Image from "next/image";
import MoreSimilarMovies from "./moreSimilarMovies";
import { useEffect, useState } from "react";
import { fetchDataFromPexels } from "@/lib/generalFunctions";
import { MONTHS } from "@/lib/dataContext";
import Loading from "./loading";
import { useRouter } from "next/router";

const SingleMovieDetailsNormalCarousel = (props) => {
  const filterMovie = props.data.filter(
    (item, index) => index == props.filteredMovie
  );
  const [movie, setMovie] = useState({});
  const randomIndex = Math.floor(Math.random() * MONTHS.length);
  const randomDay = Math.floor(Math.random() * 30);
  const [similarContent, setSimilarContent] = useState([]);
  const [display, setDisplay] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (display) {
      const wordList = movie.url
        .replace("https://www.pexels.com/video/", "")
        .match(/[a-zA-Z]+/g);
      const tempRandomWord =
        wordList[Math.floor(Math.random() * wordList.length)];
      async function fetchData() {
        const similarMovies = await fetchDataFromPexels(tempRandomWord);
        setSimilarContent(similarMovies);
      }

      if (wordList.length > 0) {
        fetchData();
      }
    }
  }, [display]);

  useEffect(() => {
    if (sessionStorage.getItem("movieNMDetails")) {
      const retrievedData = JSON.parse(
        sessionStorage.getItem("movieNMDetails")
      );
      setDisplay(true);
      setMovie(retrievedData);
    }
  }, []);

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

  return (
    <div>
      {display ? (
        <div className={styles.main} style={{ display: "absolute" }}>
          <div className={styles.container}>
            <div className={styles.singleMovie}>
              <div className={styles.imageBox}>
                <img src={movie.image} alt="movie thumbnail"></img>
                <div
                  className={styles.playButton}
                  onClick={handleDirectToMoviePage}
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
                </div>
              </div>
              <h1>More like this</h1>
              <MoreSimilarMovies similarMovies={similarContent} />
              <button
                onClick={props.movieDetailsToggle}
                className={styles.closeButton}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default SingleMovieDetailsNormalCarousel;
