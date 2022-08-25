
import { useState } from "react"
import Button from "@mui/material/Button"



const FoodTimeInput = (props) => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)

  
  const handleAddTime = (event) => {
    event.preventDefault();
    props.getDataFromChild({time: [hour, minute]})
  };


  return(
    <>
      <input id="hour" type="range" min={0} max={10} onChange={e => setHour(e.target.value)}  value={hour}></input>
      <p>Hours: {hour}</p>
      <input type="range" min={0} max={60} onChange={e => setMinute(e.target.value)} value={minute} ></input>
      <p>Minutes: {minute}</p>
      <Button variant="outlined" onClick={handleAddTime}>Add time</Button>
    </>
  )
}

export default FoodTimeInput