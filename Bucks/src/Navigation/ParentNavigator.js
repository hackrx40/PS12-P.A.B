import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../Screens/Category.Screen';
import CartScreen from '../Screens/Cart.Screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
  );
}

export default App;