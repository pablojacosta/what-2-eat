/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Badge, IconButton, MenuDescendantsProvider} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'


const AddedIngredients = ({ ingredients, onClickRemoveIngredient }) => {

  
  return (
      <Box maxW='container.md' display='flex' flexWrap='wrap' justifyContent='center'>
        {ingredients.map(ingredient => 
          <Box
            key={ingredient}
            borderRadius='md' 
            p={1}
            bg='red.400' 
            border='2px'
            color='white'
            borderColor='black'
            m={2}
            isTruncated
            maxW='120'
          > 
            <IconButton
              icon={ 
                <CloseIcon
                  w={3} 
                  h={3} 
                  mr={1}
                  ml={1} 
                  mb={0.5}
                  color='black' 
                /> 
              }
              colorScheme='blackAlpha'
              isRound={true}
              aria-label='Close Icon'
              variant='solid'
              size='xs'
              mr={1.5}
              onClick={() => onClickRemoveIngredient(ingredient)}
              isDisabled={false}
            />          
            {ingredient}
          </Box>
        )}
      </Box>
    )
  }

export default AddedIngredients

/*
<Box>
        {ingredients.map(ingredient => 
          <Badge
            variant='solid'
            key={ingredient}
            borderRadius='full' 
            p={1.5}
            colorScheme='red' 
            border='2px' 
            borderColor='black'
            m={2}
            fontSize={['xs', 'sm', 'md']}
            size='sm'
          > 
            <IconButton
              icon={ 
                <CloseIcon
                  w={3} 
                  h={3} 
                  mr={1}
                  ml={1} 
                  mb={0.5}
                  color='black' 
                /> 
              }
              colorScheme='blackAlpha'
              isRound={true}
              aria-label='Close Icon'
              variant='solid'
              size='xs'
              mr={1.5}
              onClick={() => onClickRemoveIngredient(ingredient)}
              isDisabled={false}
            />          
            {ingredient}
          </Badge>
        )}
      </Box>

      */