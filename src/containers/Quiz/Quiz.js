import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          {text: 'Вопрос 1'},
          {text: 'Вопрос 2'},
          {text: 'Вопрос 3'},
          {text: 'Вопрос 4'}
        ]
      }
    ]
  }
  render() {
    return(
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
          />
        </div>
      </div>
    )
  }
}

export default Quiz