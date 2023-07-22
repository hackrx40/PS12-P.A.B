// import React from "react";
// import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

// const sampleData = {
//   Result:
//     "[{'ASIN': '1561704962', 'Title': '101 Ways to Health and Healing', 'Group': 'Book', 'Salesrank': 909719, 'NbrOfSimilar': 0, 'NbrOfCategories': 4, 'TotalReviews': 0, 'Downloaded': 0, 'AvgRating': 0.0}, {'ASIN': 'B00004T2FJ', 'Title': 'Antologia', 'Group': 'Music', 'Salesrank': 61345, 'NbrOfSimilar': 5, 'NbrOfCategories': 9, 'TotalReviews': 13, 'Downloaded': 13, 'AvgRating': 4.5}, {'ASIN': '0141303077', 'Title': 'Cam Jansen and the Mystery of the Carnival Prize (CAM Jansen (Paperback))', 'Group': 'Book', 'Salesrank': 644405, 'NbrOfSimilar': 5, 'NbrOfCategories': 2, 'TotalReviews': 3, 'Downloaded': 3, 'AvgRating': 4.5}, {'ASIN': '0892552808', 'Title': 'Exiled Memories: A Cuban Childhood', 'Group': 'Book', 'Salesrank': 694751, 'NbrOfSimilar': 5, 'NbrOfCategories': 4, 'TotalReviews': 1, 'Downloaded': 1, 'AvgRating': 5.0}, {'ASIN': 'B0000260IY', 'Title': 'Witchi-Tai-To', 'Group': 'Music', 'Salesrank': 41331, 'NbrOfSimilar': 5, 'NbrOfCategories': 3, 'TotalReviews': 6, 'Downloaded': 6, 'AvgRating': 5.0}]",
// };

// const ProductItem = () => {
//   // Parse the sample data from JSON string to an array of objects
//   const data = JSON.parse(sampleData.Result.replace(/'/g, '"'));

//   // Get the first item
//   const productItem = data[0];

//   // Limit the character length of the Title
//   const maxTitleLength = 60;
//   const limitedTitle =
//     productItem.Title.length > maxTitleLength
//       ? productItem.Title.substring(0, maxTitleLength) + "..."
//       : productItem.Title;

//   const numStars = Math.round(productItem.AvgRating);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity>
//         <Image
//           source={require("../../../assets/heyy.jpg")}
//           style={styles.image}
//         />
//         <Text style={styles.header}>{limitedTitle}</Text>
//         {/* <Text style={styles.body}>{productItem.Group}</Text> */}
//         <View style={styles.row}>
//           <View style={styles.starsContainer}>
//             <MaterialIcons name="star" size={18} color="gold" />
//             <Text style={styles.starsText}> ₹ 999</Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: 170, // Set the width to your desired size
//     height: 200, // Set the height to your desired size
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 8,
//     backgroundColor: "#EEEEEE",
//     margin: 10,
//   },
//   image: {
//     width: 120,
//     height: 150,
//     borderRadius: 2,
//   },
//   header: {
//     fontSize: 12,
//     fontWeight: "bold",
//     marginTop: 5,
//   },
//   body: {
//     fontSize: 10,
//   },
//   starsContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   starsText: {
//     fontSize: 12,
//     marginLeft: 10,
//   },
// });

// export default ProductItem;
import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Add your 5 image paths here
const imagePaths = [
  require("../../../assets/1.jpg"),
  require("../../../assets/2.jpg"),
  require("../../../assets/3.jpg"),
  require("../../../assets/4.jpg"),
  require("../../../assets/5.jpg"),
];

const bookTitles = [
  "101 Ways to Health and Healing",
  "Antologia",
  "Cam Jansen and the Mystery of the Carnival Prize (CAM Jansen (Paperback))",
  "Exiled Memories: A Cuban Childhood",
  "Witchi-Tai-To",
  "Another Book Title",
  "Yet Another Book Title",
  "A Different Book Title",
  "Random Book Title",
  "Exciting Book Title",
];

const generateRandomTitle = () => {
  const randomIndex = Math.floor(Math.random() * bookTitles.length);
  return bookTitles[randomIndex];
};

const ProductItem = () => {
  // Get a random image index from the array
  const randomImageIndex = Math.floor(Math.random() * imagePaths.length);

  // Get a random book title
  const randomTitle = generateRandomTitle();

  // Limit the character length of the Title
  const maxTitleLength = 50;
  const limitedTitle =
    randomTitle.length > maxTitleLength
      ? randomTitle.substring(0, maxTitleLength) + "..."
      : randomTitle;

  const numStars = 4; // Change this to your desired number of stars

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={imagePaths[randomImageIndex]} style={styles.image} />
        <Text style={styles.header}>{limitedTitle}</Text>
        {/* <Text style={styles.body}>{productItem.Group}</Text> */}
        <View style={styles.row}>
          <View style={styles.starsContainer}>
            <MaterialIcons name="star" size={18} color="gold" />
            <Text style={styles.starsText}> ₹ 999</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170, // Set the width to your desired size
    height: 200, // Set the height to your desired size
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#EEEEEE",
    margin: 10,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 2,
  },
  header: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  body: {
    fontSize: 10,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starsText: {
    fontSize: 12,
    marginLeft: 10,
  },
});

export default ProductItem;
