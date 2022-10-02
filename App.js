import { View, Text } from 'react-native'
import React from 'react'
import Register from './screens/Register'
import Login from './screens/Login'
import AddData from './screens/AddData'
import Home from './screens/Home'
import Car from './screens/Car'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AddData" component={AddData} />
      <Stack.Screen name="Register" component={Register} />
      
    </Stack.Navigator>
  </NavigationContainer>

      
    
  )
}