import { ScrollView, StyleSheet, Image, Text, View,StatusBar, SafeAreaView, TouchableOpacity, Touchable } from 'react-native'
import React,{useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome ,Ionicons,AntDesign} from '@expo/vector-icons';
import styles from '../Styles/Category.Styles'
import ProductItem from '../Components/Cards/ProductItem';

const CategoryScreen = () => {
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
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="user" size={24} color="black"/>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryHolder}>
          <Image 
            style={styles.backgroundImage} 
            source={require("../../assets/book.jpeg")} 
            resizeMode="cover"
          /> 
          <Text style={styles.categoryName}>Books</Text>
        </View>
        <View style={styles.listHeading}>
          <Text style={styles.itemSize}>24 out of 184</Text>
          
          <TouchableOpacity style={styles.filterOption}>
            <Text style={{fontSize:12}}>New Arrival</Text>
            <AntDesign name="down" size={15} color="black" />
          </TouchableOpacity>
         
        </View>

        <View>
          <View style={styles.row}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </View>
          <View style={styles.row}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </View>
          <View style={styles.row}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </View>
          <View style={styles.row}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </View>
            
        </View>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default CategoryScreen