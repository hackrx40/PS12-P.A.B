import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import MyCart from "../Screens/Cart";
import ProductInfo from "../Screens/ProductInfo";

const Stack = createNativeStackNavigator();

const ParentNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* <Stack.Screen name="Cart" component={MyCart} /> */}
      <Stack.Screen name="Product Info" component={ProductInfo} />
    </Stack.Navigator>
  );
};

export default ParentNavigation;
