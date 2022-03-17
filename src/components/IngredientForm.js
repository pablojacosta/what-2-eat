/* eslint-disable react/prop-types */
import React from 'react'
import IngredientsInput from './IngredientsInput'
import AddIngredientButton from './AddIngredientButton'

const IngredientForm = ({ newIngredient, handleInputChange, addIngredient, onClickSuggestion, filteredSuggestions, activeSuggestionIndex, showSuggestions, onKeyDown }) => {
  return (
    <form onSubmit={addIngredient}>
      <IngredientsInput
        newIngredient={newIngredient} 
        handleInputChange={handleInputChange}
        filteredSuggestions={filteredSuggestions}
        activeSuggestionIndex={activeSuggestionIndex}
        showSuggestions={showSuggestions}
        onKeyDown={onKeyDown}
        onClickSuggestion={onClickSuggestion}
      />
      <AddIngredientButton />
    </form>
    
  )
}

export default IngredientForm

