import React from "react";

const VideoExercise = ({ exercise }) => {
  return (
    <>
      <iframe
        src = {exercise.url}
        allow="autoplay; fullscreen"
        className="videoplayer"
      />
    </>
  );
};

export default VideoExercise;