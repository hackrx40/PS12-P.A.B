import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const renderProducts = (data, index) => {
  return (
    <TouchableOpacity
      key={data.key}
      onPress={() => navigation.navigate("ProductInfo", { productID: data.id })}
      style={{
        width: "100%",
        height: 100,
        marginVertical: 6,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "30%",
          height: 100,
          padding: 14,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          marginRight: 22,
        }}
      >
        <Image
          source={data.productImage}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <View style={{}}>
          <Text
            style={{
              fontSize: 14,
              maxWidth: "100%",
              color: "black",
              fontWeight: "600",
              letterSpacing: 1,
            }}
          >
            {data.productName}
          </Text>
          <View
            style={{
              marginTop: 4,
              flexDirection: "row",
              alignItems: "center",
              opacity: 0.6,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                maxWidth: "85%",
                marginRight: 4,
              }}
            >
              &#8377;{data.productPrice}
            </Text>
            <Text>
              (~&#8377;
              {data.productPrice + data.productPrice / 20})
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 100,
                marginRight: 20,
                padding: 4,
                borderWidth: 1,
                borderColor: "black",
                opacity: 0.5,
              }}
            >
              <MaterialCommunityIcons
                name="minus"
                style={{
                  fontSize: 16,
                  color: "black",
                }}
              />
            </View>
            <Text>1</Text>
            <View
              style={{
                borderRadius: 100,
                marginLeft: 20,
                padding: 4,
                borderWidth: 1,
                borderColor: "black",
                opacity: 0.5,
              }}
            >
              <MaterialCommunityIcons
                name="plus"
                style={{
                  fontSize: 16,
                  color: COLOURS.backgroundDark,
                }}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
            <MaterialCommunityIcons
              name="delete-outline"
              style={{
                fontSize: 16,
                color: COLOURS.backgroundDark,
                backgroundColor: COLOURS.backgroundLight,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
