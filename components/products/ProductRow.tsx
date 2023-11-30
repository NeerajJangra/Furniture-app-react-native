import { View, Text, FlatList } from 'react-native'
import React from 'react'
// import { FlatList } from 'react-native-gesture-handler'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'
import { SIZES } from '../../constants'

const ProductRow = () => {
    const products = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e19d72',
        title: 'Third Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e49d72',
        title: 'Third Item',
      },
    ]
  return (
    <View style={styles.container}>
      <FlatList data={products}
      renderItem={(item) => <ProductCardView/>}
      horizontal
      contentContainerStyle={{columnGap: SIZES.small}}/>
    </View>
  )
}

export default ProductRow