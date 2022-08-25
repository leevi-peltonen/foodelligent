import { createRef } from "react";

const FoodTitleInput = (props) => {
  const input = createRef();

  const handleNameInput = (event) => {
    event.preventDefault();
    props.getDataFromChild({name: input.current.value})
  };


  return (
    <>
      <input ref={input} type="text" placeholder="Name of the food"></input>
      <button onClick={handleNameInput}>Add name</button>
    </>
  );
};

export default FoodTitleInput;
