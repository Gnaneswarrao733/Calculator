import React, { useState } from 'react';


const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Saturn", isCorrect: false },
    ],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", isCorrect: true },
      { text: "Mark Twain", isCorrect: false },
      { text: "Ernest Hemingway", isCorrect: false },
      { text: "F. Scott Fitzgerald", isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizQuestions.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            Question {currentQuestionIndex + 1} / {quizQuestions.length}
          </div>
          <div className="question-text">
            {quizQuestions[currentQuestionIndex].question}
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestionIndex].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswerClick(answer.isCorrect)}>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
