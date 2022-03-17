/* eslint-disable react/prop-types */
import React from 'react'
import { Input } from '@chakra-ui/react'
import SuggestionsList from './SuggestionsList'

const IngredientsInput = ({ newIngredient, handleInputChange, filteredSuggestions, activeSuggestionIndex, showSuggestions, onClickSuggestion, onKeyDown }) => {
  return (
    <>
    <Input 
      variant='Unstyled' 
      placeholder='Type ingredient'
      width={300}
      mb={15}
      value={newIngredient}
      onChange={handleInputChange}
      onKeyDown={onKeyDown}
    />
    {showSuggestions && newIngredient && 
      <SuggestionsList 
        filteredSuggestions={filteredSuggestions}
        activeSuggestionIndex={activeSuggestionIndex}
        showSuggestions={showSuggestions}
        onClickSuggestion={onClickSuggestion}
      />
    }
    </>
  )
}

export default IngredientsInput