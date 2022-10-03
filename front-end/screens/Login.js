import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider, Text, Input, VStack, Button } from 'native-base'

export default function Login({navigation}) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const checkLogin = () => {
        fetch('http://localhost:4000/user', {
            method: 'POST',
            body: JSON.stringify({
                name: userName,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                navigation.navigate("Home")
                Alert.alert("Save Saved Successfully !")
            })
            .catch((err)=>{Alert.alert("Error occured !")})
    }

  return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text fontSize="4xl" bold color={'#1763d3'}  mt="20%" style={styles.lable}>LOGIN</Text>
                <VStack space={6} alignItems="center" mt="15%">
                    <Input mx="3" value={userName} onChangeText={(e) => { setUserName(e) }} placeholder="User Name" w="80%" />
                    <Input mx="3" value={password} onChangeText={(e) => { setPassword(e) }} placeholder="Password" w="80%" />
                    <Button style={styles.btn} size="lg" variant="solid" onPress={checkLogin}>
                        Login
                    </Button>
                    <Button style={styles.btn} size="md" mt={2} variant="subtle" colorScheme="green" onPress={()=>{navigation.navigate("Sign")}}>
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
