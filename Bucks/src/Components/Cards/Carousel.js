import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";


const CarouselItem = ({ item }) => {
  console.log(item)
  return (
    <View style={styles.itemContainer}>
      <Image
        source={require("../../../assets/books.jpg")}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>{item.Title}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>Avg Rating: {item.AvgRating}</Text>
        <Text style={styles.totalReviews}>Reviews: {item.TotalReviews}</Text>
      </View>
    </View>
  );
};

const ProductCarousel = ({ recommendations }) => {
  return (
    <FlatList
      data={recommendations}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.ASIN}
      renderItem={({ item }) => <CarouselItem item={item} key={item.ASIN} />}
      contentContainerStyle={styles.container}
    />
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  itemContainer: {
    width: 200,
    height: 220,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  itemRating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gold",
    marginLeft: 2,
  },
  totalReviews: {
    fontSize: 14,
    color: "gray",
    marginLeft: 5,
  },
});