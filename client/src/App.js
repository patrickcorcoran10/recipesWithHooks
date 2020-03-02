import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  const url = useState(`https://api.myjson.com/bins/t7szj`);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipe = async () => {
    const recipeData = await fetch(url);
    const { recipes } = await recipeData.json();
    setRecipes(recipes);
  };

  useEffect(() => {
    fetchRecipe();
  });

  return (
    <div className="App">
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
