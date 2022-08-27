import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const DUMMY_USER = {
  id: 1,
  username: "Leevi",
  foods: [
    {
      name: "pizza with pineapple",
      instructions: ["step1", "step2", "step3"],
      ingridients: ['pizzabase', 'tomato', 'cheese'],
      time: 20,
      grade: 5,
    },
    {
      name: "pasta carbonara",
      instructions: ["do this", "do that", "finito"],
      ingridients: ['potatoes', 'pasta', 'stuff'],
      time: 15,
      grade: 2,
    }
  ]
}

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const state = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
