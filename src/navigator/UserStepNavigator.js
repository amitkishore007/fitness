import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserTypeScreen } from '../screens';

const UserStepStack = createNativeStackNavigator();

export const UserStepNavigator = () => {
  return (
    <UserStepStack.Navigator initialRouteName='userType' screenOptions={{ 
      gestureEnabled: true,
      gestureDirection: "horizontal",
      headerShown: false, }}>
        <UserStepStack.Screen name='userType' component={UserTypeScreen}/>
    </UserStepStack.Navigator>
  )
}