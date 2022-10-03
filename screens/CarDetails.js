import { ScrollView, VStack, Center, useTheme, Heading, NativeBaseProvider,Container,Button,HStack,Divider } from "native-base";
import { View, Image, StyleSheet,Text} from 'react-native';
import { Line ,x_axis} from "react-native-svg";

const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      // backgroundColor:'green'
    },
    stretch: {
      width: 300,
      height: 200,
      resizeMode: 'stretch',
      // marginTop:'10%'
    },
  
    text:{
      color:'green',
      fontWeight:'bold',
      fontSize:25,
      marginStart:40,
      marginLeft:30
    }
  });
  



const CarDetails = () => {
  const {
    colors
  } = useTheme();
  return <ScrollView w={["300", "300"]} h="80">

    
      <VStack flex="1">

      <Image  style={styles.stretch}
          source={require("../assets/images/car10.jpg")}/>

      <Center mt="3" mb="4">
        <Heading style={styles.text} fontSize="30" >BMW X2</Heading>
      </Center>
      </VStack>
      
      {/* <HStack mb="2.5" mt="1.5" direction={{
        base: "column",
        md: "row"
      }} space={2} mx={{
        base: "auto",
        md: "0"
      }}> */}
          
          <Button size="sm" colorScheme="secondary" rounded="full">
           View More
          </Button>
          
        {/* </HStack> */}

        <Divider style={{height:8 }} w="100%" mt="10%"/>

      <Center mt="8" mb="4">
        <Heading fontSize="30">Toyota Aqua</Heading>
      </Center>
      <VStack flex="1">

      <Image  style={styles.stretch}
          source={require("../assets/images/car2.jpg")}/>
        
      </VStack>


      <Center mt="8" mb="4">
        <Heading fontSize="30">Citroen DS7</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car11.jpg")}/>
        
      </VStack>



      <Center mt="8" mb="4">
        <Heading fontSize="30"> Nissan Xtrail Hybrid</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car3.jpg")}/>
      </VStack>



      <Center mt="8" mb="4">
        <Heading fontSize="30">Chevrolet Spark</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car12.jpg")}/>
      </VStack>


      <Center mt="8" mb="4">
        <Heading fontSize="30">Suzuki Vitara</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car7.jpg")}/>

      </VStack>



      <Center mt="8" mb="4">
        <Heading fontSize="30">Bentley Continental</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car13.jpg")}/>
        
      </VStack>


      <Center mt="8" mb="4">
        <Heading fontSize="30">Suzuki Swift</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car8.jpg")}/>
      </VStack>


      <Center mt="8" mb="4">
        <Heading fontSize="30">Proton Saga</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car9.jpg")}/>
      </VStack>


      <Center mt="8" mb="4">
        <Heading fontSize="30">Bentley Bentayga</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car1.jpg")}/>
      </VStack>


      <Center mt="8" mb="4">
        <Heading fontSize="30">BMW X1</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car4.jpg")}/>
      </VStack>


      <Center mt="8" mb="4">
        <Heading fontSize="30">Bentley Continental</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car5.jpeg")}/>
      </VStack>


      <Center mt="8" mb="4">
        <Heading fontSize="30">Maruti Suzuki Swift</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/images/car14.jpeg")}/>
      </VStack>

    </ScrollView>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <CarDetails />
            </Center>
          </NativeBaseProvider>
        );
    };