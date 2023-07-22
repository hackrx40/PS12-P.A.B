import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React, { useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import styles from "../Styles/Home.Styles";
import HomeSearch from "../Components/Input/HomeSearch";
import HomeOption from "../Components/Buttons/HomeOptions";
import SnapCarousel from "../Components/Carousel/CompanyCarousel";
import ProductItem from "../Components/Cards/ProductItem";
import SearchBar from "../Components/Buttons/SearchBar";

const HomeScreen = () => {
  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
    AntDesign.loadFont();
  }, []);

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      contentContainerStyle={{ marginHorizontal: 10 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <View style={styles.topBar}>
          <Text style={styles.salutation}>Good Morning Bajaj</Text>
          <View style={styles.rightGroup}>
            <TouchableOpacity>
              <AntDesign name="hearto" size={24} color="#1E4BA3" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="bell" size={24} color="#1E4BA3" />
            </TouchableOpacity>
          </View>
        </View>
        {/* <HomeSearch/> */}
        <SearchBar />
        <View style={styles.optionContainer}>
          <HomeOption/>
          <HomeOption />
          <HomeOption />
        </View>
        <View style={styles.optionContainer}>
          <HomeOption/>
          <HomeOption />
          <HomeOption />
        </View>
      
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Discover Top Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <SnapCarousel />
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Products just for you</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
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
  );
};

export default HomeScreen;
