import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const useRecipe = () => {
  return useContext(RecipeContext);
};

const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);

  const state = {
    recipes,
    setRecipes,
  };

  return (
    <RecipeContext.Provider value={state}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
