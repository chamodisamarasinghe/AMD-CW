import { ScrollView, VStack, Center, useTheme, Heading, NativeBaseProvider } from "native-base";
import { View, Image, StyleSheet,Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      // backgroundColor:'green'
    },
    stretch: {
      width: 400,
      height: 300,
      resizeMode: 'stretch',
      // marginTop:'10%'
    },
  
    text:{
      color: 'green',
      fontWeight:'bold',
      fontSize:30,
      marginStart:40,
      marginLeft:30
    }
  });
  



const CarDetails = () => {
  const {
    colors
  } = useTheme();
  return <ScrollView w={["400", "300"]} h="80">

    
      <Center mt="3" mb="4">
        <Heading fontSize="xl">Toyota Aventador</Heading>
      </Center>
      <VStack flex="1">

      <Image  style={styles.stretch}
          source={require("../assets/car.jpg")}/>

            <Text style={styles.text}>Toyota Aventador</Text> 
            <Text style={styles.text}>Model 2022   -    2022 </Text> 


           
      
   
                  
        {/* {Object.keys(colors.cyan).map((key, index) => {
        if (index >= 1 && index <= 5) return <Center py="4" bg={`cyan.${key}`}>
                {key}
              </Center>;
      })} */}
      
      </VStack>
      <Center mt="8" mb="4">
        <Heading fontSize="xl">Yellow</Heading>
      </Center>
      <VStack flex="1">

      <Image  style={styles.stretch}
          source={require("../assets/Alto2.jpg")}/>
        {/* {Object.keys(colors.cyan).map((key, index) => {
        if (index >= 1 && index <= 5) return <Center py="4" bg={`yellow.${key}`}>
                {key}
              </Center>;
      })} */}
      </VStack>
      <Center mt="8" mb="4">
        <Heading fontSize="xl"> Violet</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/allion.jpg")}/>
        {/* {Object.keys(colors.violet).map((key, index) => {
        if (index >= 1 && index <= 5) return <Center py="4" bg={`violet.${key}`}>
                {key}
              </Center>;
      })} */}
      </VStack>



      <Center mt="8" mb="4">
        <Heading fontSize="xl"> Violet</Heading>
      </Center>
      <VStack flex="1">
      <Image  style={styles.stretch}
          source={require("../assets/car.jpg")}/>
        {/* {Object.keys(colors.violet).map((key, index) => {
        if (index >= 1 && index <= 5) return <Center py="4" bg={`violet.${key}`}>
                {key}
              </Center>;
      })} */}
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