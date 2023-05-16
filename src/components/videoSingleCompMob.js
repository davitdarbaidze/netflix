import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import MovieDetails from './movieDetails';


const VideoThumbnailMob = ({ id, thumbnailUrl, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ movieDetails, setMovieDetails ] = useState(false);
  const videoRef = useRef(null);
  const router = useRouter();

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
    // router.push({
    //   pathname: `/videos/${id}`,
    //   query: { videoUrl },

    // })
    setMovieDetails(!movieDetails)
    console.log(movieDetails, 'parent')
  };

  return (
    <div
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
        />
      )}
      {movieDetails ? <MovieDetails id={id} toggle={handleVideoClick}/>: null}
    </div>
  );
};

export default VideoThumbnailMob;
