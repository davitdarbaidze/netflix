import React from "react";
import styles from "../styles/SingleMovieDetailsNMCarousel.module.scss";
import Image from "next/image";

const SingleMovieDetailsNormalCarousel = (props) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June']
  const filterMovie = props.data.filter((item, index) => index == props.filteredMovie);
  const randomIndex = Math.floor(Math.random() * months.length);
  const randomDay = Math.floor(Math.random() * 30);

  return (
    <div className={styles.main} style={{ display: "absolute" }}>
      <div className={styles.container}>
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
                <p>Cast:</p> {filterMovie[0].user.name}{" "}
                {filterMovie[0].user.name}
                <p>Genre:</p> {filterMovie[0].user.name}{" "}
                {filterMovie[0].user.name}
              </div>
            </div>
          </div>
          <h1>More like this</h1>
          <div onClick={props.movieDetailsToggle} className={styles.closeButton}>X</div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetailsNormalCarousel;
