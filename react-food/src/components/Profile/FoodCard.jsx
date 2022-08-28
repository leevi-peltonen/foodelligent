
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { deleteRecipe, getAll } from "../../services/recipes";

import DetailsDialog from "./DetailsDialog";

import { useRecipe } from "../../context/RecipeContext";

const FoodCard = (props) => {
  const { title, time, rating, timeRateIndex, id } = props.food;
  const { setRecipes } = useRecipe();
  const UserRating = () => {
    return <Rating name="read-only" value={rating} readOnly />;
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure? \nThis can not be undone")) {
      deleteRecipe(id)
      props.onDelete(id)
    }
  };

  return (
    <div className="shadow m-10 p-10 w-auto bg-blue-300">
      <h2 className="font-bold">{title}</h2>
      <section>{time} minutes</section>
      <UserRating />
      <p>Index: {timeRateIndex}</p>
      <DetailsDialog food={props.food} />
      <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default FoodCard;
