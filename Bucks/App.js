import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParentNavigator from "./src/Navigation/ParentNavigator"

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ParentNavigator/>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
