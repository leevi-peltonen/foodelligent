import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const DetailsDialog = (props) => {
  const { title, time, steps, ingredients } = props.food;

  const [isOpen, setIsOpen] = useState(false)


  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Details</Button>
      <Dialog open={isOpen}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <p>{time} minutes</p>
          <Stack>
            <p><b>Ingridients</b></p>
            {ingredients.length > 0 && ingredients.map(item => <p>{item}</p>)}
            <p><b>Instructions</b></p>
            {steps.length > 0 && steps.map(step => <p>{step}</p>)}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DetailsDialog;
