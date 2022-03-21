import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, NotificationScreen, ProfileScreen, SettingsScreen, TrainingScreen } from '../screens';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { AntICon, MatICon, FAICon, FA5ICon, MatComICon } from '../components';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
      <Tab.Navigator initialRouteName='home' screenOptions={{ tabBarStyle:{ position: 'absolute'  , paddingBottom: 5, paddingTop: 5, height: 50,   marginBottom: 15, width: '80%', borderRadius: 25, marginLeft: '10%' }, tabBarBackground: () => (
        <BlurView tint="dark" intensity={100} style={{...StyleSheet.absoluteFill, borderRadius: 25}} />
      ) }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{  tabBarItemStyle:{padding: 2}, tabBarIconStyle:{},  tabBarLabelStyle:{}, tabBarLabel:'Home', tabBarShowLabel: true, tabBarIcon: ({ color, size }) => <AntICon name="home" color={color} size={22} /> }}/>
        <Tab.Screen name="Notification" component={NotificationScreen} options={{ tabBarItemStyle:{padding: 2}, tabBarIconStyle:{},  tabBarLabelStyle:{}, tabBarLabel:'Notification', tabBarShowLabel: true ,tabBarIcon: ({ size, color }) => <MatICon name="notifications-none" color={color} size={22} /> }}/>
        <Tab.Screen name="Training" component={TrainingScreen} options={{ tabBarItemStyle:{padding: 2}, tabBarIconStyle:{},  tabBarLabelStyle:{}, tabBarLabel:'Training', tabBarShowLabel: true ,tabBarIcon: ({ size, color }) => <MatComICon name="dumbbell" color={color} size={22} /> }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarItemStyle:{padding: 2}, tabBarIconStyle:{},  tabBarLabelStyle:{}, tabBarLabel:'Profile', tabBarShowLabel: true ,tabBarIcon: ({ size, color }) => <FAICon name="user-o" color={color} size={22} /> }}/>
        <Tab.Screen name="Setting" component={SettingsScreen} options={{ tabBarItemStyle:{padding: 2}, tabBarIconStyle:{},  tabBarLabelStyle:{}, tabBarLabel:'Settings', tabBarShowLabel: true ,tabBarIcon: ({ color, size }) => <AntICon name="setting" color={color} size={22} /> }}/>
      </Tab.Navigator>
  );
}

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { HomeScreen } from '../screens';

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row', borderWidth: '1', marginBottom: 10 }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export const BottomTabNavigator = () => {
//   return (
//       <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Home4" component={HomeScreen} />
//       </Tab.Navigator>
//   );
// }
