import { createRef } from "react"

const steps = [];
const FoodInstructionsInput = (props) => {
  const input = createRef()


  const handleAddStep = (event) => {
    event.preventDefault();
    steps.push(input.current.value);
  };

  const handleFinishSteps = (event) => {
    event.preventDefault();
    props.getDataFromChild({instuctions: steps})
  };

  return (
    <>
        <input
          ref={input}
          type="text"
          placeholder="Provide a step"
        ></input>
        <button onClick={handleAddStep}>+</button>
        <button onClick={handleFinishSteps}>Next</button>
    </>
  )
}

export default FoodInstructionsInput