import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const HomeOptions = () => {
  const optionData = [
    { id: 1, text: 'Books' },
    { id: 2, text: 'Music' },
    { id: 3, text: 'Movies' },
    { id: 4, text: 'DVDs' },
    { id: 5, text: 'Art' },
    { id: 6, text: 'Sports' },
  ];

      return(
      <TouchableOpacity key={optionData.id} style={styles.optionContainer}>
        <View style={styles.svg} />
        <Text style={styles.text}>{optionData.text}</Text>
      </TouchableOpacity>
  
      )
 
}

export default HomeOptions

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  
  },
  svg: {
    height: 72,
    width: 72,
    borderRadius: 64,
    backgroundColor: 'darkgrey',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
})
