import React, { useContext, useState } from "react";
import styles from "../styles/carousel.module.scss";
import { DataContext } from "@/lib/dataContext";
import VideoThumbnailMob from "./videoSingleCompMob";
import MovieDetails from "./movieDetails";

const MobileCarousel = (props) => {
  const { data } = useContext(DataContext);
  const [ movieDetails, setMovieDetails ] = useState(false);
  
  // console.log(data, 'some')
  const itemsPerPage = data.length;


  const handleVideoClick = () => {
    // router.push({
    //   pathname: `/videos/${id}`,
    //   query: { videoUrl },

    // })
    if(!movieDetails){
      setMovieDetails(true)
      console.log(itemsPerPage)
    }
    
  };
  const handleCoverClick = () => {
    setMovieDetails(false)
  }

  return (
    <div className={styles.mobile_movies_carousel}>
      <div className={styles.mobile_movies_carousel__container}>
        {data ? data.slice(0, itemsPerPage).map((movie, index) => {
          return(
          <div
            key={index}
            id={index}
            className={`${styles.mobile_movies_carousel__movie} `}
            style={{ backgroundImage: `url(${movie.image})` }}
            onClick={handleVideoClick}
          >
            

            <VideoThumbnailMob id={index} thumbnailUrl={movie.image} videoUrl={movie.video_files.link} />
            {movieDetails && <MovieDetails id={index} toggle={handleCoverClick}/>}
          </div>
        
        )
        }) : <div>Error loading video</div>}
        
      </div>
    </div>
  );
};

export default MobileCarousel;