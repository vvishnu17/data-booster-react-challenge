import React from "react";
import lessonsdata from "../assets/lessons.json";
import VideoExercise from "../components/VideoExercise";
import "../styles/CourseLessons.css";

function CourseLessons() {
    const { lessons } = lessonsdata;
    const excercise = lessons[0].exercises[0];
    console.log(excercise.url);
  return (
    <div className="container">
      <div className="exercise">
        <h1 className="title">{excercise.title}</h1>
        <VideoExercise exercise={excercise} />
        <h1 className="title">{excercise.title}</h1>
      </div>
      <div></div>
    </div>
  );
}

export default CourseLessons;
