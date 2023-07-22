import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../Screens/Category.Screen';
import ProductScreen from '../Screens/Product.Screen';
import LoginScreen from "../Screens/Login.Screen"
import MainTabs from './mainTabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='MainTabs' component={MainTabs}/>
      </Stack.Navigator>
  );
}

export default App;
