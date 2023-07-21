import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import sampleData from "../../../assets/sampleData.json"; // Import the sample data

const LongItem = () => {
  const navigation = useNavigation();

  // Parse the sample data from JSON string to an array of objects
  const data = JSON.parse(sampleData.Result.replace(/'/g, '"'));

  // Get the first item
  const productItem = data[0];

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <Pressable
            onPress={() =>
              navigation.navigate("Menu", {
                id: productItem.ASIN,
                name: productItem.Title,
                group: productItem.Group,
                salesRank: productItem.Salesrank,
                totalReviews: productItem.TotalReviews,
                avgRating: productItem.AvgRating,
              })
            }
            style={{ flexDirection: "row" }}
          >
            <View>
              {/* Replace the image source with the local image */}
              <Image
                source={require("../../../assets/books.jpg")} // Replace this with your local image source
                style={styles.image}
              />
            </View>

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {productItem.Title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 3,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text
                  style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
                >
                  {productItem.AvgRating}
                </Text>
                <Text style={{ marginLeft: 3 }}>•</Text>
                <Text
                  style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
                >
                  {productItem.TotalReviews} reviews
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <Text style={{ fontSize: 16, color: "gray", marginTop: 6 }}>
                    {productItem.Group}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <View>
                      <Text>₹ 500</Text>
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="bike-fast"
                      size={18}
                      color="black"
                    />
                    <Text style={{ marginLeft: 6, fontSize: 12 }}>
                      FREE DELIVERY
                    </Text>
                    <AntDesign
                      style={{ position: "absolute", top: 10, right: -30 }}
                      name="hearto"
                      size={22}
                      color="red"
                    />
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LongItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 2,
    borderRadius: 10,
  },
  priceTag: {
    backgroundColor: "black",
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  priceValue: {
    marginTop: 5,
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "500",
  },
});
