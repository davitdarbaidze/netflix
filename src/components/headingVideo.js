import React from "react";

export default function HeadingVideo() {
  return (
    <div>
        <iframe  
        // width="560"
        // height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=0&mute=0&controls=0&Loop=1&Title=0&Showinfo=0"
        title="My video"
        frameBorder={0}
        style={{width: '100%', height: '70vh'}}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
}
