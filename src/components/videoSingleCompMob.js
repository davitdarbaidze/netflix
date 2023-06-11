import React from 'react';


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
        style={{ objectFit: 'cover' }}
      />
      
    </div>
  );
};

export default VideoThumbnailMob;
