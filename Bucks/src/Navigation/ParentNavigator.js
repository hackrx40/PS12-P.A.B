import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../Screens/Category.Screen';
import CartScreen from '../Screens/Cart.Screen';
import ProductScreen from '../Screens/Product.Screen';
import ProfileScreen from '../Screens/Profile.Screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
  );
}

export default App;