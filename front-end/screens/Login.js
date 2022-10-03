import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider, Text, Input, VStack, Button } from 'native-base'
import { Alert } from 'react-native';

export default function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const saveData = () => {
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         userName: userName,
        //         password: password,
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => {Alert.alert("Save Saved Successfully !")})
        //     .catch((err)=>{Alert.alert("Error occured !")})
    }

  return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text fontSize="3xl" bold  mt="10%" style={styles.lable}>LOGIN</Text>
                <VStack space={5} alignItems="center" mt="15%">
                    <Input mx="3" value={userName} onChangeText={(e) => { setUserName(e) }} placeholder="User Name" w="80%" />
                    <Input mx="3" value={password} onChangeText={(e) => { setPassword(e) }} placeholder="Password" w="80%" />
                    <Button style={styles.btn} size="lg" variant="solid" onPress={saveData}>
                        Login
                    </Button>
                    <Button style={styles.btn} size="md" variant="subtle" colorScheme="green" onPress={()=>{navigation.navigate("Sign")}}>
                        Create New Account
                    </Button>
                </VStack>
            </View>
        </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    container:{  
        alignItems:'center'
    },
    btn:{  
        width:200,
        fontSize:50,
    },
})
