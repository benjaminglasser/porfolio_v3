import React from "react";
import VideoPlayerInternal from "./VideoPlayerInternal.jsx";

function VideoPlayerResponsiveBG({ vidDesktop, vidMobile }) {
  return (
    <>
      <VideoPlayerInternal
        className="-z-10 fixed hidden md:block"
        video={vidDesktop}
      />
      <VideoPlayerInternal
        className="-z-10 fixed block md:hidden"
        video={vidMobile}
      />
    </>
  );
}

export default VideoPlayerResponsiveBG;
