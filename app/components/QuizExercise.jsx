function QuizExercise({ exercise }) {
    //function to parse html string
    const getQuestion = (htmlstring) => {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = htmlstring;
      return tempElement.textContent || tempElement.innerText || "";
    }
      return (
        <>
        <h2 className="question">{getQuestion(exercise.description)}</h2>
          <ul className="answers">
            <li className="pickOption">Pick one option</li>
            {exercise.answers.map((answer) => (
              <li key={answer.id} className="answer"><div className="ellipse"></div><span className="option">{answer.answer}</span></li>
            ))}
          </ul>
        </>
      );
    }
  
    export default QuizExercise;  