import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-b4542.firebaseio.com/'
})