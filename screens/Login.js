import {  View} from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Image, Center,Button} from "native-base";
import Buttone from '../components/Buttone';
import Colors from '../assets/color';

export default function Login({ navigation }) {

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    loginUser = () => {
        fetch(`http://192.168.8.175:8000/users/login/${username}/${password}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.length === 0) {
                    Alert.alert("Username or password incorrect.Try again!")
                } else {
                    clearTextFields()
                    Alert.alert("Login Successful.");
                    navigation.navigate("Dash", {
                        username: json[0].username,
                        fullname: json[0].fullName
                    });
                }
            })
            .catch((err) => console.log(err));
    }

    clearTextFields = () => {
        setUsername("");
        setPassword("");
    }

  return (
      

    <NativeBaseProvider>

      <VStack space={10} w="75%" maxW="300px" mx="auto">
      <Text fontSize="3xl" bold underline mt="10%" ml="35%" color={Colors.darkGreen}>Login</Text>

      <Center>
      <Image 
        source={require("../assets/icons/log.png")}
      />
      </Center>

      <Input mx="3" value={username} color="black" onChangeText={(e) => { setUsername(e) }} placeholder="Username" w="80%" />
      <Input mx="3" value={password} color="black" onChangeText={(e) => { setPassword(e) }} placeholder="Password" w="80%" />

      
      <Button colorScheme="success" mt="40%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("AddCar")}}>Login</Button>
 
      </VStack>
      
      </NativeBaseProvider>

      
      
    
  )
}