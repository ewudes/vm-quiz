import React, {Component} from 'react'
import classes from './QuizList.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class QuizList extends Component {
  
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>
            Тест {quiz}
          </NavLink>
        </li>
      )
    })
  }

  componentDidMount() {
    axios.get('https://react-quiz-b4542.firebaseio.com/quiz.json').then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <div className={classes.quizList}>
        <div>
          <h2>Список тестов</h2>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    )
  }
}