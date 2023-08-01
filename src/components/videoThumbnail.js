import React, { useState } from 'react';
import styles from "../styles/videoThumbnail.module.scss"
import Loading from './loading';

const VideoThumbnail = ({ movieDetails, id, thumbnailUrl, videoUrl, fullItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    sessionStorage.setItem('movieNMDetails',JSON.stringify(fullItem))
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    sessionStorage.removeItem('movieNMDetails')
  };

  return (
    
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{position: 'relative',display: 'inline-block', width: '100%', height: '100%'}}
    >
      {isHovered && (
        <div id={id} style={{ display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column', height:'150px'}}>
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
            transform: 'scale(1.2)',
            borderRadius:'5px',
            
          }}
        className={styles.thumbnail}
      />
      <Loading />
      </div>
      )}
    </div>
  );
};

export default VideoThumbnail;
