import { ScrollView, StyleSheet, Text, View,StatusBar, SafeAreaView, TouchableOpacity, Touchable } from 'react-native'
import React,{useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Feather,Ionicons,FontAwesome5} from '@expo/vector-icons';
import styles from '../Styles/Cart.Styles'


const CartScreen = () => {
  useEffect(() => {
    Feather.loadFont();
    Ionicons.loadFont();
  }, [])

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      style={{backgroundColor:"#D3D3D3"}}
      contentContainerStyle={{backgroundColor:"#D3D3D3"}}
    >
      <SafeAreaView style={{flex:1,backgroundColor:"#D3D3D3"}}>
        <StatusBar/>
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.userBox}>
          <Feather name="user" size={32} color="orange" />
          <Text style={styles.addressName}>Parth Katiyar</Text>
        </View>
        <View style={styles.addressBox}>
          <Feather name="map-pin" size={32} color="orange" />
          <Text style={styles.address}>2/350 Nehru Vihar Kalyanpur,{"\n"}  Lucknow 226022</Text>
        </View>
        <View style={styles.offerBox}>
          <FontAwesome5 name="percentage" size={24} color="black" />
          <Text style={styles.offerAmount}>You got 50% off !</Text>
        </View>
        <View style={{marginTop:20,textAlign:"center"}}>
          <View style={styles.userBox}>
            <View style={styles.billRow}/>
              <Text style={{
            left:50,
            bottom:25,
            fontSize:18,
            fontWeight:"600",
           }}>Title</Text>
         
            <Text style={{
            left: 15,
           }}>
            Description
           </Text>
          <TouchableOpacity>
            <View>
              
            </View>
            
          </TouchableOpacity>
           


            
            
          </View>
        </View>
        <Text style={styles.billDetails}>Bill Details</Text>
        <View style={styles.billBox}>
          <View style={styles.billRow}>
            <Text style={styles.leftText}>Item Total</Text>
            <Text style={[styles.leftText,{color:"orange"}]}>400</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.leftText}>Discount</Text>
            <Text style={[styles.leftText,{color:"orange"}]}>-100</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.total}>To Pay</Text>
            <Text style={[styles.total,{color:"orange"}]}>$ 300</Text>
          </View>
        </View>
        <Text>Affaan Component Goes Here</Text>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default CartScreen