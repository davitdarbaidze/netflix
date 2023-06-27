import React, { useContext, useState } from "react";
import styles from "../styles/carousel.module.scss";
import { DataContext } from "@/lib/dataContext";
import VideoThumbnailMob from "./videoSingleCompMob";
import MovieDetails from "./movieDetails";
import Image from "next/image";

const MobileCarousel = (props) => {
  const { data } = useContext(DataContext);
  const [movieDetails, setMovieDetails] = useState(false);
  const [singleMovie, setSingleMovie] = useState(null);

  const months = ['January', 'February', 'March', 'April', 'May', 'June']
  const itemsPerPage = data.length;

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
  const handleCoverClick = () => {
    setMovieDetails(false);
  };

  console.log(singleMovie);

  return (
    <div className={styles.mobile_movies_carousel}>
      <div className={styles.mobile_movies_carousel__container}>
        {data ? (
          data.slice(0, itemsPerPage).map((movie, index) => {
            return (
              <div
                key={index}
                id={index}
                className={`${styles.mobile_movies_carousel__movie} `}
                style={{ backgroundImage: `url(${movie.image})`}}
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
