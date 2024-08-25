import React, { useState } from 'react';

function QuizExercise({ exercise }) {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);


  //function to parse html string
  const getQuestion = (htmlstring) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlstring;
    return tempElement.textContent || tempElement.innerText || "";
  };

  const handleAnswerClick = (answerId) => {
    setSelectedAnswerId(answerId);
  };
  return (
    <>
      <h2 className="question">{getQuestion(exercise.description)}</h2>
      <ul className="answers">
        <li className="pickOption">Pick one option</li>
        {exercise.answers.map((answer) => (
          <li key={answer.id} className={`answer ${selectedAnswerId === answer.id ? 'selected' : ''}`}
          onClick={() => handleAnswerClick(answer.id)}
          role="button"
>
            <div className={`ellipse ${selectedAnswerId === answer.id ? 'checked' : ''}`}></div>
            <span className="option">{answer.answer}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default QuizExercise;
