import React, { useState } from 'react';
import styles from '../styles/carousel.module.scss';

const MOVIES = [
  { id: 1, title: 'Movie 1', imageUrl: 'https://placeimg.com/640/480/animals?v=1' },
  { id: 1, title: 'Movie 1', imageUrl: 'https://placeimg.com/640/480/animals?v=2' },
  { id: 1, title: 'Movie 1', imageUrl: 'https://placeimg.com/640/480/animals?v=3' },
  { id: 1, title: 'Movie 1', imageUrl: 'https://placeimg.com/640/480/animals?v=4' },
  { id: 1, title: 'Movie 1', imageUrl: 'https://placeimg.com/640/480/animals?v=5' },
  { id: 1, title: 'Movie 1', imageUrl: 'https://placeimg.com/640/480/animals?v=6' },
  { id: 2, title: 'Movie 2', imageUrl: 'https://placeimg.com/640/480/animals?v=7' },
  { id: 2, title: 'Movie 2', imageUrl: 'https://placeimg.com/640/480/animals?v=8' },
  { id: 2, title: 'Movie 2', imageUrl: 'https://placeimg.com/640/480/animals?v=9' },
  { id: 2, title: 'Movie 2', imageUrl: 'https://placeimg.com/640/480/animals?v=10' },
  { id: 2, title: 'Movie 2', imageUrl: 'https://placeimg.com/640/480/animals?v=11' },
  { id: 2, title: 'Movie 2', imageUrl: 'https://placeimg.com/640/480/animals?v=12' },
  { id: 2, title: 'Movie 2', imageUrl: 'https://placeimg.com/640/480/animals?v=13' },
  { id: 3, title: 'Movie 2', imageUrl: 'https://placeimg.com/640/480/animals?v=14' },
  { id: 3, title: 'Movie 4', imageUrl: 'https://placeimg.com/640/480/animals?v=15' },
  { id: 3, title: 'Movie 4', imageUrl: 'https://placeimg.com/640/480/animals?v=16' },
  { id: 3, title: 'Movie 4', imageUrl: 'https://placeimg.com/640/480/animals?v=17' },
  { id: 3, title: 'Movie 4', imageUrl: 'https://placeimg.com/640/480/animals?v=18' },
  { id: 3, title: 'Movie 4', imageUrl: 'https://placeimg.com/640/480/animals?v=19' },
  { id: 4, title: 'Movie 4', imageUrl: 'https://placeimg.com/640/480/animals?v=20' },
  { id: 4, title: 'Movie 4', imageUrl: 'https://placeimg.com/640/480/animals?v=21' },
  { id: 4, title: 'Movie 4', imageUrl: 'https://placeimg.com/640/480/animals?v=22' },
  { id: 4, title: 'Movie 5', imageUrl: 'https://placeimg.com/640/480/animals?v=23' },
  { id: 4, title: 'Movie 5', imageUrl: 'https://placeimg.com/640/480/animals?v=24' },
];

const MoviesCarousel = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(MOVIES.length / itemsPerPage);

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className={styles.movies_carousel}>
      <div className={styles.movies_carousel__container}>
        {MOVIES.slice(startIndex, endIndex).map((movie, index) => (
          <div
            key={index}
            className={`${styles.movies_carousel__movie} ${
              index === activeIndex ? `${styles.active}` : ''
            }`}
            style={{ backgroundImage: `url(${movie.imageUrl})` }}
          >
            <div className={styles.movies_carousel__movie_title}>{movie.title}</div>
          </div>
        ))}
      </div>
      <button
        className={styles.movies_carousel__prev} 
        onClick={handleClickPrev}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      <button
        className={styles.movies_carousel__next}
        onClick={handleClickNext}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};

export default MoviesCarousel;
