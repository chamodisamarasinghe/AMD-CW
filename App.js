import { View, Text } from 'react-native'
import React from 'react'
import Register from './screens/Register'
import Login from './screens/Login'
import AddData from './screens/AddData'
import Home from './screens/Home'
import CarDetails from './screens/CarDetails'
import AddCar from './screens/AddCar'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="AddCar" component={AddCar} />
      
    </Stack.Navigator>
  </NavigationContainer>

      
    
  )
}