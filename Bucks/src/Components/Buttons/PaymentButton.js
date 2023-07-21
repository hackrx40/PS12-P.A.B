import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const PaymentButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="credit-card" size={24} color="white" />
        <Text style={styles.buttonText}>Make Payment</Text>
      </View>

      {/* <Text style={styles.buttonText}>Rs. 999</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#47A992", // Customize button color here
    borderRadius: 10,
    padding: 14,
    width: 350,
    // alignSelf: "center",

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default PaymentButton;
