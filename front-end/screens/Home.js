import { View, Text, FlatList,TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'
import { NativeBaseProvider, Button } from 'native-base'
import React, { useEffect, useState } from 'react'


export default function Home({navigation}) {
  return (
    <ScrollView style={{padding:50,backgroundColor:'#ecf0f4'}}>
        <NativeBaseProvider>
            <View style={{marginBottom:30}}>
                <Button style={{height:50}} onPress={()=>{navigation.navigate("Car")}} >
                    Add New Vehicle
                </Button>
            </View>
        </NativeBaseProvider>

        <View style={styles.container}>
            <View style={{flex:2, flexDirection: "row" ,backgroundColor:'#fff', alignItems:'center', justifyContent:'space-around'}}>
                <Text style={{fontWeight:'bold',fontSize:17}} >BMW 760L</Text>
                <Text style={{fontSize:17, color:'green'}} >Rs: 25000000</Text>
            </View>
            <View style={{flex:6,  backgroundColor:'#e600e6'}}>
                <TouchableOpacity style={{height:'100%', backgroundColor:'#ffff'}} onPress={()=>{console.log("hello");}}>
                    <Image source = {{uri:'https://images.hindustantimes.com/auto/img/2022/01/15/1600x900/Lamborghini_1642220975552_1642220982866.jpg'}}
                        style = {{ width: '100%', height: '100%' }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flex:2,  backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginBottom:10, fontSize:14}} >Asdw aas ssss ffedwd dwdw csdsdc</Text>
            </View>
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{  
        height:250,
        borderRadius: 5,    
        marginBottom:'6%', 
        elevation: 5,
        shadowColor: '#52006A',
    },
   
})

