// import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import { useNavigation } from "@react-navigation/native";

// const data = [
//   { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
//   { key: 'K' },
//   { key: 'L' },
// ];

// const numColumns = 3;

// const ChoiceScreen = () => {
//   const navigation = useNavigation();
//   const [boxes, setBoxes] = useState(data);

//   const handleBoxPress = (index) => {
//     // Create a new box with a unique key based on the current timestamp
//     const newBox = { key: `New Box ${Date.now()}` };
//     setBoxes(prevBoxes => {
//       const updatedBoxes = [...prevBoxes];
//       updatedBoxes.splice(index, 1, newBox);
//       return updatedBoxes;
//     });
//   };

//   const renderItem = ({ item, index }) => {
//     return (
//       <Animatable.View animation="fadeIn" duration={500}>
//         <TouchableOpacity onPress={() => handleBoxPress(index)}>
//           <View style={styles.item}>
//             <Text style={styles.itemText}>{item.key}</Text>
//           </View>
//         </TouchableOpacity>
//       </Animatable.View>
//     );
//   };
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const data = [
  { key: "A" },
  { key: "B" },
  { key: "C" },
  { key: "D" },
  { key: "E" },
  { key: "F" },
  { key: "G" },
  { key: "H" },
  { key: "I" },
  { key: "J" },
  { key: "K" },
  { key: "L" },
];

const numColumns = 3;

const ChoiceScreen = () => {
  const navigation = useNavigation();
  const [boxes, setBoxes] = useState(data);

  const handleBoxPress = (index) => {
    // Create a new box with a unique key based on the current timestamp
    const newBox = { key: `New Box ${Date.now()}` };
    setBoxes((prevBoxes) => {
      const updatedBoxes = [...prevBoxes];
      updatedBoxes.splice(index, 1, newBox);
      return updatedBoxes;
    });
  };

  const renderItem = ({ item, index }) => {
    return (
      <Animatable.View animation="fadeIn" duration={500}>
        <TouchableOpacity onPress={() => handleBoxPress(index)}>
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.key}</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 28,
          color: "000000",
          fontWeight: "500",
          letterSpacing: 1,
          padding: 20,
        }}
      >
        Welcome, Bajaj!
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "000000",
          fontWeight: "300",
          letterSpacing: 1,
          left: 22,
          bottom: 10,
        }}
      >
        Choose as many of your favourites as you like!
      </Text>

      <FlatList
        data={boxes}
        style={styles.container}
        renderItem={renderItem}
        numColumns={numColumns}
      />
      <TouchableOpacity onPress={handleHomeNavigation} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="#00337C" barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    top: 5,
    backgroundColor: "#00337C",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 5,
    height: 120,
    width: 120,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemText: {
    color: "#fff",
  },
  button: {
    position: "absolute",
    bottom: 5,
    left: 20,
    right: 20,

    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ChoiceScreen;
