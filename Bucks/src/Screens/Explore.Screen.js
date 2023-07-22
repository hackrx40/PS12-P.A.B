import { ScrollView, StyleSheet, Text, View,StatusBar, SafeAreaView, TouchableOpacity, Touchable } from 'react-native'
import React,{useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome ,Ionicons,AntDesign} from '@expo/vector-icons';
import styles from '../Styles/Home.Styles'
import SearchBar from '../Components/Buttons/SearchBar';
import ProductItem from '../Components/Cards/ProductItem';


const ExploreScreen = () => {
  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
    AntDesign.loadFont();
  }, [])

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      contentContainerStyle={{marginHorizontal:10}}
    >
      <SafeAreaView style={{flex:1}}>
        <StatusBar/>
        <View style={{alignItems:"center",justifyContent:"space-evenly",flexDirection:"row"}}>
          <SearchBar />
          <TouchableOpacity>
            <Ionicons name="options" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.row}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </View>
          <View style={styles.row}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </View>
          <View style={styles.row}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </View>
          <View style={styles.row}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </View>

        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default ExploreScreen