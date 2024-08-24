import React from "react";
import ReactPlayer from "react-player/vimeo";


const VideoExercise = ({ exercise }) => {
  return (
    <div className="videoplayer">
      <ReactPlayer
        url = {exercise.url}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoExercise;