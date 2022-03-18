
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen, OnBoardingScreen } from '../screens';

const WelcomeAppStack = createNativeStackNavigator();

export const WelcomeAppNavigator = () => {
    return (
        <WelcomeAppStack.Navigator initialRouteName='welcome' screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
            headerShown: false,
            animation: 'slide_from_right'
          }}>
            <WelcomeAppStack.Screen name='welcome' component={WelcomeScreen}/>
            <WelcomeAppStack.Screen name='onboarding' component={OnBoardingScreen}/>
        </WelcomeAppStack.Navigator>
    )
}




