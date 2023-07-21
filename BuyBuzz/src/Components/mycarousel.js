// import React, { useRef, useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Carousel, { Pagination } from "react-native-snap-carousel";
// import Icon from "react-native-vector-icons/FontAwesome"; // You can choose any other icon library as well

// const CarouselComponents = () => {
//   const carouselRef = useRef(null);
//   const data = [
//     { id: 1, title: "Item 1" },
//     { id: 2, title: "Item 2" },
//     { id: 3, title: "Item 3" },
//     // Add more items as needed
//   ];

//   const [activeSlide, setActiveSlide] = useState(0);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.itemContainer}>
//         <Text style={styles.itemText}>{item.title}</Text>
//       </View>
//     );
//   };

//   const onPrevious = () => {
//     carouselRef.current.snapToPrev();
//   };

//   const onNext = () => {
//     carouselRef.current.snapToNext();
//   };

//   return (
//     <View style={styles.container}>
//       <Carousel
//         ref={carouselRef}
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={400} // Adjust the slider width as needed
//         itemWidth={250} // Adjust the item width as needed
//         loop
//         enableSnap
//         onSnapToItem={(index) => setActiveSlide(index)}
//       />
//       <View style={styles.paginationContainer}>
//         <Pagination
//           dotsLength={data.length}
//           activeDotIndex={activeSlide}
//           containerStyle={styles.paginationDotsContainer}
//           dotStyle={styles.paginationDot}
//           inactiveDotOpacity={0.4}
//           inactiveDotScale={0.6}
//         />
//       </View>
//       <View style={styles.arrowButtonContainer}>
//         <TouchableOpacity style={styles.arrowButton} onPress={onPrevious}>
//           <Icon name="chevron-left" size={20} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.arrowButton} onPress={onNext}>
//           <Icon name="chevron-right" size={20} color="black" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   itemContainer: {
//     width: 200,
//     height: 100,
//     backgroundColor: "#ccc",
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   itemText: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   arrowButtonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     position: "absolute",
//     top: "45%",
//     left: 1,
//     right: 0,
//   },
//   arrowButton: {
//     paddingHorizontal: 0,
//     paddingVertical: 1,
//   },
//   paginationContainer: {
//     position: "absolute",
//     bottom: 20,
//   },
//   paginationDotsContainer: {
//     paddingVertical: 8,
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 8,
//     backgroundColor: "black", // Adjust the active dot color as needed
//   },
// });

// export default CarouselComponents;
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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
  // const sample = {
  //   Result:
  //     "[{'ASIN': '1561704962', 'Title': '101 Ways to Health and Healing', 'Group': 'Book', 'Salesrank': 909719, 'NbrOfSimilar': 0, 'NbrOfCategories': 4, 'TotalReviews': 0, 'Downloaded': 0, 'AvgRating': 0.0}, {'ASIN': 'B00004T2FJ', 'Title': 'Antologia', 'Group': 'Music', 'Salesrank': 61345, 'NbrOfSimilar': 5, 'NbrOfCategories': 9, 'TotalReviews': 13, 'Downloaded': 13, 'AvgRating': 4.5}, {'ASIN': '0141303077', 'Title': 'Cam Jansen and the Mystery of the Carnival Prize (CAM Jansen (Paperback))', 'Group': 'Book', 'Salesrank': 644405, 'NbrOfSimilar': 5, 'NbrOfCategories': 2, 'TotalReviews': 3, 'Downloaded': 3, 'AvgRating': 4.5}, {'ASIN': '0892552808', 'Title': 'Exiled Memories: A Cuban Childhood', 'Group': 'Book', 'Salesrank': 694751, 'NbrOfSimilar': 5, 'NbrOfCategories': 4, 'TotalReviews': 1, 'Downloaded': 1, 'AvgRating': 5.0}, {'ASIN': 'B0000260IY', 'Title': 'Witchi-Tai-To', 'Group': 'Music', 'Salesrank': 41331, 'NbrOfSimilar': 5, 'NbrOfCategories': 3, 'TotalReviews': 6, 'Downloaded': 6, 'AvgRating': 5.0}]",
  // };
  const sampleData = [
    {
      ASIN: "1561704962",
      Title: "Harry Potter and the Chamber of Secrets",
      Group: "Book",
      Salesrank: 909719,
      NbrOfSimilar: 0,
      NbrOfCategories: 4,
      TotalReviews: 0,
      Downloaded: 0,
      AvgRating: 5.0,
      ImageUrl: "../Assets/Books/41j-s9fHJcL.png", // Replace this with the actual image path
    },
    {
      ASIN: "1561704962",
      Title: "101 Ways to Health and Healing",
      Group: "Book",
      Salesrank: 909719,
      NbrOfSimilar: 0,
      NbrOfCategories: 4,
      TotalReviews: 0,
      Downloaded: 0,
      AvgRating: 3.0,
      ImageUrl: "../Assets/Books/41j-s9fHJcL.png", // Replace this with the actual image path
    },
    {
      ASIN: "1561704962",
      Title: "Atomic Habits",
      Group: "Book",
      Salesrank: 909719,
      NbrOfSimilar: 0,
      NbrOfCategories: 4,
      TotalReviews: 0,
      Downloaded: 0,
      AvgRating: 4.0,
      ImageUrl: "../Assets/Books/41j-s9fHJcL.png", // Replace this with the actual image path
    },
    {
      ASIN: "1561704962",
      Title: "Atomic Habits",
      Group: "Book",
      Salesrank: 909719,
      NbrOfSimilar: 0,
      NbrOfCategories: 4,
      TotalReviews: 0,
      Downloaded: 0,
      AvgRating: 4.0,
      ImageUrl: "../Assets/Books/41j-s9fHJcL.png", // Replace this with the actual image path
    },
    {
      ASIN: "1561704962",
      Title: "Atomic Habits",
      Group: "Book",
      Salesrank: 909719,
      NbrOfSimilar: 0,
      NbrOfCategories: 4,
      TotalReviews: 0,
      Downloaded: 0,
      AvgRating: 4.0,
      ImageUrl: "../Assets/Books/41j-s9fHJcL.png", // Replace this with the actual image path
    },
    // Add more items as needed
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // const renderItem = ({ item }) => {
  //   return (
  //     <View style={styles.itemContainer}>
  //       <Text style={styles.itemText}>{item.title}</Text>
  //     </View>
  //   );
  // };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.ImageUrl }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.Title}</Text>
        <Text style={styles.itemRating}>{item.AvgRating}</Text>
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
        data={sampleData}
        renderItem={renderItem}
        sliderWidth={400} // Adjust the slider width as needed
        itemWidth={200} // Adjust the item width as needed
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
    height: 150,
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
