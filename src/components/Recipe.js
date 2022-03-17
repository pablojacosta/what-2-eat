/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Box, Link, Image, Badge, AspectRatio, Text } from "@chakra-ui/react"

const Recipe = ({ recipeId, recipeTitle, recipeImage }) => {

    const [ recipeUrl, setRecipeUrl ] = useState('')
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=3e8f01e5d1934f8ba4962282bad7701f`
    
    useEffect(() => {
      axios
        .get(url)
        .then(response => setRecipeUrl(response.data.sourceUrl))
        console.log('Data Fulfilled');
    }, [recipeId])

  return (
    <Box 
      boxSize='sm' 
      justify='center'
    >
      <Flex 
        direction='column' 
        justify='center' 
        alignItems='center' 
        boxSize='sm' 
      >
        <AspectRatio 
          ratio={1} 
          w={[40, 48]}
        >
          <Image 
            src={recipeImage} 
            alt='recipe' 
            fit='fill' 
            border='4px' 
            borderRadius='full'
            borderColor='whiteAlpha.900'
          />
        </AspectRatio>
        <Box boxSize='sm'>
          <Text
            mt='1'
            mb='1'
            fontWeight='bold'
            fontSize='2xl'
            as='h4'
            lineHeight='tall'
            direction='row'
            align='center'
            isTruncated
            textColor='whiteAlpha.900'
            textShadow='3px 3px black'
            p={10}
          >
            {recipeTitle}
          </Text>
          <Flex 
            direction='row' 
            align='center' 
            justify='center'
          >
            <Badge 
              borderRadius='full' 
              px='4' 
              py='2' 
              colorScheme='whiteAlpha' 
              border='2px' 
              borderColor='whiteAlpha.900'
              bg='blackAlpha.700'
            >
            <Link 
              href={recipeUrl} 
              isExternal
            >
              Go to Recipe
            </Link>
            </Badge>
          </Flex>
        </Box>
      </Flex>
    </Box>
    
    
  )
}

export default Recipe


