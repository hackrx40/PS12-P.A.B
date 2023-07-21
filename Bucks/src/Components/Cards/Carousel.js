import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome";
import sampleData from "../../../assets/sampleData.json";

const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const data = JSON.parse(sampleData.Result.replace(/'/g, '"'));

  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => {
    const titleLimit = 15; // Specify the maximum number of characters for the title

    let truncatedTitle = item.Title;
    if (item.Title.length > titleLimit) {
      truncatedTitle = item.Title.substring(0, titleLimit) + "...";
    }

    return (
      <View style={styles.itemContainer}>
        <Image
          source={require("../../../assets/books.jpg")} // Use the same image for all items (replace with actual image path if needed)
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>{truncatedTitle}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={15} color="gold" style={styles.starIcon} />
          <Text style={styles.itemRating}>{item.AvgRating}</Text>
          <Text style={styles.totalReviews}>{item.TotalReviews} reviews</Text>
        </View>
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
        itemWidth={200} // Adjust the item width as needed
        loop
        // enableSnap
        onSnapToItem={(index) => setActiveSlide(index)}
      />

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
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  itemContainer: {
    width: 200,
    height: 220,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starIcon: {
    marginRight: 2,
  },
  itemRating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gold",
    marginLeft: 2,
  },
  totalReviews: {
    fontSize: 14,
    color: "gray",
    marginLeft: 5,
  },
  arrowButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: "12%",
    left: 1,
    right: 0,
  },
  arrowButton: {
    paddingHorizontal: 0,
    paddingVertical: 1,
  },
});

export default CarouselComponent;
