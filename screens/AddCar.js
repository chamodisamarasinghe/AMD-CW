// import {  View} from 'react-native'
// import React from 'react'
// import { NativeBaseProvider, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Image, Center,Button} from "native-base";
// import Buttone from '../components/Buttone';
// import Colors from '../assets/color';

// export default function AddCar({ navigation }) {
//   return (
      

//     <NativeBaseProvider>

      
    
//       <VStack space={3} w="75%" maxW="300px" mx="auto">
//       <Text fontSize="3xl" bold underline mt="10%" ml="18%" color={Colors.darkGreen}>Add a new Car</Text>

//       <Center>
//       <Image 
//         source={require("../assets/icons/car.png")}
//       />
//       </Center>


      

//       <Input size="1xl" placeholder="Register Number" mt="20%" />
//       <Input size="1xl" placeholder="Brand" />
//       <Input size="1xl" placeholder="Vehicle Number" />
//       <Input size="1xl" placeholder="Price" />
//       {/* <Input size="1xl" placeholder="Pass word" /> */}

      
//       <Button colorScheme="success" mt="20%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("CarDetails")}}>Add</Button>

      
//       </VStack>
      

      
//       </NativeBaseProvider>

      
      
    
//   )
// }



import React, { useState } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button ,Center,Image} from 'native-base'
import { Alert } from 'react-native';
import Colors from '../assets/color';


export default function AddCar({ navigation }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState('');

    const saveData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {Alert.alert("Save Saved Successfully !")})
            .catch((err)=>{Alert.alert("Error occured !")})
    }

    return (
        <NativeBaseProvider>
           <Text fontSize="3xl" bold underline mt="10%" ml="20%" color={Colors.darkGreen}>Add a new Car</Text>
           <Center>
      <Image 
        source={require("../assets/icons/car.png")}
      />
      </Center>



            <VStack space={4}  mt="15%"   maxW="300px" mx="auto">
                <Input mx="3" value={title} color="black" onChangeText={(e) => { setTitle(e) }} placeholder="Register Number" w="80%" />
                <Input mx="3" value={body} color="black" onChangeText={(e) => { setBody(e) }} placeholder="Brand" w="80%" />
                <Input mx="3" value={id} color="black" onChangeText={(e) => { setId(e) }} placeholder="Vehicle Number" w="80%" />
                <Input mx="3" value={id} color="black" onChangeText={(e) => { setId(e) }} placeholder="Price" w="80%" />
                <Button size="md"  colorScheme="primary" rounded="full" onPress={saveData}>
                    Save Post
                </Button>

                <Button colorScheme="success" mt="20%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("CarDetails")}}>Car Details</Button>
            </VStack>
        </NativeBaseProvider>
    )
}