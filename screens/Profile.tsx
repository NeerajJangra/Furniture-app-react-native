import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'

const Profile = () => {
  const animationRef = useRef<LottieView>(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);
  return (
    <View style={{flex:1, height: '100%', width: '100%', backgroundColor: 'black', alignItems:'center', justifyContent: 'center'}}>
      <LottieView
      ref={animationRef}
  source={require('../assets/Animation.json')}
  // autoPlay
  style={{height: 400, width: 300}}
/>
    </View>
  )
}

export default Profile