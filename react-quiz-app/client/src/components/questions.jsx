import React from 'react'

const Questions = ({question, answerClick = () => {}}) => {
  return (
   <div className='questions'>
    <h2>{question.question}</h2>

    <ul className='options'>
       {question.answerOptions.map((option) => {
        return (
        <li key={option.text}>
            <button onClick={() => answerClick(option.isCorrect)}>
                {option.text}
            </button>
        </li>
        )
       })}
    </ul>
  </div>
  )
}

export default Questions