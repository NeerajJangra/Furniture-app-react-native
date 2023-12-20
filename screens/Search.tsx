import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  FlatList,
  Image
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {SIZES, COLORS} from '../constants';
import styles from './search.style';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Utils from '../utils/utils';
import axios from 'axios';
import ProductCardView from '../components/products/ProductCardView';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const openCamera = () => {
    if (Platform.OS == 'ios') {
      // Utils.askForPermission(PERMISSIONS.IOS.CAMERA)
    } else {
      Utils.askForPermission(PERMISSIONS.ANDROID.CAMERA);
    }
  };
  const [searchResults, setSearchResults] = useState([]);

  const getSearchResults = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/api/products/search/${searchInput}`,
      );
      setSearchResults(result.data);
      console.log(result.data);
    } catch (error) {
      
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={openCamera}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: SIZES.small,
          }}>
          <Ionicons
            name="camera-outline"
            size={SIZES.large}
            color={COLORS.gray}
          />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            value={searchInput}
            onChangeText={input => setSearchInput(input)}
            placeholder="What are you looking for"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => {
              getSearchResults();
            }}>
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length == 0 ? (
        <View style={{alignItems: 'center', justifyContent: "center"}}>
          <Image style={{height: 400, resizeMode: "contain"}} source={require('../assets/images/Pose23.png')} />
          </View>
      ) : (
        <FlatList
          data={searchResults}
          numColumns={2}
          renderItem={({item}) => <ProductCardView item={item} />}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: SIZES.xxLarge,
            paddingLeft: SIZES.small / 2,
          }}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
