import React, { useContext, useState, useEffect } from "react";
import styles from "../styles/carousel.module.scss";
import { DataContext } from "@/lib/dataContext";
import VideoThumbnailMob from "./videoSingleCompMob";


const MobileCarousel = (props) => {
  const [display, setDisplay] = useState(false);
  const { data } = useContext(DataContext);
  const itemsPerPage = data.length;

  const writeMovieToSession = (e) =>{
    const filterMovie = props.movies[0].data.filter(
      (item, index) => index == e.target.id
    );
    sessionStorage.setItem('specificMovie', JSON.stringify(filterMovie[0]))
    props.movieDetailsToggle(true)
  }

  useEffect(() => {
    
    if (props.movies[0]) {
      if(props.movies[0].length > 0){
        setDisplay(true);
      }
    }
  }, [data]);

  return (
    <div className={styles.mobile_movies_carousel}>
      <div className={styles.mobile_movies_carousel__container}>
        {data.length >  0 ? (
          props.movies[0].data.slice(0, itemsPerPage).map((movie, index) => {
            return (
              <div
                key={index}
                id={index}
                className={`${styles.mobile_movies_carousel__movie} `}
                style={{ backgroundImage: `url(${movie.image})` }}
                onClick={(e) => {writeMovieToSession(e)}}
              >
                <VideoThumbnailMob
                  id={index}
                  thumbnailUrl={movie.image}
                  videoUrl={movie.video_files.link}
                />
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
