import React from "react";
import { Link } from "react-router-dom";

function MediaCard({ videoObj }) {
  return (
    <div className="card card-side bg-base-200 shadow-xl flex flex-row flex-wrap py-14justify-center">
      <figure className="max-w-md">
        <img src={videoObj.thumbnail} alt={videoObj.title} className="w-full" />
      </figure>
      <div className="card-body w-full lg:w-3/6 xl:w-3/12 px-2.5 mb-5">
        <div className="p-2.5">
          <h2 className="card-title font-bold">{videoObj.title}</h2>
          <br />
          <p>{videoObj.description}</p>
        </div>
        <div className="card-actions justify-end">
          <br />
          <Link to="/videoplayer">
            <button className="btn btn-primary">Watch Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default MediaCard;
