import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { COLOURS, Items } from "../../database/Database";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category === "product") {
        productList.push(Items[index]);
      } else if (Items[index].category === "accessory") {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  //create a reusable product card component
  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={styles.productCard}
      >
        <View style={styles.productImageContainer}>
          {data.isOff && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{data.offPercentage}%</Text>
            </View>
          )}
          <Image source={data.productImage} style={styles.productImage} />
        </View>
        <Text style={styles.productName}>{data.productName}</Text>
        {data.category === "accessory" ? (
          <View style={styles.productAvailabilityContainer}>
            <View style={styles.productAvailabilityIcon}>
              <Text
                style={[
                  styles.productAvailabilityText,
                  data.isAvailable
                    ? { color: COLOURS.green }
                    : { color: COLOURS.red },
                ]}
              >
                {data.isAvailable ? "Available" : "Unavailable"}
              </Text>
            </View>
          </View>
        ) : null}
        <Text style={styles.productPrice}>&#8377; {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.greetingText}>Good Morning, Affaan</Text>
        <View style={styles.searchBarContainer}>
          <AntDesign name="search1" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendationTitle}>Recommended Products</Text>
          <Text style={styles.recommendationSubtitle}>
            Explore our handpicked selection of products tailored just for you.
          </Text>
        </View>

        <View style={styles.productContainer}>
          <View style={styles.productHeader}>
            <Text style={styles.productHeaderText}>Top Picks for you</Text>
          </View>
          <View style={styles.productCardContainer}>
            {products.map((data) => (
              <ProductCard data={data} key={data.id} />
            ))}
          </View>
        </View>

        <View style={styles.productContainer}>
          <View style={styles.productHeader}>
            <Text style={styles.productHeaderText}>You might also like</Text>
          </View>
          <View style={styles.productCardContainer}>
            {accessory.map((data) => (
              <ProductCard data={data} key={data.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.white,
    // backgroundColor: "#DBDFAA",
  },
  greetingText: {
    fontSize: 28,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    padding: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginHorizontal: 16,
    marginBottom: 30,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  recommendationContainer: {
    paddingHorizontal: 16,
  },
  recommendationTitle: {
    fontSize: 26,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 10,
  },
  recommendationSubtitle: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: "400",
    letterSpacing: 1,
    lineHeight: 24,
    marginBottom: 20,
  },
  productContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  productHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  productHeaderText: {
    fontSize: 18,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 1,
  },
  productCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    marginVertical: 14,
  },
  productImageContainer: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  discountBadge: {
    position: "absolute",
    width: "20%",
    height: "24%",
    backgroundColor: COLOURS.green,
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  discountText: {
    fontSize: 12,
    color: COLOURS.white,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  productImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  productName: {
    fontSize: 12,
    color: COLOURS.black,
    fontWeight: "600",
    marginBottom: 2,
  },
  productAvailabilityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  productAvailabilityIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  productAvailabilityText: {
    fontSize: 12,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: COLOURS.black,
  },
});

export default Home;
