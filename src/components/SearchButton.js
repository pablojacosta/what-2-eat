/* eslint-disable react/prop-types */
import React from 'react'
import { Container, Box, Button } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

const SearchButton = ({ getRecipesData }) => {
  return (
    <Container maxW='container.md' centerContent>
      <Box 
        maxW='100rem'
      >
        <Button
          leftIcon={<SearchIcon />}
          onClick={getRecipesData} 
          size='md' 
          colorScheme='red' 
          mt='24px' 
          mb='24px' 
          border='1px'
        >
          Search recipes!
        </Button>
      </Box>
    </Container>
  )
}

export default SearchButton