import React, { useContext } from 'react';
import IngredientList from './IngredientList'
import { RecipeContext } from './App'


export default function Recipe(props) {
  const { handleRecipeDelete } = useContext(RecipeContext)

  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients
  } = props


  // useEffect(() => {
  //   console.log('RENDERED');

  //   return () => {
  //     console.log('UNMOUNTED RENDERED');
  //   }
  // }, [])

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time: </span>
        <span className="recipe_value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servigs: </span>
        <span className="recipe_value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instrunctions: </span>
        <div className="recipe_value recipe__instructions recipe__value--indented">{instructions}</div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients: </span>
        <div className="recipe_value recipe__value--indented" >
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}

