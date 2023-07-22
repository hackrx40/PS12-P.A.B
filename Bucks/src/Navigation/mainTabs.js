import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home.Screen";
import ExploreScreen from "../Screens/Explore.Screen";
import CartScreen from "../Screens/Cart.Screen";
import ProfileScreen from "../Screens/Profile.Screen";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"; // Import the icons you want to use

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
