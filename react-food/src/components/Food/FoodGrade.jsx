import { Button } from "@mui/material"
import { createRef } from "react"

const FoodGrade = (props) => {
  const input = createRef()


  let grades = [1,2,3,4,5,6,7,8,9,10]
  const handleGradeSubmit = (event) => {
    event.preventDefault()
    props.getDataFromChild({grade: input.current.value})
  }

  return (
    <>
      <select ref={input}>
        {grades.map((grade, index) => {
          return <option key={index} value={index+1}>{grade}</option>
        })}
      </select>

      <Button variant="contained" onClick={handleGradeSubmit}>Submit grade</Button>
    </>
  )
}

export default FoodGrade