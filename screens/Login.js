// import {  View} from 'react-native'
// import React, { useState } from 'react'
// import { NativeBaseProvider, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Image, Center,Button} from "native-base";
// import Buttone from '../components/Buttone';
// import Colors from '../assets/color';

// export default function Login({ navigation }) {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     loginUser = () => {
//         fetch(`http://192.168.8.175:8000/users/login/${username}/${password}`, {
//             method: "GET",
//             headers: {
//                 'content-type': 'application/json'
//             }
//         })
//             .then((response) => response.json())
//             .then((json) => {
//                 console.log(json);
//                 if (json.length === 0) {
//                     Alert.alert("Username or password incorrect.Try again!")
//                 } else {
//                     clearTextFields()
//                     Alert.alert("Login Successful.");
//                     navigation.navigate("AddCar", {
//                         username: json[0].username,
//                         fullname: json[0].fullName
//                     });
//                 }
//             })
//             .catch((err) => console.log(err));
//     }

//     clearTextFields = () => {
//         setUsername("");
//         setPassword("");
//     }

//   return (
      

//     <NativeBaseProvider>

//       <VStack space={10} w="75%" maxW="300px" mx="auto">
//       <Text fontSize="3xl" bold underline mt="10%" ml="35%" color={Colors.darkGreen}>Login</Text>

//       <Center>
//       <Image 
//         source={require("../assets/icons/log.png")}
//       />
//       </Center>

//       <Input mx="3" value={username} color="black" onChangeText={(e) => { setUsername(e) }} placeholder="Username" w="80%" />
//       <Input mx="3" value={password} color="black" onChangeText={(e) => { setPassword(e) }} placeholder="Password" w="80%" />

      
//       <Button colorScheme="success" mt="40%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("AddCar")}}>Login</Button>
 
//       </VStack>
      
//       </NativeBaseProvider>

      
      
    
//   )
// }

























import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box, Input, FormControl,HStack, Stack, Button,VStack,Center, ScrollView } from 'native-base'
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
                    navigation.navigate("AddCar", {
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
            <ScrollView>
            <VStack space={10} w="75%"  mx="auto">
            {/* <ImageBackground  resizeMode='cover' style={styles.img}> */}
            <Text style={styles.text}>Login</Text>

            <Center>
            <Image  
             source={require("../assets/icons/log.png")}
         />       </Center>

                {/* <Image source={require('../assets/icons/log.png')} style={styles.logo} /> */}
                <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>Username</FormControl.Label>
                        <Input type="text" style={styles.input} value={username} onChangeText={(e) => { setUsername(e) }} />
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" style={styles.input} value={password} onChangeText={(e) => { setPassword(e) }} />
                        <Button rounded="full" size="md" colorScheme="success"  style={styles.login_btn} onPress={() => { loginUser() }} >
                            <Text style={styles.login_btn_label}>Login</Text>
                        </Button>
                    </Stack>
                </FormControl>
                <HStack  mt="10%" alignSelf={'center'} >
                    <Text style={styles.signup_label}>Don't have an account?</Text>
                    <Button size="md" variant="link" colorScheme={'secondary'} style={styles.btn_Signup} onPress={() => { navigation.navigate("Register") }}>
                        <Text style={styles.btn_Signup_label}>Sign Up</Text>
                    </Button>
                </HStack>
            {/* </ImageBackground> */}
            </VStack>
            </ScrollView>
        </NativeBaseProvider>
       
    )
}

const styles = StyleSheet.create({

    text:{
        color: "green",
        fontSize:30,
        fontWeight: "bold",
        alignContent:"center",
        marginLeft:"38%",
        marginTop:"10%"
    },

    img: {
        width: '100%',
        height: '100%'
    },
    logo: {
        width: '60%',
        height: '20%',
        marginTop: '30%',
        alignSelf: 'center'
    },
    input: {
        color: 'black',
        fontSize: 20
    },
    login_btn: {
        marginTop: '20%',
        color:'green'
    },
    login_btn_label: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        

    },
    signup_label: {
        marginTop: '4%',
        color: 'black',
        fontSize: 17
        
    },
    btn_Signup: {
       
    },
    btn_Signup_label: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 17
    }
})