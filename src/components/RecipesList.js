/* eslint-disable react/prop-types */
import React from 'react';
import Recipe from './Recipe'
import { Grid } from "@chakra-ui/react"
 
const RecipesList = ({ recipes, ingredientsForUrl }) => {
  if (ingredientsForUrl.length > 0) {
    return (
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}>
            {recipes.map(recipe =>
              <Recipe 
                key={recipe.id}
                recipeId={recipe.id}
                recipeTitle={recipe.title}
                recipeImage={recipe.image}
              />
            )}
          
        </Grid>
      
    )
  }
  return null
}

export default RecipesList
