import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import SearchBar from 'react-native-search-bar';

const {height,width}=Dimensions.get("screen")
const HomeSearch = () => {
  return (
    <View style={styles.searchContainer}>
      <Text>HomeSearch</Text>
    </View>
  )
}

export default HomeSearch

const styles = StyleSheet.create({
  searchContainer:{
    backgroundColor:"red",
    width:width*.75,
    alignSelf:"center",
    marginTop:20,
  }
})