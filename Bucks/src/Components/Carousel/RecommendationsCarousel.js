import React from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import LongItem from '../Cards/LongItem';
const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const ITEM_MARGIN = (width - ITEM_WIDTH) / 2;

const data = [
  { id: '1', color: 'red' },
  { id: '2', color: 'blue' },
  { id: '3', color: 'green' },
  { id: '4', color: 'yellow' },
];

const SnapCarousel = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: item.color }]} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + ITEM_MARGIN * 2}
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    marginHorizontal: ITEM_MARGIN,
    borderRadius: 10,
  },
});

export default SnapCarousel;