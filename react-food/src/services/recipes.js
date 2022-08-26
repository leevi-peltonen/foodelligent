
import axios from "axios"


const url = 'http://localhost:3001/api/recipes'


export const getRecipesByUser = async (id) => {
  try {
    const response = await axios()
  } catch (error) {
    
  }
}


export const getAll = () => {
  const req = axios.get(url)
  return req.then(res => res.data)
}


