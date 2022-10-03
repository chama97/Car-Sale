import React from 'react'
import Login from './screens/Login'
import Sign from './screens/Sign'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}