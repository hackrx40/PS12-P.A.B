
import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Add your 5 image paths here
const imagePaths = [
  require("../../../assets/1.jpg"),
  require("../../../assets/2.jpg"),
  require("../../../assets/3.jpg"),
  require("../../../assets/4.jpg"),
  require("../../../assets/5.jpg"),
];

const ProductItem = ({item,navigation}) => {
  // Get a random image index from the array
  const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
  console.log(navigation)
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        onPressOut={()=>navigation.navigate("ProductScreen",{productId:item.Id})}
      >
        <Image source={imagePaths[randomImageIndex]} style={styles.image} />
        <Text style={styles.header}>{item?.Title}</Text>
        <View style={styles.row}>
          <View style={styles.starsContainer}>
            <MaterialIcons name="star" size={18} color="gold" />
            <Text style={styles.starsText}> ₹ 999</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170, // Set the width to your desired size
    height: 200, // Set the height to your desired size
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#EEEEEE",
    margin: 10,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 2,
  },
  header: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  body: {
    fontSize: 10,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starsText: {
    fontSize: 12,
    marginLeft: 10,
  },
});

export default ProductItem;
