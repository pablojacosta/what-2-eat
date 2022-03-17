/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container, Heading, Box, Text, Badge } from "@chakra-ui/react";

const Header = () => {
  return (
    <Container 
      maxW='container.md'
    >
      <Box
        mt={10}
      >
        <Box
          margin='auto'
          borderRadius='full' 
          textColor='white'
          border='2px' 
          borderColor='black' 
          bg='blackAlpha.700'
          maxW='-webkit-fit-content'
        >
          <Heading 
            as='h3' 
            size='xs' 
            m={2} 
            p={2} 
            textAlign='center'
            fontSize={[15, 17, 20, 25]}
          >
            What's in your fridge/pantry?
          </Heading>
        </Box>
        
        <Text 
          fontSize={[15, 17, 20, 25]} 
          textAlign='center' 
          fontWeight={'bold'} 
          textColor='white' 
          textShadow='3px 3px black'
          mt={10}
          mb={10}
        >
          Add the ingredients you would like to cook with
        </Text>
      </Box>
    </Container>
    
  )
}

export default Header