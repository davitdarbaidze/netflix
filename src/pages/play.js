import React, { useState, useEffect } from "react";
import styles from "../styles/play.module.scss";
import Loading from "@/components/loading";
import { useRouter } from "next/router";
import ReactPlayer from 'react-player/lazy'

export default function Play() {
  const [display, setDisplay] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedVideo = JSON.parse(sessionStorage.getItem("playback_data"));
    if (storedVideo.link) {
      setDisplay(true);
      setVideoUrl(storedVideo.link);
    }
  }, []);

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      {display ? (
        <div className={styles.videoContainer}>
          {/* <iframe
            src={videoUrl}
            className={styles.videoPlayback}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            muted={false}
          /> */}
          <ReactPlayer url={videoUrl} playing={true} controls={true} loop={true} height={'100vh'} width={'100vw'}/>
          <button onTouchEnd={handleBackClick} onClick={handleBackClick} className={styles.backButton}>
            back
          </button>
        </div>
      ) : (
        <div style={{ position: "relative" }}>
          <Loading />
          <button onTouchEnd={handleBackClick} className={styles.backButton}>
            back
          </button>
        </div>
      )}
    </div>
  );
}
