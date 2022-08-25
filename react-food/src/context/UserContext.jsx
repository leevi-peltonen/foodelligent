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
      ingridients: ['flour', 'cheese', 'sauce', 'pineapple', 'some meat'],
      time: [0, 20],
      grade: 10,
    },
    {
      name: "pasta carbonara",
      instructions: ["do this", "do that", "finito"],
      ingridients: ['pasta', 'bacon', 'eggs'],
      time: [0, 15],
      grade: 6,
    }
  ]
}

const UserProvider = (props) => {
  const [user, setUser] = useState(DUMMY_USER);

  const state = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
