import axios from '../../axios/axios-quiz'
import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZE_SUCCESS 
} from './actionsTypes'

export function fetchQuizes() {
  return async dispatch => {
    dispatch(fetchQuizesStart())
    try {
      const response = await axios.get('/quizes.json')
      const quizes = []
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        })
      })
      dispatch(fetchQuizesSuccess(quizes))
    } catch (e) {
      console.log(e)
      dispatch(fetchQuizesError(e))
    }
  }
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START
  }
}

export function fetchQuizById(quizId) {
  return async dispatch => {
    dispatch(fetchQuizesStart())
    try {
      const response = await axios.get(`/quizes/${quizId}.json`)
      const quiz = response.data
      dispatch(fetchQuizSuccess(quiz))
    } catch (e) {
      dispatch(fetchQuizesError(e))
    }
  }
}

export function fetchQuizSuccess(quiz) {
  return {
    quiz,
    type: FETCH_QUIZE_SUCCESS
  }
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes
  }
}

export function fetchQuizesError(e) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: e
  }
}