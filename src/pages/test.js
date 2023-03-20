import React, {useState, useRef} from "react";
import styles from "../styles/carousel.module.scss";

const MOVIES = [
  { id: 1, title: 'Movie 1', imageUrl: 'https://placeimg.com/640/480/animals?v=22' },
  { id: 2, title: 'Movie 2', imageUrl: 'https://placeimg.com/640/480/animals?v=23' },
  { id: 3, title: 'Movie 3', imageUrl: 'https://placeimg.com/640/480/animals?v=24' },
  { id: 4, title: 'Movie 4', imageUrl: 'https://placeimg.com/640/480/animals?v=25' },
  { id: 5, title: 'Movie 5', imageUrl: 'https://placeimg.com/640/480/animals?v=26' },
  { id: 5, title: 'Movie 5', imageUrl: 'https://placeimg.com/640/480/animals?v=27' },
  { id: 5, title: 'Movie 5', imageUrl: 'https://placeimg.com/640/480/animals?v=28' },
];

const MoviesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? MOVIES.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === MOVIES.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className={styles.movies_carousel}>
      <div className={styles.movies_carousel__container} ref={containerRef}>
        {MOVIES.map((movie, index) => (
          <div
            key={movie.id}
            className={`${styles.movies_carousel__movie} ${
              index === activeIndex ? `${styles.active}` : ''
            }`}
            style={{ backgroundImage: `url(${movie.imageUrl})` }}
          >
            <div className={styles.movies_carousel__movie_title}>{movie.title}</div>
          </div>
        ))}
      </div>
      <button className={styles.movies_carousel__prev} onClick={handlePrevClick}>
        &lt;
      </button>
      <button className={styles.movies_carousel__next} onClick={handleNextClick}>
        &gt;
      </button>
      
    </div>
    
  );
};

export default MoviesCarousel;