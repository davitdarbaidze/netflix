import React, { useContext} from "react";
import styles from "../styles/carousel.module.scss";
import { DataContext } from "@/lib/dataContext";
import VideoThumbnailMob from "./videoSingleCompMob";

const MobileCarousel = (props) => {
  const { data } = useContext(DataContext);
  // console.log(data, 'some')
  const itemsPerPage = data.length;

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
          >
            <VideoThumbnailMob thumbnailUrl={movie.image} videoUrl={movie.video_files.link} />
          </div>
        )
        }) : <div>Error loading video</div>}

      </div>
    </div>
  );
};

export default MobileCarousel;