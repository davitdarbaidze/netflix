import React, { useState } from 'react';

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
      <img src={thumbnailUrl} id={id} alt="Thumbnail" height='100%' width='100%' objectFit='cover'/>

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
            objectFit: 'cover',
            transform: 'scale(1.2)'
          }}
        />
      )}
    </div>
  );
};

export default VideoThumbnail;
