import React, { useContext, useState } from "react";
import { DataContext } from "@/lib/dataContext";
import MoviesCarousel from "./carousel.js";
import styles from "../styles/media.module.scss";
import SingleMovieDetailsNormalCarousel from "./SingleMovieDetailsNMCarousel";
import MovieDetails from "./movieDetails.js";
import { CATEGORIES } from "@/lib/dataContext";


export default function Media(props) {

  function getRandomItemsFromArray(arr, count) {
    // Fisher-Yates Shuffle algorithm to randomize the array order
    const shuffledArray = [...arr];
    
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    // Return the first 'count' items from the shuffled array
    return shuffledArray.slice(0, count);
  }

  const { data, allData } = useContext(DataContext);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlayMob, setShowOverlayMob] = useState(false);
  const [filteredMovie, setFilteredMovie] = useState(0);
  const [movieThumbnail, setMovieThumbnail] = useState('');
  const [categories, setCategories] = useState(getRandomItemsFromArray(CATEGORIES, 28))
  

  //This function is used in multiple component, first passed to MovieCarousel
  //then from there to NormalCarousel and also passed to OverplayPageComponent
  //
  const handlePictureClick = () => {
    setShowOverlay(!showOverlay);
  };



  return (
    <div style={{ position: "relative" }}>
      {showOverlayMob && (        
        <MovieDetails movieDetailsToggle={setShowOverlayMob}/>
      )}

      {categories.map((category) => {
        return (
        <div className={styles.container} key={category.id}>
          <div className={styles.heading}>{category.title}</div>
          <MoviesCarousel
            movieDetailsToggle={setShowOverlay}
            movieDetailsToggleMob={setShowOverlayMob}
            movieThumbnail={setMovieThumbnail}
            filteredMovie={setFilteredMovie}
            movies={allData.filter((item) => item.queryName == category.title)}
          />
        </div>)
      }
      )}
      {showOverlay && (
        <SingleMovieDetailsNormalCarousel
          data={data}
          allData={allData}
          filteredMovie={filteredMovie}
          movieDetailsToggle={handlePictureClick}
          movieThumbnail={movieThumbnail}
        />
        )}
      <p>{props.text}</p>
    </div>
  );
}
