import React, { useState } from 'react';

const quizzes = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Rome', 'Berlin'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    id: 3,
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
    correctAnswer: 'Harper Lee',
  },
];

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (quizId, option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [quizId]: option,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizzes.forEach(quiz => {
      if (answers[quiz.id] === quiz.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleRedo = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Quiz Page</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        {quizzes.map(quiz => (
          <div key={quiz.id} className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{quiz.question}</h2>
            <ul className="space-y-3">
              {quiz.options.map((option, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name={`quiz-${quiz.id}`}
                      value={option}
                      checked={answers[quiz.id] === option}
                      onChange={() => handleChange(quiz.id, option)}
                      className="form-radio h-5 w-5 text-purple-600"
                      disabled={submitted}
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {!submitted ? (
        <div className="text-center mt-10">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-800 transition duration-200"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Score: {score} / {quizzes.length}</h2>
          <button
            onClick={handleRedo}
            className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-800 transition duration-200"
          >
            Redo Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
