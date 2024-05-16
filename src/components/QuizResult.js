import React from 'react';
import './Quiz.css';
import quiz_questions from './QuizData';

const QuizResult = (props) => {
  return (
    <div className='score-section'>
      <h2>Completed</h2>
      <h4>Total Score {props.score}/50</h4>
      <h4>Your Correct Answer {props.correctAns} out of {quiz_questions.length}</h4>
      <button onClick={props.handlePlayAgain}>Play Again</button>
    </div>
  )
}

export default QuizResult;
