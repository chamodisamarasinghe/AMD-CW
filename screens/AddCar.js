



import React, { useState } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button ,Center,Image, ScrollView} from 'native-base'
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
          <ScrollView>
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

                <Button mt={'10%'} size="md" rounded="full"  colorScheme="secondary"  onPress={()=>{navigation.navigate("CarDetails")}}>
          Car Details
        </Button>
            </VStack>
            </ScrollView>
        </NativeBaseProvider>
    )
}