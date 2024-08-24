import React,{useState} from "react";
import lessonsdata from "../assets/lessons.json";
import VideoExercise from "../components/VideoExercise";
import QuizExercise from "../components/QuizExercise";
import "../styles/CourseLessons.css";

function CourseLessons() {
  const { lessons } = lessonsdata;
  console.log(lessons);

  // State to keep track of the current lesson and exercise
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const currentLesson = lessons[currentLessonIndex];
  const currentExercise = currentLesson.exercises[currentExerciseIndex];

  const isLastLesson = currentLessonIndex === lessons.length - 1;
  const isLastExercise =
    currentExerciseIndex === currentLesson.exercises.length - 1;

  const handleNext = () => {
    if (currentExercise.next_exercise_id && !isLastExercise) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
    } else if (!isLastLesson) {
      // Move to the next lesson if there are no more exercises in the current lesson
      setCurrentLessonIndex((prevIndex) => prevIndex + 1);
      setCurrentExerciseIndex(0);
    } else {
      alert("You've completed all lessons and exercises!");
    }
  };

  const handlePrevious = () => {
    if (currentExercise.previous_exercise_id) {
      setCurrentExerciseIndex((prevIndex) => prevIndex - 1);
    } else if (currentLessonIndex > 0) {
      // Move to the last exercise of the previous lesson if applicable
      setCurrentLessonIndex((prevIndex) => prevIndex - 1);
      setCurrentExerciseIndex(
        lessons[currentLessonIndex - 1].exercises.length - 1
      );
    }
  };

  return (
    <div className="container">
      <div className="exercise">
        <h1 className="title">{currentExercise.title}</h1>
        {currentExercise.resourcetype === "VideoExercise" ? (
          <VideoExercise exercise={currentExercise} />
        ) : (
          <QuizExercise exercise={currentExercise} />
        )}
      </div>
      <div
        className={
          currentLessonIndex === 0 && currentExerciseIndex === 0
            ? "navigateRight"
            : "navigate"
        }
      >
        {/* Show the "Previous" button if not on the first exercise of the first lesson */}
        {(currentLessonIndex > 0 || currentExerciseIndex > 0) && (
          <button className="navleft" onClick={handlePrevious}>
            &#8592;
          </button>
        )}

        {/* Show the "Next" button only if we are not on the last exercise of the last lesson */}
        {(!isLastLesson || !isLastExercise) && (
          <button className="navright" onClick={handleNext}>
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
}

export default CourseLessons;

