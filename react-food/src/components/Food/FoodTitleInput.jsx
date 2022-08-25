import { useState } from "react";
import  Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const FoodTitleInput = (props) => {

  const [value, setValue] = useState('')
  const handleNameInput = (event) => {
    event.preventDefault();
    props.getDataFromChild({name: value})
  };


  return (
    <>
      <TextField value={value} onChange={e => setValue(e.target.value)} id="standard-basic" label="Name of the food" variant="standard" type="text"></TextField>
      <Button variant="outlined" onClick={handleNameInput}>Add</Button>
    </>
  );
};

export default FoodTitleInput;
