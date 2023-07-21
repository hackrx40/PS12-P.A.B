import { ScrollView, StyleSheet, Text, View,StatusBar, SafeAreaView, TouchableOpacity, Touchable } from 'react-native'
import React,{useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome ,Ionicons,AntDesign} from '@expo/vector-icons';
import styles from '../Styles/Product.Styles'

const ProductScreen = () => {
  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
    AntDesign.loadFont();
  }, [])

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <SafeAreaView style={{flex:1}}>
        <StatusBar/>
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="navigate" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="user-circle" size={24} color="black"/>
          </TouchableOpacity>
        </View>
        <View style={styles.productTopContainer}>
          <View style={styles.sampleImage}/>
          <Text style={styles.productName}>Book Name and meta</Text>
          <Text style={styles.companyName}>John Doe Corporation</Text>
          <Text style={styles.stars}>{"⭐️⭐️⭐️"}</Text>
        </View>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.heading}>You Might Also Like</Text>
        <Text style={{textAlign:"center"}}>Carousel</Text>
        <Text style={styles.heading}>Similar Items to {"Book"}</Text>
        <Text style={{textAlign:"center"}}>Grid of Products</Text>
        <View style={styles.reviewBox}>
          <Text style={styles.reviewHeading}>Reviews</Text>
          <Text style={styles.reviewHeading}>Avg rating {"⭐️⭐️⭐️"}</Text>
          <Text style={styles.noOfReview}>5000 Reviews</Text>
        </View>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default ProductScreen