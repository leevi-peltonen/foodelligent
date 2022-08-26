
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import DetailsDialog from "./DetailsDialog";






const FoodCard = (props) => {
  const { title, time, rating , timeRateIndex} = props.food;

  const kertoimet = [1,1,2]


  const HYVYYS_INDEX = (kertoimet[0]*rating**kertoimet[2])/(kertoimet[1]*time)

  const UserRating = () => {
    return (
      <Rating name="read-only" value={rating} readOnly />
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
        <h2>{title}</h2>
        <section>{time} minutes</section>

        <UserRating />
        <p><b>Index: {timeRateIndex}</b></p>
        {/*<DetailsDialog food={props.food}/>*/}
      </Box>
      </>
  );
};

export default FoodCard;
