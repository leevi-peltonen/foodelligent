import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Stack from "@mui/material/Stack"
import Rating from "@mui/material/Rating"
import Fab from "@mui/material/Fab"
import AddIcon from "@mui/icons-material/Add"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import { useState } from "react"
import { useUser } from "../../context/UserContext"
import { addRecipe } from "../../services/recipes"
import { useRecipe } from "../../context/RecipeContext"
import timeRateIndex from "../../utils/timeRateIndex"

const FoodDialog = (props) => {
  const { user } = useUser()
  const DEFAULT_STATES = {
    open: false,
    name: "",
    rating: 0,
    time: 0,
    ingridient: "",
    instructions: "",
    arr: [],
  }

  let newFoodItem = {}

  const setDefaultStates = () => {
    setOpen(DEFAULT_STATES.open)
    setName(DEFAULT_STATES.name)
    setRating(DEFAULT_STATES.rating)
    setTime(DEFAULT_STATES.time)
    setIngridientArray(DEFAULT_STATES.arr)
    setInstructionStepArray(DEFAULT_STATES.arr)
    setIngridient(DEFAULT_STATES.ingridient)
    setInstructionStep(DEFAULT_STATES.instructions)
  }

  const [open, setOpen] = useState(DEFAULT_STATES.open)
  const [name, setName] = useState(DEFAULT_STATES.name)
  const [rating, setRating] = useState(0)
  const [time, setTime] = useState(0)
  const [instructionStep, setInstructionStep] = useState("")
  const [instructionStepArray, setInstructionStepArray] = useState([])
  const [ingridient, setIngridient] = useState("")
  const [ingridientArray, setIngridientArray] = useState([])
  const { setRecipes } = useRecipe()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setDefaultStates()
    setOpen(false)
  }

  const handleSubmit = () => {
    newFoodItem = {
      title: name,
      rating: rating,
      time: time,
      steps: instructionStepArray,
      ingredients: ingridientArray,
      timeRateIndex: timeRateIndex(time, rating),
    }
    const result = addRecipe(newFoodItem, user.token) //send newFoodItem to database
    console.log("Result from addRecipe" + result)
    props.onAdd(newFoodItem)
    handleClose()
  }

  const handleAddStep = () => {
    setInstructionStepArray((prev) => [...prev, instructionStep])
    setInstructionStep('')
  }
  const handleRemoveStep = () => {
    setInstructionStepArray((prev) =>
      prev.filter((item, index) => index !== prev.length - 1)
    )
  }

  const handleAddIngridient = () => {
    setIngridientArray((prev) => [...prev, ingridient])
    setIngridient('')
  }

  const handleRemoveIngredient = () => {
    setIngridientArray((prev) =>
      prev.filter((item, index) => index !== prev.length - 1)
    )
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add recipe
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reseptinaattori 3000</DialogTitle>
        <DialogContent>
          <Stack spacing={5}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="standard-basic"
              label="Name of the food"
              variant="standard"
              type="text"
            ></TextField>

            <TextField
              value={time}
              onChange={(e) => setTime(e.target.value)}
              id="standard-basic"
              label="Time"
              variant="standard"
              type="number"
            ></TextField>

            <section>
              <ul className="list-none">
                {ingridientArray.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>

              <TextField
                value={ingridient}
                onChange={(e) => setIngridient(e.target.value)}
                id="standard-basic"
                label="Ingridients"
                variant="standard"
                type="text"
              ></TextField>
              <Fab
                onClick={handleAddIngridient}
                color="primary"
                size="small"
                aria-label="add"
              >
                <AddIcon />
              </Fab>

              <Fab
                onClick={handleRemoveIngredient}
                color="secondary"
                size="small"
                aria-label="remove"
              >
                <RemoveCircleIcon />
              </Fab>
            </section>
            <section>
              <ul className="list-none">
                {instructionStepArray.length > 0 &&
                  instructionStepArray.map((item) => <li>{item}</li>)}
              </ul>

              <TextField
                value={instructionStep}
                onChange={(e) => setInstructionStep(e.target.value)}
                id="standard-basic"
                label="Instructions step by step"
                variant="standard"
                type="text"
              ></TextField>
              <Fab
                onClick={handleAddStep}
                color="primary"
                size="small"
                aria-label="add"
              >
                <AddIcon />
              </Fab>

              <Fab
                onClick={handleRemoveStep}
                color="secondary"
                size="small"
                aria-label="remove"
              >
                <RemoveCircleIcon />
              </Fab>
            </section>

            <Rating
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FoodDialog
