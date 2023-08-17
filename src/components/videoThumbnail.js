import React, { useState } from "react";
import styles from "../styles/videoThumbnail.module.scss";
import Loading from "./loading";
import Image from "next/image";
import { randomNumberGenerator } from "@/lib/generalFunctions";

const VideoThumbnail = ({
  movieDetails,
  id,
  thumbnailUrl,
  videoUrl,
  fullItem,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [author, setAuthor] = useState({})
  
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    sessionStorage.setItem("movieNMDetails", JSON.stringify(fullItem));
    setAuthor({
      name: fullItem.user.name,
      duration: fullItem.duration,
      quality: fullItem.video_files.quality,
      id: fullItem.id
    })
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPlaying(false)
    sessionStorage.removeItem("movieNMDetails");
  };

  const handlePlay = (e) =>{    
    setPlaying(true)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.container}
    >
      {isHovered && (
        <div
          id={id}
          className={styles.videoContainer}
        >
          <video
            id={id}
            src={videoUrl}
            name={'playing_video'}
            onPlaying={handlePlay}
            autoPlay
            loop
            muted={true}
            className={styles.thumbnail}
          />
          {/* <div>dwedwo</div> */}
          {playing && <Loading />}
        </div>
      )}
      {playing && 
          <div className={styles.currentVideoInfo}>
            <div className={styles.iconButtons}>
              <div className={styles.leftButtons}>
                <Image 
                  src="/play-outline.svg"
                  alt="Play movie button"
                  width={25}
                  height={25}
                  ></Image>
                <Image 
                  src="/plus-outline.svg"
                  alt="add to favorites button"
                  width={25}
                  height={25}
                  ></Image>
                <Image 
                  src="/thumbsUp-outline.svg"
                  alt="like button"
                  width={25}
                  height={25}
                  ></Image>
              </div>
              <div>
              <Image 
                  src="/arrowDown.svg"
                  alt="more info button"
                  width={25}
                  height={25}
                  className={styles.moreDetailsButton}
                  ></Image>
              </div>
            </div>
            <div className={styles.videoDetails}>
              <div className={styles.matchPercent}> {randomNumberGenerator(50,100)}% match</div>
              <div className={styles.age}>{randomNumberGenerator(12,19)}+ </div>
              <div> <Image src="/tv-outline.svg" alt="tv icon" width={20} height={20}></Image></div>
              <div> {author.quality}</div>
            </div>
            <div className={styles.categories}>
              <div> {author.name}</div>
              <div> {author.id}</div>
            </div>
          </div>}
    </div>
  );
};

export default VideoThumbnail;
