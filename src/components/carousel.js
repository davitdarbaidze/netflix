import React from "react";
import MovieCard from "@/components/movieCard";
import styles from "@/styles/carousel.module.scss"
import Link from "next/link";

const MOVIES = [
  {
    id: 1,
    title: "Movie 1",
    imageUrl: "https://placeimg.com/640/480/animals?v=1",
  },
  {
    id: 1,
    title: "Movie 1",
    imageUrl: "https://placeimg.com/640/480/animals?v=2",
  },
  {
    id: 1,
    title: "Movie 1",
    imageUrl: "https://placeimg.com/640/480/animals?v=3",
  },
  {
    id: 1,
    title: "Movie 1",
    imageUrl: "https://placeimg.com/640/480/animals?v=4",
  },
  {
    id: 1,
    title: "Movie 1",
    imageUrl: "https://placeimg.com/640/480/animals?v=5",
  },
];

export default function Test() {

  const handleClick = (e) => {
    // e.preventDefault();

  }
  return (
    <div className={styles.movieContainer}>
      {/* {Array.from(MOVIES, x => <MovieCard index={x.id} movie={x.title} imageUrl={x.imageUrl} />)} */}

      <div className={styles.wrapper}>
        <section id="section1">
          <a href="#section1" class={styles.arrow_btn}>
            ‹
          </a>
          {Array.from(MOVIES, (x, index) => (
            <MovieCard key={index} index={x.id} movie={x.title} imageUrl={x.imageUrl} />
          ))}
          <Link href="#section2" className={styles.arrow_btn} onClick={handleClick}>
            ›
          </Link>
        </section>

        <section id="section2">
          <a href="#section1" className={styles.arrow_btn}>
            ‹
          </a>
          {Array.from(MOVIES, (x, index) => (
            <MovieCard key={index} index={x.id} movie={x.title} imageUrl={x.imageUrl} />
          ))}
          <a href="#section3" className={styles.arrow_btn}>
            ›
          </a>
        </section>

        <section id="section3">
          <a href="#section2" className={styles.arrow_btn}>
            ‹
          </a>
          {Array.from(MOVIES, (x, index) => (
            <MovieCard key={index} index={x.id} movie={x.title} imageUrl={x.imageUrl} />
          ))}
          <a href="#section1" className={styles.arrow_btn}>
            ›
          </a>
        </section>
      </div>
    </div>
  );
}
