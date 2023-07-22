import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../Screens/Category.Screen';
import CartScreen from '../Screens/Cart.Screen';
import ProductScreen from '../Screens/Product.Screen';
import ProfileScreen from '../Screens/Profile.Screen';
import HomeScreen from "../Screens/Home.Screen"
import ExploreScreen from '../Screens/Explore.Screen';
import LoginScreen from "../Screens/Login.Screen"

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
        initialRouteName="CategoryScreen"
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name='CartScreen' component={CartScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
      </Stack.Navigator>
  );
}

export default App;
