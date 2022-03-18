import React from 'react'
import { Center,Stack,InputLeftAddon,InputRightAddon, InputGroup,Input,Box, Image, VStack, Button, HStack, Text, Pressable, ScrollView  } from 'native-base'

export const SignupScreen = (props) => {

  const { navigate } = props.navigation;
  const signupLink = () => {
    return <Pressable onPress={() => navigate('login')}>
        {({ isHovered,
    isFocused,
    isPressed}) => {
            return <Text color={isPressed ? "primary.200" : isHovered ? "primary.200" : "primary.800"} fontWeight="bold">Login</Text>
        }}
    </Pressable>
}
  return (
    <Center flex={1}>
      <VStack flex={1} width="100%" space={4}>
        <Stack h="40%"  justifyContent="flex-end" alignItems="center">
            <Image size='xl' source={{uri: 'https://i.pinimg.com/originals/58/b8/01/58b801823c2ee845a6fa3e749dbe3d83.png'}} alt="App ICon"/>
        </Stack>
       <Stack h="50%" alignItems="center" space={4}>
          <Input w={{ base: "80%",  md: "100%" }} fontSize="md" placeholder="First Name" />
          <Input w={{ base: "80%",  md: "100%" }} fontSize="md" placeholder="Last  Name" />
          <Input w={{ base: "80%",  md: "100%" }} fontSize="md" placeholder="Mobile Number" />
          <Box w="80%"><Button onPress={() => {}} shadow={2} size="lg" colorScheme="primary" _text={{fontSize: "sm", letterSpacing: 1}}>Signup</Button></Box>
       </Stack>

        <Center>
          <HStack>
              <Text textAlign="center">Back to </Text> 
            {signupLink()} 
          </HStack>
        </Center>
          
      </VStack>
    </Center>
  )
}