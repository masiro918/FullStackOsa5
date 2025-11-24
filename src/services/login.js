import axios from 'axios'
const baseUrl = '/api/login'

const loginRequest = args => {
  axios.post(baseUrl, args).then((response) => {
    return response.data
  })
}

export default { loginRequest }