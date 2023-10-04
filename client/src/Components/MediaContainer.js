import React from "react";
import MediaCard from "./MediaCard";

function MediaContainer({video}) {
  return (
    <div className="grid grid-cols-1 gap-4 flex-wrap ">
      {video.map((videoObj) => (
        <MediaCard 
        key={videoObj.id} 
        videoObj={videoObj} />
      ))}
    </div>
  );
}
export default MediaContainer;