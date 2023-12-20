import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import useFetch from '../../hook/useFetch';
import {COLORS, SIZES} from '../../constants';
import styles from './productList.style';
import ProductCardView from './ProductCardView';

const ProductList = () => {
  const {data, isLoading, error} = useFetch();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text> Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => <ProductCardView item={item} />}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      )}
    </View>
  );
};

export default ProductList;
