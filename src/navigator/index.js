// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { AuthNavigator } from './AuthNavigator';
// import { HomeNavigator } from './HomeScreenNavigator';
// import { WelcomeAppNavigator } from './WelcomeAppNavigator';
// import { UserStepNavigator } from './UserStepNavigator';

// const Stack = createNativeStackNavigator();

// export const AppNavigation = () => {
//   return (
//     <Stack.Navigator initialRouteName='AuthScreen' screenOptions={{headerShown: false}}>
//         <Stack.Screen name="WelcomeRoute" component={WelcomeAppNavigator} />
//         <Stack.Screen name="AuthRoute" component={AuthNavigator} />
//         <Stack.Screen name="HomeRoute" component={HomeNavigator} />
//         <Stack.Screen name="UserStepRoute" component={UserStepNavigator} />
//     </Stack.Navigator>
//   )
// }

export { StackNavigation } from './StackNavigator';
// export { BottomTabNavigator } from './BottomTabNavigator';