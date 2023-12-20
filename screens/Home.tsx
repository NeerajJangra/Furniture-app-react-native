import { View, Text ,TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
  import  Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from "react-native-vector-icons/Ionicons"
import { SIZES } from '../constants'
import { ScrollView } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
import { Welcome } from '../components'
import Carousel from '../components/home/carousel'
import Headings from '../components/home/Headings'
import ProductRow from '../components/products/ProductRow'
import Utils from '../utils/utils'
import { PERMISSIONS, RESULTS } from 'react-native-permissions'

const Home = () => {
  const locationHandling = async() => {
    const result = await Utils.checkForPermission(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION)
    console.log(result)
    result == RESULTS.GRANTED ? getLocation : Utils.askForPermission(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION) 
  }

  const getLocation = ( ) => {
    console.log('granted')
  }
  return (
    <View>
      <View style = {styles.appBarWrapper}>
        <View style = {styles.appBar}>
          <Pressable onPress={()=> locationHandling()}>
            <Ionicons name='location-outline' color={"black"} size={SIZES.xLarge} />
          </Pressable>
          <Text style={styles.location}>New Delhi, India</Text>
          <View style={{alignItems: "flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity onPress={()=>console.log('pressed')}>
              <Fontisto name='shopping-bag' size={24} color={"black"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{height: "84%"}}>
        <Welcome/>
        <Carousel/>
        <Headings/>
        <ProductRow/>
      </ScrollView>
    </View>
  )
}

export default Home