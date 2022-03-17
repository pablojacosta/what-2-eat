import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import { Box, Container, Flex, VStack } from "@chakra-ui/react"
import RecipesList from './components/RecipesList'
import IngredientForm from './components/IngredientForm'
import SearchButton from './components/SearchButton'
import IngredientsList from './ingredients.json'
import AddedIngredients from './components/AddedIngredients'

const App = () => {
  const api_key = process.env.REACT_APP_API_KEY
  const suggestions = IngredientsList
  
  const [ newIngredient, setNewIngredient ] = useState('')
  const [ ingredients, setIngredients ] = useState([])
  const [ ingredientsForUrl, setIngredientsForUrl ] = useState([])
  const [ displayedRecipes, setDisplayedRecipes ] = useState([])
  
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setNewIngredient(e.target.value)

    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(unLinked)
    setActiveSuggestionIndex(0)
    setShowSuggestions(true)
  };

  const onClickSuggestion = (e) => {
    setFilteredSuggestions([])
    setNewIngredient(e.target.innerText)
    setActiveSuggestionIndex(0)
    setShowSuggestions(false)
  };

  const addIngredient = (e) => {
    if (suggestions.map(ingredient => ingredient.name).includes(newIngredient) && !ingredients.includes(newIngredient)) {
      e.preventDefault()
      setIngredients(ingredients.concat(newIngredient))
      setNewIngredient('')
    } 
    e.preventDefault()
  }

  const onKeyDown = (e) => {
    // enter key
    if (e.keyCode === 13) {
      setNewIngredient(filteredSuggestions[activeSuggestionIndex].name)
      setActiveSuggestionIndex(0)
      setShowSuggestions(false)
    }
    // up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1)
    }
    // down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1)
    }
  }


  const onClickRemoveIngredient = (ingredientToRemove) => {
    let filteredIngredients = ingredients.filter(ingredient => ingredient !== ingredientToRemove)
    setIngredients(filteredIngredients)
  }

  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${[...ingredientsForUrl]}&ranking=1&number=4`
  const bgImageUrl = 'https://c.pxhere.com/images/4a/6d/bf88418ce81d22c8115e0d5dd64d-1641585.jpg!d'
  
  const getRecipesData = () => {
    setIngredientsForUrl([])
    setIngredientsForUrl(ingredientsForUrl.concat(ingredients))
    setIngredients([])
  }

  useEffect((() => {
    axios
      .get(url)
      .then(response => {
        setDisplayedRecipes(response.data)
        console.log('response.data', response.data)
      })
  }), [ingredientsForUrl])


    
  return(
    <Box w='full' h='full' bgImage={bgImageUrl} bgRepeat='no-repeat' bgSize='cover' bgAttachment='fixed' bgPosition='center'>
      <Container maxW='container.xl' p={0} >
        <Flex h='container.lg' p={20}>
          <VStack w='full' h='full'>
            <Header />
            <Container maxW='container.md' centerContent>
              <AddedIngredients 
                ingredients={ingredients}
                onClickRemoveIngredient={onClickRemoveIngredient}
                newIngredient={newIngredient}
              />
              <IngredientForm 
                newIngredient={newIngredient}
                handleInputChange={handleInputChange}
                addIngredient={addIngredient}
                onClickSuggestion={onClickSuggestion}
                filteredSuggestions={filteredSuggestions}
                activeSuggestionIndex={activeSuggestionIndex}
                showSuggestions={showSuggestions}
                onKeyDown={onKeyDown}
              />
              <SearchButton getRecipesData={getRecipesData} />
              <RecipesList
                recipes={displayedRecipes} 
                ingredientsForUrl={ingredientsForUrl}
              />
            </Container>
          </VStack>
        </Flex>
      </Container>
    </Box>
    
  )
}

export default App
