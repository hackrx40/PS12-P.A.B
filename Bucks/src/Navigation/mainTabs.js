import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/Home.Screen"
import ExploreScreen from "../Screens/Explore.Screen"
import CartScreen from '../Screens/Cart.Screen';
import ProfileScreen from '../Screens/Profile.Screen';



const Tab = createBottomTabNavigator();


const MainTabs = () => {
  return (
    <Tab.Navigator
    initialRouteName='HomeScreen'
    screenOptions={{
      headerShown:false
    }}
    >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ExploreScreen" component={ExploreScreen} />
        <Tab.Screen name='CartScreen' component={CartScreen}/>
        <Tab.Screen name='ProfileScreen' component={ProfileScreen}/>
      </Tab.Navigator>
  )
}

export default MainTabs