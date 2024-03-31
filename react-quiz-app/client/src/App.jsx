import './App.css'
import questions from "./constants/questions.json";
import { useState } from 'react';
import Questions from './components/questions';
import Result from './components/result';

function App() {
  const [currentQuestions, setCurrentQuestions] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestions(currentQuestions + 1)
    setUserAnswers([...userAnswers, isCorrect])
  }

  const resetQuiz = () => {
    setCurrentQuestions(0)
    setUserAnswers([])
  }

  return (
    <div className='App'>
      <h1>Quiz Time</h1>

      {currentQuestions < questions.length && (
        <Questions question={questions[currentQuestions]} answerClick={handleNextQuestion} />
      )}

      {currentQuestions === questions.length && (
        <Result userAnswers={userAnswers} questions={questions} resetQuiz={resetQuiz}
        />
      )}
    </div>
  )
}

export default App
