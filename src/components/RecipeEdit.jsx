import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RecipeContext } from "./App"
import RecipeIngredientEdit from './RecipeIngredientEdit'

function RecipeEdit({ recipe }) {
    const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

    function handleChange(changes) {
        handleRecipeChange(recipe.id, { ...recipe, ...changes })
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient
        handleChange({ ingredients: newIngredients })
    }

    function handleIngredientAdd() {
        const newIngredient = {
            id: uuidv4(),
            name: "",
            amount: ""
        }
        handleChange({ ingredients: [...recipe.ingredients, newIngredient] })


    }

    function handleIngredientDelete(id) {
        const newIngredients = recipe.ingredients.filter(ingredient => ingredient.id !== id)
        handleChange({ ingredients: newIngredients })
    }

    return (
        <div className='recipe-edit'>
            <div className='recipe-edit__remove-button-container'>
                <button
                    onClick={() => handleRecipeSelect(null)}
                    className='btn recipe-edit__remove-button'>
                    &times;
                </button>
            </div>
            <div className='recipe-edit__details-grid'>
                <label
                    htmlFor='name'
                    className='recipe-edit__label'>
                    Name
                </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    onChange={(e) => handleChange({ name: e.target.value })}
                    value={recipe.name}
                    className='recipe-edit__input'
                />
                <label
                    htmlFor='cookTime'
                    className='recipe-edit__label'>
                    Cook Time
                </label>
                <input
                    type='cookTime'
                    name='cookTime'
                    id='cookTime'
                    value={recipe.cookTime}
                    onChange={e => handleChange({ cookTime: e.target.value })}
                    className='recipe-edit__input' />
                <label
                    htmlFor='servings'
                    className='recipe-edit__label'>
                    Servings
                </label>
                <input
                    type='number'
                    min='1'
                    name='servings'
                    id='servings'
                    onChange={e => handleChange({ servings: parseInt(e.target.value) || '' })}
                    value={recipe.servings}
                    className='recipe-edit__input'
                />
                <label
                    htmlFor='instructions'
                    className='recipe-edit__label'>
                    Instructions
                </label>
                <textarea
                    name="instructions"
                    id="instructions"
                    onChange={e => handleChange({ instructions: e.target.value })}
                    value={recipe.instructions}
                    className='recipe-edit__input'
                />
            </div>
            <br />
            <label className='recipe-edit__label'>Ingredients</label>
            <div className='recipe-edit__ingredient-grid'>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => {
                    return <RecipeIngredientEdit
                        handleIngredientChange={handleIngredientChange}
                        handleIngredientDelete={handleIngredientDelete}
                        key={ingredient.id}
                        ingredient={ingredient} />
                })}
            </div>
            <div className='recipe-edit__add-ingredient-btn-container'>
                <button
                    onClick={handleIngredientAdd}
                    className='btn btn--primary'>
                    Add Ingredient
                </button>
            </div>
        </div>
    )
}

export default RecipeEdit