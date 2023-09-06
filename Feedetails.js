import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TextInput, Button,Image, ScrollView } from 'react-native';


export default function Myfees(){


return(
<ScrollView style={styles.view1}>





<Image source={require('./assets/image/cuilogo.jpeg')}style={{width:310,height:140,padding:10,marginHorizontal:15,marginVertical:30}}></Image>
<Image source={require('./assets/image/pic.jpg')}style={{padding:80,width:150,height:160,marginHorizontal:250,borderRadius:15}}></Image>
 <Text style={styles.text1}>     Student Semester Fee Details          </Text>




 <View style={styles.view2}>


 <Text style={styles.text2}>Challan No: </Text>
 <TextInput style={styles.textInput}  placeholder=""></TextInput>
 <Text style={styles.text2}>Total Amount :</Text>
  <TextInput style={styles.textInput}  placeholder=""></TextInput> 
  <Text style={styles.text2}>Due Date:</Text>
  <TextInput style={styles.textInput}  placeholder=""></TextInput> 
  <Text style={styles.text2}> Second Due Date :</Text>
  <TextInput style={styles.textInput}  placeholder=""></TextInput> 
  <Text style={styles.text2}>Amount after Due Date:</Text>
  <TextInput style={styles.textInput}  placeholder=""></TextInput> 



    </View>












</ScrollView>












);

}




const styles=StyleSheet.create({


view1:
{
    flex:1,
backgroundColor:'midnightblue',

}

,
text1:{
    fontSize:20,
    alignItems:'center',
    alignSelf:'center',
    margin:10,
    borderRadius:10,
    padding:6,
    
    borderColor:'blue',
    backgroundColor:'mediumturquoise'



},

view2:{
   flex:0.7,
   height:360,
   borderRadius:10,
   margin:30,
   backgroundColor:'white',
   



}
,

text2:
{
    fontSize:14,
    color:'black',
    fontWeight:'bold',
    //alignSelf:'center',
   // padding:5,
  // width:150,
   // borderWidth:8,
    //borderRadius:0,
    margin:2,
    //backgroundColor:'midnightblue',
    //marginRight:270,
    //height:30




},
textInput: {
    width: '55%',
    marginLeft:150,
    height: 25,
    marginBottom:17,
    borderColor: 'lightgray',
    borderBottomWidth:2,
    //borderWidth: 1,
    margin:2,
    paddingHorizontal:10,
    fontSize: 16,
  },














})