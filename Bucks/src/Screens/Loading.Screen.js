import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'


const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <LottieView
    source={('./assets/Lottiefiles/Loading.json')}
    autoPlay
        loop
        style={{ width: 200, height: 200 }}>

    </LottieView>
  </View>

    
  )
}

export default Loading;

const styles = StyleSheet.create({})