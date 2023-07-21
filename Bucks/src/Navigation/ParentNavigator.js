import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../Screens/Category.Screen';
import CartScreen from '../Screens/Cart.Screen';
import ProductScreen from '../Screens/Product.Screen';
import ProfileScreen from '../Screens/Profile.Screen';
import HomeScreen from "../Screens/Home.Screen"
import ExploreScreen from '../Screens/Explore.Screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
<<<<<<< HEAD
        initialRouteName="ProductScreen"
=======
        initialRouteName="ProfileScreen"
>>>>>>> 9a0b2ee0bebca5aea503dc49000ff4d77f30c0b0
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name='CartScreen' component={CartScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      </Stack.Navigator>
  );
}

export default App;
