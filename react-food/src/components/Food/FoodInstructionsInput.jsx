import { createRef } from "react"
import Button from "@mui/material/Button";

const steps = [];
const FoodInstructionsInput = (props) => {
  const input = createRef()


  const handleAddStep = (event) => {
    event.preventDefault();
    steps.push(input.current.value);
  };

  const handleFinishSteps = (event) => {
    event.preventDefault();
    props.getDataFromChild({instructions: steps})
  };

  return (
    <>
        <input
          ref={input}
          type="text"
          placeholder="Provide a step"
        ></input>
        <Button size="small" variant="outlined" onClick={handleAddStep}>+</Button>
        <Button variant="outlined" onClick={handleFinishSteps}>Next</Button>
    </>
  )
}

export default FoodInstructionsInput