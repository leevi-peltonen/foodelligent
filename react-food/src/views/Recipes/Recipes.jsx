import FoodCard from "../../components/Profile/FoodCard";
import Container from "@mui/material/Container";
import FoodDialog from "../../components/Food/FoodDialog";
import { useEffect, useState } from "react";
import { getAll } from "../../services/recipes";
import { useRecipe } from "../../context/RecipeContext";


const Recipes = () => {

  const  {recipes, setRecipes} = useRecipe()

  useEffect(() => {
    getAll()
    .then(returnedRecipes => {
      setRecipes(returnedRecipes)
    })
    .catch(error => console.log(error))
  }, [])



  return (
    <Container maxWidth="sm">
      <FoodDialog />
      {recipes && recipes.map((food, index) => {
        return <FoodCard food={food} key={index} newkey={index}/>;
      })}
    </Container>
  );
};

export default Recipes;
