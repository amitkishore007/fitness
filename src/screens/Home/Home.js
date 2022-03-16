import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'native-base';

export const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigate('WelcomeRoute')}>Go To</Button>
    </View>
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