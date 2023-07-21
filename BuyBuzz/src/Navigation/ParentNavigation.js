// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "../Screens/HomeScreen";
// import MyCart from "../Screens/Cart";
// import ProductInfo from "../Screens/ProductInfo";
// import SplashScreen from "../Screens/SplashScreen";
// import ChoiceScreen from "../Screens/ChoiceScreen";

// const Stack = createNativeStackNavigator();

// const ParentNavigation = () => {
//   return (
//     <Stack.Navigator>
//       {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//       {/* <Stack.Screen name="Cart" component={MyCart} /> */}
//       <Stack.Screen name="Choice Screen" component={ChoiceScreen} />
//       {/* <Stack.Screen name="Product Info" component={ProductInfo} /> */}
//     </Stack.Navigator>
//   );
// };

// export default ParentNavigation;
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesPage} />
      <Tab.Screen name="MyCart" component={MyCart} />
      <Tab.Screen name="ProductInfo" component={ProductInfo} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const ParentNavigator = () => {
  const [showChoiceScreen, setShowChoiceScreen] = useState(true);

  useEffect(() => {
    // Simulate a 1-second delay before redirecting to ChoiceScreen
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

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { View, Image, StatusBar } from "react-native";
// import MyCart from "../Screens/Cart";
// import HomeScreen from "../Screens/HomeScreen";
// import CategoriesPage from "../Screens/Categories";
// import ProductInfo from "../Screens/ProductInfo";
// import Profile from "../Screens/Profile"; // Import the Profile screen
// import { COLOURS } from "../../database/Database";
// import ChoiceScreen from "../Screens/ChoiceScreen";

// const Tab = createBottomTabNavigator();

// const ParentNavigator = () => {
//   // const insets = useSafeAreaInsets();

//   return (
//     <View style={{ flex: 1, paddingTop: 10 }}>
//       {/* Add paddingTop to handle safe area */}
//       <StatusBar hidden />
//       <View style={{ flex: 1 }}>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused }) => {
//               let iconSource;

//               if (route.name === "MyCart") {
//                 iconSource = focused
//                   ? require("../Assets/images/Cart.png")
//                   : require("../Assets/images/Cart.png");
//               } else if (route.name === "ProductInfo") {
//                 iconSource = focused
//                   ? require("../Assets/images/Home.png")
//                   : require("../Assets/images/Home.png");
//               } else if (route.name === "ProductInfo") {
//                 iconSource = focused
//                   ? require("../Assets/images/Home.png")
//                   : require("../Assets/images/Home.png");
//               } else if (route.name === "Home") {
//                 iconSource = focused
//                   ? require("../Assets/images/Home.png")
//                   : require("../Assets/images/Home.png");
//               } else if (route.name === "Profile") {
//                 // Add this condition for the Profile screen
//                 iconSource = focused
//                   ? require("../Assets/images/Home.png")
//                   : require("../Assets/images/Home.png");
//               }

//               return (
//                 <View style={{ alignItems: "center" }}>
//                   <Image
//                     source={iconSource}
//                     style={{
//                       width: 24,
//                       height: 24,
//                       tintColor: focused ? "green" : "#8E8E93",
//                     }}
//                   />
//                 </View>
//               );
//             },
//           })}
//         >
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Categories" component={CategoriesPage} />
//           <Tab.Screen name="MyCart" component={MyCart} />
//           <Tab.Screen name="ProductInfo" component={ProductInfo} />

//           <Tab.Screen name="Profile" component={Profile} />
//         </Tab.Navigator>
//       </View>
//     </View>
//   );
// };

// export default ParentNavigator;

// import React, { useEffect, useState } from "react";
// import { View, Image, StatusBar } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import MyCart from "../Screens/Cart";
// import HomeScreen from "../Screens/HomeScreen";
// import CategoriesPage from "../Screens/Categories";
// import ProductInfo from "../Screens/ProductInfo";
// import Profile from "../Screens/Profile";
// import ChoiceScreen from "../Screens/ChoiceScreen";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import SplashScreen from "../Screens/SplashScreen";

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused }) => {
//           let iconSource;

//           if (route.name === "MyCart") {
//             iconSource = focused
//               ? require("../Assets/images/Cart.png")
//               : require("../Assets/images/Cart.png");
//           } else if (route.name === "ProductInfo") {
//             iconSource = focused
//               ? require("../Assets/images/Home.png")
//               : require("../Assets/images/Home.png");
//           } else if (route.name === "ProductInfo") {
//             iconSource = focused
//               ? require("../Assets/images/Home.png")
//               : require("../Assets/images/Home.png");
//           } else if (route.name === "Home") {
//             iconSource = focused
//               ? require("../Assets/images/Home.png")
//               : require("../Assets/images/Home.png");
//           } else if (route.name === "Profile") {
//             // Add this condition for the Profile screen
//             iconSource = focused
//               ? require("../Assets/images/Home.png")
//               : require("../Assets/images/Home.png");
//           }

//           return (
//             <View style={{ alignItems: "center" }}>
//               <Image
//                 source={iconSource}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? "green" : "#8E8E93",
//                 }}
//               />
//             </View>
//           );
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Categories" component={CategoriesPage} />
//       <Tab.Screen name="MyCart" component={MyCart} />
//       <Tab.Screen name="ProductInfo" component={ProductInfo} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

// const ParentNavigator = () => {
//   const [showChoiceScreen, setShowChoiceScreen] = useState(true);

//   useEffect(() => {
//     // Simulate a 1-second delay before redirecting to ChoiceScreen
//     setTimeout(() => {
//       setShowChoiceScreen(false);
//     }, 1000);
//   }, []);

//   return (
//     <View style={{ flex: 1, paddingTop: 10 }}>
//       <StatusBar hidden />
//       <View style={{ flex: 1 }}>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused }) => {
//               let iconSource;

//               if (route.name === "MyCart") {
//                 iconSource = focused
//                   ? require("../Assets/images/Cart.png")
//                   : require("../Assets/images/Cart.png");
//               } else if (route.name === "ProductInfo") {
//                 iconSource = focused
//                   ? require("../Assets/images/Home.png")
//                   : require("../Assets/images/Home.png");
//               } else if (route.name === "ProductInfo") {
//                 iconSource = focused
//                   ? require("../Assets/images/Home.png")
//                   : require("../Assets/images/Home.png");
//               } else if (route.name === "Home") {
//                 iconSource = focused
//                   ? require("../Assets/images/Home.png")
//                   : require("../Assets/images/Home.png");
//               } else if (route.name === "Profile") {
//                 // Add this condition for the Profile screen
//                 iconSource = focused
//                   ? require("../Assets/images/Home.png")
//                   : require("../Assets/images/Home.png");
//               }

//               return (
//                 <View style={{ alignItems: "center" }}>
//                   <Image
//                     source={iconSource}
//                     style={{
//                       width: 24,
//                       height: 24,
//                       tintColor: focused ? Colors : "#00337C",
//                     }}
//                   />
//                 </View>
//               );
//             },
//           })}
//         >
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Categories" component={CategoriesPage} />
//           <Tab.Screen name="MyCart" component={MyCart} />
//           <Tab.Screen name="ProductInfo" component={ProductInfo} />

//           <Tab.Screen name="Profile" component={Profile} />
//         </Tab.Navigator>
//         {showChoiceScreen ? <SplashScreen /> : <TabNavigator />}
//       </View>
//     </View>
//   );
// };

// export default ParentNavigator;
