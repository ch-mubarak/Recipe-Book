import React from "react";
import RecipeList from "./RecipeList";
import { v4 as uuidv4 } from 'uuid';
import "../css/app.css"
import { useState } from "react";

export const RecipeContext = React.createContext()

function App() {

  const [recipes, setRecipes] = useState(sampleRecipes) 
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: "1:00",
      instructions: "instr...",
      ingredients: [
        {
          id: uuidv4(),
          name: "Name",
          amount: ' Tbs',
        }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList
        recipes={recipes} />
    </RecipeContext.Provider>
  );
}


const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: "1:45",
    instructions: '1.Put Salt \n2.Put Chicken on even \n3.Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds"
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs"
      }
    ]
  },
  {
    id: 2,
    name: 'Plain lamp',
    servings: 4,
    cookTime: "4:45",
    instructions: '1.Put Paprika on lamp \n2.Put lamp on even \n3.Eat lamp',
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds"
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs"
      }
    ]
  },
]

export default App;
