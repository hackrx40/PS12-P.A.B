import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

const Categories = () => {
  const handleImagePress = (imageIndex) => {
    // Handle button press for each image
    console.log("Image pressed:", imageIndex);
  };

  return (
    <View style={styles.container}>
      
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleImagePress(0)}
        >
          <Image
            source={require("../Assets/images/Book.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleImagePress(1)}
        >
          <Image
            source={require("../Assets/images/Music.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      
      
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleImagePress(2)}
        >
          <Image
            source={require("../Assets/images/DVDs.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleImagePress(3)}
        >
          <Image
            source={require("../Assets/images/Videos.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,

 
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  button: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Categories;
