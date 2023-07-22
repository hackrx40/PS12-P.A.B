import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import ProductItem from './ProductItem';
// Assuming you have the <ProductItem> component

const SCREEN_WIDTH = Dimensions.get('window').width;

const Grid = ({ data,navigation }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.Id.toString()}
      numColumns={2}
      renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  gridItem: {
    flex: 0.5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
});

export default Grid;