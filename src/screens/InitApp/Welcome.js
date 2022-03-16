import React from 'react'
import {StyleSheet } from 'react-native'
import { Card } from '../../components/Card';
import { Center, Heading, Image, VStack, Text, Box, Button } from 'native-base';


export const WelcomeScreen = (props) => {
    const { navigate } = props.navigation;
  return (
      <Card style={styles.container}>
            <Center flex={1}>
                <VStack space={5}>
                    <VStack alignItems="center" space={5}>
                        <Image size='xl' source={{uri: 'https://i.pinimg.com/originals/58/b8/01/58b801823c2ee845a6fa3e749dbe3d83.png'}} alt="App ICon"/>
                        <Center>
                            <Heading letterSpacing={1} _dark={{ color:'cyan.200' }} _light={{color: 'cyan.900'}} size="lg">Welcome To</Heading>
                            <Text letterSpacing={4} lineHeight="sm" fontSize="4xl"> Fitness UI </Text>
                        </Center>
                    </VStack>

                    <Box width="70%">
                        <VStack space={7}>
                            <Text textAlign="center" fontSize="md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</Text>
                            <Button onPress={() => navigate('AuthRoute')} shadow={2} size="lg" colorScheme="primary" _text={{fontSize: "xl", letterSpacing: 1}}>GET STARTED</Button>
                        </VStack>
                    </Box>
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