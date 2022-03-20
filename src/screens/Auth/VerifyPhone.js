import React from 'react'
import { Center,Stack,InputLeftAddon,InputRightAddon, InputGroup,Input,Box, Image, VStack, Button, HStack, Text, Pressable } from 'native-base'
import { NBPressable } from '../../components';

export const VerifyPhoneScreen = (props) => {

  const { navigate } = props.navigation;

  return (
    <Center flex={1}>
      <VStack flex={1} width="100%" space={4}>
        <Stack h="55%"  justifyContent="flex-end" alignItems="center">
            <Image size='xl' source={{uri: 'https://i.pinimg.com/originals/58/b8/01/58b801823c2ee845a6fa3e749dbe3d83.png'}} alt="App ICon"/>
        </Stack>
       <Stack h="35%" w="100%" alignItems="center" space={4}>
          <HStack space={3}>
            <Input w={{ base: "70%",  md: "100%" }} fontSize="md" type='password' placeholder="OTP" />
            {/* <Input w={{ base: "15%",  md: "100%" }} fontSize="sm" textAlign="center" placeholder="X" />
            <Input w={{ base: "15%",  md: "100%" }} fontSize="sm" textAlign="center" placeholder="X" />
            <Input w={{ base: "15%",  md: "100%" }} fontSize="sm" textAlign="center" placeholder="X" /> */}
          </HStack>
          <Box w="70%"><Button onPress={() => navigate('UserStepRoute')} shadow={2} size="lg" colorScheme="primary" _text={{fontSize: "sm", letterSpacing: 1}}>Verify OTP</Button></Box>
          <Center>
          <HStack>
              <Text textAlign="center">Did not receive OTP? </Text> 
            <NBPressable onClick={() => {  console.log('OTP Resend!!') }}  pressedColor="primary.200" hoveredColor="primary.200" defaultColor="primary.800" title="Resend OTP" />
          </HStack>
        </Center>
       </Stack>

        <Center>
          <HStack>
              <Text textAlign="center">Don't have an accoount? </Text> 
            <NBPressable onClick={() => navigate('signup')}  pressedColor="primary.200" hoveredColor="primary.200" defaultColor="primary.800" title="Sign up" />
          </HStack>
        </Center>
      </VStack>
    </Center>
  )
}