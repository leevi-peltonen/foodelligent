import FoodCard from "../../components/Profile/FoodCard";
import Container from "@mui/material/Container";
import FoodDialog from "../../components/Food/FoodDialog";
import { useEffect, useState } from "react";
import { getAll } from "../../services/recipes";
import { useRecipe } from "../../context/RecipeContext";
import { Grid } from "@mui/material";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import {Button, Select, MenuItem} from "@mui/material";

const Recipes = () => {
  const navigate = useNavigate()
  const  {recipes, setRecipes} = useRecipe()
  const {user} = useUser()
  const [sortingType, setSortingType] = useState('Newest')

  const sortRecipes = () => {
    switch(sortingType) {
      case'Newest':

        return
      case'Oldest':

        return
      case'Best':
        setRecipes([...recipes].sort((a, b) => b.timeRateIndex - a.timeRateIndex))
        break
      case'Worst':
        setRecipes([...recipes].sort((a, b) => a.timeRateIndex - b.timeRateIndex))
        break
      default:

        break
    }
  }

  const handleSortChange = (event) => {
    setSortingType(event.target.value);
  };

  const handleRecipeDelete = (deletedRecipeId) => {
    setRecipes(prev => prev.filter(recipe => recipe.id !== deletedRecipeId))
  }

  const handleAddRecipe = (returnedRecipe) => {
    setRecipes(prev => [...prev, returnedRecipe])
  }

  useEffect(() => {
    if(!user) navigate('/')


    getAll()
    .then(returnedRecipes => {
      setRecipes(returnedRecipes)
    })
    .catch(error => console.log(error))
  }, [])



  return (
    <>
    <FoodDialog onAdd={handleAddRecipe} />
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sortingType}
    label="Choose a sorting type"
    onChange={handleSortChange}
  >
    <MenuItem value={'Newest'}>Newest first</MenuItem>
    <MenuItem value={'Oldest'}>Oldest first</MenuItem>
    <MenuItem value={'Best'}>Best first</MenuItem>
    <MenuItem value={'Worst'}>Worst first</MenuItem>
  </Select>
  <Button onClick={sortRecipes} >Sort Recipes!</Button>
    <Grid container spacing={2}>
      {recipes && recipes.map((food, index) => {
        return <Grid key={index} item xs={4}><FoodCard food={food} onDelete={handleRecipeDelete} newkey={index}/></Grid>;
      })}

    </Grid>
    </>
  );
};

export default Recipes;
