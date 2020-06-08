import axios from 'axios'

//Create an instance
//You can create a new instance of axios with a custom config.
//https://github.com/axios/axios
const getAPI = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000,
})

export { getAPI }