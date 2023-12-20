import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
// import { FlatList } from 'react-native-gesture-handler'
import ProductCardView from './ProductCardView';
import styles from './productRow.style';
import {COLORS, SIZES} from '../../constants';
import useFetch from '../../hook/useFetch';

const ProductRow = () => {
  const {data, isLoading, error} = useFetch();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
      ) : error ? (
        <Text> Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{columnGap: SIZES.small}}
        />
      )}
    </View>
  );
};

export default ProductRow;
