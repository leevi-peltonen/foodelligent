
import { useUser } from "../../context/UserContext";
import FoodTitleInput from "../../components/Food/FoodTitleInput";
import FoodIngridientInput from "../../components/Food/FoodIngridientInput";
import FoodInstructionsInput from "../../components/Food/FoodInstructionsInput";
import FoodTimeInput from "../../components/Food/FoodTimeInput";
import FoodGrade from "../../components/Food/FoodGrade";
import { useState } from "react";

let newFoodItem = {}
const Food = () => {

  const { user, setUser } = useUser();

  const [displayStep, setDisplayStep] = useState(1)

  const submitAll = (event) => {

    event.preventDefault()
    setUser({...user, foods: [...user.foods, newFoodItem]})
    newFoodItem = {}
    setDisplayStep(1)
  }

  const getDataFromChild = (item) => {
    newFoodItem = {...newFoodItem, ...item}
    setDisplayStep((prev) => prev+1)
  }

  return (
    <form onSubmit={submitAll}>
      {displayStep === 1 && <FoodTitleInput getDataFromChild={getDataFromChild}/>}
      {displayStep === 2 && <FoodIngridientInput getDataFromChild={getDataFromChild} />}
      {displayStep === 3 && <FoodInstructionsInput getDataFromChild={getDataFromChild} />}
      {displayStep === 4 && <FoodTimeInput getDataFromChild={getDataFromChild} />}
      {displayStep === 5 && <FoodGrade getDataFromChild={getDataFromChild} />}
      {displayStep === 6 && <button type="submit">Submit Food</button>}
    </form>
  );
};

export default Food;
