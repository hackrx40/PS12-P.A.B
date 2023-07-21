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
        <View style={styles.accountOverview}>
          <Text style={styles.overviewHeading}>Account OverView</Text>
          <OverViewRow logo="Home" text="My Profile"/>
          <OverViewRow logo="Home" text="My Orders"/>
          <OverViewRow logo="Home" text="Refund"/>
          <OverViewRow logo="Home" text="Change Password"/>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default ProfileScreen



function OverViewRow({logo,text}){
  return(
    <View style={styles.optionRow}>
      <View style={styles.rowLeftGroup}>
        <Feather name="user" size={48} color="black" />
        <Text style={styles.text}>{text}</Text>
      </View>
      <AntDesign name="right" size={40} color="black" />
    </View>
  )
}