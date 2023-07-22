import { ScrollView, StyleSheet, Text, View,StatusBar, SafeAreaView, TouchableOpacity, Touchable,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome ,Ionicons,AntDesign, Octicons} from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import styles from '../Styles/Product.Styles'
import Star from '../Components/star';
import ProductItem from '../Components/Cards/ProductItem';
import CarouselComponent from "../Components/Cards/Carousel"
import ProductInfo from "../Services/ProductInfo"

const ProductScreen = ({route,navigation}) => {
  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
    AntDesign.loadFont();
    const {productId}=route.params
  }, []);

  const { isLoading, error, data } = useQuery(["posts"], () => {
    return ProductInfo(productId)
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
  console.log(data["recommendations"])
  return (
    <KeyboardAwareScrollView
      scrollEnabled={true}
    >
      <View>
        <StatusBar />
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="heart" size={24} color="green" />
          </TouchableOpacity>
        </View>
        <View style={styles.productTopContainer}>
          <View style={styles.sampleImage}/>
          <Text
            style={styles.productName}
            numberOfLines={2}
            adjustsFontSizeToFit
            >{data["Product"]["title"]}</Text>
          <Text style={styles.companyName}>By- Corporation</Text>
          <TouchableOpacity>
          <View style={styles.row}>
            <Octicons name="graph" size={24} color="black" />
            <Text style={{marginLeft:4}}>{data["Product"]["salesrank"]}</Text>
          </View>
          </TouchableOpacity>
        </View>
        <Text style= {styles.descText}>ASIN: {data["Product"]["ASIN"]}</Text>
        <Text style={[styles.heading,{marginTop:-12}]}>Description</Text>

        <Text style={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <Text style={styles.heading}>You Might Also Like</Text>
        <View style={{ textAlign: "center",paddingVertical:16, }}>
          <CarouselComponent
          recommendations={data["recommendations"]}
          navigation={navigation}
          />
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
          <View
            style={{
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
              bottom:5
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#323357",
                textAlign: "center",
              }}
            >
              Customer reviews
            </Text>
            <View
              style={{
                marginTop: 20,
                marginBottom: 5,
                backgroundColor: "#F5F8FF",
                borderRadius: 60,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: 15,
                paddingVertical: 10,
              }}
            >
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
            <Text
              style={{
                fontSize: 16,
                color: "#595B71",
                textAlign: "center",
              }}
            >
              Average Rating: 4
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#595B71",
                textAlign: "center",
                top:4
              }}
            >
              Downloaded: 4
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#595B71",
                textAlign: "center",
                top:8
              }}
            >
              Total: 4
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );

            }
export default ProductScreen;
