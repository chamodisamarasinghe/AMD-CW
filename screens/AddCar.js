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
    const [registerNumber, setRegisterNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [price, setPrice] = useState('');

    saveCar = async () => {

        if (registerNumber != "" && brand != "" && vehicleNumber != "" && price != "") {
          fetch('http://192.168.8.175:8000/cars', {
            method: 'POST',
            body: JSON.stringify({
                  registerNumber: registerNumber,
                    brand: brand,
                    vehicleNumber: vehicleNumber,
                    price: price
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',															
            },
          })
          .then((response) => response.json())
          .then((json) => {
            if (json.status === "500") {
              Alert.alert(json.message);
            } else {
              Alert.alert(json.message);
              clearTextFields();
            }
          })
          .catch((err) => Alert.alert(err.message));
        } else {
          Alert.alert("Please fill all the fields and try again.")
        }
      }
    
      const clearTextFields = () => {
        setRegisterNumber("");
        setBrand("");
        setVehicleNumber("");
        setPrice("");
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
                <Input mx="3" value={registerNumber} color="black" onChangeText={(e) => { setRegisterNumber(e) }} placeholder="Register Number" w="80%" />
                <Input mx="3" value={brand} color="black" onChangeText={(e) => { setBrand(e) }} placeholder="Brand" w="80%" />
                <Input mx="3" value={vehicleNumber} color="black" onChangeText={(e) => { setVehicleNumber(e) }} placeholder="Vehicle Number" w="80%" />
                <Input mx="3" value={price} color="black" onChangeText={(e) => { setPrice(e) }} placeholder="Price" w="80%" />
                <Button size="md"  colorScheme="primary" rounded="full" onPress={saveCar}>
                    Save Post
                </Button>

               
            </VStack>
        </NativeBaseProvider>
    )
}