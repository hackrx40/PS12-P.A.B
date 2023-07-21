import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { COLOURS } from "../../database/Database";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const Profile = () => {
  // Animation configuration
  const fadeAnim = new Animated.Value(0);
  const animateHeader = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animateHeader();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <Animated.View
        style={[
          styles.header,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Text style={styles.headerTitle}>My Profile</Text>
      </Animated.View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require("../Assets/images/Home.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>Affaan Kidwai</Text>
        </TouchableOpacity>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialIcons
              name="shopping-bag"
              size={24}
              color={COLOURS.black}
            />
            <Text style={styles.menuText}>Past Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <FontAwesome5 name="user-circle" size={24} color={COLOURS.black} />
            <Text style={styles.menuText}>My Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialIcons
              name="shopping-cart"
              size={24}
              color={COLOURS.black}
            />
            <Text style={styles.menuText}>Buy Again</Text>
          </TouchableOpacity>
          {/* Add more menu options here */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.white,
  },
  header: {
    backgroundColor: COLOURS.primary,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: COLOURS.white,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  profileButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  profileText: {
    marginLeft: 16,
    fontSize: 18,
    color: COLOURS.black,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  menuContainer: {
    marginBottom: 30,
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuText: {
    marginLeft: 16,
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});

export default Profile;
