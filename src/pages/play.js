import React, { useState, useEffect } from "react";
import styles from "../styles/play.module.scss";

export default function Play() {
  const [display, setDisplay] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("video_link")) {
      setDisplay(true);
      setVideoUrl(sessionStorage.getItem("video_link"));
    }
  }, []);

  return (
    <div className={styles.container}>
      {display ? (
        <div className={styles.videoContainer}>
          <iframe
            src={videoUrl}
            className={styles.videoPlayback}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </div>
      ) : (
        <div className={styles.loadingContainer}>
          <div className={styles.loading}></div>
        </div>
      )}
    </div>
  );
}
