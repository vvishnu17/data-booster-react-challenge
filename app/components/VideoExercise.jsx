import React from "react";
import ReactPlayer from "react-player/vimeo";


const VideoExercise = ({ exercise }) => {
  return (
    <>
      <ReactPlayer
        url = {exercise.url}
        controls={true}
        width="90%"
        height="100%"
        className="videoplayer"
      />
    </>
  );
};

export default VideoExercise;