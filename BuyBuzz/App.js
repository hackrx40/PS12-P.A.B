import { NavigationContainer } from "@react-navigation/native";
import ParentNavigator from "./src/Navigation/ParentNavigation";
export default function App() {
  return (
    <NavigationContainer>
      <ParentNavigator />
    </NavigationContainer>
  );
}
