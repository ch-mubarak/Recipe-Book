import React from 'react'
import Recipe from './Recipe'

function RecipeList(props) {
    const { recipes, handleRecipeAdd, handleRecipeDelete } = props
    return (
        <div className='recipe-list'>
            <div>
                {recipes.map(recipe => {
                    return <Recipe
                        {...recipe}
                        handleRecipeDelete={handleRecipeDelete}
                        key={recipe.id} />
                })}
            </div>
            <div className='recipe-list_add-recipe-btn-container'>
                <button
                    onClick={handleRecipeAdd}
                    className='btn btn--primary'>Add Recipe</button>
            </div>
        </div>
    )
}

export default RecipeList