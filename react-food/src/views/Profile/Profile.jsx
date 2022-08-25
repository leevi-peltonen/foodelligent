import { useUser } from "../../context/UserContext";

const Profile = () => {
  const { user } = useUser();

  return (
    <>
      <h1>Profile page</h1>
      {user.foods.map((food) => {
        return (
          <div className="food-item-container">
            <ul>
              <li>
                <b>{food.name}</b>
              </li>
              <li>Grade: {food.grade}</li>
              <li>
                Time: {food.time[0]} hours and {food.time[1]} minutes
              </li>
              <li>
                Ingridients:
                <ul>
                  {food.ingridients.map((ingridient) => (
                    <li>{ingridient}</li>
                  ))}
                </ul>
              </li>
              <li>
                Instructions:
                <ul>
                  {food.instructions.map((step) => {
                    return <li>{step}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Profile;
