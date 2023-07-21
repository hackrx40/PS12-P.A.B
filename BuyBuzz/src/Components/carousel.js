// Carousel.js

import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any other icon library as well

const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  };

  const onPrevious = () => {
    carouselRef.current.snapToPrev();
  };

  const onNext = () => {
    carouselRef.current.snapToNext();
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={100}
        loop
        enableSnap
      />
      <View style={styles.arrowButtonContainer}>
        <TouchableOpacity style={styles.arrowButton} onPress={onPrevious}>
          <Icon name="chevron-left" size={20} color="#00337C" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={onNext}>
          <Icon name="chevron-right" size={20} color="#00337C" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    width: 100,
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  arrowButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '45%',
    left: 1,
    right: 0,
  },
  arrowButton: {
    paddingHorizontal: 0,
    paddingVertical: 1,
  },
});

export default CarouselComponent;
