import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View,Dimensions, TouchableOpacity, Image,TextInput } from 'react-native'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import styles from "../Styles/HomeStyles"

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.topSection}>
          <Text style={styles.welcome}>Welcome Parth !</Text>
          <TouchableOpacity style={styles.carToggle}>
            <Ionicons name="ios-options" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.topSubheading}>Find anything that you want!</Text>
        <View style={styles.searchBarContainer}>
          <AntDesign name="search1" size={20} color="#00337C" />
          <TextInput
            style={styles.searchInput}
            placeholder="  Search"
            placeholderTextColor="#00337C"
          />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

