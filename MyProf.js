import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TextInput, Button,Image, ScrollView } from 'react-native';


export default function Myprofile(){


return(
<ScrollView style={styles.view1}>





<Image source={require('./assets/image/cuilogo.jpeg')}style={{width:310,height:140,padding:10,marginHorizontal:15,marginVertical:30}}></Image>
<Image source={require('./assets/image/pic.jpg')}style={{padding:80,width:150,height:160,marginHorizontal:250,borderRadius:15}}></Image>
 <Text style={styles.text1}>            Student Profile Details          </Text>


<View style={styles.view2}>
 {/* <Text style={styles.text1}>hoooooooooooooo</Text> */}
 <Text style={{margin:14,color:'grey',fontSize:16}}>Dear Student, 
CUI has created your account on Office365. You can now use applications like MS Teams, MS Office365 and several others from this account. 
Please Login to Office 365 
Office 365 Email Address : SP21-BCS-011@CUILAHORE.EDU.PK 
Office 365 Password : No Password Available 
In case of any query please contact IT Support Team. Good Luck!</Text>
 <Text style={styles.text2}>Registeration number :</Text>
 <TextInput style={styles.textInput}  placeholder=""></TextInput>
 <Text style={styles.text2}>Full Name :</Text>
  <TextInput style={styles.textInput}  placeholder=""></TextInput> 
  <Text style={styles.text2}>Father Name :</Text>
  <TextInput style={styles.textInput}  placeholder=""></TextInput> 
  <Text style={styles.text2}>Nationality :</Text>
  <TextInput style={styles.textInput}  placeholder=""></TextInput> 
  <Text style={styles.text2}>Date of Birth:</Text>
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
   height:590,
   borderRadius:10,
   margin:20,
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
    borderColor: 'lightgray',
    borderBottomWidth:2,
    //borderWidth: 1,
    margin:2,
    paddingHorizontal:10,
    fontSize: 16,
  },














})