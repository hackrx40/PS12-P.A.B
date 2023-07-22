import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import styles from "../Styles/Home.Styles";
import HomeSearch from "../Components/Input/HomeSearch";
import ProductItem from "../Components/Cards/ProductItem";
import SearchBar from "../Components/Buttons/SearchBar";
import LongItem from "../Components/Cards/LongItem";

const ExploreScreen = () => {
  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
    AntDesign.loadFont();
  }, []);

  // Sample product data from productInfo.json
  const sampleData = {
    Result: `[
      {"ASIN": "1561704962", "Title": "101 Ways to Health and Healing", "Group": "Book", "Salesrank": 909719, "NbrOfSimilar": 0, "NbrOfCategories": 4, "TotalReviews": 0, "Downloaded": 0, "AvgRating": 0.0},
      {"ASIN": "B00004T2FJ", "Title": "Antologia", "Group": "Music", "Salesrank": 61345, "NbrOfSimilar": 5, "NbrOfCategories": 9, "TotalReviews": 13, "Downloaded": 13, "AvgRating": 4.5},
      {"ASIN": "0141303077", "Title": "Cam Jansen and the Mystery of the Carnival Prize (CAM Jansen (Paperback))", "Group": "Book", "Salesrank": 644405, "NbrOfSimilar": 5, "NbrOfCategories": 2, "TotalReviews": 3, "Downloaded": 3, "AvgRating": 4.5},
      {"ASIN": "0892552808", "Title": "Exiled Memories: A Cuban Childhood", "Group": "Book", "Salesrank": 694751, "NbrOfSimilar": 5, "NbrOfCategories": 4, "TotalReviews": 1, "Downloaded": 1, "AvgRating": 5.0},
      {"ASIN": "B0000260IY", "Title": "Witchi-Tai-To", "Group": "Music", "Salesrank": 41331, "NbrOfSimilar": 5, "NbrOfCategories": 3, "TotalReviews": 6, "Downloaded": 6, "AvgRating": 5.0}
    ]`,
  };

  // Parse the sample data from JSON string to an array of objects
  const data = JSON.parse(sampleData.Result.replace(/'/g, '"'));

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      contentContainerStyle={{ marginHorizontal: 10 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <SearchBar />
        <ScrollView>
          <View style={styles.row}>
            {data.slice(0, 2).map((item) => (
              <ProductItem key={item.ASIN} productData={item} />
            ))}
          </View>
          <View style={styles.row}>
            {data.slice(2, 4).map((item) => (
              <ProductItem key={item.ASIN} productData={item} />
            ))}
          </View>
          {/* <View style={styles.row}>
            {data.map((item) => (
              <LongItem key={item.ASIN} productData={item} />
            ))}
          </View> */}
        </ScrollView>
        <View style={styles.productHeader}>
          <Text style={{ fontSize: 20, fontWeight: "500", padding: 15 }}>
            Top Picks for you
          </Text>
        </View>
        <ScrollView style={styles.longContainer}>
          <FlatList
            style={{ marginTop: 10 }}
            data={data}
            keyExtractor={(item) => item.ASIN}
            renderItem={({ item }) => <LongItem productData={item} />}
            contentContainerStyle={styles.flatListContent}
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default ExploreScreen;
