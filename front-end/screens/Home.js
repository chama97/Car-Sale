import { View, Text, FlatList,TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'
import { NativeBaseProvider, Button } from 'native-base'
import React, { useEffect, useState } from 'react'


export default function Home({navigation}) {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://192.168.8.166:4000/cars')
            .then((response) => response.json())
            .then((json) => setCars(json));
    })

  return (
    <NativeBaseProvider>
        <View style={{padding:50,backgroundColor:'#ecf0f4'}}>
            <View style={{marginBottom:30}}>
                <Button style={{height:50}} onPress={()=>{navigation.navigate("Cars")}} >
                    Add New Vehicle
                </Button>
            </View>
            <FlatList
                data={cars}
                renderItem={({ item }) =>
                <View style={styles.container}>
                    <View style={{flex:2, flexDirection: "row" ,backgroundColor:'#fff', alignItems:'center', justifyContent:'space-around'}}>
                        <Text style={{fontWeight:'bold',fontSize:17}} >{item.type}</Text>
                        <Text style={{fontSize:17, color:'green'}} >{item.price}</Text>
                    </View>
                    <View style={{flex:6,  backgroundColor:'#e600e6'}}>
                        <TouchableOpacity style={{height:'100%', backgroundColor:'#ffff'}} onPress={()=>{console.log("hello");}}>
                            <Image source = {{uri:item.photo}}
                                style = {{ width: '100%', height: '100%' }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2,  backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{marginBottom:10, fontSize:14}} >{item.description}</Text>
                    </View>
                </View>
                }
            />
    </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    container:{  
        height:250,
        borderRadius: 5,    
        marginBottom:'6%', 
        elevation: 6,
        shadowColor: '#52006A',
    },
   
})

