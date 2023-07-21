import React, { useEffect, useState } from "react";
import { View, Image, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import MyCart from "../Screens/Cart";
import HomeScreen from "../Screens/HomeScreen";
import CategoriesPage from "../Screens/Categories";
import ProductInfo from "../Screens/ProductInfo";
import Profile from "../Screens/Profile";
import ChoiceScreen from "../Screens/ChoiceScreen";
import SplashScreen from "../Screens/SplashScreen";

import SampleHomeScreen from "../Sample/HomeScreen"

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === "MyCart") {
            iconSource = focused
              ? require("../Assets/images/Cart.png")
              : require("../Assets/images/Cart.png");
          } else if (route.name === "ProductInfo") {
            iconSource = focused
              ? require("../Assets/images/Home.png")
              : require("../Assets/images/Home.png");
          } else if (route.name === "ProductInfo") {
            iconSource = focused
              ? require("../Assets/images/Home.png")
              : require("../Assets/images/Home.png");
          } else if (route.name === "Home") {
            iconSource = focused
              ? require("../Assets/images/Home.png")
              : require("../Assets/images/Home.png");
          } else if (route.name === "Profile") {
            // Add this condition for the Profile screen
            iconSource = focused
              ? require("../Assets/images/Home.png")
              : require("../Assets/images/Home.png");
          }

          return (
            <View style={{ alignItems: "center" }}>
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "green" : "#8E8E93",
                }}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={SampleHomeScreen}
        options={{headerShown:false}}

      />
      <Tab.Screen
        name="Categories"
        component={CategoriesPage}
        options={{headerShown:false}}
      />
      <Tab.Screen name="MyCart" component={MyCart} />
      <Tab.Screen name="ProductInfo" component={ProductInfo} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const ParentNavigator = () => {
  const [showChoiceScreen, setShowChoiceScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowChoiceScreen(false);
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <StatusBar hidden />
      <View style={{ flex: 1 }}>
        {showChoiceScreen ? <SplashScreen /> : <TabNavigator />}
      </View>
    </View>
  );
};

export default ParentNavigator;
