import React from 'react'
import Login from './screens/Login'
import Sign from './screens/Sign'
import Home from './screens/Home'
import Car from './screens/Car'
import Cars from './screens/Cars'
import CarUpdate from './screens/CarUpdate'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Car" component={Car} />
        <Stack.Screen name="Cars" component={Cars} />
        <Stack.Screen name="CarUpdate" component={CarUpdate} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}