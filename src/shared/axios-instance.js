import axios from 'axios'
import { generateRandomObjectId } from './utils'

if (!localStorage.getItem('token')) {
  localStorage.setItem('token', generateRandomObjectId())
}

const instance = axios.create({
  baseURL: 'http://localhost:8080/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
})

export default instance
