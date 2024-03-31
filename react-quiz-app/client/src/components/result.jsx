import React from 'react'

const Result = ({userAnswers, questions, resetQuiz = () => {}}) => {
    const correctAnswer = userAnswers.filter((answer) => answer).length

  return <div className='results'>
    <h2>Results</h2>
    <p>You answered {correctAnswer} out of {questions.length} questions.
    <span onClick={resetQuiz}>Click here to Retry</span>
    </p>

    <ul>
        {questions.map((question, index) => {
            return(
                <li key={index} data-correct={userAnswers[index]}>
                    
                </li>
            )
        })}
    </ul>
  </div>
}

export default Result