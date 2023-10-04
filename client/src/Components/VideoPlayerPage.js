import React from "react";
import LikeButton from "./LikeButton";

function VideoPlayerPage({ videoObj }) {
  const videoSrc = `https://www.youtube.com/embed/${videoObj.url}`;

  return (
    <div>
      <div className="aspect-w-16 aspect-h-9 ">
        <iframe
          src={videoSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
  
      </div>
      <div className="card-body">
        <h1 className="card-title pl-6">{videoObj.title}</h1>
        <h3 className="pl-6">{videoObj.description}</h3>
        <div>
          <LikeButton videoObj={videoObj} />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayerPage;
