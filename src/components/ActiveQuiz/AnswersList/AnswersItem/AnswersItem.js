import React from 'react'
import classes from './AnswersItem.css'
// import AnswersList from '../AnswersList'

const AnswersItem = props => {
  const cls = [classes.answersItem]

  if (props.state) {
    cls.push(classes[props.state])
  }

  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswersItem