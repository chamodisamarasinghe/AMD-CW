import {  View,Alert,StyleSheet} from 'react-native'
import React ,{ useState } from 'react'
import { NativeBaseProvider,HStack, Box,Text, VStack,Input,Icon,MaterialIcons,show,Pressable,Image, Center,Button} from "native-base";
import Buttone from '../components/Buttone';
import Colors from '../assets/color';


// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 10,
//     // backgroundColor:'green'
//   },
//   stretch: {
//     width: 300,
//     height: 200,
//     resizeMode: 'stretch',
//     // marginTop:'10%'
//   },

//   text:{
//     color:'green',
//     fontWeight:'bold',
//     fontSize:25,
//     marginStart:40,
//     marginLeft:30
//   },

//   text1:{
//     color:'black',
//     fontWeight:'bold',
//     fontSize:20,
//     marginStart:40,
//     marginLeft:90,
//     marginTop:0.1
//   }
// });

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

      <Center>
      <Image 
        source={require("../assets/icons/log.png")}
      />
      </Center>


      <VStack space={4}  mt="5%"   maxW="300px" mx="auto">
                <Input mx="3" value={fullName} color="black" onChangeText={(e) => { setFullName(e) }} placeholder="Full Name" w="90%" />
                <Input mx="3" value={email} color="black" onChangeText={(e) => { setEmail(e) }} placeholder="Email" w="90%" />
                <Input mx="3" value={contactNum} color="black" onChangeText={(e) => { setContactNum(e) }} placeholder="Contact Num" w="90%" />
                <Input mx="3" value={username} color="black" onChangeText={(e) => { setUsername(e) }} placeholder="Username" w="90%" />
                <Input mx="3" value={password} color="black" onChangeText={(e) => { setPassword(e) }} placeholder="Password" w="90%" />
                <Button size="md"  colorScheme="blue" rounded="full" onPress={() => {
          saveUser()
          
        }}>
                    Sign Up
                </Button>




                <HStack space={2} alignSelf={'center'} mt="5%">
          <Text style={styles.login_label}>Already have an account?</Text>
          <Button size="md"
            variant="link"
            colorScheme={'secondary'}
            style={styles.btn_login}
            onPress={() => {
              try {
                navigation.navigate("Login")
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Text style={styles.btn_login_label}>Login</Text>
          </Button>
        </HStack>



                {/* <HStack   mt="10%"> */}
          {/* <Text fontSize="20" mt="2%" ml="5">Already have an account?</Text> */}
          {/* <Button colorScheme="success" mt="10%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("AddCar")}}>Login</Button> */}
          {/* <Button size="md"
            variant="link"
            colorScheme={'secondary'}
           
            onPress={() => {
              try {
                navigation.navigate("Login")
              } catch (err) {
                console.log(err);
              }
            }}
          > */}
            {/* <Text mr="10%" mt="5%" fontSize="20" colorScheme="secondary">Login</Text>
          </Button>  */}
        {/* </HStack>

                {/* <Button colorScheme="success" mt="20%" fontWeight="bold" rounded="full" onPress={()=>{navigation.navigate("CarDetails")}}>Car Details</Button> */}
            </VStack>




      
      </VStack>
  
      </NativeBaseProvider>

      
      
    
  )
}




const styles = StyleSheet.create({
  
  login_label: {
    
    marginTop:'2.75%',
    color: 'green',
    fontSize: 17,
    fontWeight: 'bold',
    
  },
  
  btn_login_label: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 17
  }
  
})



