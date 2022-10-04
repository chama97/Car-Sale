import { View, Text, FlatList,TouchableOpacity, StyleSheet, Image, Button, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Home({navigation}) {
  return (
    <ScrollView style={{padding:50}}>
        <View style={{marginBottom:30}}>
            <Button style={{height:30}} onPress={()=>{navigation.navigate("Car")}} title="Add New Vehicle">
                Add New Vehicle
            </Button>
        </View>

        <View style={styles.container}>
            <View style={{flex:2, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginBottom:10,fontWeight:'bold',fontSize:17}} >BMW 760L 7Series</Text>
            </View>
            <View style={{flex:6,  backgroundColor:'#e600e6'}}>
                <TouchableOpacity style={{height:'100%', backgroundColor:'#ffff'}} onPress={()=>{console.log("hello");}}>
                    <Image source = {{uri:'https://images.hindustantimes.com/auto/img/2022/01/15/1600x900/Lamborghini_1642220975552_1642220982866.jpg'}}
                        style = {{ width: '100%', height: '100%' }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flex:2,  backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginBottom:10, fontSize:14}} >ssssssssssssssssssssssssss</Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={{flex:2, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginBottom:10,fontWeight:'bold',fontSize:17}} >BMW 760L 7Series</Text>
            </View>
            <View style={{flex:6,  backgroundColor:'#e600e6'}}>
                <TouchableOpacity style={{height:'100%', backgroundColor:'#ffff'}} onPress={()=>{console.log("hello");}}>
                    <Image source = {{uri:'https://images.hindustantimes.com/auto/img/2022/01/15/1600x900/Lamborghini_1642220975552_1642220982866.jpg'}}
                        style = {{ width: '100%', height: '100%' }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flex:2,  backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginBottom:10, fontSize:14}} >ssssssssssssssssssssssssss</Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={{flex:2, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginBottom:10,fontWeight:'bold',fontSize:17}} >BMW 760L 7Series</Text>
            </View>
            <View style={{flex:6,  backgroundColor:'#e600e6'}}>
                <TouchableOpacity style={{height:'100%', backgroundColor:'#ffff'}} onPress={()=>{console.log("hello");}}>
                    <Image source = {{uri:'https://images.hindustantimes.com/auto/img/2022/01/15/1600x900/Lamborghini_1642220975552_1642220982866.jpg'}}
                        style = {{ width: '100%', height: '100%' }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flex:2,  backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginBottom:10, fontSize:14}} >ssssssssssssssssssssssssss</Text>
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

