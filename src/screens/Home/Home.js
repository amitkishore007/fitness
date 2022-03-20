import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Box, Button, Center } from 'native-base';

export const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <Center flex={1} bg="coolGray.400">
      <Text>HomeScreen</Text>
      <Center ><Button onPress={() => navigate('WelcomeRoute')}>Go To</Button></Center>
    </Center>
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