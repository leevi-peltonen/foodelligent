import axios from "axios"
const url = 'http://localhost:3001/api/login' 

export const login = async credentials => {
  try {
    const res = await axios.post(url, credentials)
    return res.data
    } catch(error) {
      return error.response.data.error
    }
  }


