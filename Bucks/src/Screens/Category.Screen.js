import { ScrollView, StyleSheet, Image, Text, View,StatusBar, SafeAreaView, TouchableOpacity, Touchable } from 'react-native'
import React,{useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome ,Ionicons,AntDesign} from '@expo/vector-icons';
import axios from 'axios';
import {useQuery} from "@tanstack/react-query"
import styles from '../Styles/Category.Styles'
import ProductItem from '../Components/Cards/ProductItem';

const CategoryScreen = ({route,navigation}) => {
  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
    AntDesign.loadFont();
  }, [])
  const groupMapping={"Book":require("../../assets/book.jpeg"),"Music":require("../../assets/music.png"),"Video":require("../../assets/videob.png"),"Dvd":require("../../assets/dvdb.png")}
  console.log(navigation)
  const { group } = route.params;
  const { isLoading, error, data } = useQuery(["posts"], async() => {
    const response=await axios.get(`http://127.0.0.1:8000/products/${group}`)
    return response.data
  });
  if(isLoading){
    return(
      <Text>Loading</Text>
    )
  }
  if(error){
    return(
      <Text>Error</Text>
    )
  }
  console.log(data)
  return (
    <KeyboardAwareScrollView
      //resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View>
        <StatusBar/>
        <View style={styles.topSection}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={()=>navigation.goBack()}
            >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="user" size={24} color="black"/>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryHolder}>
          <Image
            style={styles.backgroundImage}

            source={groupMapping[group]}
            resizeMode="cover"
          />
          <Text style={styles.categoryName}>{group}</Text>
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

      </View>
    </KeyboardAwareScrollView>
  )
}

export default CategoryScreen