import React from 'react'
import { HStack, Box, Button, Center } from 'native-base'
import { Page1, Page2, Page3 } from '../../components'

export const OnBoardingScreen = (props) => {
    const { navigate } = props.navigation;
  return (
    <Box flex={1}>
        <Center h="80%" alignItems="center" justifyContent="center">
            <HStack space={3} paddingX={2}>
                <Page1 flex={1/3} height={100} shadow={1}  alignItems="center" justifyContent="center"/>
                <Page2 flex={1/3} height={100} shadow={1}  alignItems="center" justifyContent="center"/>
                <Page3 flex={1/3} height={100} shadow={1}  alignItems="center" justifyContent="center"/>
            </HStack>
        </Center>
        <Center>
            <HStack space={4}>
                <Button onPress={() => navigate('welcome')} shadow={2} size="lg" colorScheme="primary" _text={{fontSize: "xl", letterSpacing: 1}}>Back</Button>
                <Button onPress={() => navigate('AuthRoute')} shadow={2} size="lg" colorScheme="primary" _text={{fontSize: "xl", letterSpacing: 1}}>Continue</Button>
            </HStack>
        </Center>
    </Box>
  )
}