import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, Animated } from "react-native";
import ChoiceScreen from "./ChoiceScreen";

const SplashScreen = ({ navigation }) => {
  const logoScale = new Animated.Value(0);

  useEffect(() => {
    // Animate the logo with a scaling effect
    Animated.timing(logoScale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Automatically navigate to another page after 5 seconds
    const timer = setTimeout(() => {
      navigation.replace("ChoiceScreen"); // Replace 'MainScreen' with the name of your target screen
    }, 5000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.logoContainer, { transform: [{ scale: logoScale }] }]}
      >
        {/* Replace 'YourLogoImage.png' with your actual logo image */}
        {/* <Image source={'assets/Logo.png'} style={styles.logo} /> */}
      </Animated.View>
      <Text style={styles.text}>Nile</Text>
      <Text
        style={{
          top: 10,
          fontSize: 18,
        }}
      >
        Your personal shop
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333333",
  },
});

export default SplashScreen;
