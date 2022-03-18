import React from 'react'
import { Center,Stack,InputLeftAddon,InputRightAddon, InputGroup,Input,Box, Image, VStack, Button, HStack, Text, Pressable } from 'native-base'

export const LoginScreen = (props) => {

  const { navigate } = props.navigation;
  const signupLink = () => {
    return <Pressable onPress={() => navigate('signup')}>
        {({ isHovered,
    isFocused,
    isPressed}) => {
            return <Text color={isPressed ? "primary.200" : isHovered ? "primary.200" : "primary.800"} fontWeight="bold">Sign Up</Text>
        }}
    </Pressable>
}
  return (
    <Center flex={1}>
      <VStack flex={1} width="100%" space={4}>
        <Stack h="55%"  justifyContent="flex-end" alignItems="center">
            <Image size='xl' source={{uri: 'https://i.pinimg.com/originals/58/b8/01/58b801823c2ee845a6fa3e749dbe3d83.png'}} alt="App ICon"/>
        </Stack>
       <Stack h="35%" w="100%" alignItems="center" space={4}>
          <Input w={{ base: "70%",  md: "100%" }} fontSize="sm" placeholder="Mobile Number" />
          <Box w="70%"><Button onPress={() => {}} shadow={2} size="lg" colorScheme="primary" _text={{fontSize: "sm", letterSpacing: 1}}>Login</Button></Box>
       </Stack>

        <Center>
          <HStack>
              <Text textAlign="center">Don't have an accoount? </Text> 
            {signupLink()} 
          </HStack>
        </Center>
          
      </VStack>
    </Center>
  )
}