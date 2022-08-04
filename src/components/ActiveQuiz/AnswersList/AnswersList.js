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
          state={props.state ? props.state[answer.id] : null}
        />
      )
    })}
  </ul>
)

export default AnswersList