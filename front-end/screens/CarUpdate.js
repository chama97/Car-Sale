import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, ToastAndroid, Alert } from 'react-native'
import { NativeBaseProvider, Text, Input, VStack, HStack, Button } from 'native-base'
import { launchImageLibrary} from 'react-native-image-picker';

export default function CarUpdate({navigation,route}) {

    const [id, setId] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');

    useEffect(()=>{
        console.log(route.params.obj)
        setId(route.params.obj._id)
        setType(route.params.obj.type)
        setPrice(route.params.obj.price)
        setDescription(route.params.obj.description)
        setPhoto(route.params.obj.photo)
    },[])
      

    const updateData = () => {
        fetch('http://192.168.8.166:4000/cars/633d917f7967ccc322b122d7', {
            method: 'PUT',
            body: JSON.stringify({
                _id: id,
                type: type,
                description: description,
                price: price,
                photo: photo,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {Alert.alert("Car Updated Successfully !")})
            .catch((err)=>{Alert.alert("Error occured !")})
    }

   
    const removeImage = () => {
        setPhoto('');
        setToastMessege('Image Removed');
    }

    const deleteData = () => {
        fetch('http://192.168.8.166:4000/cars/633d9ad88f2a0962e17eaeec',{
            method:'DELETE',
            body:JSON.stringify({
              id:'633d917f7967ccc322b122d7'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
          })
          .then((response) => {
            Alert.alert("Car Delete Successfully !")
          })
          .catch((err)=>{Alert.alert("Error occured !")})
    }

  return (
    <NativeBaseProvider>
            <View style={styles.container}>
                <Text fontSize="4xl" bold color={'#1763d3'} mt="10%" style={styles.lable}>UPDATE CAR</Text>
                <VStack space={4} alignItems="center" mt="8%">
                    <Input mx="3" value={type} onChangeText={(e) => { setType(e) }} placeholder="Type" w="80%" />
                    <Input mx="3" value={description} onChangeText={(e) => { setDescription(e) }} placeholder="Description" w="80%" />
                    <Input mx="3" value={price} onChangeText={(e) => { setPrice(e) }} placeholder="Price" w="80%" />
                    <HStack space={3} alignItems="center" mt="4%">
                        <TouchableOpacity style={styles.touchable} onPress={()=>{console.log("hello");}}>
                            <Image source = {{uri:photo}}
                                style = {{ width: '99%', height: '98%', borderRadius:10, }}
                            />
                        </TouchableOpacity>
                        <VStack space={4} alignItems="center">
                            <Button  size="md" variant="solid" onPress={console.log('ok')}>
                                Uploads
                            </Button>
                            <Button  size="md" variant="solid" colorScheme="error" onPress={removeImage}>
                                Remove
                            </Button>
                        </VStack>
                    </HStack>
                    <HStack space={3} alignItems="center" mt="7%">
                        <Button style={styles.btn} size="lg" variant="outline"  onPress={deleteData}>
                            Delete
                        </Button>
                        <Button style={styles.btn} size="lg" variant="solid" onPress={updateData}>
                            Update
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
