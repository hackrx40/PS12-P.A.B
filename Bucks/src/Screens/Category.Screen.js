import { ScrollView, StyleSheet, Text, View,StatusBar, SafeAreaView, TouchableOpacity, Touchable } from 'react-native'
import React,{useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome ,Ionicons,AntDesign} from '@expo/vector-icons';
import styles from '../Styles/Category.Styles'

const CategoryScreen = () => {
  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
    AntDesign.loadFont();
  }, [])

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <SafeAreaView style={{flex:1}}>
        <StatusBar/>
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="navigate" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="user-circle" size={24} color="black"/>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryHolder}>
          <View style={styles.backgroundImage}/>
          <Text style={styles.categoryName}>Shoes</Text>
        </View>
        <View style={styles.listHeading}>
          <Text style={styles.itemSize}>24 out of 184</Text>
          <TouchableOpacity style={styles.filterOption}>
            <Text style={{fontSize:12}}>New Arrival</Text>
            <AntDesign name="down" size={20} color="black" />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default CategoryScreen