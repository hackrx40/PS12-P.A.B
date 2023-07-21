import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ParentNavigator from "./src/Navigation/ParentNavigator"
export default function App() {
  return (
    <NavigationContainer>
      <ParentNavigator/>
    </NavigationContainer>
  );
}
