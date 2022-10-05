import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider, Text, Input, VStack, HStack, Button } from 'native-base'
import { Alert } from 'react-native';

    
export default function Sign({navigation}) {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');

    const saveData = () => {
        fetch('http://192.168.8.166:4000/user', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                address: address,
                email: email,
                password: password,
                contact: contact,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            Alert.alert('success')
            clearData()
        })
        .catch((error)=> Alert.alert('error'))
    }

    const clearData = () => {
        setName('');
        setAddress('');
        setEmail('');
        setPassword('');
        setContact('');
    }

  return (
    <NativeBaseProvider>
            <View style={styles.container}>
                <Text fontSize="4xl" bold color={'#1763d3'} mt="10%" style={styles.lable}>SIGN-UP</Text>
                <VStack space={4} alignItems="center" mt="12%">
                    <Input mx="3" value={name} onChangeText={(e) => { setName(e) }} placeholder="Name" w="80%" />
                    <Input mx="3" value={address} onChangeText={(e) => { setAddress(e) }} placeholder="Address" w="80%" />
                    <Input mx="3" value={email} onChangeText={(e) => { setEmail(e) }} placeholder="E-mail" w="80%" />
                    <Input mx="3" value={password} onChangeText={(e) => { setPassword(e) }} placeholder="Password" w="80%" />
                    <Input mx="3" value={contact} onChangeText={(e) => { setContact(e) }} placeholder="Contact" w="80%" />
                    <HStack space={3} alignItems="center" mt="2%">
                        <Button style={styles.btn} size="lg" variant="outline" onPress={saveData}>
                            Cancel
                        </Button>
                        <Button style={styles.btn} size="lg" variant="solid" onPress={saveData}>
                            Sign Up
                        </Button>
                    </HStack>
                    <Button style={styles.btn} mt="3"  size="md" variant="subtle" colorScheme="green" onPress={()=>{navigation.navigate("Login")}}>
                        Go to sign In
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
        width:155,
        fontSize:50,
    },
})
