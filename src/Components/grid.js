import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const GridComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.box}>
      <Text style={styles.boxText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '33.33%',
    height: 150,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GridComponent;
