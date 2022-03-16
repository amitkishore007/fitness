import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPasswordScreen, LoginScreen, SignupScreen, VerifyEmailScreen, VerifyPhoneScreen } from '../screens';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName='login' screenOptions={{ 
      gestureEnabled: true,
      gestureDirection: "horizontal",
      headerShown: true, }}>
        <AuthStack.Screen name='login' component={LoginScreen}/>
        <AuthStack.Screen name='signup' component={SignupScreen}/>
        <AuthStack.Screen name='forgotPassword' component={ForgotPasswordScreen}/>
        <AuthStack.Screen name='verifyPhone' component={VerifyPhoneScreen}/>
        <AuthStack.Screen name='verifyEmail' component={VerifyEmailScreen}/>
    </AuthStack.Navigator>
  )
}