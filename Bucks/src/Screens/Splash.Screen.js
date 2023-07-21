import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <LottieView
        source={require('./assets/Lottiefiles/Splash.json')}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
    />
    <Text style={styles.title}>Bucks</Text>
    </View>
    
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        
    }
})