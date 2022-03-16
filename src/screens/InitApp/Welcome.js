import React from 'react'
import {StyleSheet } from 'react-native'
import { Card } from '../../components/Card';
import { Center, Heading, Image, VStack, Text, Box, Button } from 'native-base';


export const WelcomeScreen = () => {
  return (
      <Card style={styles.container}>
            <Center>
                <VStack space={2}>
                    <VStack alignItems="center" space={5}>
                        <Image size='xl' source={{uri: 'https://i.pinimg.com/originals/58/b8/01/58b801823c2ee845a6fa3e749dbe3d83.png'}} alt="App ICon"/>
                        <Center>
                            <Heading size="md">Welcome To</Heading>
                            <Text fontSize="3xl"> Fitness UI </Text>
                        </Center>
                    </VStack>

                    <Box width="60%">
                        <VStack space={4}>
                            <Text textAlign="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</Text>
                            <Button shadow={2}>GET STARTED</Button>
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
        paddingTop: 50
    }
})