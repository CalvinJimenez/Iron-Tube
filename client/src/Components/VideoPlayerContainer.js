import React from "react";
import VideoPlayerPage from "./VideoPlayerPage";
import SideVideos from "./SideVideos";

function VideoPlayerContainer({ video }) {
  return (
    <div className="flex flex-row">
      <div className="basis-2/3">
        {video.map((videoObj) => (
          <VideoPlayerPage
            key={videoObj.id}
            videoObj={videoObj}
          />
        ))}
      </div>
      <div className="basis-1/3 pl-6">
        {video.map((videoObj) => (
          <SideVideos key={videoObj.id} videos={videoObj} />
        ))}
      </div>
    </div>
  );
}
export default VideoPlayerContainer;
