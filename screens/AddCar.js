import {  View} from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Image, Center,Button} from "native-base";
import Buttone from '../components/Buttone';
import Colors from '../assets/color';

export default function AddCar({ navigation }) {
  return (
      

    <NativeBaseProvider>

      
    
      <VStack space={3} w="75%" maxW="300px" mx="auto">
      <Text fontSize="3xl" bold underline mt="10%" ml="18%" color={Colors.darkGreen}>Add a new Car</Text>

      <Center>
      <Image 
        source={require("../assets/icons/car.png")}
      />
      </Center>


      

      <Input size="1xl" placeholder="Register Number" mt="20%" />
      <Input size="1xl" placeholder="Brand" />
      <Input size="1xl" placeholder="Vehicle Number" />
      <Input size="1xl" placeholder="Price" />
      {/* <Input size="1xl" placeholder="Pass word" /> */}

      
      <Button colorScheme="success" mt="20%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("CarDetails")}}>Add</Button>

      
      </VStack>
      

      
      </NativeBaseProvider>

      
      
    
  )
}