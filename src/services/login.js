import axios from 'axios'
const baseUrl = '/api/login'

const loginRequest = async args => {
  const response = await axios.post(baseUrl, args)
  return response.data
}

export default { loginRequest }