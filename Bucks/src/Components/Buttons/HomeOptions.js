import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const HomeOptions = ({ label, imageSource }) => {
  return (
    <TouchableOpacity style={styles.optionContainer}>
      <View style={styles.svg}>
        {/* Use the imageSource prop to display the custom image */}
        <Image
          source={imageSource}
          style={{ height: 72, width: 72, borderRadius: 64 }}
        />
      </View>
      {/* Use the label prop to display the custom label */}
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default HomeOptions;

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  svg: {
    height: 72,
    width: 72,
    borderRadius: 64,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
});
