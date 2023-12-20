import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import styles from './newRivals.style'
import { COLORS } from '../constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import ProductList from '../components/products/ProductList'

const NewRivals = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style = {styles.upperRow}>
                <Pressable onPress={()=> navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size = {30} color={COLORS.lightWhite} />
                </Pressable>
                <Text style={styles.heading}>Products</Text>
            </View>
            <ProductList/>
        </View>
    </SafeAreaView>
  )
}

export default NewRivals