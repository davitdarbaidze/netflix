import React, { useState } from 'react';
import styles from "../styles/videoSingleComp.module.scss"

const VideoThumbnail = ({ movieDetails, id, thumbnailUrl, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log(movieDetails)
  };

  return (
    
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{position: 'relative', zIndex:'0',display: 'inline-block', width: '100%', height: '100%'}}
    >
      <img src={thumbnailUrl} id={id} alt="Thumbnail" height='100%' width='100%' className={styles.thumbnail}/>

      {isHovered && (
        <video
          id={id}
          src={videoUrl}
          autoPlay
          loop
          muted={true}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transform: 'scale(1.2)'
          }}
          className={styles.thumbnail}
        />
      )}
    </div>
  );
};

export default VideoThumbnail;
