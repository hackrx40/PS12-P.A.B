import { ScrollView, StyleSheet, Text, View,StatusBar, SafeAreaView, TouchableOpacity, Touchable ,Image} from 'react-native'
import React,{useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Feather,Ionicons,SimpleLineIcons,AntDesign} from '@expo/vector-icons';
import styles from '../Styles/Profile.Styles'


const ProfileScreen = () => {
  useEffect(() => {
    Feather.loadFont();
    Ionicons.loadFont();
    SimpleLineIcons.loadFont();
    AntDesign.loadFont();
  }, [])

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      style={{backgroundColor:"white"}}
      contentContainerStyle={{backgroundColor:"white"}}
    >
      <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        <StatusBar/>
        <View style={styles.topSection}>
          <Text style={styles.heading}>Welcome!</Text>
          <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/dp1.jpeg")} resizeMode="cover"
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.rightData}>
            <Text style={styles.username}>Mr. A Bajaj</Text>
            <Text style={styles.email}>parthkatiyar04@gmail.com</Text>
            <Text style={styles.email}>+91 9026971112</Text>
          </View>
        </View>
        <Text style={{bottom:60, left:20, fontSize:16,textDecorationLine:true}}>Top Interests:</Text>
        <View>
            <TouchableOpacity style={{
              flex:1,
              justifyContent:'center',
              alignItems:'center',
              borderColor:'#1E4BA3',
              borderWidth:2,
              backgroundColor:'white',
              height:40,
              width:80,
              borderRadius:5,
              bottom:55,
              left:40,
              margin:5
            }}><Text style={{fontSize:16}}>Books</Text>
            </TouchableOpacity>
           
            
          </View>
          
        <View style={styles.accountOverview}>
          <Text style={styles.overviewHeading}>Account OverView</Text>
          <OverViewRow name="home" text="My Profile"/>
          <OverViewRow name= "package" text="My Orders"/>
          <OverViewRow name= "dollar-sign" text="Refund"/>
          <OverViewRow name="key" text="Change Password"/>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default ProfileScreen

function OverViewRow({name,text}){
  return(
    <View style={styles.optionRow}>
      <View style={styles.rowLeftGroup}>
        <Feather name={name} size={48} color="white" />
        <Text style={styles.text}>{text}</Text>
      </View>
      <AntDesign name="right" size={32} color="white" />
    </View>
    

    
    
  )
  
}