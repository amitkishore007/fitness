import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName='home' screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal"
          }}>
            <HomeStack.Screen name='home' component={HomeScreen}/>
        </HomeStack.Navigator>
    )
}




