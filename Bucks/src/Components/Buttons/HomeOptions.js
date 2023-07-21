import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const HomeOptions = () => {
  return (
    <TouchableOpacity style={styles.optionContainer}>
      <View style={styles.svg}/>
      <Text style={styles.text}>Option</Text>
    </TouchableOpacity>
  )
}

export default HomeOptions

const styles = StyleSheet.create({
  optionContainer:{
    flexDirection:"column",
    alignItems:"center",
  },
  svg:{
    height:72,
    width:72,
    borderRadius:64,
    backgroundColor:"darkgrey"
  },
  text:{
    fontSize:16,
    fontWeight:"600",
    marginTop:4,
  },
})