import React, { useState } from "react";
import "./Quiz.css";
import quiz_questions from "./QuizData";
import QuizResult from "./QuizResult";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAns(correctAns + 1);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz_questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handlePlayAgain = ()=>{
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAns(0);
    setShowResult(false);
  }

  return (
    <>
      <div className="app">
        {showResult ? (
          <QuizResult score={score} correctAns={correctAns} handlePlayAgain={handlePlayAgain}/>  // here score and correctAns declared outside
        ) : (                                                                                   // curly braces are variable , so we can also                               
           <>                                                                                   {/* change their names */}
            <div className="question-section">
              <h4>Score:{score}</h4>
              <div className="question-count">
                <span>
                  Question {currentQuestion + 1} of {quiz_questions.length}
                </span>
              </div>
              <div className="question-text">
                {quiz_questions[currentQuestion].question}
              </div>
            </div>

            <div className="answer-section">
              {quiz_questions[currentQuestion].options.map((ans, i) => {
                return (
                  <button
                    className={`button ${clicked && ans.isCorrect ? "correct" : "button"}`}
                    disabled={clicked}
                    key={i}
                    onClick={() => handleAnswerOption(ans.isCorrect)}
                  >
                    {ans.answer}
                  </button>
                );
              })}

              <div className="actions">
                <button onClick={handlePlayAgain}>Quit</button>
                <button disabled={!clicked} onClick={handleNextQuestion}>Next</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
