import {  View,Alert} from 'react-native'
import React ,{ useState } from 'react'
import { NativeBaseProvider, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Image, Center,Button} from "native-base";
import Buttone from '../components/Buttone';
import Colors from '../assets/color';

export default function Register({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const saveUser = async () => {

    if (fullName != "" && email != "" && contactNum != "" && username != "" && password != "") {
      fetch('http://192.168.8.175:8000/users', {
        method: 'POST',
        body: JSON.stringify({
          	    fullName: fullName,
                email: email,
                contactNum: contactNum,
                username: username,
		            password: password
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
    setFullName("");
    setEmail("");
    setContactNum("");
    setUsername("");
    setPassword("");
  }


  return (
      

    <NativeBaseProvider>

      
    
      <VStack space={3} w="75%" maxW="300px" mx="auto">
      <Text fontSize="3xl" bold underline mt="10%" ml="34%" color={Colors.darkGreen}>Sign Up</Text>

      {/* <Center>
      <Image 
        source={require("../assets/icons/log.png")}
      />
      </Center> */}


      <VStack space={4}  mt="15%"   maxW="300px" mx="auto">
                <Input mx="3" value={fullName} color="black" onChangeText={(e) => { setFullName(e) }} placeholder="Full Name" w="80%" />
                <Input mx="3" value={email} color="black" onChangeText={(e) => { setEmail(e) }} placeholder="Email" w="80%" />
                <Input mx="3" value={contactNum} color="black" onChangeText={(e) => { setContactNum(e) }} placeholder="Contact Num" w="80%" />
                <Input mx="3" value={username} color="black" onChangeText={(e) => { setUsername(e) }} placeholder="Username" w="80%" />
                <Input mx="3" value={password} color="black" onChangeText={(e) => { setPassword(e) }} placeholder="Password" w="80%" />
                <Button size="md"  colorScheme="primary" rounded="full" onPress={() => {
          saveUser()
          
        }}>
                    Sign Up
                </Button>

                <Button colorScheme="success" mt="20%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("CarDetails")}}>Car Details</Button>
            </VStack>

      {/* <Input size="2xl" placeholder="Full Name" mt="20%" />
      <Input size="2xl" placeholder="Email" />
      <Input size="2xl" placeholder="Contact" />
      <Input size="2xl" placeholder="User Name" />
      <Input size="2xl" placeholder="Pass word" />

      
      <Button colorScheme="success" mt="20%" fontWeight="bold" rounded="full" >Sign Up</Button> */}

      
      </VStack>
      

      
      </NativeBaseProvider>

      
      
    
  )
}