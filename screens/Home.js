import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea } from "native-base";

export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
        <Box>Hello world</Box>
        <Button mt={'40%'} size="md" variant="outline" colorScheme="secondary" width={'80%'} onPress={()=>{navigation.navigate("AddData")}}>
          Click To Add Data
        </Button>
        <Switch defaultIsChecked colorScheme="primary" size="lg" />
        <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
      </VStack>
    </NativeBaseProvider>
  )
}