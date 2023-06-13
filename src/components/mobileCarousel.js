import React, { useContext, useState } from "react";
import styles from "../styles/carousel.module.scss";
import { DataContext } from "@/lib/dataContext";
import VideoThumbnailMob from "./videoSingleCompMob";
import MovieDetails from "./movieDetails";

const MobileCarousel = (props) => {
  const { data } = useContext(DataContext);
  const [movieDetails, setMovieDetails] = useState(false);
  const [singleMovie, setSingleMovie] = useState(null);

  // console.log(data, 'some')
  const itemsPerPage = data.length;

  const handleVideoClick = (e) => {
    // router.push({
    //   pathname: `/videos/${id}`,
    //   query: { videoUrl },

    // })
    const filterMovie = data.filter((item, index) => index == e.target.id);
    console.log(filterMovie);
    setSingleMovie(
      <div className={styles.singleMovie}>
        <div className={styles.imageBox}>
          <img src={filterMovie[0].image}></img>
        </div>
        <div className={styles.descriptionBox}>
          <div className={styles.mainInfo}>
            <div>{filterMovie[0].user.name}</div>
            <h1>{filterMovie[0].video_files.quality}</h1>
            <h2>{filterMovie[0].duration}</h2>
            <div>{filterMovie[0].video_files.fps}</div>
            <div>{filterMovie[0].video_files.file_type}</div>
            <div style={{ overflowY:'clip', textOverflow:'ellipsis', height: '150px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took 
            a galley of type and scrambled it to make a type specimen book. It has 
            survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum 
            passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
          <div className={styles.secondInfo}>
            {filterMovie[0].user.name}
            <div>
              <p>Cast:</p> {filterMovie[0].user.name} {filterMovie[0].user.name}
              <p>Genre:</p> {filterMovie[0].user.name} {filterMovie[0].user.name}
            </div>
            
          </div>
          
        </div>
        <h1>More like this</h1>
      </div>
    );
    if (!movieDetails) {
      setMovieDetails(true);
      console.log(itemsPerPage);
    }
  };
  const handleCoverClick = () => {
    setMovieDetails(false);
  };
  console.log(singleMovie);
  return (
    <div className={styles.mobile_movies_carousel}>
      <div className={styles.mobile_movies_carousel__container}>
        {data ? (
          data.slice(0, itemsPerPage).map((movie, index) => {
            return (
              <div
                key={index}
                id={index}
                className={`${styles.mobile_movies_carousel__movie} `}
                style={{ backgroundImage: `url(${movie.image})` }}
                onClick={handleVideoClick}
              >
                <VideoThumbnailMob
                  id={index}
                  thumbnailUrl={movie.image}
                  videoUrl={movie.video_files.link}
                />
                {movieDetails && (
                  <MovieDetails
                    id={index}
                    singleMovie={singleMovie}
                    toggle={handleCoverClick}
                  />
                )}
                {/* {movieDetails && <>{singleMovie}</>} */}
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
