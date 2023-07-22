import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import styles from "../Styles/Home.Styles";
import HomeOptions from "../Components/Buttons/HomeOptions";
import SnapCarousel from "../Components/Carousel/CompanyCarousel";
import ProductItem from "../Components/Cards/ProductItem";
import SearchBar from "../Components/Buttons/SearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
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
          <Text style={styles.salutation}>Good Morning Parth</Text>
          <View style={styles.rightGroup}>
            <TouchableOpacity>
              <AntDesign
                name="heart"
                size={24}
                color="black"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="bell" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <SearchBar />
        <View style={styles.optionContainer}>
          <HomeOptions
            label="Books"
            imageSource={require("../../assets/bb.png")}
          />
          <HomeOptions
            label="Music"
            imageSource={require("../../assets/mu.png")}
          />
          <HomeOptions
            label="DVD"
            imageSource={require("../../assets/d.png")}
          />
        </View>
        <View style={styles.optionContainer}>
          <HomeOptions
            label="Videos"
            imageSource={require("../../assets/v.png")}
          />
          <HomeOptions
            label="Electronics"
            imageSource={require("../../assets/m.png")}
          />
          <HomeOptions
            label="Clothing"
            imageSource={require("../../assets/t.png")}
          />
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

        <SnapCarousel navigation={navigation} />
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
          {/* <View style={styles.row}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </View> */}
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;
