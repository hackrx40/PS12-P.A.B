import React from 'react';
import { View, FlatList, Dimensions, StyleSheet,Image,TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.75;
const ITEM_MARGIN = (width - ITEM_WIDTH) / 2;

const data = [
  { id: '1', image:require("../../../assets/bookb.png"),group:"Book" },
  { id: '2', image:require("../../../assets/dvdb.png"),group:"Dvd" },
  { id: '3', image:require("../../../assets/musicb.png"),group:"Music" },
  { id: '4', image:require("../../../assets/videob.png"),group:"Videos" },
];

const SnapCarousel = ({navigation}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item,]}
      onPress={()=>navigation.navigate("CategoryScreen",{group:item.group})}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{height:ITEM_WIDTH*.6,width:ITEM_WIDTH}}
        />
    </TouchableOpacity>
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
    height: ITEM_WIDTH*.60,
    marginHorizontal: ITEM_MARGIN,
    borderRadius: 10,
  },
});

export default SnapCarousel;




