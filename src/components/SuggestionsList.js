/* eslint-disable react/prop-types */
import React from "react"
import { List, ListItem, Badge, Box, Container } from '@chakra-ui/react'

const SuggestionsList = ({ filteredSuggestions, activeSuggestionIndex, onClickSuggestion }) => {

  return filteredSuggestions.length ? (
    <List 
      border='1px' 
      borderStyle='solid'
      borderColor='#C53030'
      borderTopWidth={0}
      backgroundColor='white'
      listStyleType='none'
      mt={0}
      mb={5}
      maxH='143px'
      overflowY='auto'
      paddingLeft={0}
      w='100%'
      css={{
        '&::-webkit-scrollbar': {
           width: '0.5rem',
           height: '0rem',
           borderRadius: '20px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#E53E3E',
        },
      }}
    >
      {filteredSuggestions.map((suggestion, index) => {
        if (index === activeSuggestionIndex) {
          return (
            <ListItem 
            key={suggestion.id} 
            onClick={onClickSuggestion}
            padding='0.5rem'
            fontSize='0.9rem'
            fontWeight={700}
            bgGradient="linear(to-l, red.300, red.500)"
            color='#fff'
            cursor='pointer'
          >
            {suggestion.name}
          </ListItem>
          )
        }

        return (
          <ListItem 
            key={suggestion.id} 
            onClick={onClickSuggestion}
            padding='0.5rem'
            fontSize='0.9rem'
            fontWeight={500}
            _hover={{
              fontWeight: '700',
              backgroundImage: 'linear-gradient(to left, #FC8181, #E53E3E)',
              color:'#fff',
              cursor:'pointer'
            }}
          >
            {suggestion.name}
          </ListItem>
        )
      })}
    </List>
  ) : (
    <Container maxW='container.md' centerContent mt={2} mb={4}>
      <Box>
        <Badge 
          borderRadius='full' 
          px='4' 
          py='2' 
          colorScheme='orange' 
          border='2px' 
          borderColor='black'
        >
           Sorry, no suggestions... Please type again.
        </Badge>
      </Box>
    </Container>
  )
}

export default SuggestionsList
