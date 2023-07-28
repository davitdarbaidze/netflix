import React from 'react'
import styles from '../styles/carousel.module.scss'
import Image from 'next/image'

export default function MovieDetails({id, toggle, singleMovie, some, handleDirectToMoviePage, handleMoreMovieClick}) {

  const handleClick = () => {
    toggle()
    document.body.classList.remove('no-scroll');
  }
  const months = ["January", "February", "March", "April", "May", "June"];
  const randomIndex = Math.floor(Math.random() * months.length);
    const randomDay = Math.floor(Math.random() * 30);
    const randomWordFromUrl = some[0].url
      .replace("https://www.pexels.com/video/", "")
      .match(/[a-zA-Z]+/g);
    
      const randomWord = randomWordFromUrl[Math.floor(Math.random() * randomWordFromUrl.length)];

  return (
      <div className={styles.container}>
        {singleMovie}

        {/* <div className={styles.singleMovie}>
        <div className={styles.imageBox}>
          <img src={some[0].image}></img>
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
            <button data-link={some[0].video_files.link}>Play</button>
          </div>
        </div>
        <div className={styles.descriptionBox}>
          <div className={styles.mainInfo}>
            <div className={styles.grayText}>
              Duration: {some[0].duration}m
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
            <h1>{some[0].video_files.quality}</h1>

            <div>{some[0].video_files.fps}</div>
            <div>{some[0].video_files.file_type}</div>
          </div>
          <div className={styles.secondInfo}>
            {some[0].user.name}
            <div>
              <p>Cast:</p> {some[0].user.name} {some[0].user.name}
              <p>Genre:</p> {some[0].user.name}{" "}
              {some[0].user.name}
            </div>
            <div>
              <button className={styles.moreSimilarMovies} onTouchEnd={handleMoreMovieClick}>Click here to see More like this</button>
            </div>
          </div>
        </div>
      </div> */}

      <button onTouchEnd={handleClick}>X</button>
      </div>
  )
}
