import React from 'react'
import classes from './AnswersList.css'
import AnswersItem from './AnswersItem/AnswersItem'

const AnswersList = props => (
  <ul className={classes.answersList}>
    {props.answers.map((answer, index) => {
      return (
        <AnswersItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
        />
      )
    })}
  </ul>
)

export default AnswersList