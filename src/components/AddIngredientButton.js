/* eslint-disable react/prop-types */
import React from 'react'
import { Container, Box, Button } from "@chakra-ui/react";

const AddIngredientButton = () => {
  return (
    <Container maxW='container.md' centerContent>
      <Box maxW='100rem'>
      <Button 
          type='submit' 
          size='sm' 
          colorScheme='red' 
          mt={10} 
          mb={1} 
          border='1px'
      >
        Add ingredient
      </Button>
      </Box>
    </Container>
  )
}

export default AddIngredientButton