import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome"; // You can choose any other icon library as well

const CarouselComponents = () => {
  const carouselRef = useRef(null);
  const data = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    // Add more items as needed
  ];

  const [activeSlide, setActiveSlide] = useState(0);

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
        sliderWidth={400} // Adjust the slider width as needed
        itemWidth={250} // Adjust the item width as needed
        loop
        enableSnap
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationDotsContainer}
          dotStyle={styles.paginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <View style={styles.arrowButtonContainer}>
        <TouchableOpacity style={styles.arrowButton} onPress={onPrevious}>
          <Icon name="chevron-left" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={onNext}>
          <Icon name="chevron-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    width: 200,
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  arrowButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: "45%",
    left: 1,
    right: 0,
  },
  arrowButton: {
    paddingHorizontal: 0,
    paddingVertical: 1,
  },
  paginationContainer: {
    position: "absolute",
    bottom: 20,
  },
  paginationDotsContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "black", // Adjust the active dot color as needed
  },
});

export default CarouselComponents;
