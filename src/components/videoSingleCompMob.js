import React, { useState, useRef } from 'react';

const VideoThumbnailMob = ({ thumbnailUrl, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%',
      }}
    >
      <img
        src={thumbnailUrl}
        alt="Thumbnail"
        height="100%"
        width="100%"
        style={{ objectFit: 'cover' }}
      />

      {isHovered && (
        <video
          ref={videoRef}
          src={videoUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.2)',
          }}
        />
      )}
    </div>
  );
};

export default VideoThumbnailMob;
