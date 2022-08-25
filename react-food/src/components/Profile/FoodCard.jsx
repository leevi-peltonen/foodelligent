import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import DetailsDialog from "./DetailsDialog";






const FoodCard = (props) => {
  const { name, time, grade } = props.food;

  const {a, b, k} = {
    arvosanaskaalaus: 1,
    aikaskaalaus: 1,
    eksponentti: 2
  }


  const HYVYYS_INDEX = (a*grade**k)/(b*time)

  const UserRating = () => {
    return (
      <Rating name="read-only" value={grade} readOnly />
    );
  };

  return (
      <>
      <Box
        sx={{
          borderRadius: 1,
          padding: 1,
          margin: 1,
          width: 200,
          height: 200,
          backgroundColor: "primary.dark",
          color: 'white'
        }}
      >
        <h2>{name}</h2>
        <section>{time} minutes</section>

        <UserRating />
        <p><b>Index: {HYVYYS_INDEX}</b></p>
        <DetailsDialog food={props.food}/>
      </Box>
      </>
  );
};

export default FoodCard;
