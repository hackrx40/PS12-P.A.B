import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
  StyleSheet
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import CarouselComponent from '../Components/carousel';
import GridComponent from "../Components/grid";
import Star from "../Components/star";

const ProductInfo = ({ route, navigation }) => {
  //const {productID} = route.params;
  //const [product, setProduct] = useState({});

  
  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);
  

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

    return unsubscribe;
  }, [navigation]);

  //add to cart

  const renderGrid = () => {
    const boxData = [
      { id: 1, title: 'Box 1' },
      { id: 2, title: 'Box 2' },
      { id: 3, title: 'Box 3' },
      { id: 4, title: 'Box 4' },
      { id: 5, title: 'Box 5' },
      { id: 6, title: 'Box 6' },
  
    ];


    return boxData.map((box) => (
      <GridComponent
        key={box.id}
        title={box.title}
        onPress={() => handleBoxPress(box.id)}
      />
    ));
  };
  

  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    }
  };

  const PercentageBar = ({ starText, percentage }) => {
    const [animation] = useState(new Animated.Value(0));
    useEffect(() => {
      Animated.timing(animation, {
        toValue: percentage,
        duration: 500,
      }).start();
    }, [percentage]);
  
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.progressText}>{starText}</Text>
        <View style={styles.progressMiddle}>
          <View style={styles.progressWrap}>
            <Animated.View
              style={[
                styles.progressBar,
                {
                  width: animation.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"],
                  }),
                },
              ]}
            />
          </View>
        </View>
        <Text style={styles.progressPercentText}>{percentage}%</Text>
      </View>
    );
  };

  //product horizontal scroll product card
  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source="assets/Images/Books/ToKillAMockingbird.jpg"
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <StatusBar backgroundColor={"#F0F0F3"} barStyle="#777777" />
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: "#F0F0F3",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 16,
              paddingLeft: 16,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: "#00337C",
                  padding: 12,
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 32,
            }}
          ></View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        ></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Entypo
              name="book"
              style={{
                fontSize: 18,
                color: "00337C",
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: "#000000",
              }}
            >
              Book
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: "#000000",
                maxWidth: "84%",
              }}
            >
              <Text>Harry Potter and the Prisoner of the Azkaban </Text>
            </Text>
            
            <Ionicons
              name="share-outline"
              style={{
                fontSize: 24,
                color: "#00337C",
                backgroundColor: "#00337C" + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "#000000",
              fontWeight: "400",
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "85%",
              maxHeight: 43,
              marginBottom: 18,
              
            }}
          >
            {" "}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 20,
              borderBottomColor: "#F0F0F3",
              borderBottomWidth: 1,
              paddingBottom: 10
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  color: "#00337C",
                  backgroundColor: "#F0F0F3",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              >
                <Entypo
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: "#00337C",
                  }}
                />
              </View>
              <Text> 101 Cuffe Parade, {"\n"}120-222 Mumbai</Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: "#777777",
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                maxWidth: "85%",
                color: "#000000",
                marginBottom: 4,
                
              }}
            >
            </Text>
            <Text
            style={{
              fontSize: 20,
                fontWeight: "500",
                maxWidth: "85%",
                color: "#000000",
                marginBottom: 4,
            }}>Price $20</Text>
            <Text>Tax Rate 2%</Text>
          </View>
          <Text
          style={{
            fontSize: 20,
            
                fontWeight: "500",
                maxWidth: "85%",
                color: "#000000",
                marginBottom: 40,
                top:20,
            
          }}>You might also like</Text>
          <View style={styles.container}> 
            <CarouselComponent />
          </View>
         
          <Text
          style={{
            fontSize: 20,
            
                fontWeight: "500",
                maxWidth: "85%",
                color: "#000000",
                marginBottom: 40,
                top:25,
            
          }}>More like Harry Potter</Text>
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.box} />
              <View style={styles.textContainer}>
                <Text style={styles.boxText}></Text>
              </View>
              
       
              
              
              <View style={styles.box} />
              <View style={styles.box} />
            </View>
            <View style={styles.row}>
              <View style={styles.box} />
              <View style={styles.textContainer}>
                <Text style={styles.boxText}></Text>
              </View>
              
       
              
              
              <View style={styles.box} />
              <View style={styles.box} />
            </View>

          </View>
          <View style={{
            flex: 1,
            backgroundColor: "#F5F8FF",
            alignItems: "center",
            justifyContent: "center",
          }}>
      <View style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 40,
        minWidth: "80%",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        shadowColor: "rgba(193, 211, 251, 0.5)",
        elevation: 5,
      }}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "#323357",
          textAlign: "center",
        }}>Customer reviews
        </Text>
        <View style={{
          marginTop: 20,
          marginBottom: 5,
          backgroundColor: "#F5F8FF",
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
          <View
           style={{
           flexDirection: "row",
           }}
          >
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </View>
        <Text>4.7 out of 5</Text>
        




        </View>
        <Text style={{
          fontSize: 16,
          color: "#595B71",
          textAlign: "center",
      
        }}>40 customer ratings</Text>

      </View>
    
      

      
      

  
          

          
          
     
    
        </View>
      </ScrollView>
      

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: "#00337C",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "800",
              letterSpacing: 1,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            <Text>Add to cart</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    margin: 8,
    left:2,
    backgroundColor: '#ccc',},
    textContainer: {
      alignItems: 'center',
    },
    boxText: {
      textAlign: 'center',
      marginTop: 4,
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    


    
},
);

export default ProductInfo;
