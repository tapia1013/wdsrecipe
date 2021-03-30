import React from 'react'

export default function Recipe(props) {
  const {
    name,
    cookTime,
    servings,
    instructions
  } = props

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time: </span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servigs: </span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instrunctions: </span>
        <div>
          {instructions}
        </div>
      </div>
    </div>
  )
}



// VIDEO 11