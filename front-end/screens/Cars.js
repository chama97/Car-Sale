import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import { NativeBaseProvider, Text, Input, VStack, HStack, Button } from 'native-base'
import { Alert } from 'react-native';
import { launchImageLibrary} from 'react-native-image-picker';


export default function Cars() {

    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [photos, setPhotos] = useState('');

    const saveData = () => {
        fetch('http://192.168.8.166:4000/cars', {
            method: 'POST',
            body: JSON.stringify({
                type: type,
                description: description,
                price: price,
                photo: photos,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {Alert.alert("Save Saved Successfully !")})
            .catch((err)=>{Alert.alert("Error occured !")})
    }

    const setToastMessege = msg => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    };

    const uploadImage = () => {
        let options = {
            mediaType: 'image',
            quuality: 1,
            includeBase64: true,
        };
        launchImageLibrary(options, response =>{
            if(response.didCancel){
                setToastMessege('Cancel image selection');
            } else if(response.errorCode == 'permission'){
                setToastMessege('Permission not satified');
            } else if(response.errorCode == 'others'){
                setToastMessege(response.errorMessage);
            } else if(response.assets[0].fileSize > 2097152){
                Alert.alert('Maximum image size exeeded')
            }else{
                setPhoto(response.assets[0].base64);
                setPhotos('https://upload.wikimedia.org/wikipedia/commons/b/b4/Toyota_PREMIO_1.5F_L_Package.jpg');
            }
        });
    }

    const removeImage = () => {
        setPhoto('');
        setToastMessege('Image Removed');
    }

    const clearData = () => {
        setType('');
        setDescription('');
        setPrice('');
        setPhoto('');
        setToastMessege('Image Removed');
    }

  return (
    <NativeBaseProvider>
            <View style={styles.container}>
                <Text fontSize="4xl" bold color={'#1763d3'} mt="10%" style={styles.lable}>ADD CAR</Text>
                <VStack space={4} alignItems="center" mt="8%">
                    <Input mx="3" value={type} onChangeText={(e) => { setType(e) }} placeholder="Type" w="80%" />
                    <Input mx="3" value={description} onChangeText={(e) => { setDescription(e) }} placeholder="Description" w="80%" />
                    <Input mx="3" value={price} onChangeText={(e) => { setPrice(e) }} placeholder="Price" w="80%" />
                    <HStack space={3} alignItems="center" mt="4%">
                        <TouchableOpacity style={styles.touchable} onPress={()=>{console.log("hello");}}>
                            <Image source = {{uri:'data:Image/png;base64,' + photo}}
                                style = {{ width: '99%', height: '98%', borderRadius:10, }}
                            />
                        </TouchableOpacity>
                        <VStack space={4} alignItems="center">
                            <Button  size="md" variant="solid" onPress={uploadImage}>
                                Uploads
                            </Button>
                            <Button  size="md" variant="solid" colorScheme="error" onPress={removeImage}>
                                Remove
                            </Button>
                        </VStack>
                    </HStack>
                    <HStack space={3} alignItems="center" mt="7%">
                        <Button style={styles.btn} size="lg" variant="outline"  onPress={clearData}>
                            Cancel
                        </Button>
                        <Button style={styles.btn} size="lg" variant="solid" onPress={saveData}>
                            Save
                        </Button>
                    </HStack>
                </VStack>
            </View>
        </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    container:{  
        alignItems:'center'
    },
    touchable:{  
        height:150,
        width :'60%',
        borderColor:'#777788',
        borderWidth:2,
        backgroundColor:'#d6d6db',
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{  
        width:160,
        fontSize:50,
    },
})
