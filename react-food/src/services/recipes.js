import axios from "axios";

const url = "http://localhost:3001/api/recipes";

export const getRecipesByUser = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    console.log(response)
  } catch (error) {console.log(error)}
};




export const getAll = () => {
  const req = axios.get(url);
  return req.then((res) => res.data);
};

export const addRecipe = (recipe, token) => {
   axios
    .post(url, recipe, {
      headers: {
        Authorization: `bearer ${token}`
    }
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteRecipe = (id) => {
  axios.delete(`${url}/${id}`)
  .then(res=> {
    console.log(res)
  })
  .catch(error => console.log(error))
}