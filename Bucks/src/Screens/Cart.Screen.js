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
      style={{backgroundColor:"grey"}}
      contentContainerStyle={{backgroundColor:"grey"}}
    >
      <SafeAreaView style={{flex:1,backgroundColor:"grey"}}>
        <StatusBar/>
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="navigate" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.userBox}>
          <Feather name="user" size={32} color="orange" />
          <Text style={styles.addressName}>Parth Katiyar</Text>
        </View>
        <View style={styles.addressBox}>
          <Feather name="home" size={32} color="orange" />
          <Text style={styles.address}>2/350 Nehru Vihar Kalyanpur,{"\n"}  Lucknow 226022</Text>
        </View>
        <View style={styles.offerBox}>
          <FontAwesome5 name="percentage" size={24} color="green" />
          <Text style={styles.offerAmount}>You got 50% off !</Text>
        </View>
        <View style={{marginTop:20,textAlign:"center"}}>
          <Text>Bhurva Add your Items here</Text>
        </View>
        <Text style={styles.billDetails}>Bill Details</Text>
        <View style={styles.billBox}>
          <View style={styles.billRow}>
            <Text style={styles.leftText}>Item Total</Text>
            <Text style={[styles.leftText,{color:"orange"}]}>300</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.leftText}>Discount</Text>
            <Text style={[styles.leftText,{color:"orange"}]}>300</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.leftText}>To Pay</Text>
            <Text style={[styles.leftText,{color:"orange"}]}>300</Text>
          </View>
        </View>
        <Text>Affaan Component Goes Here</Text>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default CartScreen