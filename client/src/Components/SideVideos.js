import React from "react";

function SideVideos({ videos }) {
  return (
    <div className="card card-side bg-base-100 border-spacing-1">
      <figure className="">
        <img src={videos.thumbnail} alt={videos.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{videos.title}</h2>
        <p>{videos.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}
export default SideVideos;
