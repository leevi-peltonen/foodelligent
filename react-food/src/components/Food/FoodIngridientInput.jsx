import { Button } from "@mui/material";
import { useState } from "react"
import TextField from "@mui/material/TextField";
let ingridients = [];
const FoodIngridientInput = (props) => {
  const MIN_INGRIDIENT = 2
  const [value, setValue] = useState('')

  const [clickCount, setClickCount] = useState(0)



  const handleAddIngridient = (event) => {
    event.preventDefault();
    setClickCount(prev => prev += 1)
    const array = value.split(' ')
    ingridients.push({ingridient: array[0], amount: array[1]});
    console.log(ingridients)
  };

  const handleFinishIngridients = (event) => {
    event.preventDefault();
    props.getDataFromChild({ingridients: ingridients})
    ingridients = []
  };

  return (
    <>
        <TextField
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          placeholder={`Provide at least ${MIN_INGRIDIENT} ingridients and the amounts`}
        ></TextField>
        <Button variant="outlined"  onClick={handleAddIngridient}>+</Button>
        <Button variant="outlined" disabled={clickCount < MIN_INGRIDIENT} onClick={handleFinishIngridients}>Next</Button>
    </>
  )
}

export default FoodIngridientInput