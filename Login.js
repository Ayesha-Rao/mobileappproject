import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TextInput, Button,Image, ScrollView } from 'react-native';
//import {auth} from './FirebaseConfig';
//import {createUserWithEmailAndPassword,signInAnonymously,signInWithEmailAndPassword,onAuthStateChanged, reauthenticateWithCredential}from 'firebase/auth'







export default function Mylogin(){
    // const [username,setUser] = useState('');
    // const [password,setPass] = useState('');
    // const handleUsernameChange=(inputText)=>{
    //   setUser(inputText);
    // }
    // const handlePasswordChange=(inputText)=>{
    //   setPass(inputText);
    // }
  
    
    // const handleSignIn =async()=>{
    //   await signInWithEmailAndPassword(auth,username,password)
    //   .then((userCredential)=>{
    //     const user = userCredential.user;
    //     // console.log(user);
    //     navigation.navigate('MyFlatlist');
    //   }).catch((error)=>{
    //     Alert.alert('Error','Enter correct Username and Password');
  
    //   })
  
    // }











return(
<View style={{flex:1,backgroundColor:'midnightblue'}}>
<Image source={require('./assets/image/portal.jpeg')}style={{width:310,height:90,padding:70,marginHorizontal:65,marginVertical:90}}></Image>
<View style={styles.view1}>

<Text style={{padding:10,fontSize:18,color:'steelblue'}}>Dear Student, Login To Continue</Text>
<Text style={{padding:15}}>CIIT/AA00-BBB-000/LHR</Text>
<TextInput style={styles.input1}placeholder='enter registeration ID'
        
            ></TextInput>
            <TextInput style={styles.input1}placeholder='Password'
        
        ></TextInput>
        <TouchableOpacity>
<Text style={{padding:10,color:'steelblue'}}>Forgot Password? click here</Text>
</TouchableOpacity>
<TouchableOpacity style={{padding:18, backgroundColor:'darkblue',allignItems:'center',borderRadius:5,width:150,marginLeft:230,marginTop:0}}
                 >
       <Text style={{color:'white',alignSelf:'center'}}>Login</Text>
      </TouchableOpacity>



</View>

<ScrollView style={styles.view2}>
    <Text style={{alignSelf:'center',color:'pink',padding:20}}>NOTICE BOARD</Text>
    <Text style={{color:'yellow',padding:10}}> Weeks workshop on Amzon
FBA
KAMYAB JAWAN PEPSICO ROSHAN KAL INTERNSHIP
PROGRAMME
Tutorial: How to Use Microsoft
Teams
Notification: Revised
</Text>
<Text style={{color:'yellow',padding:20}}>Undergraduate Calendar</Text>
<Text style={{color:'white',padding:20}}>Notification: Revised
Graduate Calendar
Notification: Student
Feedback FYP and Laboratory
Notification: Assessment
Undergraduate and Graduate
Notification: Academic
Council Decisions</Text>
<Text style={{color:'pink',fontSize:25}}>Revised
Undergraduate
Schedule
Revised Graduate
Schedule</Text>
<Text style={{color:'yellow',padding:20}}>Attention Students: (Office 365
Email Accounts Created for
All Students)
Please login to your CUOnline Portal and Click on "Profile" to view your credentials. You will have official
Email and several Apps to help you in learning remotely.
DigiSkills: Learn online - Earn online
Final Exam Coupons
Dear Students! Click here to get your Final Exam Coupons.</Text>

<Text style={{color:'yellow',padding:30}}>Visibility of Student card is
Mandatory
Any student whose picture has not yet been uploaded, may kindly be advised to immediately contact Manager Student Affairs for the needful to be done on urgent basis.
Welcome
Welcome Students at COMSATS
University Islamabad (LHR)
Mobile Application
View your marks,notifications,news,events etc.
Google Plar
New Portal features (1.0)

New Portal features (1.0)
More user convenient and rich interface.
Portal Updates (2.0)
You can change your password from forgot password option. In case of any problem please contact your departmental coordinator.
Portal Updates (3.0)
You can now print registration card from Main Menu Option from top of web portal.
Portal Updates (4.0)
Lecture Content Section has been added for Hybrid Course Students.

Portal Updates (4.0)
Lecture Content Section has been added for Hybrid Course Students.
Portal Updates (5.0)
Attendance View Section added and
Profile Section Updated and fixed.
Portal Updates (6.0)
Marks Summary and Fee Details added on portal.
Issues and Complaints
* Make sure to clear your browser cache for this website to receive portal updates
In case of any issue or complaint regarding portal please contact your</Text>

</ScrollView>


  




</View>
);

}

const styles=StyleSheet.create({

view1:

{    
    
    flex:1.5,
    paddingBottom:10,
    marginTop:1,
    margin:20,
    
    borderRadius:10,
    backgroundColor:'white',
    //padding:20
  //  alignItems: 'left',
   // justifyContent: 'center',

},
view2:{
flex:0.02,
marginLeft:60,
marginRight:60,
marginBottom:50,
borderRadius:20,
padding:1,
borderWidth:5,
borderColor:'white',

backgroundColor:'green',


},
view3:{
    flex:0.2,
    padding:10,
    backgroundColor:'white',
},
input1:{

margin:5,
borderRadius:10,
height:47,
borderColor:'grey',
borderWidth:2,
marginTop:2,

backgroundColor:'white',
},
button:{
   width:10,
   height:200,
   borderColor:'grey',
   borderRadius:2,
   marginTop:50,
   
    
    
  //  flex:0.2,
    backgroundColor:'white',
    allignItems:'center',
    justifyContent: 'center',

},
Login:{
    width: 300,
    marginLeft: 50,
    marginTop: 20,
},
Logintext:{
  fontSize: 19,
  color: 'white'
},


});