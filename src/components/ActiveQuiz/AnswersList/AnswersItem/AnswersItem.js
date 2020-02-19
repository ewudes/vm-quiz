import React from 'react'
import classes from './AnswersItem.css'
import AnswersList from '../AnswersList'

const AnswersItem = props => {
  return (
    <li className={classes.answersItem}>
      {props.answer.text}
    </li>
  )
}

export default AnswersItem