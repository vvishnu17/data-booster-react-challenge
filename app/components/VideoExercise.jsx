import React from "react";
import ReactPlayer from "react-player/vimeo";


const VideoExercise = ({ exercise }) => {
  const handleLike = () => {
    console.log("Liked!");
    // Add your like functionality here
  };
  const handleTime = () => {
    console.log("Current time: 0 seconds");
    // Add your Timer functionality here
  };

  const handleShare = () => {
    console.log("Shared!");
    // Add your share functionality here
  };
  return (
    <>
      <ReactPlayer
        url = {exercise.url}
        controls={true}
        width="90%"
        height="100%"
        className="videoplayer"
      />
      <div className="video-icons">
        <img
          src="/buttons/like-button.svg"
          alt="Like"
          className="video-icon"
          onClick={handleLike}
        />
        <img
          src="/buttons/time-button.svg"
          alt="Time"
          className="video-icon"
          onClick={handleTime}
        />
        <img
          src="/buttons/share-button.svg"
          alt="Share"
          className="video-icon"
          onClick={handleShare}
        />
      </div>
    </>
  );
};

export default VideoExercise;