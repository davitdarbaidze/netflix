import React, { useContext, useState } from "react";
import { DataContext } from "@/lib/dataContext";
import MoviesCarousel from "./carousel.js";
import styles from "../styles/media.module.scss";
import SingleMovieDetailsNormalCarousel from "./SingleMovieDetailsNMCarousel";

const CATEGORIES = [
  {
    id: 1,
    title: "You",
    imageUrl: "https://placeimg.com/640/480/animals?v=1",
  },
  {
    id: 2,
    title: "Movies",
    imageUrl: "https://placeimg.com/640/480/animals?v=2",
  },
  {
    id: 3,
    title: "Treanding Now",
    imageUrl: "https://placeimg.com/640/480/animals?v=3",
  },
  {
    id: 4,
    title: "Satires",
    imageUrl: "https://placeimg.com/640/480/animals?v=4",
  },
  {
    id: 5,
    title: "Abstract",
    imageUrl: "https://placeimg.com/640/480/animals?v=5",
  },
  {
    id: 6,
    title: "Landscape",
    imageUrl: "https://placeimg.com/640/480/animals?v=6",
  },
  {
    id: 7,
    title: "Dark",
    imageUrl: "https://placeimg.com/640/480/animals?v=7",
  },
  {
    id: 8,
    title: "Thriller",
    imageUrl: "https://placeimg.com/640/480/animals?v=8",
  },
  {
    id: 9,
    title: "Documentaries",
    imageUrl: "https://placeimg.com/640/480/animals?v=9",
  },
  {
    id: 10,
    title: "Disasters",
    imageUrl: "https://placeimg.com/640/480/animals?v=10",
  },
];

export default function Media(props) {
  const { data, allData } = useContext(DataContext);
  const [showOverlay, setShowOverlay] = useState(false);
  const [filteredMovie, setFilteredMovie] = useState(0);
  const [moviePage, setMoviePage] = useState(0);
  console.log(moviePage);

  //This function is used in multiple component, first passed to MovieCarousel
  //then from there to NormalCarousel and also passed to OverplayPageComponent
  //
  const handlePictureClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div style={{ position: "relative" }}>
      {CATEGORIES.map((category) => (
        <div className={styles.container} key={category.id}>
          <div className={styles.heading}>{category.title}</div>
          <MoviesCarousel
            movieDetailsToggle={setShowOverlay}
            moviePage={setMoviePage}
            filteredMovie={setFilteredMovie}
            movies={allData.filter((item) => item.queryName == category.title)}
          />
        </div>
      ))}
      {showOverlay && (
        <SingleMovieDetailsNormalCarousel
          data={data}
          allData={allData}
          filteredMovie={filteredMovie}
          movieDetailsToggle={handlePictureClick}
        />
      )}
      <p>{props.text}</p>
    </div>
  );
}
