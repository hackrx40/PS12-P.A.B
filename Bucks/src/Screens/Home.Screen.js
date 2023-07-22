import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import styles from "../Styles/Home.Styles";
import HomeOption from "../Components/Buttons/HomeOptions";
import SnapCarousel from "../Components/Carousel/CompanyCarousel";
import axios from "axios";
import {useQuery} from "@tanstack/react-query"

import ProductItem from "../Components/Cards/ProductItem";
import SearchBar from "../Components/Buttons/SearchBar";
import Grid from "../Components/Cards/CardGrid";

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
    AntDesign.loadFont();
  }, []);
  const { isLoading, error, data } = useQuery(["posts"], async() => {
    const response=await axios.get("http://localhost:8000/")
    return response.data["Products"]
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
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      contentContainerStyle={{ marginHorizontal: 10 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <View style={styles.topBar}>
          <Text style={styles.salutation}>Good Morning Bajaj</Text>
          <View style={styles.rightGroup}>
            <TouchableOpacity style={{marginRight:12}}>
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
        <SnapCarousel navigation={navigation}/>
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Products just for you</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <Grid data={data} navigation={navigation}/>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;
