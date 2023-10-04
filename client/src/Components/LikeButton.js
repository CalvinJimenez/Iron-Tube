import React, {useState, useEffect} from "react";

function LikeButton({videoObj}) {
    const [videoLikes, setVideoLikes] = useState(videoObj.like_number);
  
    const handleLikes = async () => {
      try {
        const response = await fetch('/likes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ video_id: videoObj.id })
        });
        const videoWithNewLikes = await response.json();
        console.log(videoWithNewLikes)
        setVideoLikes(videoWithNewLikes.like_number);
      } catch (err) {
        console.error(err);
      }
    };
  
  return (
    <button onClick={handleLikes} className="btn gap-2 ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
      {videoLikes}
    </button>
  );
}
export default LikeButton;
