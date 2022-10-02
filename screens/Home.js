import {  Text} from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea, ImageBackground } from "native-base";
import { View, Image, StyleSheet } from 'react-native';
import Colors from '../assets/color';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    // backgroundColor:'green'
  },
  stretch: {
    width: 350,
    height: 300,
    resizeMode: 'stretch',
    // marginTop:'10%'
  },

  text:{
    color: 'green',
    fontWeight:'bold',
    fontSize:30,
    marginStart:40,
    marginLeft:30
  }
});

export default function Home({ navigation }) {
  return (
    
      <NativeBaseProvider>
        
       

        <View  style={styles.container}>
        <Image  style={styles.stretch}
          source={require("../assets/car.jpg")}/>



    
        </View>
        <VStack  w="75%" maxW="300px" mx="auto">

        <Text style={styles.text} color="black">Reserved Now And Get 50% Off</Text>

        <Button colorScheme="success" mt="20%" fontWeight="bold" rounded="full"  onPress={()=>{navigation.navigate("Login")}}>Do you have an Account</Button>
        <Button colorScheme="success" mt="10%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("Register")}}>Sign Up</Button>
        </VStack>
      </NativeBaseProvider>
  )
}