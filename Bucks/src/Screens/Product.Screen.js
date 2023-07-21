import { ScrollView, StyleSheet, Text, View,StatusBar, SafeAreaView, TouchableOpacity, Touchable,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome ,Ionicons,AntDesign} from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styles from '../Styles/Product.Styles'
import Star from '../Components/star';
import ProductItem from '../Components/Cards/ProductItem';
import LongItem from '../Components/Cards/LongItem';



const ProductScreen = () => {
  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
    AntDesign.loadFont();
  }, [])
  const productId=45
  const { isLoading, error, data } = useQuery(['posts'], async () => {
    const response = await axios.get(`http://127.0.0.1:8000/${productId}`);
    return response.data;
  });
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  if(error){
    return (
      <View style={styles.errorContainer}>
        <Text>Error: {String(error)}</Text>
      </View>
    );
  }
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <SafeAreaView style={{flex:1}}>
        <StatusBar/>
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="heart" size={24} color="green"/>
          </TouchableOpacity>
        </View>
        <View style={styles.productTopContainer}>
          <View style={styles.sampleImage}/>
          <Text style={styles.productName}>{data["Product"]["title"]}</Text>
          <Text style={styles.companyName}>John Doe Corporation</Text>
          <Text style={styles.stars}>{"⭐️⭐️⭐️"}</Text>
        </View>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.heading}>You Might Also Like</Text>
        <View style={{textAlign:"center"}}>
        <View>
          <LongItem>

          </LongItem>
        </View>
        </View>
        <Text style={styles.heading}>Similar Items to {"Book"}</Text>
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



        <View style={styles.reviewBox}>

          <View style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 40,
        minWidth: "80%",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        shadowColor: "rgba(193, 211, 251, 0.5)",
        elevation: 5,
      }}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "#323357",
          textAlign: "center",
        }}>Customer reviews
        </Text>
        <View style={{
          marginTop: 20,
          marginBottom: 5,
          backgroundColor: "#F5F8FF",
          borderRadius: 60,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
          <View
           style={{
           flexDirection: "row",
           }}
          >
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </View>
        <Text>4.7 out of 5</Text>
        </View>
        <Text style={{
          fontSize: 16,
          color: "#595B71",
          textAlign: "center",

        }}>40 customer ratings</Text>

      </View>
        </View>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default ProductScreen