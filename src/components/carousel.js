import React from "react";
import useWindowDimensions from "@/hooks/windowSize";
import { useState, useEffect } from "react";
import MobileCarousel from "./mobileCarousel";
import NormalCarousel from "./normalCarousel";

const MoviesCarousel = (props) => {
  const { width } = useWindowDimensions();
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    if (width < 576) {
      setResponsive(true);
    } else if (width < 992) {
      setResponsive(false);
    } else {
      setResponsive(false);
    }
  }, [width]);

  return (
    <>
      {responsive ? (
        <MobileCarousel movies={props.movies} movieDetailsToggle={props.movieDetailsToggleMob}/>
      ) : (
        <NormalCarousel
          id={props.id}
          movieThumbnail={props.movieThumbnail}
          movieDetailsToggle={props.movieDetailsToggle}
          filteredMovie={props.filteredMovie}
          scrollLevel={props.scrollLevel}
          movies={props.movies}
        />
      )}
    </>
  );
};
export default MoviesCarousel;
