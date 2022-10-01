import {  View} from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Image, Center,Button} from "native-base";
import Buttone from '../components/Buttone';
import Colors from '../assets/color';

export default function Register({ navigation }) {
  return (
      

    <NativeBaseProvider>

      
    
      <VStack space={3} w="75%" maxW="300px" mx="auto">
      <Text fontSize="3xl" bold underline mt="10%" ml="34%" color={Colors.darkGreen}>Sign Up</Text>

      <Center>
      <Image 
        source={require("../assets/log.png")}
      />
      </Center>


      

      <Input size="2xl" placeholder="First Name" mt="20%" />
      <Input size="2xl" placeholder="Last Name" />
      <Input size="2xl" placeholder="Address" />
      <Input size="2xl" placeholder="User Name" />
      <Input size="2xl" placeholder="Pass word" />

      
      <Button colorScheme="success" mt="20%" fontWeight="bold" rounded="full" >Sign Up</Button>

      
      </VStack>
      

      
      </NativeBaseProvider>

      
      
    
  )
}