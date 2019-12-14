import axios from 'axios'
import { generateRandomObjectId } from './utils'

if (!localStorage.getItem('token')) {
  localStorage.setItem('token', generateRandomObjectId())
}

const instance = axios.create({
  baseURL:
    'https://itunes-searcher-server.netlify.com/.netlify/functions/index',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
})

export default instance
