import React from "react";
import useWindowDimensions from "@/hooks/windowSize";
import { useState, useEffect } from "react";
import MobileCarousel from "./mobileCarousel";
import NormalCarousel from "./normalCarousel";

const MOVIES = [
  {
    id: 1,
    title: "Movie 1",
    imageUrl: "https://placeimg.com/640/480/animals?v=1",
  },
  {
    id: 2,
    title: "Movie 2",
    imageUrl: "https://placeimg.com/640/480/animals?v=2",
  },
  {
    id: 3,
    title: "Movie 3",
    imageUrl: "https://placeimg.com/640/480/animals?v=3",
  },
  {
    id: 4,
    title: "Movie 4",
    imageUrl: "https://placeimg.com/640/480/animals?v=4",
  },
  {
    id: 5,
    title: "Movie 5",
    imageUrl: "https://placeimg.com/640/480/animals?v=5",
  },
  {
    id: 6,
    title: "Movie 6",
    imageUrl: "https://placeimg.com/640/480/animals?v=6",
  },
  {
    id: 7,
    title: "Movie 7",
    imageUrl: "https://placeimg.com/640/480/animals?v=7",
  },
  {
    id: 8,
    title: "Movie 8",
    imageUrl: "https://placeimg.com/640/480/animals?v=8",
  },
  {
    id: 9,
    title: "Movie 9",
    imageUrl: "https://placeimg.com/640/480/animals?v=9",
  },
  {
    id: 10,
    title: "Movie 10",
    imageUrl: "https://placeimg.com/640/480/animals?v=10",
  },
  {
    id: 11,
    title: "Movie 11",
    imageUrl: "https://placeimg.com/640/480/animals?v=11",
  },
  {
    id: 12,
    title: "Movie 12",
    imageUrl: "https://placeimg.com/640/480/animals?v=12",
  },
  {
    id: 13,
    title: "Movie 13",
    imageUrl: "https://placeimg.com/640/480/animals?v=13",
  },
  {
    id: 14,
    title: "Movie 14",
    imageUrl: "https://placeimg.com/640/480/animals?v=14",
  },
  {
    id: 15,
    title: "Movie 15",
    imageUrl: "https://placeimg.com/640/480/animals?v=15",
  },
  {
    id: 16,
    title: "Movie 16",
    imageUrl: "https://placeimg.com/640/480/animals?v=16",
  },
  {
    id: 17,
    title: "Movie 17",
    imageUrl: "https://placeimg.com/640/480/animals?v=17",
  },
  {
    id: 18,
    title: "Movie 18",
    imageUrl: "https://placeimg.com/640/480/animals?v=18",
  },
  {
    id: 19,
    title: "Movie 19",
    imageUrl: "https://placeimg.com/640/480/animals?v=19",
  },
  {
    id: 20,
    title: "Movie 20",
    imageUrl: "https://placeimg.com/640/480/animals?v=20",
  },
  {
    id: 21,
    title: "Movie 21",
    imageUrl: "https://placeimg.com/640/480/animals?v=21",
  },
  {
    id: 22,
    title: "Movie 22",
    imageUrl: "https://placeimg.com/640/480/animals?v=22",
  },
  {
    id: 23,
    title: "Movie 23",
    imageUrl: "https://placeimg.com/640/480/animals?v=23",
  },
  {
    id: 24,
    title: "Movie 24",
    imageUrl: "https://placeimg.com/640/480/animals?v=24",
  },
];

const MoviesCarousel = () => {
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
      <>{responsive ? <MobileCarousel/> : <NormalCarousel/>}</>
  );
};
export default MoviesCarousel;
