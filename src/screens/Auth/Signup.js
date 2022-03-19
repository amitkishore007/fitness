import React from 'react'
import { Center,Stack,Input,Box, Image, VStack, Button, HStack, Text  } from 'native-base'
import { NBPressable } from '../../components';

export const SignupScreen = (props) => {

  const { navigate } = props.navigation;

  return (
    <Center flex={1}>
      <VStack flex={1} width="100%" space={4}>
        <Stack h="50%"  justifyContent="flex-end" alignItems="center">
            <Image size='xl' source={{uri: 'https://i.pinimg.com/originals/58/b8/01/58b801823c2ee845a6fa3e749dbe3d83.png'}} alt="App ICon"/>
        </Stack>
       <Stack h="40%" alignItems="center" space={4}>
          <Input w={{ base: "80%",  md: "100%" }} fontSize="md" placeholder="Name" />
          <Input w={{ base: "80%",  md: "100%" }} fontSize="md" placeholder="Mobile Number" />
          <Box w="80%"><Button onPress={() => navigate('verifyPhone')} shadow={2} size="lg" colorScheme="primary" _text={{fontSize: "sm", letterSpacing: 1}}>Signup</Button></Box>
       </Stack>

        <Center>
          <HStack>
              <Text textAlign="center">Back to </Text> 
              <NBPressable onClick={() => navigate('login')}  pressedColor="primary.200" hoveredColor="primary.200" defaultColor="primary.800" title="Login" />
          </HStack>
        </Center>
          
      </VStack>
    </Center>
  )
}