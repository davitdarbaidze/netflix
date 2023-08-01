import React from 'react';
import styles from "../styles/videoThumbnail.module.scss"


const VideoThumbnailMob = ({ thumbnailUrl, id }) => {



  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%',
      }}
    >
      <img
        id={id}
        src={thumbnailUrl}
        alt="Thumbnail"
        height="100%"
        width="100%"
        className={styles.thumbnail}
      />
      
    </div>
  );
};

export default VideoThumbnailMob;
