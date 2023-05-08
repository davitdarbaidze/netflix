import React, { useState } from 'react';

const VideoThumbnail = ({ thumbnailUrl, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{position: 'relative', display: 'inline-block', width: '100%', height: '100%'}}
    >
      <img src={thumbnailUrl} alt="Thumbnail" height='100%' width='100%' objectFit='cover'/>

      {isHovered && (
        <video
          src={videoUrl}
          autoPlay
          loop
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.2)'
          }}
        />
      )}
    </div>
  );
};

export default VideoThumbnail;
