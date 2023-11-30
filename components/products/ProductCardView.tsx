import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import Ionicons  from 'react-native-ionicons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import ProductDetails from '../../screens/ProductDetails'

const ProductCardView = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{ navigation.navigate("Product Details")}}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{
          uri: 'https://deadsounds.com/image/2340/t',
        }}
                style={styles.image}/>
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Product</Text>
                <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                <Text style={styles.price}>Product</Text>
            </View>
            <TouchableOpacity style={styles.addBtn} onPress={()=>{}}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary} />

            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView