import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../Screens/Category.Screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
  );
}

export default App;