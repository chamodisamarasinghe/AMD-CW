import {  View} from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Image, Center,Button} from "native-base";
import Buttone from '../components/Buttone';
import Colors from '../assets/color';

export default function Login({ navigation }) {
  return (
      

    <NativeBaseProvider>

      
    
      <VStack space={10} w="75%" maxW="300px" mx="auto">
      <Text fontSize="3xl" bold underline mt="10%" ml="35%" color={Colors.darkGreen}>Login</Text>

      <Center>
      <Image 
        source={require("../assets/icons/log.png")}
      />
      </Center>


      

      <Input size="2xl" placeholder="User Name" mt="20%" />
      <Input size="2xl" placeholder="Pass word" />

      
      <Button colorScheme="success" mt="40%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("CarDetails")}}>Login</Button>

      
      </VStack>
      

      
      </NativeBaseProvider>

      
      
    
  )
}