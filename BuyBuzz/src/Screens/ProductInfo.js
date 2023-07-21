import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import SampleData from "../../database/SampleData.json";

const ProductInfo = ({ route, navigation }) => {
  //const {productID} = route.params;
  //const [product, setProduct] = useState({});

  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

    return unsubscribe;
  }, [navigation]);

  //add to cart

  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    }
  };

  //product horizontal scroll product card
  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <StatusBar backgroundColor={"#F0F0F3"} barStyle="#777777" />
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: "#F0F0F3",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 16,
              paddingLeft: 16,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: "#777777",
                  padding: 12,
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 32,
            }}
          ></View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Entypo
              name="music"
              style={{
                fontSize: 18,
                color: "green",
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: "#000000",
              }}
            >
              Book
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: "#000000",
                maxWidth: "84%",
              }}
            >
              <Text>Harry Potter and the Prisoner of the Azkaban </Text>
            </Text>
            <Ionicons
              name="share-outline"
              style={{
                fontSize: 24,
                color: "#00AC76",
                backgroundColor: "#00AC76" + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "#000000",
              fontWeight: "400",
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "85%",
              maxHeight: 44,
              marginBottom: 18,
            }}
          >
            {" "}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 20,
              borderBottomColor: "#F0F0F3",
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  color: "#00AC76",
                  backgroundColor: "#F0F0F3",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              >
                <Entypo
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: "#00AC76",
                  }}
                />
              </View>
              <Text> 101 Cuffe Parade, {"\n"}120-222 Mumbai</Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: "#777777",
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                maxWidth: "85%",
                color: "#000000",
                marginBottom: 4,
              }}
            >
              {" "}
            </Text>
            <Text>Price $20</Text>
            <Text>Tax Rate 2%</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: "#00AC76",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "800",
              letterSpacing: 1,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            <Text>Add to cart</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;
