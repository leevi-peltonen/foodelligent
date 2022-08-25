import { createRef } from "react"


const FoodIngridientInput = (props) => {
  const input = createRef()
  const ingridients = [];

  const handleAddIngridient = (event) => {
    event.preventDefault();
    ingridients.push(input.current.value);
  };

  const handleFinishIngridients = (event) => {
    event.preventDefault();
    props.getDataFromChild({ingridients: ingridients})
  };

  return (
    <>
        <input
          ref={input}
          type="text"
          placeholder="Provide an ingridient"
        ></input>
        <button onClick={handleAddIngridient}>+</button>
        <button onClick={handleFinishIngridients}>Next</button>
    </>
  )
}

export default FoodIngridientInput