import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
import { uuid } from 'uuidv4';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"



const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes)



  // Hook to save to localStorage  *GETTING*
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    // check to see if it exists
    if (recipeJSON != null) {
      return setRecipes(JSON.parse(recipeJSON))
    }
  }, [])

  // Hook to pass into localstorage *SETING*
  useEffect(() => {
    // setting item(key, convertToString)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])



  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }


  function handleRecipeAdd() {
    const newRecipe = {
      id: uuid(),
      name: 'New',
      service: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {
          id: uuid(),
          name: 'Name',
          amount: '1 Tbs'
        }
      ]
    }

    setRecipes([...recipes, newRecipe])
  }



  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }


  return (
    <RecipeContext.Provider
      value={recipeContextValue}
    >
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  )

}





const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
]







export default App;
