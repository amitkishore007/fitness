import React from 'react'
import {StyleSheet } from 'react-native'
import { Card } from '../../components/Card';
import { Center, Heading, Image, VStack, Text, Box, Button, Pressable, HStack } from 'native-base';


export const WelcomeScreen = (props) => {
    const { navigate } = props.navigation;

    const signinLink = () => {
        return <Pressable onPress={() => console.log('pressed')}>
            {({ isHovered,
        isFocused,
        isPressed}) => {
                return <Text color={isPressed ? "primary.200" : isHovered ? "primary.200" : "primary.800"} fontWeight="bold">Sign in</Text>
            }}
        </Pressable>
    }
  return (
      <Card style={styles.container}>
            <Center flex={1}>
                <VStack flex={1} justifyContent="center" alignItems="center"   space={4} >
                    <Box h="55%" justifyContent="flex-end" alignItems="center">
                        <Image size='xl' source={{uri: 'https://i.pinimg.com/originals/58/b8/01/58b801823c2ee845a6fa3e749dbe3d83.png'}} alt="App ICon"/>
                    </Box>
                    <VStack h="45%" justifyContent="flex-end" alignItems="center"  space={5}>
                        <Box width="90%">
                            <VStack space={5}>
                                <Center>
                                    <Heading letterSpacing={1} _dark={{ color:'cyan.200' }} _light={{color: 'cyan.900'}} size="lg">Welcome To</Heading>
                                    <Text letterSpacing={4} lineHeight="sm" fontSize="4xl"> Fitness UI </Text>
                                </Center>
                                <Text textAlign="center" fontSize="md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</Text>
                                <Button onPress={() => navigate('onboarding')} shadow={2} size="lg" colorScheme="primary" _text={{fontSize: "xl", letterSpacing: 1}}>GET STARTED</Button>
                            </VStack>
                        </Box>

                        <HStack alignItems="center">
                            <Text textAlign="center">Already have an account? </Text>  
                            {signinLink()}
                        </HStack>
                    </VStack>
                </VStack>

            </Center>
      </Card>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 30
    }
})