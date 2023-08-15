import React from 'react';
import styles from "../styles/videoThumbnail.module.scss"


const VideoThumbnailMob = ({ thumbnailUrl, id }) => {



  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      <img
        id={id}
        src={thumbnailUrl}
        alt="Thumbnail"
        className={styles.thumbnail}
      />
      
    </div>
  );
};

export default VideoThumbnailMob;
