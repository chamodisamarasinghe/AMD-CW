import React, { useState } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button } from 'native-base'
import { Alert } from 'react-native';

export default function AddData() {
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
            <Text fontSize="3xl" bold underline mt="10%" ml="30%" color="white">Save Post</Text>
            <VStack space={4} alignItems="center" mt="15%">
                <Input mx="3" value={title} color="white" onChangeText={(e) => { setTitle(e) }} placeholder="Title" w="80%" />
                <Input mx="3" value={body} color="white" onChangeText={(e) => { setBody(e) }} placeholder="Body" w="80%" />
                <Input mx="3" value={id} color="white" onChangeText={(e) => { setId(e) }} placeholder="User ID" w="80%" />
                <Button size="md" variant="subtle" colorScheme="secondary" onPress={saveData}>
                    Save Post
                </Button>
            </VStack>
        </NativeBaseProvider>
    )
}