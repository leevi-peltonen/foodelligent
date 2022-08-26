import FoodCard from "../../components/Profile/FoodCard";
import Container from "@mui/material/Container";
import FoodDialog from "../../components/Food/FoodDialog";
import { useEffect } from "react";
import { useRecipe } from "../../context/RecipeContext";
import { getAll } from "../../services/recipes";
const Profile = () => {

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
      <h1>FOODS xd</h1>
      <FoodDialog />
      {recipes && recipes.map((food, index) => {
        return <FoodCard food={food} key={index} />;
      })}
    </Container>
  );
};

export default Profile;
