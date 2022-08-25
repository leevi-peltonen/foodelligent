import FoodCard from "../../components/Profile/FoodCard";
import { useUser } from "../../context/UserContext";
import Container from "@mui/material/Container";
import FoodDialog from "../../components/Food/FoodDialog";
const Profile = () => {
  const { user } = useUser();

  return (
    <Container maxWidth="sm">
      <h1>FOODS xd</h1>
      <FoodDialog />
      {user.foods.map((food) => {
        return <FoodCard food={food} />;
      })}
    </Container>
  );
};

export default Profile;
