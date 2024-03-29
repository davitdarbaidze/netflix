import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "@/lib/dataContext";
import Loading from "./loading";

export default function HeadingVideo() {

  const {singleVideo} = useContext(DataContext)
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (singleVideo.length > 0) {
      setDisplay(true);
    }
  }, [singleVideo]);

  const playVideo = () => {
    const video = document.querySelector('video');
    if (video) {
        video.play();
    }
};

  return (
    <div>
      {display ? (
        <div onScroll={() => playVideo()}>
            <video  
            src={singleVideo[0].video_files.link}
            title="My video"
            frameBorder={0}
            style={{width: '100%', height: '70vh', marginTop:'4rem', marginBottom:'-0.2rem'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            autoPlay
            muted={true}
            loop={true}
            playsInline
            ></video>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
