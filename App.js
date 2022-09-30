import React from 'react';
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'native-base';



export default function App() {
  return(
    <View>
      <Login/>
    </View>
  )
}