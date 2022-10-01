import { View} from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Button } from "native-base";

export default function Login() {
  return (
    <NativeBaseProvider>
      
      <VStack space={10} w="75%" maxW="300px" mx="auto">
      <Text fontSize="3xl" bold underline mt="10%" ml="35%" color="white">Login</Text>

      <Input size="2xl" placeholder="User Name" mt="20%" />
      <Input size="2xl" placeholder="User Name" />

      <Button mt="40%" onPress={() => console.log("hello world")}>Login</Button>
      </VStack>
      

      
      </NativeBaseProvider>
      
    
  )
}